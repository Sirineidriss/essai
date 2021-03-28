import { Component, OnInit } from '@angular/core';
import { ClasseService } from 'src/app/services/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {
  Classe:any=[];
  constructor(private classeService:ClasseService) { }

  ngOnInit(): void {
    this.loadClasse();

  }
  loadClasse(){
    return this.classeService.getClasses().subscribe((data: {}) => {
      this.Classe = data;
      console.log(this.Classe);
    })

}
}
