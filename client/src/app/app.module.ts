import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, VideosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
//    HttpModule,
    HttpClientModule
  ],
  providers: [MessageService, HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
