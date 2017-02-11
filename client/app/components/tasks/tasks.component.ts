import { Component } from '@angular/core';
import {Task} from '../../../Task';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
})

export class TasksComponent { 
    tasks: Task[];
    title: string;
    counter: number;
    
    constructor(){
        this.tasks = [];
        this.counter = 0;
    }
    
    addTask(event){
        event.preventDefault();
        var newTask = {
            _id: this.counter++,
            title: this.title,
            isDone: false
        };
        
        this.tasks.push(newTask);
        this.title = '';
    }
    
    deleteTask(id){
        var tasks = this.tasks;
        
        for(var i = 0;i < tasks.length;i++){
            if(tasks[i]._id == id){
                tasks.splice(i, 1);
            }
        }
    }
    
    updateStatus(task){
        task.isDone = !task.isDone;
    }
}
