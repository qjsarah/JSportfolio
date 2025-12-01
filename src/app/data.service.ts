import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getSkills(){
    return[
      { name: 'HTML', percentage: 75, imgpath: 'public/assets/images/tech-logo/html.png'},
      { name: 'CSS', percentage: 75, imgpath: 'public/assets/images/tech-logo/css.png'},
      { name: 'JavaScript', percentage: 60, imgpath: 'public/assets/images/tech-logo/javascript.png'},
      { name: 'AngularJS', percentage: 65,  imgpath: 'public/assets/images/tech-logo/angular.png'},
      { name: 'VueJS', percentage: 60,  imgpath: 'public/assets/images/tech-logo/vue.png'},
      { name: 'NodeJS', percentage: 60, imgpath: 'public/assets/images/tech-logo/node.png'},
      { name: 'ExpressJS', percentage: 55,  imgpath: 'public/assets/images/tech-logo/express.png'},
      { name: 'WordPress', percentage: 70,  imgpath: 'public/assets/images/tech-logo/wordpress.png'},
      { name: 'Python', percentage: 40,  imgpath: 'public/assets/images/tech-logo/python.png'},
      { name: 'Java', percentage: 45,  imgpath: 'public/assets/images/tech-logo/java.png'},
      { name: 'PHP', percentage: 55,  imgpath: 'public/assets/images/tech-logo/php.png'},
      { name: 'MongoDB', percentage: 55,  imgpath: 'public/assets/images/tech-logo/mongodb.png'},
      { name: 'Firebase', percentage: 35,  imgpath: 'public/assets/images/tech-logo/firebase.png'},
      { name: 'MySQL', percentage: 60,  imgpath: 'public/assets/images/tech-logo/mysql.png'},
      { name: 'Flutter', percentage: 40,  imgpath: 'public/assets/images/tech-logo/flutter.png'},
      { name: 'Figma', percentage: 65,  imgpath: 'public/assets/images/tech-logo/figma.png'},
    ]
  }
  getTestimonials(){
    return[
      {text: '"Always look forward to do projects with them! Her friendly approach makes every project better."',
      author: '- Aiko Ocampo'},
      {text: '"Out of all of the people I know, June is the best standard of what I look for a leader. She is really easy to work with, and guides you with tasks. She really puts her dedication and effort on every task that she encounters."',
      author: '- Jose Reyes'},
      {text: "\"With all their skills and passion it made us work even more diligently and more efficiently with the help of her guide and fast critical thinking skills whenever a problem occur in the project.\"",
      author: '- Mark Quiambao'},
    ] 
  }

  getTopWorks(){
    return[
      {
        imgpath: 'public/assets/images/Projects/WEB/starseed-landing.png',
        title: 'Starseed Landing Page',
        link: 'https://starseedpieces-landing.netlify.app/'
      },
      {
          imgpath: 'public/assets/images/Projects/WEB/thebookshelf.png',
          title: 'The Bookshelf Website',
          link: 'https://thebookshelfbooks.netlify.app/'
      },
      {
          imgpath: 'public/assets/images/Projects/Graphics/cafewhiskers-logo.png',
          title: 'Cafe Whiskers Logo',
          link: 'https://drive.google.com/file/d/1pmUnaYtrFNWWJ6mtnTGWDdgo8ADMr5qB/view'
      }
    ]
  }

  getAllWorks(){
    return [
      {
        title: 'Web Development',
        id: 'web', 
        imgpath: 'public/assets/images/folder-template.png',
        modalid: 'web-modal'
      },
      {
        title: 'Graphic Design',
        id: 'graphic',
        imgpath: 'public/assets/images/folder-template.png',
        modalid: 'graphic-modal'
      },
      {
        title: 'Illustrations',
        id: 'illustration',
        imgpath: 'public/assets/images/folder-template.png',
        modalid: 'illustration-modal'
      },
    ]
  }

  getWebWorks(){
    return [
      {
        name: 'PWD Welfare Soceity Inc. 2.0',
        imgpath: 'public/assets/images/Projects/WEB/pwsi.png',
        link: 'https://pwsi.netlify.app/',
        description: 'A website for PWSI Community that advocates the rights of PWDs (2025). I did the backend, connecting it to frontend, and website deployment. Although the deployed website is only for the user role. Built using MEAN stack. Backend is deployed on render.',
      },
      {
        name: 'Suburbia North Subdivision',
        imgpath: 'public/assets/images/Projects/WEB/suburbia.png',
        link: 'https://suburbianorth.website/',
        description: 'A website for Suburbia North Subdivision, a subdivision located in San Fernando Pampanga. Built using WordPress, with Search Engine Optimization, and tracked using Google Analytics. I contributed with the design, optimizing the website and its blogs for search engines, and writing website content.',
      },
      { 
        name: 'Starseed Pieces Landing Page', 
        imgpath: 'public/assets/images/Projects/WEB/starseed-landing.png', 
        link: 'https://starseedpieces-landing.netlify.app', description: 'A Landing Page made for Starseed Pieces as an individual school project (2024). It’s a local small jewelry business. Basic tools were used such as HTML, JavaScript, and CSS',
        },
      { name: 'The Bookshelf Website', 
        imgpath: 'public/assets/images/Projects/WEB/thebookshelf.png', 
        link: 'https://thebookshelfbooks.netlify.app/',
        description: 'A Frontend Website for The Bookshelf as an individual school project (2023), The purpose of the website is for book lovers, especially the LGBTQ+ community to easily browse, trade, donate, and purchase books tailored carefully for them. Basic tools were used such as HTML, JavaScript, and CSS',
      },
    ]
  }

  getGraphicWorks(){
    return [
      {name: 'Cafe Whiskers Logo', imgpath: 'public/assets/images/Projects/Graphics/cafewhiskers-logo.png'},
      {name: 'Star Crossed Logo', imgpath: 'public/assets/images/Projects/Graphics/starcrossed-logo.png'},
      {name: 'BSIT Web Development Print Ad Assignment', imgpath: 'public/assets/images/Projects/Graphics/printads-assignment.png'},
      {name: 'Starseed Pieces Email Marketing Mockup', imgpath: 'public/assets/images/Projects/Graphics/email-starseed.png'},
      {name: 'The Bookshelf Banner Assets', imgpath: 'public/assets/images/Projects/Graphics/banner2.png'},
      {name: 'The Bookshelf Banner Assets', imgpath: 'public/assets/images/Projects/Graphics/banner3.png'}
    ]
  }

  getIllustrationWorks(){
    return [
      {imgpath: 'public/assets/images/Projects/Illustrations/DigitalBookProject/scene1-character2.png',},
      {imgpath: 'public/assets/images/Projects/Illustrations/DigitalBookProject/scene13-character.png'},
      {imgpath: 'public/assets/images/Projects/Illustrations/IllustrationForOthers/12.png'},
      {imgpath: 'public/assets/images/Projects/Illustrations/IllustrationForOthers/1gab.png'},
      {imgpath: 'public/assets/images/Projects/Illustrations/IllustrationForOthers/03a.jpg'},
      {imgpath: 'public/assets/images/Projects/Illustrations/AllMyWorks/117.jpg'},
      {imgpath: 'public/assets/images/Projects/Illustrations/AllMyWorks/39a.jpg'},
      {imgpath: 'public/assets/images/Projects/Illustrations/AllMyWorks/2202221.jpg'},
      {imgpath: 'public/assets/images/Projects/Illustrations/AllMyWorks/86.jpg'},
      {imgpath: 'public/assets/images/Projects/Illustrations/AllMyWorks/8.jpg'},
      {imgpath: 'public/assets/images/Projects/Illustrations/AllMyWorks/49a.png'},
    ]
  }
}
