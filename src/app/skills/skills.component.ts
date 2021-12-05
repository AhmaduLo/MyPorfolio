import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
 info_langage :any[] =[];
 langage:any;
  style_btn_logo:boolean=false;
  block_definition:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.info_langage= [
    //   {
    //  url:"https://img.icons8.com/ios/50/000000/html.png",
    //  name_langage: "Html",
    //  definiton:"",
     
    // },
    {
      url:"https://img.icons8.com/ios/50/000000/css3.png",
      name_langage:"Html/css",
      definiton:"Pendant mes premières pas dans la programmation j'utilisais ces deux langages pour réaliser des sites statiques, mon expérience en tant que designer m'a permit de pousser le css à son plein potentiel. J'utilise surtout le préprocesseur Sass.",
    },
    {
      url:"https://img.icons8.com/ios/50/000000/javascript--v2.png>",
      name_langage:"Javascript",
      definiton:" Le JavaScript est un langage de programmation qui permet d’implémenter des mécanismes complexes sur une page web. C'est mon premier langage et celui avec lequel je suis le plus à laise, sa maîtrise m'offre une liberté total dans la dynamisation de mes pages web.",
    },
    {
      url:"https://img.icons8.com/ios/50/000000/java-coffee-cup-logo--v1.png",
      name_langage:"Java",
      definiton:"Le Java est un langage de programmation orienté objet que j'ai appris durant ma formation à Simplon. C'est mon deuxième langage et celui avec lequel je faisais les parties Back-End dans mes projets. ",
    },
    {
      url:"https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
      name_langage:"Bootstrap",
      definiton:" Bootstrap est une collection d'outils utiles à la création du design (graphisme, animation et interactions avec la page dans le navigateur, etc.) de sites et d'applications web. C'est un ensemble qui contient des codes HTML et CSS, des formulaires, boutons, outils de navigation et autres éléments interactifs, ainsi que des extensions JavaScript en option. C'est l'un des premières framework que j'ai utilisé pour le design de mes projets.",
    },
    {
      url:"https://img.icons8.com/ios/50/000000/angularjs.png",
      name_langage:"Angular",
      definiton:"Angular est un Framework que j'ai utilisé pour réaliser des projets durant ma formation tel que : Shambles , Shop et mon portfolio.",
    },
    {
      url:"https://img.icons8.com/ios/50/000000/mysql.png",
      name_langage:"MySQL",
      definiton:"MySQL est un System de Gestion de Base de Donnée Relationnelle (SGDBR) que j'ai utilisé durant ma formation. ",
    },
    {
      url:"https://cdn-icons-png.flaticon.com/512/1933/1933855.png",
      name_langage:"Scrum",
      definiton:" La méthode Agile est une méthodologie avec laquelle on a travaillé lors des projets réalisés en groupe.",
    },
    {
      url:"https://img.icons8.com/ios/50/000000/wordpress.png",
      name_langage:"wordpress",
      definiton:" Wordpress est CMS qui m'a permis de réaliser un site de présentation pour mon passage du titre Pro.",
    },
    ]
  }

  

  look_langage(i:any){
    this.langage = this.info_langage[i];
   this.block_definition =! this.block_definition;
    
  }

  

}
