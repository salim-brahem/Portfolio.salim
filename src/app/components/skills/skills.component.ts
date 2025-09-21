import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
animations: [
  trigger('fadeSlide', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('800ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 0 }) // supprime animate, disparaît instantanément
    ])
  ])
]

})
export class SkillsComponent {
  activeSection: 'front' | 'back' | 'marketing' | null = 'front';
  isMobile: boolean = false;

  constructor() {
    this.checkWindowWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkWindowWidth();
  }

  private checkWindowWidth() {
    // on vérifie la largeur de la fenêtre
    this.isMobile = typeof window !== 'undefined' && window.innerWidth <= 800;
  }

  setActive(section: 'front' | 'back' | 'marketing') {
    // toggle sur mobile
    if (this.isMobile && this.activeSection === section) {
      this.activeSection = null;
    } else {
      this.activeSection = section;
    }
  }

}
