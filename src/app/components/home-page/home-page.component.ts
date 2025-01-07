import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private title:Title, private meta:Meta){}


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
}
