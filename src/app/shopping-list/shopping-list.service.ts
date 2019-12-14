import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Mozzarela', 100),
    new Ingredient('Salam', 100)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredientAdded: Ingredient) {
    console.log('ShoppingListService -> addIngredient()');
    console.log(JSON.stringify(ingredientAdded));
    this.ingredients.push(ingredientAdded);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
      // for (let ingredient of ingredients) {
      //   this.addIngredient(ingredient);
      // }
      this.ingredients.push(...ingredients);
      this.ingredientChanged.emit(this.ingredients.slice());
  }
}
