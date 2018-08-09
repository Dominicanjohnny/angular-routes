import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MySecondCounterComponent } from './my-second-counter/my-second-counter.component';
import { CounterService } from './services/counter.service';
import { ContactService } from './contact-service.service';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'my-home',  component: MyHomeComponent },
  { path: 'my-about', component: MyAboutComponent },
  { path:  'my-counter', component: MyCounterComponent },
  { path:  'my-second-counter', component: MySecondCounterComponent},
  { path: 'contact-service', component: ContactService}

];
@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyAboutComponent,
    MyCounterComponent,
    MySecondCounterComponent,
    ContactService,

   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above

  ],
  providers: [CounterService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
