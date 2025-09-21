import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig, // si tu as un appConfig avec imports/providers
  providers: [
    ...(appConfig.providers || []), // conserve tes providers existants
    provideAnimations() // <-- active les animations globalement
  ]
}).catch(err => console.error(err));
