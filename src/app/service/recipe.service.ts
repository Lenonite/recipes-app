import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Recipe} from "../model/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipeSubject=new BehaviorSubject<Recipe[]>([]);

  recipes$:Observable<Recipe[]>=this.recipeSubject.asObservable();


  constructor(private http:HttpClient) {
    this.listAllRecipes().subscribe(
      data=>this.recipeSubject.next(data),
      );
  }

  private listAllRecipes():Observable<any>{
    return this.http.get<Recipe[]>("http://localhost:8080/recipe/list-recipes")
  }
}
