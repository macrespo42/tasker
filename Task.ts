class TaskService {
  static add(name: string) {
    console.log("Adding ", name);
  }

  static delete(id: number) {
    console.log("deleting", id);
  }

  static update(id: number, value: string) {
    console.log(`updating task ${id} with with ${value}`);
  }

  static markInProgress(id: number) {
    console.log(`Set task ${id} as in progress`);
  }

  static markDone(id: number) {
    console.log(`Set task ${id} as in done`);
  }

  static list(type?: string) {
    console.log("list tasks", type);
  }
}

export { TaskService };
