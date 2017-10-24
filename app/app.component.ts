import { Component } from '@angular/core';

@Component ({
  selector: 'app-root',
  template:`
  <div class="container">
      <h1>Recipe Box for {{month}}/{{day}}/{{year}}</h1>
      <h3>{{currentRecipe}}</h3>
      <ol>
       <li (click)="isDone(currentRecipe)" *ngFor="let currentRecipe of          recipes">{{currentRecipe.title}} <button (click)="editRecipe()">Edit!</button>
        <li *ngfor = 'let currentIngredient of recipe.ingredients'>{{currentIngredient}}</li>
      </li>
      </ol>
  </div>
  `
})

export class AppComponent {
 currentRecipe; string = 'Fried Chicken';
 currentTime = new Date();
 month: number = this.currentTime.getMonth() + 1;
 day: number = this.currentTime.getDate();
 year: number = this.currentTime.getFullYear();
 recipes: Recipe[] = [
   new Recipe('Crispy Fried Chicken', 'eggs'),
   new Recipe('Biryani','chicken'),
   new Recipe('Fudge Nut Brownies','oats' )
  ];

  editRecipe() {
    alert("You just requested an alert!")
  }

  isDone(clickedRecipe: Recipe) {
    if(clickedRecipe.done === true) {
      alert("This task is done!");
    } else {
      alert("This task is not done.")
    }
  }
 }



export class Recipe {
  public done: boolean = false;
  constructor(public title: string, public ingredients: string[]) { }
}
