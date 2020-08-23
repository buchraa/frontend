import{ Traduction } from './traduction.model';

export class Module {
    moduleId: number;
    name: string;
    isAvailable: boolean;
    traductions: Traduction[] = null;  
  }