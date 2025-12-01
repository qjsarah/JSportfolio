import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  title = 'WHAT I DO'
  description = 'I particularly excel in frontend development, designing, and programming logic.'
  skills: {name:string, percentage: number, imgpath: string}[]=[];
  constructor(private _dataService:DataService){
  }
  ngOnInit(): void {
    this.skills = this._dataService.getSkills();
  }
}
