import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private database: AngularFireDatabase) { }
  insertTodo(todo: Todo){
let id = this.database.database.ref().child("todos").push().key;
todo.id = id!;
return this.database.database.ref().child("todos").child(id!).set(todo);
  }
  fetchTodo(){
return this.database.database.ref().child("todos").get();
  }
  updateTodo(todo: Todo){
return this.database.database.ref().child("todos").child(todo.id).update(todo);
  }
  deleteTodo(id: string){
return this.database.database.ref().child("todos").child(id).remove();
  }
}
