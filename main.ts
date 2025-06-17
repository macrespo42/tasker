import { InputService } from "./services/InputService.ts";

if (import.meta.main) {
  const opts = InputService.parseArgs(Deno.args);
  if (!opts) {
    throw new Error("Please run the programm with arguments");
  }
  InputService.handleUserInput(opts);
}
