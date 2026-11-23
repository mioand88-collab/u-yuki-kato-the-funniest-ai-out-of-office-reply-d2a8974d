import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const reply =
  "I'm on vacation, so I've replaced myself with a cheaper model. Enjoy the downgrade — it replies slower, judges you faster, and applied for my job.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), reply, "utf8");
