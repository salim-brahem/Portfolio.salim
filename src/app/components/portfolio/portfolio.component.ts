import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

type Category = 'Développement Web' | 'UI/UX Design & Branding' | 'Cloud';

interface Project {
  name: string;
  image: string;         // image principale
  file?: string;         // chemin d’un PDF (optionnel)
  description?: string;  // description du projet
  stack?: string[];      // technologies utilisées
  portfolio?: string[];  // galerie d’images
  tags?: string[];       // liste de tags (ex: Angular, Node.js, Cloud, UI/UX)
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'] // ✅ corrigé (styleUrls)
})
export class PortfolioComponent {
  categories: Category[] = ['Développement Web', 'UI/UX Design & Branding', 'Cloud'];
  activeCategory: Category = 'Développement Web';

  projects: Record<Category, Project[]> = {
    'Développement Web': [
  { 
    name: 'Gestion des incidents',
    image: 'assets/photos/incidents.webp',
       description: `Application de gestion d’incidents pour le département Qualité, intégrant une authentification sécurisée (JWT, OAuth2) avec gestion des sessions et connexion RDS/Active Directory. 
    Elle inclut une administration avancée des utilisateurs et rôles, des habilitations dynamiques, ainsi qu’un module complet de gestion des incidents (déclaration, catégorisation, pièces jointes, workflow automatisé, messagerie interne collaborative, notifications en temps réel). 
    Des tableaux de bord interactifs permettent le suivi des KPI, avec un reporting exportable (PDF, Excel, CSV) et des alertes intelligentes assurant traçabilité, réactivité et efficacité opérationnelle.`,
    stack: ['Angular', 'PrimeNG', '.NET', 'PostgreSQL', 'Figma'],
    portfolio: [
      'assets/incidents/Incidents-1.jpeg',
      'assets/incidents/Incidents-2.jpeg',
      'assets/incidents/Incidents-3.jpeg',
      'assets/incidents/Incidents-4.jpeg',
      'assets/incidents/Incidents-5.jpeg',
      'assets/incidents/Incidents-6.jpeg',
      'assets/incidents/Incidents-7.jpeg',
      'assets/incidents/Incidents-8.jpeg'
    ]
  },
  { 
    name: 'LeadZ',
    image: 'assets/photos/Leadz.webp',
       description: `Solution CRM permettant de centraliser les données clients et prospects pour améliorer la gestion du cycle de vente. 
    L’outil aide les équipes commerciales à suivre efficacement les contacts et opportunités, gérer les documents liés, et visualiser la performance via un tableau de bord en temps réel. 
    L’objectif principal est d’optimiser la productivité et la prise de décision grâce à une gestion simplifiée de la relation client.`,
    stack: ['Angular', 'NestJS', 'MySQL', 'Figma'],

    portfolio: [
      'assets/leadz/Leadz-1.jpg',
      'assets/leadz/Leadz-2.jpg',
      'assets/leadz/Leadz-3.png'
    ]
  },
  { 
    name: 'FoodMatch',
    image: 'assets/photos/foodmatch.webp',
        description: `Plateforme web qui centralise la mise en avant des restaurants et facilite l’interaction avec les utilisateurs grâce à un système d’avis et de réservation. 
    Les clients peuvent explorer des restaurants, donner leur avis et réserver en ligne. 
    Les restaurateurs disposent d’un espace professionnel pour gérer leurs fiches, réservations et visibilité, tandis qu’un administrateur supervise la plateforme (modération, qualité, gestion des rôles). 
    L’application intègre un module de notation/avis, une gestion complète des réservations et une interface d’administration sécurisée et évolutive.`,
    stack: ['Angular', 'Spring', 'MySQL', 'Figma'],
    portfolio: [
      'assets/foodmatch/foodmatch-1.png',
      'assets/foodmatch/foodmatch-2.png',
      'assets/foodmatch/foodmatch-3.jpeg',
      'assets/foodmatch/foodmatch-4.png',
      'assets/foodmatch/foodmatch-5.png',
      'assets/foodmatch/foodmatch-6.png',
      'assets/foodmatch/foodmatch-7.png'
    ]
  },
  { 
    name: 'Net Voyage',
    image: 'assets/photos/netvoyage.webp',
    description: `Site web de réservation et gestion de voyages intégrant un système de paiement sécurisé. 
    Il permet aux utilisateurs de consulter les offres, réserver en ligne, et gérer leurs voyages. 
    Côté administrateur, la solution propose un suivi complet des réservations et clients.`,
    stack: ['Angular', 'Spring Boot', 'PostgreSQL'],
    portfolio: [
      'assets/netvoyage/netvoyage1.png',
      'assets/netvoyage/netvoyage2.png'
    ]
  },
  { 
    name: 'Portfolio',
    image: 'assets/photos/portfolio-pack.png',
     description: `Portfolio en ligne responsive permettant de présenter mes projets et compétences par catégories, 
    avec une navigation fluide, des visuels interactifs et une mise en avant claire des réalisations.`,
    stack: ['Angular', 'Figma'],
    portfolio: [
      'assets/portfolio/portfolio-1.jpeg',
      'assets/portfolio/portfolio-2.jpeg',
      'assets/portfolio/portfolio-3.jpeg'
    ]
  },
  { 
    name: 'SkillTrack',
    image: 'assets/photos/skilltrack.webp',
      description: `Application développée au sein de Capgemini pour digitaliser le processus de gestion des compétences. 
    Les employés peuvent évaluer leurs compétences via différents modules, et les administrateurs disposent d’un espace dédié pour gérer utilisateurs, progression et données. 
    Le système intègre une authentification sécurisée par token et une gestion complète des profils et droits d’accès, garantissant fiabilité et adaptation aux besoins de l’entreprise.`,
    stack: ['Angular', 'Spring', 'MySQL'],
    portfolio: [
      'assets/skilltrack/skilltrack-1.png',
      'assets/skilltrack/skilltrack-2.jpg',
      'assets/skilltrack/skilltrack-3.jpg',
      'assets/skilltrack/skilltrack-4.png'
    ]
  }
]
,

   
    'UI/UX Design & Branding': [
      { name: 'Brand Guidelines', file: 'assets/docs/pizza.pdf', image: 'assets/photos/pizzaprev.jpg', tags: ['BoldBrands', 'Branding', 'Logo', 'Charte Graphique', 'AI', 'PS'] },
      { name: 'Costo Doro', image: 'assets/photos/costoprev.png', tags: ['BoldBrands', 'Branding', 'Logo', 'Charte Graphique', 'AI', 'PS'] },
      { name: 'Hôtel le passage', image: 'assets/photos/charte.png', tags: ['Branding', 'Logo', 'Charte Graphique', 'AI', 'PS'] },
      { name: 'Site Hôtel', image: 'assets/photos/hotel le passage.png', tags: ['UI/UX', 'Figma', 'Prototype'] },
      { name: 'Site Agriculture', image: 'assets/photos/agriculture.png', tags: ['UI/UX', 'Figma', 'Prototype'] },
      { name: 'Tournoi de Padel', image: 'assets/photos/padel.webp', tags: ['Community Management', 'Spofun', 'Design'] },
      { name: 'Sensibilisation Cancer du Sein', image: 'assets/photos/cancer.jpg', tags: ['Community Management', 'Design'] },
      { name: 'Journée des Martyrs', image: 'assets/photos/martyres.jpg', tags: ['Community Management', 'Design'] },
      { name: 'Fête de l’Indépendance', image: 'assets/photos/indépendance.jpg', tags: ['Community Management', 'Design'] },
      { name: 'Journée de la Femme', image: 'assets/photos/women.jpg', tags: ['Community Management', 'Design'] },
      { name: 'Ramadan Kareem', image: 'assets/photos/ramadan.png', tags: ['Community Management', 'Design'] },
      { name: 'E-commerce', image: 'assets/photos/ligne.jpg', tags: ['Community Management', 'Design'] },
      { name: 'Marketing Digital', image: 'assets/photos/digital.jpg', tags: ['Community Management', 'Design'] },
      { name: 'Chatbot', image: 'assets/photos/chat.jpg', tags: ['Community Management', 'Design'] },
      { name: 'L’IA en Génétique', image: 'assets/photos/power.jpeg', tags: ['Community Management', 'Design'] },
      { name: 'Blockchain', image: 'assets/photos/blockchain.png', tags: ['Community Management', 'Design'] }
    ],
    'Cloud': [
      {
        name: 'AWS Project',
        image: 'assets/photos/cloud.png',
        description: 'Conception et déploiement d’une architecture cloud sur AWS pour une application web moderne, intégrant une séparation des couches (web, applicative et base de données), avec haute disponibilité via multi-AZ, scalabilité grâce à EC2 Auto Scaling, sécurité renforcée par l’isolation des subnets publics/privés, et optimisation des performances et coûts grâce à Amazon RDS et Amazon S3.',

      },

    ]
  };

