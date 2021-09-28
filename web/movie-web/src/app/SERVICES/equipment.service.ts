import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  url='/movies'
  constructor(private http: HttpClient) { }

  //get movies
  getMovies() 
  {
    return this.http.get(this.url)
  }

  // get a movie
  getMovie(id: string){
    return this.http.get(this.url+'/movie/'+id)
  }

  // add a movies
  addMovie(movie: Movie)
  {
    return this.http.post(this.url, movie)
  }

  // delete
  deleteMovie(id: string)
  {
    return this.http.delete(this.url+'/'+id)
  }

  // put 
  editMovie(id: string, movie: Movie)
  {
    return this.http.put(this.url+'/'+id,movie)
  }
}

export interface Movie{
  mov_id: string;
  mov_title?:string;
  mov_year?:string;
  mov_time?:string;
  mov_lang?:string;
  mov_dt_rel?:string;
  mov_rel_country?:string

}