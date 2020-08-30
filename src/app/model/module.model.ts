import{ ModuleTraduction } from './moduleTraduction.model';

export class Module {
    moduleId: number;
    name: string;
    isAvailable: boolean;
    traductions: ModuleTraduction[];  
  }