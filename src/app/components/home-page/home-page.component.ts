import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Project } from '../models/project';
import { Social } from '../models/social';
import { HttpClient, } from '@angular/common/http';
import { SkillsCategory } from '../models/skills_category';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  public imageLink = 'https://storage.cloud.google.com/mancerbilal/personnelle%20/my_photo.png';
  public email:string = 'm.mancerabdelfetah@gmail.com';
  public cvFilePath = 'Angular-JS.jpg';
  public skillsCategory: SkillsCategory[]= [
    {
      name:'FrontEnd',
      skills:[
        {
          name:'HTML5',
          level:'Avancé',
        },
        {
          name:'CSS',
          level:'Avancé'
        },
        {
          name:'JavaScript',
          level:'Avancé'
        },
        {
          name:'TypeScript',
          level:'Avancé'
        },
        {
          name:'Angular',
          level:'Intermédiaire'
        }
      ]
    },
    {
      name:'Backend',
      skills:[
        {
          name:'SpringBoot',
          level:'Intermédiaire'
        },
      ]
    },
    {
      name:'Automatisation',
      skills:[
        {
          name:'Playwright',
          level:'Avancé'
        },
        {
          name:'Sélénium',
          level:'Avancé'
        },
        {
          name:'Cypress',
          level:'Avancé'
        },
      ]
    },
    {
      name: 'Outils & Bases de Données',
      skills: [
        { name: 'Git / GitHub', level: 'Intermédiaire' },
        { name: 'Docker', level: 'Débutant' },
        { name: 'SQL (PostgreSQL, MySQL)', level: 'Intermédiaire' },
        { name: 'AWS', level: 'Débutant' }
      ]
    },
    {
      name: 'Langages de Programmation',
      skills: [
        { name: 'Java', level: 'Avancé' },
        { name: 'C#', level: 'Avancé' },
        { name: 'JavaScript', level: 'Avancé' },
        { name: 'TypeScript', level: 'Avancé' },
        { name: 'Python', level: 'Intermédiaire' }
      ]
    }
  ];
  
  public socialLink : Array<Social> = [
    {
      name:'linkedin',
      link:'https://www.linkedin.com/in/abd-elfetah-mancer-b73491271/'
    },
    {
      name:'github',
      link:'https://github.com/abdbilal146'
    },
    {
      name:'tiktok',
      link:'https://www.tiktok.com/@bilal.mancer.tech'
    },
    {
      name:'youtube',
      link:'https://www.youtube.com/channel/UC03czcR3O7WfyNGEZdY-4YQ'
    }
  ]

  public projects:Array<Project> = [
    {
      id:1,
      name:'Automatisation des tests avec Playwright & typeScript',
      description:"Projet d'automatisation des tests E2E pour mon portfolio , utilisant Playwright comme outil moderne et performant , avec TypeScript ",
      imageLink:'assets/0_5dVwWHWX-Nz96rzY.png',
      link:'https://github.com/abdbilal146/projet_playwright.git'
    },
    {
      id:2,
      name:'Mon Portfolio ( Angular TypeScript & Tailwind CSS',
      description:'projet de développment de mon portfolio , utilisant Angular TS ,Tailwind Css frameworks pour le front',
      imageLink:'assets/Angular-JS.jpg',
      link:''
    },
    {
      id:3,
      name:'Rest API (Spring Boot)',
      description:'Brève description du projet, technologies utilisées (React, Node.js, etc.). Mettez en avant les défis et les résultats',
      imageLink:'assets/spring-boot-master-class.png',
      link:''
    }

  ]

  constructor(private title:Title, private meta:Meta, private http: HttpClient){}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle('Acceuil');
    this.meta.updateTag({name:'description', content:`Bienvenue sur le portfolio de Bilal Mancer, ingénieur en informatique et passionné par le développement de logiciels. Fort d’une expertise en conception, développement et optimisation de solutions logicielles, je mets mes compétences au service de projets innovants et ambitieux. Avec une solide formation en ingénierie informatique et une expérience pratique dans divers domaines technologiques, je me spécialise dans la création d'applications sur-mesure, l’architecture logicielle, ainsi que le développement de solutions cloud.
    Développement logiciel : Expertise en programmation Java, Python, C++, JavaScript, HTML,CSS, SQL
    Gestion de projet : Conception et gestion de projets agiles avec des outils comme Jira, Trello, et Git.
    Développement Web et Mobile : Création d'applications web réactives et de solutions mobiles intuitives.
    Architecture logicielle : Conception d'architectures logicielles robustes et évolutives.
    Cloud computing : Maîtrise des services cloud AWS pour des déploiements à grande échelle.
    Bases de données : Expertise dans la gestion et l'optimisation des bases de données relationnelles et NoSQL.
    Je suis également passionné par l'innovation technologique et le développement d'applications qui répondent aux besoins spécifiques des utilisateurs, tout en optimisant la performance et la sécurité. Grâce à une approche orientée résultats et à une veille constante sur les nouvelles technologies, je suis en mesure de proposer des solutions efficaces et pérennes.`});
    this.meta.addTags([
      {name:'keywords', content:'portfolio, web developer, angular, frontend'},
      {name:'author',content:'Bilal Mancer'},
      {property:'og:url', content:'https://mancerbilal.netlify.app/'}, 
      {name:'google-site-verification',content:'mPmHyWfMqcaDuddfT_Kb9PHF8jF0eSM4wDUB2MAsGs0'}
    ])
    
  }

  downloadAssetFile(filePath: string, fileName: string): void {
    const assetUrl = `/assets/${filePath}`;
    
    this.http.get(assetUrl, { responseType: 'blob' }).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    });
  }


}
