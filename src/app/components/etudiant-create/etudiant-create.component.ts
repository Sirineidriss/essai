import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeururlsService } from 'src/app/apiurls/serveururls.service';
import { Classe } from 'src/app/classe.model';
import { ClasseService } from 'src/app/services/classe.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
//import { Classe } from;

@Component({
  selector: 'app-etudiant-create',
  templateUrl: './etudiant-create.component.html',
  styleUrls: ['./etudiant-create.component.scss']
})
export class EtudiantCreateComponent implements OnInit {


  @Input() etudiantDetails = { nom: '', prenom: '', matricule: '' , owner:'' }
  Owner:any=[];
  id = this.actRoute.snapshot.params['id'];

  constructor(public actRoute: ActivatedRoute,
              public serveurUrls:ServeururlsService, 
              public router: Router,
              private classeService:ClasseService ) { }

  ngOnInit(): void {
    this.readClasse();
  }
  addEtudiant() {
    this.serveurUrls.createEtudiant(this.etudiantDetails).subscribe((data: {}) => {
      this.router.navigate(['/etudiant-list'])
    })
  }
   readClasse(){  
   
    this.classeService.getClasses().subscribe((data: {}) => {
      this.Owner = data; })
      //console.log(this.Owner);
    }

}
