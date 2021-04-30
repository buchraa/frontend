import { Chapter } from "./chapter.model";
import { VersTraduction } from "./verTraduction.model";

export class Vers {
    
versId: number;
oeuvreId: number;
chapitreId: number;
typeVers: string;
numVers: number;
refVersNote : number;
audioVers: string;
texteVersAR1: string;
texteVersAR2: string;
texteVersAR3: string;
texteVersAR4: string;
traductions : VersTraduction[];
public push(a: any, b: any){
return a.push(b)
}

}