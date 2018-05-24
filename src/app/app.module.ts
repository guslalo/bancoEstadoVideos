import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './app.material.module';
import { AppComponent, DialogContentComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { appRouters, routing } from "./app.routing";
import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';
import { VideosService } from './servicios/videos.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    routing
   // RouterModule.forRoot(routes, { useHash: true })  // .../#/crisis-center/
  ],
  declarations: [AppComponent, DialogContentComponent, HeaderComponent,VideoComponent, HomeComponent],
  entryComponents: [DialogContentComponent],
  providers: [appRouters, VideosService],
  bootstrap: [AppComponent],
})
export class AppModule {


}
