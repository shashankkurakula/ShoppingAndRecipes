import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Biryani', 'how to cook biryani', 'http://www.cooktube.in/wp-content/uploads/2017/08/mutton-biryani.jpg'),
    new Recipe('Burger', 'how to make Burger', 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps28800_UG143377D12_18_1b_RMS.jpg'),
    new Recipe('Shawarma', 'how to make a Shawarma', 'https://i2.wp.com/wellplated.com/wp-content/uploads/2015/10/Slow-Cooker-Chicken-Shawarma-recipe.-A-garlic-yogurt-chicken-with-warm-spices-that-tastes-just-like-Greek-chicken-shawarma-but-less-work-600x759.jpg'),

  ];

  constructor() { }

  ngOnInit() {
  }


}
