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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MouseEffectComponent,CustomButtonComponent, HomeComponent,BoucleComponent,AboutComponent,SectionNameComponent,SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
