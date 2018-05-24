import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams   } from "@angular/common/http";
import { video, videosgeneral } from '../models/videos';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videos: Array<video>;
  videoid: Array<video>;
  listavideos:any;
  public VideosApi = 'https://rinnolab.vms.grupoz.cl/api/v1/video';
  public token = '59026a6cd7dd4cc7a5517090659b9bf6';
  public urlParte1 = '//cdn.vms.grupoz.cl/rinnolab/content/';
  public urlParte2 = '/player/';
  public urlCompleta = '//cdn.vms.grupoz.cl/rinnolab/content/5a7da722e19d3e641aca9fe3/player/'
  public trustedDashboardUrl : SafeUrl;
  public loading:boolean;


  constructor(private http : HttpClient, sanitizer: DomSanitizer) {

    this.getVideos();
    this.loading = true;
  }

  ngOnInit() {
    this.loading = false;
    
  }
  first_url = "//cdn.vms.grupoz.cl/rinnolab/content/";
  second_url = "/player/";
  public current_id: string;
  public finalurl:string;
  public url:string;

  public availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];
  public videotag:any;

  getVideos(){
    const headers = { 'Authorization': 'bearer 59026a6cd7dd4cc7a5517090659b9bf6' };
    const params = { 'page': '2' };
    /*
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'bearer ' + this.token);

    let params = new HttpParams();
      params.append("page", '1')*/

    this.http.get(this.VideosApi, { headers, params }).subscribe(data => {   // data is already a JSON object
      this.listavideos = data['videos']['data'];
      this.videotag = this.listavideos.filter(data => data.tags);

      this.finalurl = this.first_url + this.current_id + this. second_url;
       this.url = this.finalurl;

      for(let item of this.listavideos){
          this.current_id = item.vid;
      }
      
      //console.log(this.url);
    
     

        this.videoid = this.listavideos.filter(data => data.vid === '5a7da722e19d3e641aca9fe3');
   
      
    });
  }
}
