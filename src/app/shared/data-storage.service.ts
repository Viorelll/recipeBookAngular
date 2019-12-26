import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    fireBaseURL = "https://recipebookapi-2ebe0.firebaseio.com/recipes.json";
    /**
     *
     */
    constructor(private httpClient: HttpClient,
        private recipeService: RecipeService) {}

    storeRecipes() {
        const recipe = this.recipeService.getRecipes();

        this.httpClient
            .put(this.fireBaseURL, recipe)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes() {
        return this.httpClient
            .get<Recipe[]>(this.fireBaseURL)
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return {...recipe, ingredients: recipe.ingredients ? 
                                            recipe.ingredients : []}
                    });
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            );
    }
}