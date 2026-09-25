import { Component, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  darkMode = false;

  constructor(private renderer: Renderer2) {
    const savedTheme = localStorage.getItem('dayvia-theme');
    if (savedTheme === 'dark') {
      this.darkMode = true;
      this.applyTheme();
    }
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem(
      'dayvia-theme',
      this.darkMode ? 'dark' : 'light'
    );
    this.applyTheme();
  }

  private applyTheme(): void {
    if (this.darkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }
}