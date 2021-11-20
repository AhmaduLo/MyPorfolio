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
    this.info_langage[0]={
     url:"https://img.icons8.com/ios/50/000000/html.png",
     name_langage: "Html",
     definiton:"Le JavaScript est un langage de programmation qui permet d’implémenter des mécanismes complexes sur une page web. C'est mon premier langage et celui avec lequel je suis le plus à laise, sa maitrise m'offre une liberte total dans la dynamisation de mes pages web.",
     
    }

    this.info_langage[1]={
      url:"https://img.icons8.com/ios/50/000000/css3.png",
      name_langage:"css",
      definiton:"Mon experience en tant que designer me permet de pousser le langage à son plein potentiel. J'utilise surtout le préprocesseur Sass.",
    }

    this.info_langage[2]={
      url:"https://img.icons8.com/ios/50/000000/javascript--v2.png>",
      name_langage:"Javascript",
      definiton:" Le JavaScript est un langage de programmation qui permet d’implémenter des mécanismes complexes sur une page web. C'est mon premier langage et celui avec lequel je suis le plus à laise, sa maitrise m'offre une liberte total dans la dynamisation de mes pages web.",
    }

    this.info_langage[3]={
      url:"https://img.icons8.com/ios/50/000000/java-coffee-cup-logo--v1.png",
      name_langage:"Java",
      definiton:" java",
    }

    this.info_langage[4]={
      url:"https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
      name_langage:"Bootstrap",
      definiton:" bootstrap",
    }

    this.info_langage[5]={
      url:"https://img.icons8.com/ios/50/000000/angularjs.png",
      name_langage:"Angular",
      definiton:" angular",
    }

    this.info_langage[6]={
      url:"https://img.icons8.com/ios/50/000000/mysql.png",
      name_langage:"MySQL",
      definiton:"mysql",
    }

    this.info_langage[7]={
      url:"https://cdn-icons-png.flaticon.com/512/1933/1933855.png",
      name_langage:"Scrum",
      definiton:" agile",
    }

    this.info_langage[8]={
      url:"https://img.icons8.com/ios/50/000000/wordpress.png",
      name_langage:"wordpress",
      definiton:" wordpress",
    }

    // this.info_langage[9]={
    //   url:"https://cdn-icons-png.flaticon.com/512/168/168810.png",
    //   name_langage:"Git",
    //   definiton:" wordpress",
    // }


  }

  look_langage(i:any){
    this.langage = this.info_langage[i];
   this.block_definition =! this.block_definition;
    
  }

  

}
