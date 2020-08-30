import { Oeuvre } from "./oeuvre.model";
import { ChapitreTraduction } from "./chapitreTraduction.model";
export class Chapter {   
    chapterId: number;
    oeuvreId: number;
    num: number;
    chapterType: string;
    chapterSection: number;
    title: string;
    theme: string;
    plageVers: string;
    isAvailable: true;
    traductions: ChapitreTraduction[];
  }