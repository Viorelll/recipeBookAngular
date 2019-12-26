import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
 //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  recipeServiceSubscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeServiceSubscription = this.recipeService.recipeChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });

    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.recipeServiceSubscription.unsubscribe();
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  } 

  // onRecipeSelected(selectedRecipe: Recipe) {
  //   console.log('RecipeListComponent -> onRecipeSelected()');
  //   console.log(JSON.stringify(selectedRecipe));
  //   this.recipeWasSelected.emit(selectedRecipe);
  // }

}
