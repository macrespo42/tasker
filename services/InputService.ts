import { TaskService } from "./TaskService.ts";
import { Opts } from "../types/index.d.ts";

class InputService {
  static parseArgs(input: string[]): Opts | null {
    if (!input) {
      return null;
    }

    const opts = {
      action: input[0],
      id: -1,
      value: "",
    };

    for (let i = 1; i < input.length; i++) {
      if (i > 2) {
        break;
      }

      if (!isNaN(parseInt(input[i]))) {
        opts.id = parseInt(input[i]);
      } else {
        opts.value = input[i];
      }
    }

    return opts;
  }

  static handleUserInput(opts: Opts) {
    if (!opts.action) {
      return;
    }
    switch (opts.action) {
      case "add":
        TaskService.add(opts.value);
        break;
      case "delete":
        TaskService.delete(opts.id);
        break;
      case "update":
        TaskService.update(opts.id, opts.value);
        break;
      case "mark-in-progress":
        TaskService.updateSatus(opts.id, "in progress");
        break;
      case "markDone":
        TaskService.updateSatus(opts.id, "done");
        break;
      case "list":
        TaskService.list(opts.value);
        break;
      default:
        console.log("Unknown command");
    }
  }
}

export { InputService };
