import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title ="";
  todoArray: Todo[] = [];
  constructor(private dbService: DatabaseService ) { }

  ngOnInit(): void {
   this.fetchTodo()
  }
  saveTodo(){
    let todo = new Todo();
    todo.createAt = new Date().getTime();
    todo.title = this.title
    this.dbService.insertTodo(todo).then(data=>{
alert("Record Inserted")
this.fetchTodo()
    }).catch(error=>{
console.log(error);
    })
  }
  fetchTodo(){
    this.dbService.fetchTodo().then(snapshot =>{
if (snapshot.exists()){
  this.todoArray = [];
  snapshot.forEach(docSnap =>{
    const value = docSnap.val();
    this.todoArray.push(value);
  })
}
    }).catch(error =>{
      console.log(error);
    })
  }
  editTodo(todo: Todo){
let newValue = prompt("Do You Really Want To Change Data?",todo.title)
if(newValue != ""){
  todo.title = newValue!;
  this.dbService.updateTodo(todo).then(data=>{
    alert("Updated Successsfully")
  }).catch(error=>{
    console.log(error);
  })
}
  }
  deleteTodo(id: string){
this.dbService.deleteTodo(id).then(data=>{
  alert("Deleted Successfully")
  this.fetchTodo();
}).catch(error =>{
  console.log(error); 
})
  }
}
