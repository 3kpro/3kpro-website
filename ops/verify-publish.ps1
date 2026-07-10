param(
  [string]$Route,
  [string]$Phrase,
  [string]$LiveBase = "https://3kpro.services",
  [switch]$SkipInstall,
  [switch]$SkipLive
)

$ErrorActionPreference = "Stop"

function Step($Message) {
  Write-Host ""
  Write-Host "==> $Message" -ForegroundColor Cyan
}

function Fail($Message) {
  Write-Host ""
  Write-Host "PUBLISH VERIFY FAILED: $Message" -ForegroundColor Red
  exit 1
}

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $repoRoot

$npm = "npm"
if ($IsWindows -and (Test-Path "C:\Program Files\nodejs\npm.cmd")) {
  $npm = "C:\Program Files\nodejs\npm.cmd"
}

Step "Checking git state"
$status = git status --short --branch
$status | ForEach-Object { Write-Host $_ }

if (-not (Test-Path "package-lock.json")) {
  Fail "package-lock.json is missing. Refuse to verify a non-reproducible install."
}

Step "Checking Node and npm"
node --version
& $npm --version

if (-not $SkipInstall) {
  Step "Restoring dependencies from package-lock.json with npm ci"
  & $npm ci
}
else {
  Write-Host "Skipping npm ci by request." -ForegroundColor Yellow
}

Step "Running production build"
$buildLog = Join-Path ([System.IO.Path]::GetTempPath()) ("3kpro-website-build-{0}.log" -f ([System.Guid]::NewGuid().ToString("N")))
& $npm run build 2>&1 | Tee-Object -FilePath $buildLog

if ($LASTEXITCODE -ne 0) {
  Fail "npm run build failed. Build log: $buildLog"
}

if ($Route) {
  Step "Confirming route was generated: $Route"
  $buildText = Get-Content -Raw -LiteralPath $buildLog
  $routePath = $Route.TrimStart("/")
  $staticHtml = Join-Path ".next/server/app" ($routePath + ".html")
  $staticRsc = Join-Path ".next/server/app" ($routePath + ".rsc")

  if ($buildText -match [regex]::Escape($Route)) {
    Write-Host "Route appeared in build output." -ForegroundColor Green
  }
  elseif ((Test-Path $staticHtml) -or (Test-Path $staticRsc)) {
    Write-Host "Route output was found in .next/server/app." -ForegroundColor Green
  }
  else {
    Fail "Route '$Route' did not appear in build output and no generated route artifact was found. Do not publish."
  }
}

if (-not $SkipLive -and $Route) {
  $url = ($LiveBase.TrimEnd("/") + $Route)
  Step "Checking live URL: $url"
  try {
    $response = Invoke-WebRequest -Uri $url -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 30 -Headers @{ "Cache-Control" = "no-cache" }
  }
  catch {
    Fail "Live URL check failed for $url. $($_.Exception.Message)"
  }

  if ($response.StatusCode -ne 200) {
    Fail "Live URL returned HTTP $($response.StatusCode), expected 200."
  }

  if ($Phrase -and $response.Content -notmatch [regex]::Escape($Phrase)) {
    Fail "Live URL returned 200 but did not contain phrase '$Phrase'."
  }
}
elseif ($SkipLive) {
  Write-Host "Skipping live URL check by request." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "PHUC.YEAH publish verification passed." -ForegroundColor Green
Write-Host "If this was a pre-push check, commit and push only the intended files, then rerun with live verification." -ForegroundColor Green
