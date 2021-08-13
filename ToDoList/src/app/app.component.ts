import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoList';
  newTodo = '';

  todos: any[] = [];

  addTodo(){
    const text = this.newTodo.trim();

    if(this.title.length > 0){
      this.todos.push({text});
    }
    console.log(this.todos);
    this.newTodo = '';
  }

}

