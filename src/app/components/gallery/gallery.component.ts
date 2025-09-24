import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
   animations: [
    trigger('fadeIn', [
      // quand le composant apparait
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      // quand currentIndex change (grâce à [@fadeIn]="currentIndex")
      transition(':increment, :decrement', [
        style({ opacity: 0 }),
        animate('400ms ease-out', style({ opacity: 1 })),
      ])
    ])
  ]
})
export class GalleryComponent {
   photos = [
    {
      url: 'assets/galerie/Gitex.jpeg',
      alt: 'Gitex AFrica 2025',
      title: '#Événement',
      date: '14-16 Avril 2025, Marocco',
description: 'J’ai eu l’honneur de participer au GITEX en tant que Président d’Optima Junior Entreprise, où j’ai représenté notre structure ainsi que le drapeau tunisien sur la scène internationale. Cette expérience a été l’occasion de mettre en avant les projets et les compétences de notre junior entreprise, de promouvoir l’excellence de la jeunesse tunisienne, mais aussi de prospecter de nouveaux partenaires et d’échanger avec des acteurs majeurs de l’innovation et de la technologie.'
    },
    {
      url: 'assets/galerie/podcast.jpg',
      alt: 'Podcast avec une experte du digital',
      title: '#Podacst',
      date: '8 juin 2024, Sarah Lamine',
description: 'Un passage radio enrichissant sur Radio Jeune Tunisie, où nous avons échangé autour de l’entrepreneuriat, de l’impact de la vie associative et du rôle central des Junior Entreprises dans l’écosystème entrepreneurial tunisien. Cet échange inspirant, en présence de Mme Douja Ben Mahmoud Gharbi, CEO de Redstart Tunisie, et de l’experte Mme Ahd Jamaoui Ben Khlifa, a permis de partager des idées, des expériences et des perspectives nouvelles pour valoriser l’engagement de la jeunesse et renforcer son rôle dans la dynamique entrepreneuriale nationale.'
    },
    {
      url: 'assets/galerie/radio.jpeg',
      alt: 'Passage Radio Jeune Tunisie',
      title: '#Radio',
      date: '26 décembre 2024',
description: 'Un passage radio enrichissant sur Radio Jeune Tunisie, où nous avons échangé autour de l’entrepreneuriat, de l’impact de la vie associative et du rôle central des Junior Entreprises dans l’écosystème entrepreneurial tunisien. Cet échange inspirant, en présence de Mme Douja Ben Mahmoud Gharbi, CEO de Redstart Tunisie, et de l’experte Mme Ahd Jamaoui Ben Khlifa, a permis de partager des idées, des expériences et des perspectives nouvelles pour valoriser l’engagement de la jeunesse et renforcer son rôle dans la dynamique entrepreneuriale nationale.'
    }

    ,
    {
      url: 'assets/galerie/ESG.jpeg',
      alt: 'African ESG Summit 2024',
      title: '#Événement',
      date: '26 Novembre 2024',
description: 'J’ai eu l’opportunité de participer à l’African ESG Summit, un événement majeur réunissant des experts, décideurs et acteurs engagés autour des thématiques Environnementales, Sociales et de Gouvernance (ESG). Cette expérience m’a permis d’assister à des conférences et panels de haut niveau, d’échanger avec des professionnels du secteur et de renforcer ma compréhension des enjeux liés au développement durable, à la responsabilité sociétale et à la gouvernance d’entreprise en Afrique.'
    }
     ,
    {
  url: 'assets/galerie/odd17.png',
  alt: 'Programme d’échange ODD17 en Turquie',
  title: '#Programme International',
date: '7 Juillet – 25 Août 2024, Eskişehir, Turquie',
  description: 'J’ai pris part à un programme d’échange international à Eskişehir, Turquie, axé sur l’Objectif de Développement Durable n°17 (Partenariats pour la réalisation des objectifs). Cette expérience m’a permis de contribuer à des initiatives de coopération inter-organisationnelle, de renforcer mes compétences en prospection et en collaboration internationale, et de mieux comprendre le rôle des partenariats stratégiques dans le développement durable.'
}
  ];

  currentIndex = 0;
  lightboxImage: string | null = null;

  get visiblePhotos() {
    return [
      this.photos[this.currentIndex],
      this.photos[(this.currentIndex + 1) % this.photos.length],
    ];
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.photos.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.photos.length) % this.photos.length;
  }

  openLightbox(url: string) {
    this.lightboxImage = url;
  }

  closeLightbox(event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.lightboxImage = null;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscKey(event: KeyboardEvent) {
    this.closeLightbox();
  }
}
