import { Component, OnInit } from '@angular/core';
import {Movie, EquipmentService} from '../../SERVICES/equipment.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  movie:Movie={
    mov_id:'',
    mov_title:'',
    mov_year:'',
    mov_time:'',
    mov_lang:'',
    mov_dt_rel:'',
    mov_rel_country:'',
  };
  constructor(private EquipmentService:EquipmentService, private router:Router) { }

  ngOnInit(): void {
  }

  add(){
    // delete this.movie.id;
    this.EquipmentService.addMovie(this.movie).subscribe();
    this.router.navigate(['/home'])
  }

}
