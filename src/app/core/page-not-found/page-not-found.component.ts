import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p>
      This page doesn't exist. Go back to       
      
      <button mat-mini-fab routerLink="/home" matTooltip="Home" aria-label="Home">
           <mat-icon>home</mat-icon>
      </button> / 

      <button mat-mini-fab (click)="goBack()" matTooltip="Previous Location" aria-label="Previous Location">
      <mat-icon>arrow_back</mat-icon>
      </button>
    </p>
  `,
})
export class PageNotFoundComponent implements OnInit {
  constructor(private location: Location) { }

  ngOnInit() {}

  // <a routerLink="/home">home</a> 
  // <button mat-button (click)="goBack()">Go Back</button> 
  goBack(): void {
    this.location.back();
  }
}
