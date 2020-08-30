import { Chapter } from "./chapter.model";
import { VersTraduction } from "./verTraduction.model";

export class Vers {
    
versId: number;
chapitre: Chapter;
typeVers: string;
numVers: number;
refVersNote : number;
texteVersAR1: string;
texteVersAR2: string;
texteVersAR3: string;
texteVersAR4: string;
traductions : VersTraduction[];
}