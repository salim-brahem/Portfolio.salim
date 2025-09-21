import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
 experiences = [
    {
      title: 'Président | Optima Junior Entreprise',
      date: 'Août 2024 - Juillet 2025',
      location: 'Tunis, Tunisie',
      description: `Gestion globale de l’association : supervision des processus internes, coordination des parties prenantes, représentation auprès des institutions et partenaires, garantie de la conformité juridique et financière (100 %), développement stratégique des activités (+14 % CA, +13,3 % nombre de projets), avec un taux de maîtrise global de 97,6 %.` ,
      Extra :'Rewards: 3 labels & 1 Prix d’excellence'
    },
    {
      title: 'Responsable Marketing |  ',
      date: 'Août 2023 - Juillet 2024',
      location: 'Tunis, Tunisie',
      description: `Stratégie & coordination : pilotage des campagnes, analyse des résultats (ROI marketing 482,5 %).
Création & design : conception de maquettes UI/UX et supports visuels.
Gestion digitale & branding : gestion des réseaux sociaux (+20 % engagement), branding, veille digitale, taux de rebond (-50,5 %).
`,
      Extra :'Rewards: Label Marketing'

    },
    {
      title: 'Stagiaire - Développeur Full Stack | Société Tunisienne de Banque ( STB )',
      date: 'Août 2024 - Juillet 2025',
      location: 'Tunis, Tunisie',
      description: `Réalisation d’une plateforme interne de gestion des incidents : automatisation complète du processus manuel à 100 %.`,
      Extra :'Technologies: Angular (front-end), .NET (back-end), PostgreSQL (base de données)'

    },
    {
      title: 'Freelance - UI/UX Designer & Branding | BoldBrands',
      date: 'Mai 2024 - Juin 2024',
      location: 'Tunis, Tunisie',
      description: `Conception UI/UX : réalisation de maquettes ergonomiques et centrées utilisateur.
Gestion client international : suivi du branding pour un client basé aux Émirats Arabes Unis.`
    },
    {
      title: 'Stagiaire - Développeur Full Stack  | Capgemini',
      date: 'Juillet 2023 - Août 2023',
      location: 'Tunis, Tunisie',
      description: `Digitalisation du processus de gestion des compétences et automatisation du suivi des profils, simplification de l’évaluation et optimisation du développement des talents.
`,
      Extra :'Technologies: Angular (front-end), Spring (back-end), MySQL (base de données)'

    },
    {
      title: 'Stagiaire - UI/UX Designer | Spofun',
      date: 'Juillet 2023 - Août 2023',
      location: 'Tunis, Tunisie',
      description: `Conception de prototypes UI/UX et réalisation des maquettes interactives et community management.`
    }
  ];
}
