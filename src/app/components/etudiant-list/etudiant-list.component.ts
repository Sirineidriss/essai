import { Component, OnInit } from '@angular/core';
import { ServeururlsService } from 'src/app/apiurls/serveururls.service';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.scss']
})
export class EtudiantListComponent implements OnInit {
  /* etudiants:any;
  currentEtudiant:any=[];
  currentIndex=-1;
  nom=''; */

  Etudiant:any=[];
  constructor(public serveurUrls:ServeururlsService/* private etudiantService:EtudiantService */) { }

  ngOnInit(): void {
    this.loadEtudiant()
   /*  this.readEtudiants(); */
  }

    // Get employees list
  loadEtudiant(){
    return this.serveurUrls.getEtudiants().subscribe((data: {}) => {
      this.Etudiant = data;
      console.log(this.Etudiant);
    })
  }
  // Delete employee
  deleteEtudiant(id:any) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.serveurUrls.deleteEmployee(id).subscribe(data => {
        this.loadEtudiant()
      })
    }
  }  
//   readEtudiants():void{
//     this.etudiantService.readAll()
//     .subscribe(
//     etudiants=>{
//       this.etudiants=etudiants;
//       console.log(this.etudiants);
//     },
//     error=>{
//       console.log(error);
//     });
//   }
//   refresh():void{
//     this.readEtudiants();
//     this.currentEtudiant=null;
//     this.currentIndex=-1;
//   }
//   setCurrentEtudiant(etudiant :any, index:any): void {
//     this.currentEtudiant = etudiant;
//     console.log(this.currentEtudiant);
//     this.currentIndex = index;
//   }

//   /* deleteAllEtudiants(): void {
//     this.etudiantService.deleteAll()
//       .subscribe(
//         response => {
//           console.log(response);
//           console.log(this.deleteAllEtudiants);
//           this.readEtudiants();
//         },
//         error => {
//           console.log(error);
//         });
//   }
//  */
//   deleteEtudiants(id:any){
//     if(window.confirm('Are you sure, you want to delete?')){
//       this.etudiantService.delete(id)
//       .subscribe(etudiants=>{
//         console.log(etudiants);
//         console.log(this.deleteEtudiants);
      
//         this.currentEtudiant();
//       });
      
//     }

//   }
//   searchByName(): void {
//     this.etudiantService.searchByName(this.nom)
//       .subscribe(
//         etudiants => {
//           this.etudiants = etudiants;
//           console.log(etudiants);
//         },
//         error => {
//           console.log(error);
//         });
//   }
}
