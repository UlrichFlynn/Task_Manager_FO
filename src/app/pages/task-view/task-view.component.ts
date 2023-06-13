import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import List from 'src/app/models/list.model';
import Task from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: List[] = [];
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.taskService.getLists()
    .subscribe((lists: any) => this.lists = lists.data);

    this.route.params.subscribe((params: Params) => {
      console.log("params: ", params);
      const listId = params['listId'];
      if(!listId) return;
      this.taskService.getTasks(listId).subscribe((tasks: any) => this.tasks = tasks.data);
    });
  }

}
