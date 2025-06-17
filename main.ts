import { TaskService } from "./Task.ts";

type Opts = {
  action: string;
  id: number;
  value: string;
};

function parseArgs(input: string[]): Opts | null {
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

function handleUserInput(opts: Opts) {
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
      TaskService.markInProgress(opts.id);
      break;
    case "markDone":
      TaskService.markDone(opts.id);
      break;
    case "list":
      TaskService.list(opts.value);
      break;
    default:
      console.log("Unknown command");
  }
}

if (import.meta.main) {
  const opts = parseArgs(Deno.args);
  if (!opts) {
    throw new Error("Please run the programm with arguments");
  }
  handleUserInput(opts);
}
