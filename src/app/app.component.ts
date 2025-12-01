import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import {  ContactComponent } from './contact/contact.component';
import * as AOS from 'aos';

interface Star { // Define the Star interface
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  brightness: number;
  speed: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, CommonModule, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit, AfterViewInit {
  themeIconHtml: string = '';
  ngOnInit() {
    AOS.init(); // Initialize AOS library

    //initialize theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);

    // Set the icon initially
    this.themeIconHtml = savedTheme === 'light'
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';
  }
  // Theme toggle method
  toggleTheme(): void {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    this.themeIconHtml = newTheme === 'light'
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';
  }
  // Canvas and starfield properties
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D | null;
  stars: Star[] = [];
  mouse = { x: 0, y: 0 };

  ngAfterViewInit() {
    this.canvas = document.getElementById('starCanvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');

    this.resizeCanvas();
    this.mouse.x = this.canvas.width / 2;
    this.mouse.y = this.canvas.height / 2;

    this.createStars(500);
    this.animate();
  }

  @HostListener('window:resize')
  resizeCanvas() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  }

  createStars(count: number) {
    this.stars = [];
    for (let i = 0; i < count; i++) {
      const star: Star = {
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        baseX: 0,
        baseY: 0,
        size: Math.random() * 0.5 + 1,
        brightness: Math.random(),
        speed: Math.random() * 0.02 + 0.005
      };
      star.baseX = star.x;
      star.baseY = star.y;
      this.stars.push(star);
    }
  }

  animate() {
    if (!this.ctx) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let star of this.stars) {
      const dx = star.x - this.mouse.x;
      const dy = star.y - this.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 100) {
        const angle = Math.atan2(dy, dx);
        const push = (100 - dist) / 5;
        star.x += Math.cos(angle) * push;
        star.y += Math.sin(angle) * push;
      } else {
        star.x += (star.baseX - star.x) * 0.02;
        star.y += (star.baseY - star.y) * 0.02;
      }

      star.brightness += star.speed;
      if (star.brightness > 1 || star.brightness < 0.3) {
        star.speed *= -1;
      }

      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
      this.ctx.fillStyle = currentTheme === 'dark' 
        ? `rgba(255, 255, 255, ${star.brightness})` 
        : `rgba(0, 0, 0, ${star.brightness})`;
      this.ctx.fill();
    }

    requestAnimationFrame(() => this.animate());
  }
}
