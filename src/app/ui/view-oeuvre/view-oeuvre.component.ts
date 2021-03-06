import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Oeuvre } from 'src/app/model/oeuvre.model';
import { VersTraduction } from 'src/app/model/verTraduction.model';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContentPdfComponent } from '../dialog-content-pdf/dialog-content-pdf.component';
import { AudioService } from "../../services/audio.service";
import { StreamState } from "../../interfaces/stream-state";
import { DomSanitizer } from '@angular/platform-browser';
import { Vers } from 'src/app/model/vers.model';
import { Category } from 'src/app/model/category.model';





@Component({
  selector: 'app-view-oeuvre',
  templateUrl: './view-oeuvre.component.html',
  styleUrls: ['./view-oeuvre.component.css']
})
export class ViewOeuvreComponent implements OnInit {

  viezText: boolean;
  object:Oeuvre; 
  ObjetId: string;
  categoryId: number;
  routingSubscription: any; 
  allVers=[];
  vers=[];
  searchText: string;
  audio: string;
  pdfUrl : string; 
  titreOeuvre: string ;
  file: string; 
  state: StreamState;
  currentFile: any = {};
  panelOpenState = false;
  played: Boolean = false;
  videoSrc: string;
 versIntro=[];
 typeVer=[];

  constructor(public matDialog: MatDialog, public audioService: AudioService, private router: Router, private route: ActivatedRoute, public api: ApiService, private _sanitizer: DomSanitizer) {
    //pdfDefaultOptions.assetsFolder = 'bleeding-edge';
   }


  ngOnInit(): void {   

     // listen to stream state
     this.audioService.getState().subscribe(state => {
      this.state = state;
    });

    this.object = new Oeuvre();     
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            if (params["id"]) {          
       
              this.ObjetId = params["id"]
              this.object.oeuvreId = params["id"]            
              

              this.api.getById('Oeuvre', params["id"]).subscribe(
                response => {
                this.object = response;
                //get categoryId
                this.categoryId = response.category.categoryId
                this.getVers(this.ObjetId);
                //get the audioUrl
                this.file = this.object.audioOeuvre;
                //get the videoSrc
                this.videoSrc = this.object.mediaOeuvre;
                // get the pdfUrl and the Title
                this.pdfUrl = this.object.urlOeuvre;
                this.titreOeuvre = this.object.titre;
                console.log(this.object.mediaOeuvre);                
              });
            }
        });
    
  }

  public customStyle(word: String) {
    return word != "Vers" ? true : false ;
  }

  public getVers(uuid: any) {
    this.api.findItems(uuid).subscribe(
      (t) => {
        this.vers = t;     
        console.log(this.vers)  

            
      for (var i = 0; i < this.vers.length; i++) {
        if(this.vers[i].typeVers == "Prose"){
       this.versIntro.push(this.vers[i]);          
      }
      else this.typeVer.push(this.vers[i]);
}
    
      },
      (error) => {
        
       console.log(error);
     }

    )
  }

  

  public getTraduc(object: VersTraduction){
    if(object.codeLangue == "FR") {
      this.viezText = true;
      return object.texte;
    }

    else return null;

  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "100%";
    dialogConfig.width = "100%";
    dialogConfig.maxWidth = "100vw";
    //passing data to modal component
    dialogConfig.data = { pdfUrl : this.pdfUrl, titre: this.titreOeuvre }
    const modalDialog = this.matDialog.open(DialogContentPdfComponent, dialogConfig);
    
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });    
}

openFile(file) {  
 this.playStream(file);
}


readVers(file) {  
  this.playStream(file);
 }

pause() {
  this.audioService.pause();
}

play() {
  this.audioService.play();
}

stop() {
  this.audioService.stop();
}


onSliderChangeEnd(change) {
  this.audioService.seekTo(change.value);
}

onVolumeChange(change) {
  this.audioService.setVolume(change.value);
}

playVideo(){
  this.played = !this.played;
}

closeModal() {
  this.played = false;
}

public getMediaPath(url) {
   return (this._sanitizer.bypassSecurityTrustResourceUrl(url) as any);
}

goDetails() {
  this.router.navigate(["/view-category", this.categoryId]);
}

}