import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

type Category = 'Développement Web' | 'UI/UX Design & Branding' | 'Cloud';

interface Project {
  name: string;
  image: string;         // image principale
  description: string;   // description du projet
  stack: string[];       // technologies utilisées
  portfolio: string[];   // galerie d’images
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  categories: Category[] = ['Développement Web', 'UI/UX Design & Branding', 'Cloud'];
  activeCategory: Category = 'Développement Web';

  projects: Record<Category, Project[]> = {
    'Développement Web': [
      { 
        name: 'Gestion des incidents',
        image: 'assets/photos/portfolio-pack.png',
        description: 'Application de gestion et suivi des incidents pour optimiser la réactivité des équipes.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        stack: ['Angular', 'Node.js', 'MongoDB', 'Figma'],
        portfolio: [
          'assets/photos/portfolio-site.png',
          'assets/icons/ai.png',
          'assets/icons/ps.png',
          'assets/icons/js.png',
          'assets/icons/ts.png',
          'assets/icons/docker.png',

        ]
      },
      { 
        name: 'LeadZ',
        image: 'assets/photos/portfolio-pack.png',
        description: 'Plateforme de génération et de suivi de leads commerciaux pour booster les ventes.',
        stack: ['React', 'Express', 'MySQL', 'TailwindCSS'],
        portfolio: [
          'assets/photos/leadz1.png',
          'assets/photos/leadz2.png'
        ]
      },
      { 
        name: 'FoodMatch',
        image: 'assets/photos/portfolio-pack.png',
        description: 'Application de recommandation culinaire connectant restaurants et utilisateurs.',
        stack: ['Vue.js', 'Firebase', 'Bootstrap'],
        portfolio: [
          'assets/photos/foodmatch1.png',
          'assets/photos/foodmatch2.png',
          'assets/photos/foodmatch3.png'
        ]
      },
      { 
        name: 'Net Voyage',
        image: 'assets/photos/portfolio-pack.png',
        description: 'Site de réservation et gestion de voyages avec intégration de paiement.',
        stack: ['Angular', 'Spring Boot', 'PostgreSQL'],
        portfolio: [
          'assets/photos/netvoyage1.png',
          'assets/photos/netvoyage2.png'
        ]
      },
      { 
        name: 'Portfolio',
        image: 'assets/photos/portfolio-pack.png',
        description: 'Portfolio personnel interactif présentant mes projets et compétences.',
        stack: ['Angular', 'TypeScript', 'SCSS'],
        portfolio: [
          'assets/photos/portfolio1.png',
          'assets/photos/portfolio2.png',
          'assets/photos/portfolio3.png'
        ]
      },
      { 
        name: 'SkillTrack',
        image: 'assets/photos/portfolio-pack.png',
        description: 'Application de suivi des compétences et formations des collaborateurs.',
        stack: ['React', 'NestJS', 'MongoDB'],
        portfolio: [
          'assets/photos/skilltrack1.png',
          'assets/photos/skilltrack2.png'
        ]
      }
    ],
    'UI/UX Design & Branding': [
      { 
        name: 'UI Kit',
        image: 'assets/photos/uikit.png',
        description: 'UI Kit complet avec composants réutilisables et responsive design.',
        stack: ['Figma', 'Adobe XD'],
        portfolio: [
          'assets/photos/uikit1.png',
          'assets/photos/uikit2.png'
        ]
      },
      { 
        name: 'Branding Pack',
        image: 'assets/photos/branding.png',
        description: 'Identité visuelle et charte graphique pour une marque moderne.',
        stack: ['Illustrator', 'Photoshop'],
        portfolio: [
          'assets/photos/branding1.png',
          'assets/photos/branding2.png',
          'assets/photos/branding3.png'
        ]
      }
    ],
    'Cloud': [
      { 
        name: 'AWS Project',
        image: 'assets/photos/aws.png',
        description: 'Déploiement d’une infrastructure scalable et sécurisée sur AWS.',
        stack: ['AWS', 'Docker', 'Terraform'],
        portfolio: [
          'assets/photos/aws1.png',
          'assets/photos/aws2.png'
        ]
      },
      { 
        name: 'Azure Project',
        image: 'assets/photos/azure.png',
        description: 'Solution cloud intégrée pour la gestion des données et services.',
        stack: ['Azure', 'Kubernetes', 'CI/CD'],
        portfolio: [
          'assets/photos/azure1.png',
          'assets/photos/azure2.png'
        ]
      }
    ]
  };
activeImageIndex = 0;

  activeProject: Project = this.projects['Développement Web'][0];
activeImage = this.projects[this.activeCategory][0].portfolio[0];
currentImageIndex = 0;

setProject(project: Project) {
  this.activeProject = project;
  this.activeImageIndex = 0;
  this.activeImage = project.portfolio[0];
}
setCategory(category: Category) {
  this.activeCategory = category;
  this.activeProject = this.projects[category][0];
  this.currentImageIndex = 0;
  this.activeImage = this.activeProject.portfolio[0];
}

prevImage() {
  if (this.activeProject && this.activeProject.portfolio.length > 0) {
    this.activeImageIndex =
      (this.activeImageIndex - 1 + this.activeProject.portfolio.length) %
      this.activeProject.portfolio.length;
    this.activeImage = this.activeProject.portfolio[this.activeImageIndex];
  }
}

nextImage() {
  if (this.activeProject && this.activeProject.portfolio.length > 0) {
    this.activeImageIndex =
      (this.activeImageIndex + 1) % this.activeProject.portfolio.length;
    this.activeImage = this.activeProject.portfolio[this.activeImageIndex];
  }
}

  showDetails = false; // pour afficher/masquer les détails



toggleDetails() {
  this.showDetails = !this.showDetails;
}

lightboxImage: string | null = null;

openLightbox(img: string) {
  this.lightboxImage = img;
}

closeLightbox() {
  this.lightboxImage = null;
}

 @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    if (this.lightboxImage) {
      this.closeLightbox();
    }
  }
}

