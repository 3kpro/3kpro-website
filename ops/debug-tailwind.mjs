// Reproduce the Turbopack CSS failure outside the build and show the
// offending output region. Run: node ops/debug-tailwind.mjs
import { compile } from "@tailwindcss/node";
import fs from "node:fs";
import path from "node:path";

const file = path.resolve("app/globals.css");
const css = fs.readFileSync(file, "utf8");

const compiler = await compile(css, {
  base: path.dirname(file),
  onDependency: () => {},
});

// Scan content like the build does
const { Scanner } = await import("@tailwindcss/oxide");
const scanner = new Scanner({ sources: [{ base: process.cwd(), pattern: "**/*", negated: false }] });
const candidates = scanner.scan();
const out = compiler.build(candidates);

// postcss parse to find the reported position
const postcss = (await import("postcss")).default;
try {
  postcss.parse(out);
  console.log("postcss parsed OK — length", out.length);
} catch (e) {
  console.log("ERROR:", e.reason, "at line", e.line, "col", e.column);
  const lines = out.split("\n");
  const bad = lines[e.line - 1] ?? "";
  const start = Math.max(0, e.column - 160);
  console.log("CONTEXT:", JSON.stringify(bad.slice(start, e.column + 160)));
}
