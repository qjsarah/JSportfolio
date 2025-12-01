import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  topWorks: { imgpath: string; title: string; link: string }[] = [];
  allWorks: { title: string; id: string; imgpath: string; modalid: string }[] = [];
  webWorks: { name: string; imgpath: string; link: string; description: string }[] = [];
  graphicWorks: { name: string; imgpath: string }[] = [];
  illustrationWorks: { imgpath: string }[] = [];

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.topWorks = this._dataService.getTopWorks();
    this.allWorks = this._dataService.getAllWorks();
    this.webWorks = this._dataService.getWebWorks();
    this.graphicWorks = this._dataService.getGraphicWorks();
    this.illustrationWorks = this._dataService.getIllustrationWorks();
  }
}
