import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Observable } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { RecipeService } from '../recipe.service';


@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {

    /**
     *
     */
    constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) {}            

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipeService.getRecipes();

        if (recipes.length === 0) {
            return this.recipeService.getRecipes();
        } else {
            return this.dataStorageService.fetchRecipes();
        }
    }
}