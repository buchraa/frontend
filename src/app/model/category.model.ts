import { Module } from "./module.model";
import { Traduction } from "./traduction.model";

export class Category {
    categoryId: number;
    name: string;
    module: Module;
    isAvailable: boolean;
    traductions: Traduction[] = null;
   
  }