import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Oeuvre } from 'src/app/model/oeuvre.model';
import { VersTraduction } from 'src/app/model/verTraduction.model';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContentPdfComponent } from '../dialog-content-pdf/dialog-content-pdf.component';
import { AudioService } from "../../services/audio.service";
import { StreamState } from "../../interfaces/stream-state";




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
  pdfUrl = "/assets/images/anta_rabbii.pdf";
  titreOeuvre = "Titre Oeuvre"

  file= "/assets/audios/Hamdii-Wachoukrii-Cherif-ly.mp3";
  state: StreamState;
  currentFile: any = {};
  panelOpenState = false;
  played: Boolean = false;

  constructor(public matDialog: MatDialog, public audioService: AudioService, private router: Router, private route: ActivatedRoute, public api: ApiService) {
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
                //this.audio = this.object.audioOeuvre;
                // get the pdfUrl and the Title
                //this.pdfUrl = this.object.urlOeuvre;
                //this.titreOeuvre = this.object.titreOeuvre;
                console.log(this.object);                
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
    //passing data to modal component
    dialogConfig.data = { pdfUrl : this.pdfUrl, titre: this.titreOeuvre }
    const modalDialog = this.matDialog.open(DialogContentPdfComponent, dialogConfig);
    
  }

toggle(){

}

  playSound(){
    var audio = new Audio("/assets/audios/Hamdii-Wachoukrii-Cherif-ly.mp3");
    audio.play();
  }



  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });    
}

openFile(file) {  
  this.played = !this.played;
 this.playStream(file);
}

pause() {
  this.audioService.pause();
}

play() {
  this.audioService.play();
}

stop() {
  this.played = !this.played;
  this.audioService.stop();
}


onSliderChangeEnd(change) {
  this.audioService.seekTo(change.value);
}

onVolumeChange(change) {
  this.audioService.setVolume(change.value);
}

}