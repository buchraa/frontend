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





@Component({
  selector: 'app-view-oeuvre',
  templateUrl: './view-oeuvre.component.html',
  styleUrls: ['./view-oeuvre.component.css']
})
export class ViewOeuvreComponent implements OnInit {

  viezText: boolean;
  object:Oeuvre; 
  ObjetId: string;
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

  constructor(public matDialog: MatDialog, public audioService: AudioService, private router: Router, private route: ActivatedRoute, public api: ApiService, private _sanitizer: DomSanitizer) {
    //pdfDefaultOptions.assetsFolder = 'bleeding-edge';
   }


  ngOnInit(): void {

     // listen to stream state
     this.audioService.getState().subscribe(state => {
      this.state = state;
    });

    this.api.getList('vers').subscribe(
      (t) => {
        this.allVers = t;     
        console.log(this.allVers)  
        for (var i = 0; i < this.allVers.length; i++) {
                  if(this.allVers[i].oeuvre.oeuvreId == this.ObjetId){
                 this.vers.push(this.allVers[i]);          
          }      
      }
      console.log(this.vers);
      this.api.sortByPremium(this.vers)
      },
      (error) => {
        
       console.log(error);
     }

    )


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
                //get the audioUrl
                this.file = this.object.audioOeuvre;
                //get the videoSrc
                this.videoSrc = this.object.mediaOeuvre;
                // get the pdfUrl and the Title
                this.pdfUrl = this.object.urlOeuvre;
                this.titreOeuvre = this.object.titreOeuvre;
                console.log(this.object.mediaOeuvre);                
              });
            }
        });
    
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

}