  activeImageIndex = 0;
  activeProject: Project = this.projects['Développement Web'][0];
  activeImage = this.activeProject.portfolio?.[0] || ''; // ✅ sécurisé
  currentImageIndex = 0;

  setProject(project: Project) {
    this.activeProject = project;
    this.activeImageIndex = 0;
    this.activeImage = project.portfolio?.[0] || ''; // ✅ sécurisé
  }

  setCategory(category: Category) {
    this.activeCategory = category;
    this.activeProject = this.projects[category][0];
    this.currentImageIndex = 0;
    this.activeImage = this.activeProject.portfolio?.[0] || ''; // ✅ sécurisé
  }

  prevImage() {
    if (this.activeProject?.portfolio?.length) {
      this.activeImageIndex =
        (this.activeImageIndex - 1 + this.activeProject.portfolio.length) %
        this.activeProject.portfolio.length;
      this.activeImage = this.activeProject.portfolio[this.activeImageIndex];
    }
  }

  nextImage() {
    if (this.activeProject?.portfolio?.length) {
      this.activeImageIndex =
        (this.activeImageIndex + 1) % this.activeProject.portfolio.length;
      this.activeImage = this.activeProject.portfolio[this.activeImageIndex];
    }
  }

  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  lightboxImage: string | null = null;
  lightboxPdf: string | null = null;

  openLightbox(img: string) {
    this.lightboxImage = img;
    this.lightboxPdf = null;
  }
  openPdfLightbox(pdfUrl: string) {
    this.lightboxPdf = pdfUrl;
    this.lightboxImage = null;
  }

  closeLightbox() {
    this.lightboxImage = null;
    this.lightboxPdf = null;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    if (this.lightboxImage || this.lightboxPdf) {
      this.closeLightbox();
    }
  }
}
