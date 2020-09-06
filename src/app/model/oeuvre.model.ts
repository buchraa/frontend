import { Author } from './author.model';
import { Category } from './category.model';
import { Theme } from './theme.model';
import { OeuvreTraduction } from './OeuvreTraduction.model';
import { Diwan } from './diwan.model';

export class Oeuvre {
    oeuvreId: number;
    authenticite_degre: string;
    avantages: string;
    formeRques: string;
    periodeLieu: string;
    periodeRques: string;
    remarques: string;
    titrePopulaire: string;
    achatOnline: string;
    acrostiche: string;
    dispo_oeuvre: true;
    diwanPage: string;
    edition: string;
    genre: string;
    metriqueNom: string;
    modesLecture: string;
    nbVers: number;
    pdfOeuvre: true;
    periode: string;
    periodeDatation: string;
    premierVers: string;
    presentation: string;
    rime: string;
    titre: string;
    titreOeuvre: string;
    urlOeuvre: string;
    categoryId: number;
    diwanId: number;
    themeId: number;
    refAuthors: Number[];
}