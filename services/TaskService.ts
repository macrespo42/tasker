import rawTasks from "../tasks/tasks.json" with { type: "json" };

type taskType = {
  name: string;
  status: string;
};

const tasks = rawTasks as Record<number, taskType>;
class TaskService {
  static relativeTaskPath = "./tasks/tasks.json";

  static #saveTasks() {
    Deno.writeTextFileSync(TaskService.relativeTaskPath, JSON.stringify(tasks));
  }

  static add(name: string) {
    tasks[Object.keys(tasks).length + 1] = {
      name,
      status: "todo",
    };
    TaskService.#saveTasks();
  }

  static delete(id: number) {
    delete tasks[id];
    TaskService.#saveTasks();
  }

  static update(id: number, value: string) {
    const selectedTask = tasks[id];
    if (selectedTask) {
      selectedTask.name = value;
    }
    TaskService.#saveTasks();
  }

  static updateSatus(id: number, status: string) {
    const selectedTask = tasks[id];
    if (selectedTask) {
      selectedTask.status = status;
    }
    TaskService.#saveTasks();
  }

  static list(type?: string) {
    for (const key in tasks) {
      if (!type) {
        console.log(`${key}: ${tasks[key]?.name} ${tasks[key]?.status}`);
      } else {
        if (tasks[key]?.status === type) {
          console.log(`${key}: ${tasks[key]?.name}`);
        }
      }
    }
  }
}

export { TaskService };
