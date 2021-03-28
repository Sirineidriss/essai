import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeururlsService } from 'src/app/apiurls/serveururls.service';
import { ClasseService } from 'src/app/services/classe.service';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrls: ['./etudiant-edit.component.scss']
})
export class EtudiantEditComponent implements OnInit {

   id = this.actRoute.snapshot.params['id'];
 
   etudiantData:any={}; 
   Owner:any=[];
  constructor(public serveurUrls:ServeururlsService,
    public actRoute: ActivatedRoute,public router: Router,
    private classeService:ClasseService
     ) { }

  ngOnInit(): void {
    this.serveurUrls.getEtudiant(this.id).subscribe((data: {}) => {
      this.etudiantData = data;
    })
    this.readClasse();
    // this.classeService.getClasses().subscribe ((data:{})=>{
    //   this.etudiantData=data;})
    
    

  }

   // Update employee data
   updateEtudiant() {
    if(window.confirm('Are you sure, you want to update?')){
      this.serveurUrls.updateEtudiant(this.id, this.etudiantData).subscribe(data => {
        this.router.navigate(['/etudiant-list'])
      })
    }
  }
  
  readClasse(){  
   
    this.classeService.getClasses().subscribe((data: {}) => {
      this.Owner = data; })
      //console.log(this.Owner);
    }

}
