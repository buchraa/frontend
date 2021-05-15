import { Component, OnInit } from '@angular/core';
import { AudioService } from "../../services/audio.service";
import { CloudService } from "../../services/cloud.service";
import { StreamState } from "../../interfaces/stream-state";
import { ApiService } from 'src/app/services/api.service';
import { Module } from 'src/app/model/module.model';
import { Category } from 'src/app/model/category.model';
import { Oeuvre } from 'src/app/model/oeuvre.model';



@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  files: Array<any> = [];
  state: StreamState;
  currentFile: any = {};
  module:Module; 
  ObjetId: number;
  panelOpenState = false;
  categorie: Category;
  categoryId: number;
  allOeuvres = [];
  webFiles = [];

  constructor(public api: ApiService, public audioService: AudioService,
    public cloudService: CloudService) {}
  
    

  ngOnInit(): void {
     //get Category
     this.api.getObjectByName('Categorie','Audios').subscribe(
      (t) => {
        this.categorie = t; 
        this.categoryId = this.categorie.categoryId;       
        console.log(this.categoryId);
       
      },
      (error) => {
        
       console.log(error);
     }

    )

       //get list of webFiles
    this.api.getList('oeuvres').subscribe(
      (t) => {
        this.allOeuvres = t;     
        console.log(this.allOeuvres)  
        console.log(this.categoryId);
        for (var i = 0; i < this.allOeuvres.length; i++) {
                  if(this.allOeuvres[i].category.categoryId == this.categoryId){
                 this.files.push(this.allOeuvres[i]);          
          }      
      }
      console.log(this.files);
      },
      (error) => {
        
       console.log(error);
     }

    )

   
    /* get media files
    this.cloudService.getFiles().subscribe(files => {
      this.files = files;
    });*/

    // listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
   
  }

  getImage(){
    return this.api.getRandImage()
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });    
}

openFile(file: Oeuvre, index) {
  this.currentFile = { index, file };
  this.audioService.stop();
  this.playStream(file.urlOeuvre);
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

next() {
  const index = this.currentFile.index + 1;
  const file = this.files[index];
  this.openFile(file, index);
}

previous() {
  const index = this.currentFile.index - 1;
  const file = this.files[index];
  this.openFile(file, index);
}

isFirstPlaying() {
  return this.currentFile.index === 0;
}

isLastPlaying() {
  return this.currentFile.index === this.files.length - 1;
}

onSliderChangeEnd(change) {
  this.audioService.seekTo(change.value);
}

onVolumeChange(change) {
  this.audioService.setVolume(change.value);
}

}
