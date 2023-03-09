import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DataDirectiveComponent } from './data-directive/data-directive.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChildroutingComponent } from './childrouting/childrouting.component';
import { PrimaryComponent } from './childrouting/primary/primary.component';
import { SecondaryComponent } from './childrouting/secondary/secondary.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { SqrtPipe } from './sqrt.pipe';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectComponent } from './subject/subject.component';
import { SendMessageComponent } from './subject/send-message/send-message.component';
import { ReceivedMessageComponent } from './subject/received-message/received-message.component';
import { FormsComponent } from './forms/forms.component';
import { AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { AuthComponent } from './auth/auth.component';
import { TodoComponent } from './todo/todo.component';
import { DatabaseService } from './todo/database.service';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DataDirectiveComponent,
    SidebarComponent,
    ChildroutingComponent,
    PrimaryComponent,
    SecondaryComponent,
    ParentComponent,
    ChildComponent,
    PipeComponent,
    SqrtPipe,
    RxjsComponent,
    SubjectComponent,
    SendMessageComponent,
    ReceivedMessageComponent,
    FormsComponent,
    AuthComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  
  ],
  providers: [
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
