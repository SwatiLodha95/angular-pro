import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ChildroutingComponent } from './childrouting/childrouting.component';
import { PrimaryComponent } from './childrouting/primary/primary.component';
import { SecondaryComponent } from './childrouting/secondary/secondary.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataDirectiveComponent } from './data-directive/data-directive.component';
import { FormsComponent } from './forms/forms.component';
import { ParentComponent } from './parent/parent.component';
import { PipeComponent } from './pipe/pipe.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ReceivedMessageComponent } from './subject/received-message/received-message.component';
import { SendMessageComponent } from './subject/send-message/send-message.component';
import { SubjectComponent } from './subject/subject.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: "data-binding" , component: DataBindingComponent},
  {path: "data-directive", component: DataDirectiveComponent},
  {path: "", redirectTo: "data-binding", pathMatch: "full"},
  {path: "childrouting", component: ChildroutingComponent, children:[
    {path: "primary", component: PrimaryComponent},
    {path: "secondary", component: SecondaryComponent},
    {path: "primary/:id", component: PrimaryComponent}
  ]},
{path: "parent-child" , component: ParentComponent},
{path: "pipe" , component: PipeComponent},
{path: "rxjs" , component: RxjsComponent},
{path: "subject" , component: SubjectComponent},
{path: "forms", component: FormsComponent},
{path: "auth", component: AuthComponent},
{path: "todo", component:TodoComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 