import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
      animate('700ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 0 }) // supprime animate, disparaît instantanément
    ])
  ])
]

})
export class SkillsComponent {
  activeSection: 'front' | 'back' | 'marketing' = 'front';

  // Méthode pour changer de section
  setActive(section: 'front' | 'back' | 'marketing') {
    this.activeSection = section;
  }
}
