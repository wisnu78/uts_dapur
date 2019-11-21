import { Component, OnInit } from '@angular/core';
// import { Todo, TodoService } from '../services/todo.service';
import { Todo, TodoService } from '../services/transaksi.service';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  todos: Todo[];
 
  constructor(private todoService: TodoService) { }
 
 
  ngOnInit() {
    //menampilkan data dari firebase
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
      console.log(this.todos)
    });
  }
 
  remove(item) {
    //menghapus item dari firebase
    this.todoService.removeTodo(item.id);
  }
}