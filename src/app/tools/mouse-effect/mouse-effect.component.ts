import { Component, AfterViewInit, Renderer2, ElementRef, ViewChild, HostListener, ViewEncapsulation } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-mouse-effect',
  standalone: true,
  templateUrl: './mouse-effect.component.html',
  styleUrls: ['./mouse-effect.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class MouseEffectComponent {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const mainCursor = document.querySelector('.custom-cursor') as HTMLElement;
    const backgroundCursor = document.querySelector('.background-circle') as HTMLElement;

    if (mainCursor && backgroundCursor) {
      // Position du cercle principal (suit la souris précisément)
      mainCursor.style.left = `${event.clientX}px`;
      mainCursor.style.top = `${event.clientY}px`;

      // Position du cercle en arrière-plan (suit avec un léger retard via CSS)
      backgroundCursor.style.left = `${event.clientX}px`;
      backgroundCursor.style.top = `${event.clientY}px`;
    }
  }
}