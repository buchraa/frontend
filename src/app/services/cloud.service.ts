import { Injectable } from '@angular/core';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  files: any = [
    // tslint:disable-next-line: max-line-length
    {
      url:"/assets/audios/Hamdii-Wachoukrii-Cherif-ly.mp3",
      name: "Hamdii-Wachoukrii",
      artist: "Cherif-ly"
    },
    {
      url:"/assets/audios/Khassida-Faridj-Cherif-ly.mp3",
      name:"Faridj",
      artist: "Cherif-ly",
    },
    {
      url:"/assets/audios/KHASSIDA-SAFAROU-BAMSACHIN-JUNATUN-Serigne-Abdou-Lahad-Touré.mp3",
      name: "SAFAROU-BAMSACHIN-JUNATUN",
      artist: "Serigne-Abdou-Lahad-Touré"
    },
    {
      url:"/assets/audios/Yaxini-Kourel-1-Hizbut-Tarqqiyyah-Thies-Ramadan-2019-Jour-4.mp3",
      name: "Yaxini",
      artist: "Kourel-1-Hizbut-Tarqqiyyah-Thies"
    }
  ];

  constructor() { }

  getFiles() {
    return of(this.files);
  }
}