import { NgOptimizedImage } from '@angular/common';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements DoCheck {
  ngDoCheck() {
    console.count('checked');
  }
}
