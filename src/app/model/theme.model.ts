import{ ThemeTraduction } from './themeTraduction.model';
export class Theme
{ 
    themeId: number;
    name: string;
    isAvailable: boolean;
    traductions: ThemeTraduction[];
  }