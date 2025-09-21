import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../tools/custom-button/custom-button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/docs/CV_Salim_Brahem.pdf';
  link.download = 'CV_Salim_Brahem.pdf';
  link.click();
}
}
