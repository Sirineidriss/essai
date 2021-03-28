import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/etudiant.model';
@Component({
  selector: 'app-etudiant-details',
  templateUrl: './etudiant-details.component.html',
  styleUrls: ['./etudiant-details.component.scss']
})
export class EtudiantDetailsComponent implements OnInit {
  /* currentEtudiant:Etudiant={
    nom:'',
    prenom:'',
    matricule:'',
    owner:'',
    id:''
  }; */
  message='';
  constructor(private etudiantService:EtudiantService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
/*     this.message = '';
    this.getEtudiant(this.route.snapshot.paramMap.get('id')); */
  }
  /* getEtudiant(id:any):void{
    this.etudiantService.read(id)
      .subscribe(
        etudiant => {
          this.currentEtudiant = etudiant;
          console.log(etudiant);
        },
        error => {
          console.log(error);
        });
  }
  setAvailableStatus(status:any): void {
    const data = {
      nom:this.currentEtudiant.nom,
      //nom: this.currentEtudiant.nom,
      prenom: this.currentEtudiant.prenom,
      matricule: this.currentEtudiant.matricule,
      owner: this.currentEtudiant.owner,

    };

    this.etudiantService.update(this.currentEtudiant.id, data)
      .subscribe(
        response => {
        //  this.currentEtudiant.available= status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateEtudiant(): void {
    this.etudiantService.update(this.currentEtudiant.id, this.currentEtudiant)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The etudiants was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteEtudiant(){
    this.etudiantService.delete(this.currentEtudiant.id).subscribe(
      ()=>console.log('Etudiant with Id=${ this.employee.id } deleted'),
      (error)=>console.log(error)
    );
   
  } */
}

