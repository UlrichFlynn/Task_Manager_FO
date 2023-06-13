import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import Task from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webService: WebService) { }

  getLists() {
    return this.webService.get("lists");
  }

  createList(title: string) {
    return this.webService.post("lists/add", { title });
  }

  getTasks(listId: string) {
    return this.webService.get(`tasks/${listId}`);
  }

  createTask(title: string, listId: string) {
    return this.webService.post("tasks/add", { title, listId });
  }

  deleteTask(taskId: string) {
    return this.webService.delete(`tasks/delet/${taskId}`);
  }

  changeTaskStatus(task: Task) {
    return this.webService.put(`tasks/changeStatus/${task._id}`, { isCompleted: !task.isCompleted });
  }
}
