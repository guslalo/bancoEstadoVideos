import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { video } from '../models/videos';

@Injectable()
export class VideosService {
  videos: Array<video>;
  listavideos:any;
  public VideosApi = 'https://rinnolab.vms.grupoz.cl/api/v1/video';
  public token = '59026a6cd7dd4cc7a5517090659b9bf6';


  constructor(private http: HttpClient) { 

    this.getVideos();

  }
  /*
  getVideos(){    
    const headers = { 'Authorization': 'bearer 59026a6cd7dd4cc7a5517090659b9bf6' };
    const params = { 'page': '1' };    
    return this.http.get(this.VideosApi, { headers, params });
    
  } */
  /**/
  getVideos(){

    const headers = { 'Authorization': 'bearer 59026a6cd7dd4cc7a5517090659b9bf6' };
    const params = { 'page': '1' };

    this.http.get(this.VideosApi, { headers:headers, params }).subscribe(data => {   // data is already a JSON object
      this.listavideos = data['videos']['data'];
  
      for (let item of this.listavideos){
        console.log(item);
      }
      
    });
  }

     
}
