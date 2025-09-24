import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../tools/custom-button/custom-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/docs/CV_Salim_Brahem.pdf';
  link.download = 'CV_Salim_Brahem.pdf';
  link.click();
}
}
