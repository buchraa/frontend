import { Author } from "./author.model";
import { Category } from "./category.model";
import { Theme } from "./theme.model";
import { OeuvreTraduction } from "./OeuvreTraduction.model";
import { Diwan } from "./diwan.model";

export class Oeuvre {
achatOnline: string;
acrostiche: string;
authenticiteDegre: string;
authors: Author[];
avantages: string;
category: Category;
diwanOrigine: Diwan;
diwanPage: string;
edition: string;
formeRques: string;
genre: string;
isAvailable: Boolean;
isPdfOeuvre: Boolean;
metriqueNom: string;
modesLecture: string;
nbVers: number;
oeuvreId: number;
periode: string;
periodeDatation: string;
periodeLieu: string;
periodeRques: string = "";
premierVers: string;
presentation: string;
remarques: string;
rime: string;
themePrincipal: Theme;
titre: string;
titreOeuvre: string;
titrePopulaire: string;
traductions: OeuvreTraduction[];
urlOeuvre: string;
}