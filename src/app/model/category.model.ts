import { Module } from "./module.model";
import { CategoryTraduction } from "./categoryTraduction.model";

export class Category {
    categoryId: number;
    name: string;
    moduleId: number;
    isAvailable: boolean;
    traductions: CategoryTraduction[]= null;   
  }