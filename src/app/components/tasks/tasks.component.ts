import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskList: Task[] = [];
  taskName: string = '';

  constructor(){}
  AddTask(){
    this.taskList.push({
      name: this.taskName,
      status: false,
      update: false,
      nameUpdated: this.taskName
    });
    this.taskName = '';
  }
  DeleteTask(index: number){
    this.taskList.splice(index, 1);
  }
  UpdateStatusTask(index:number, task: Task){
    this.taskList[index].status = !task.status;
  }
  UpdateNameTask(task: Task){
    task.update = true;
  }
  CancelUpdate(index: number, task: Task){
    this.taskList[index].update = false;
    this.taskList[index].nameUpdated = task.name;
  }
  ConfirmUpdate(index: number, task: Task){
    this.taskList[index].update = false;
    this.taskList[index].name = task.nameUpdated;
  }
  ngOnInit(): void {
      
  }
}
