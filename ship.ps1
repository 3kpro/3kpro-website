<#
  ship.ps1 — one command to build, commit, push, and deploy 3kpro.services.

  Usage:
      .\ship.ps1 "Your commit message"

  What it does (in order), so you never hand-crank this again:
    1. Stops all Node processes (frees .next and git locks held by `next dev`).
    2. Clears a stale .git\index.lock and any FUSE/mount junk files.
    3. Self-heals dependencies: if Next isn't v16 or the Windows lightningcss
       binary is missing (e.g. after a Linux install or `npm audit fix --force`),
       it does a clean reinstall.
    4. Runs the production build. If the build fails, it STOPS and commits nothing.
    5. Commits all changes and pushes to origin/main.
    6. Updates the submodule ref in the C:\DEV parent repo (if present) and pushes it.

  Vercel deploys automatically from the push to main.
#>

param([Parameter(Mandatory = $true)][string]$Message)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

function Step($t) { Write-Host "`n==> $t" -ForegroundColor Cyan }

Step "Stopping Node processes (frees .next / git locks)"
taskkill /F /IM node.exe 2>$null | Out-Null

Step "Clearing stale git lock + mount junk"
if (Test-Path ".git\index.lock") { Remove-Item -Force ".git\index.lock"; Write-Host "   removed stale .git\index.lock" }
Get-ChildItem -Recurse -Force -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -like ".fuse_hidden*" } |
    Remove-Item -Force -ErrorAction SilentlyContinue

Step "Checking dependencies"
$needInstall = $false
if (-not (Test-Path "node_modules\next\package.json")) {
    $needInstall = $true
} else {
    $nextVer = (Get-Content "node_modules\next\package.json" -Raw | ConvertFrom-Json).version
    if (-not $nextVer.StartsWith("16.")) { Write-Host "   next is $nextVer (expected 16.x)"; $needInstall = $true }
}
if (-not (Test-Path "node_modules\lightningcss-win32-x64-msvc")) {
    Write-Host "   lightningcss-win32-x64-msvc missing"
    $needInstall = $true
}
if ($needInstall) {
    Write-Host "   -> clean reinstall" -ForegroundColor Yellow
    if (Test-Path "node_modules") { Remove-Item -Recurse -Force "node_modules" }
    npm install
    if ($LASTEXITCODE -ne 0) { Write-Host "npm install FAILED." -ForegroundColor Red; exit 1 }
} else {
    Write-Host "   dependencies look correct"
}

Step "Building (npm run build)"
npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "`nBUILD FAILED — nothing committed." -ForegroundColor Red; exit 1 }

Step "Committing + pushing"
git add -A
git commit -m $Message
if ($LASTEXITCODE -ne 0) { Write-Host "   (nothing to commit)" -ForegroundColor Yellow }
git push origin main
if ($LASTEXITCODE -ne 0) { Write-Host "git push FAILED." -ForegroundColor Red; exit 1 }

Step "Updating parent submodule ref (C:\DEV)"
$parent = "C:\DEV"
if (Test-Path (Join-Path $parent ".git")) {
    Push-Location $parent
    git add _3KPRO-WEBSITE
    git commit -m "Update 3kpro-website ref: $Message" 2>$null
    git push 2>$null
    Pop-Location
    Write-Host "   parent ref updated"
} else {
    Write-Host "   no parent git repo at C:\DEV — skipped"
}

Write-Host "`n==> DONE. Pushed to main; Vercel will deploy automatically." -ForegroundColor Green
