import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

   // recipeSelected = new EventEmitter<Recipe>();
    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe("Pizza", "How to make a traditional pizza", "https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717__340.jpg", [new Ingredient('Mozzarela', 2), new Ingredient('Salam', 200)]),
        new Recipe("Pizza2", "How to make a traditional pizza2", "https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717__340.jpg",  [new Ingredient('Mozzarela', 2), new Ingredient('Salam', 200)]),
        new Recipe("Pizza3", "How to make a traditional pizza3", "https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717__340.jpg",  [new Ingredient('Mozzarela', 2), new Ingredient('Salam', 200)])
      ];


    constructor(private shoppingService: ShoppingListService) {   
    }

    
  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

    getRecipes() {
       return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
      this.shoppingService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipeChanged.next(this.recipes.slice());
    }

}