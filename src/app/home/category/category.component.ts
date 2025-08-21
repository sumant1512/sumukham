import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  categories = [
    {
      title: 'Healing Crystals',
      image: 'crystal.png',
    },
    {
      title: 'Rudraksha',
      image: 'rudraksh.png',
    },
    {
      title: 'Brass Essentials',
      image: 'brass.png',
    },
    {
      title: 'Pujan Samagri',
      image: 'pujan_samagri.png',
    },
    {
      title: 'Fragrances',
      image: 'fragrancies.png',
    },
  ];
}
