// One-Star Review of Something Essential — entry program.
// Writes a single-line, deadpan one-star review (1-160 chars) to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. Gravity has dropped everything I own and caught nothing. After 30 years of this, I am starting to think it is doing it on purpose.";

function main(): void {
  const text = REVIEW;
  if (text.length < 1 || text.length > 160) {
    throw new Error(`entry length ${text.length} outside gate 1-160`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
  console.log(text);
}

main();
