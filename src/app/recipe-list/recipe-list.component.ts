import {Component, OnInit} from '@angular/core';
import {Recipe} from "../model/recipe";
import {RecipeService} from "../service/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit{

  recipes:Recipe[]=[]
  constructor(public recipeService:RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.recipes$.subscribe(data=>this.recipes=data,
      error => console.log(error))
  }

}
