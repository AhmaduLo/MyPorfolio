import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
site_infos:any[]= [];
  constructor() { }

  ngOnInit(): void {

   this.site_infos[0] = {
      lien:"https://bambagaye-shop.netlify.app/",
      url1: "../../assets/Ecommerce - Google Chrome 05_12_2021 14_13_50.png",
      nom_site:"Shop"
    };

    this.site_infos[1] = {
      lien:"https://determined-wescoff-a1ad3d.netlify.app/",
      url1: "../../assets/underarmour - Google Chrome 05_12_2021 15_33_13.png",
      nom_site:"Underarmor"
    };

    this.site_infos[2] = {
      lien:"https://musing-engelbart-0965b4.netlify.app/",
      url1: "../../assets/Document - Google Chrome 05_12_2021 16_45_37.png",
      nom_site:"Eye"
    };
    this.site_infos[3] = {
      lien:"https://intagration-site.netlify.app/",
      url1: "../../assets/Document - Google Chrome 03_09_2022 17_46_46.png",
      nom_site:"Integration site"
    };







  }

 

}
