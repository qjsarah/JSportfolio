import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  testimonials: { text: string; author: string }[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.testimonials = this._dataService.getTestimonials();
  }
}
