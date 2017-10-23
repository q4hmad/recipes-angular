import { Component } from '@angular/core';

@Component ({
  selector: 'app-root',
  template:`
  <div class="container">
  <h1>Recipe Box Using Angular 2</h1>
  <h3>{{currentRecipe}}</h3>
  <ul>
    <li>{{firstRecipe.description}}</li>
  </div>
  `
})

export class AppComponent {
 currentRecipe; string = 'Fried Chicken';
 currentTime = new Date();
 month: number = this.currentTime.getMonth() + 1;
 day: number = this.currentTime.getDate();
 year: number = this.currentTime.getFullYear();
 firstRecipe = {
   description: "Crispy Fried Chicken"
 }
}
