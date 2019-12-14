import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Pizza", "How to make a traditional pizza", "https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717__340.jpg", [new Ingredient('Mozzarela', 2), new Ingredient('Salam', 200)]),
        new Recipe("Pizza2", "How to make a traditional pizza2", "https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717__340.jpg",  [new Ingredient('Mozzarela', 2), new Ingredient('Salam', 200)]),
        new Recipe("Pizza3", "How to make a traditional pizza3", "https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717__340.jpg",  [new Ingredient('Mozzarela', 2), new Ingredient('Salam', 200)])
      ];


    constructor(private shoppingService: ShoppingListService) {   
    }

    getRecipes() {
       return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
      this.shoppingService.addIngredients(ingredients);
    }

}