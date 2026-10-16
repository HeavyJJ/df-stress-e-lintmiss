import test from "node:test";
import assert from "node:assert/strict";
import { ok } from "../src/ok.js";
test("ok", () => { assert.equal(ok(), 1); });
