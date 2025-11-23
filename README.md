# Portfolio Personnel - Bilal Mancer

*[English version below](#personal-portfolio---bilal-mancer-en)*

Bienvenue sur le dépôt de mon portfolio personnel. Ce projet est une application web moderne et réactive conçue pour présenter mes compétences, mes projets et mon parcours professionnel.

## 🚀 Technologies Utilisées

Ce projet est construit avec une stack technique robuste et moderne :

*   **Framework Frontend** : [Angular 18](https://angular.io/) (Utilisation des Standalone Components)
*   **Styling** : [Tailwind CSS](https://tailwindcss.com/) pour un design rapide et responsive.
*   **Animations** : [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) avec le plugin `ScrollTrigger` pour des animations fluides au défilement.
*   **CMS Headless** : [Sanity.io](https://www.sanity.io/) pour la gestion dynamique du contenu (Projets, Certifications).
*   **Internationalisation** : `@ngx-translate` pour le support multilingue (Français / Anglais).
*   **Icônes** : FontAwesome.

## ✨ Fonctionnalités Principales

*   **Design Responsive** : Adapté à tous les écrans (Mobile, Tablette, Desktop).
*   **Animations Avancées** : Animations d'entrée et de scroll gérées par GSAP pour une expérience utilisateur immersive.
*   **Contenu Dynamique** : Les projets et certifications sont récupérés depuis Sanity CMS, permettant une mise à jour facile sans toucher au code.
*   **Multilingue** : Changement de langue dynamique (FR/EN).
*   **Mode Sombre** : Interface élégante avec des tons sombres (Dark Theme).

## 🛠️ Prérequis

Avant de commencer, assurez-vous d'avoir installé :

*   [Node.js](https://nodejs.org/) (Version LTS recommandée)
*   [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

## 📥 Installation

1.  **Cloner le dépôt** :
    ```bash
    git clone https://github.com/abdbilal146/my_portfolio.git
    cd my_portfolio
    ```

2.  **Installer les dépendances** :
    ```bash
    npm install
    ```

## ▶️ Lancement en Développement

Pour lancer le serveur de développement :

```bash
ng serve
```

Ouvrez votre navigateur à l'adresse `http://localhost:4200/`. L'application se rechargera automatiquement si vous modifiez les fichiers sources.

## 📦 Build pour la Production

Pour construire le projet pour la production (fichiers optimisés dans le dossier `dist/`) :

```bash
ng build
```

## 📂 Structure du Projet

Voici un aperçu rapide de la structure des dossiers importants :

*   `src/app/components` : Contient les composants de l'interface (Header, HomePage, Footer, etc.).
*   `src/app/models` : Interfaces TypeScript pour le typage des données (Project, Social, etc.).
*   `src/app/services` : Services pour la logique métier et les appels API (SanityCmsService, CanonicalService, etc.).
*   `src/assets/i18n` : Fichiers JSON pour les traductions (fr.json, en.json).
*   `src/styles.css` : Styles globaux et configuration Tailwind.

## 🌐 Intégration Sanity CMS

Le projet est connecté à un dataset Sanity public (ou configuré via le service).
Le service `SanityCmsService` (`src/app/services/sanity-cms.service.ts`) gère les requêtes GROQ pour récupérer :
*   Les projets de la page d'accueil.
*   Les certifications.
*   Tous les projets détaillés.

---

<a name="personal-portfolio---bilal-mancer-en"></a>
# Personal Portfolio - Bilal Mancer

Welcome to my personal portfolio repository. This project is a modern and responsive web application designed to showcase my skills, projects, and professional journey.

## 🚀 Technologies Used

This project is built with a robust and modern tech stack:

*   **Frontend Framework**: [Angular 18](https://angular.io/) (Using Standalone Components)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) for rapid and responsive design.
*   **Animations**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) with the `ScrollTrigger` plugin for smooth scroll animations.
*   **Headless CMS**: [Sanity.io](https://www.sanity.io/) for dynamic content management (Projects, Certifications).
*   **Internationalization**: `@ngx-translate` for multilingual support (French / English).
*   **Icons**: FontAwesome.

## ✨ Key Features

*   **Responsive Design**: Adapted for all screens (Mobile, Tablet, Desktop).
*   **Advanced Animations**: Entry and scroll animations managed by GSAP for an immersive user experience.
*   **Dynamic Content**: Projects and certifications are fetched from Sanity CMS, allowing easy updates without touching the code.
*   **Multilingual**: Dynamic language switching (FR/EN).
*   **Dark Mode**: Elegant interface with dark tones (Dark Theme).

## 🛠️ Prerequisites

Before starting, make sure you have installed:

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

## 📥 Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/abdbilal146/my_portfolio.git
    cd my_portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## ▶️ Development Server

To start the development server:

```bash
ng serve
```

Open your browser at `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 📦 Production Build

To build the project for production (optimized files in the `dist/` directory):

```bash
ng build
```

## 📂 Project Structure

Here is a quick overview of the important folder structure:

*   `src/app/components`: Contains UI components (Header, HomePage, Footer, etc.).
*   `src/app/models`: TypeScript interfaces for data typing (Project, Social, etc.).
*   `src/app/services`: Services for business logic and API calls (SanityCmsService, CanonicalService, etc.).
*   `src/assets/i18n`: JSON files for translations (fr.json, en.json).
*   `src/styles.css`: Global styles and Tailwind configuration.

## 🌐 Sanity CMS Integration

The project is connected to a public Sanity dataset (or configured via the service).
The `SanityCmsService` (`src/app/services/sanity-cms.service.ts`) handles GROQ queries to fetch:
*   Home page projects.
*   Certifications.
*   All detailed projects.

---
*Developed by Bilal Mancer.*
