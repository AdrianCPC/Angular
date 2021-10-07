import { Component, OnInit } from '@angular/core';
import {EquipmentService, Movie} from '../../SERVICES/equipment.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  // variable
  ListMovie: any =[] ;

  constructor(private EquipmentService:EquipmentService, private router:Router) { }


  ngOnInit(): void {
    this.showMovies();
    
  }

  showMovies()
  {
    this.EquipmentService.getMovies().subscribe(
      res=>{
        console.log(res);
        this.ListMovie=<any>res;
      },
      err => console.log(err)
    )
  }

  delete(id:string)
  {
    this.EquipmentService.deleteMovie(id).subscribe(
      res=>{
        console.log('Pelicula Eliminada');
        this.showMovies();
      },
      err=> console.log(err)
      );
  }

  modify(id:string){
    this.router.navigate(['/edit/' + id])

  }

}
