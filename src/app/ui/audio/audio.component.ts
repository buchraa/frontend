import { Component, OnInit } from '@angular/core';
import { AudioService } from "../../services/audio.service";
import { CloudService } from "../../services/cloud.service";
import { StreamState } from "../../interfaces/stream-state";
import { ApiService } from 'src/app/services/api.service';
import { Module } from 'src/app/model/module.model';



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

  constructor(public api: ApiService, public audioService: AudioService,
    public cloudService: CloudService) {}
  
    

  ngOnInit(): void {
   
    // get media files
    this.cloudService.getFiles().subscribe(files => {
      this.files = files;
    });

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

openFile(file, index) {
  this.currentFile = { index, file };
  this.audioService.stop();
  this.playStream(file.url);
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
