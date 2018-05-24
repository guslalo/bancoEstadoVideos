import { Component, OnInit } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { video } from '../models/videos';
import { VideosService } from '../servicios/videos.service';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loading:boolean;
  public loading2:boolean;
  public videos: Array<video>;
  public videoid: Array<video>;
  public dosVideos: Array<video>;
  public listavideos:any;
  public VideosApi = 'https://rinnolab.vms.grupoz.cl/api/v1/video';
  public token = '59026a6cd7dd4cc7a5517090659b9bf6';
  public navtext2 = 'navtext';

 
  constructor(private http : HttpClient) {
    this.getVideos();
    /*this.VideosService.getVideos().subscribe(
      response => {
        //En response tienes el json devuelto y es por donde entrara si la petición ha ido bien
     },
     error => {
       //Entrara por aquí en caso de error en la petición
     });*/
     this.loading = true;
     this.loading2 = true; 
     
  }

  getVideos(){

    const headers = { 'Authorization': 'bearer 59026a6cd7dd4cc7a5517090659b9bf6' };
    const params = { 'page': '2' };

    this.http.get(this.VideosApi, { headers:headers, params }).subscribe(data => {   // data is already a JSON object
      this.listavideos = data['videos']['data'];
  
      this.dosVideos = this.listavideos.filter(data => data.vid === '5a7da722e19d3e641aca9fe3');
      this.videoid = this.listavideos.filter(data => data.vid === '5a7da722e19d3e641aca9fe3');
      
    });

  }

  ngOnInit() {
    this.loading = false;
    setTimeout(function(){ 
      
      $('.owl-carousel').owlCarousel({
          themeClass: 'owl-fullscreen owl-nonav white owl-loaded',
          margin:0,
          autoplay:true,
          loop:true,
          autoplayTimeout:10000,
          items:1, // items to display in slider
          navRewind:true, // Go to first/last.
          //navText:true, // left and right arrows
          autoHeight: true,
          navContainerClass: 'owl-buttons',
          dotsClass: 'owl-pagination',
          dotClass: 'owl-page',
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          autoplayHoverPause:false, //false
          lazyLoad: true, // IMG need special markup class="lazyOwl" and data-src="url_to_img" or/and data-src-retina="url_to_highres_img"
          dots:false, // true
          responsiveClass:true,
          navText: ["<i class='material-icons'>keyboard_arrow_left</i>","<i class='material-icons'>keyboard_arrow_right</i>"],
          responsive:{
              0:{
                  items:1,
                  //navText:false,
                  mouseDrag: true
              },
              720:{
                  items:1,
                  nav:true
              },
              960:{
                  items:1,
                  nav:true,
                  autoplay:true,
                  mouseDrag:true,
                  loop:true,
                  autoplayHoverPause:false, 
              }
          }
      });
     
  
  
  
  },300);
  
  }

  


}
