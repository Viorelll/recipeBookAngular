import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  ingredients: Ingredient[];
  private ingredientSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientSubscription = this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.ingredientSubscription.unsubscribe();
  }

  // onIngredientAdded(ingredientAdded: Ingredient) {
  //   console.log('ShoppingListComponent -> onIngredientAdded()');
  //   console.log(JSON.stringify(ingredientAdded));
  //   //this.ingredients.push(ingredientAdded);
  //   this.shoppingListService.addIngredient(ingredientAdded);
  // }

}
