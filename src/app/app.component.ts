import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MouseEffectComponent } from './tools/mouse-effect/mouse-effect.component';
import { CustomButtonComponent } from './tools/custom-button/custom-button.component';
import { HomeComponent } from './components/home/home.component';
import { BoucleComponent } from './components/boucle/boucle.component';
import { AboutComponent } from './components/about/about.component';
import { SectionNameComponent } from './components/section-name/section-name.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BrowserModule } from '@angular/platform-browser';
import { ExperienceComponent } from './components/experience/experience.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MouseEffectComponent,CustomButtonComponent, HomeComponent,BoucleComponent,AboutComponent,SectionNameComponent,SkillsComponent,ExperienceComponent,PortfolioComponent,ContactComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';

  downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/docs/CV_Salim_Brahem.pdf';
  link.download = 'CV_Salim_Brahem.pdf';
  link.click();
}

}
