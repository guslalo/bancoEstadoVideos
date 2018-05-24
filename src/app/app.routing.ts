import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const router: Routes = [
    { path: '', component: HomeComponent },
    //{ path: '**', component: HomeComponent },
    { path: 'video', component: VideoComponent }
   /* { path: 'hero/:id',      component: HeroDetailComponent },
    {
      path: 'heroes',
      component: HeroListComponent,
      data: { title: 'Heroes List' }
    },*/
    /*
    { path: '',
      redirectTo: '/heroes',
      pathMatch: 'full'
    },*/
    //{ path: '**', component: PageNotFoundComponent }
  ];

  export const appRouters: any[] = [];
  export const routing: ModuleWithProviders = RouterModule.forRoot(router);
  