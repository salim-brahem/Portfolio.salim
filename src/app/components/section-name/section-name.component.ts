import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-name',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-name.component.html',
  styleUrl: './section-name.component.css'
})
export class SectionNameComponent {
  @Input() align: 'left' | 'right' = 'left'; 

}
