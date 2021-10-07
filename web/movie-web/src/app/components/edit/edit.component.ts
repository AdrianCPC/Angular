import { Component, OnInit } from '@angular/core';
import {Movie, EquipmentService} from '../../SERVICES/equipment.service'
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  movie:Movie={
    mov_id:'',
    mov_title:'',
    mov_year:'',
    mov_time:'',
    mov_lang:'',
    mov_dt_rel:'',
    mov_rel_country:'',
  };
  constructor(private EquipmentService:EquipmentService,
              private router:Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
      const id_entrada = <string> this.activeRoute.snapshot.params.id;
      console.log('id de entrada' + id_entrada);
      
      if(id_entrada){
        this.EquipmentService.getMovie(id_entrada).subscribe(
          (res:any) => {
            this.movie = res[0];
            console.log(res[0]);
            
          },
          err=>console.log(err)  
        )
      }
  }

  change(){
    this.EquipmentService.editMovie(this.movie.mov_id,this.movie).subscribe(
      res=>{              
        console.log(res)
      },err=>console.log(err)
    )
  this.router.navigate(['/home']);    
  }
}