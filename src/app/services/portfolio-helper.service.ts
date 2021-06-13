import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioHelperService {

  constructor() { }

  achievments = {
    appreciations:[
      `Promoted to <b>Associate Technical Lead</b> for mentoring team in product devlopment during Q1,2020.`,
      `Travelled to U.S.A (Onshore) on <b>B1 Vissa</b> for Project Work .`,
      `Received Wipro's <b>Most Promising Developer</b> award for the work shown in developing Business Module during Q4,2017. `,
      `Achieved Second Prize for poster presentation on <b>Role of Smart Micro-grids for Remote Village Electrification</b> at AFOSEC-2015 hosted by Velagapudi Ramakrishna (VR) Siddhartha college of Engineering.`,
      ],
      visa:[
        'I have a valid <b>B1 Visa</b> upto <b>Jan 2030 </b>'
      ],
      certifications:[
        `Certified by Certified SAFe® 5 Practitioner </br> <i class="fa fa-link"></i> <a href="https://www.credly.com/badges/0dffc4f0-07db-4bfb-a8c6-362f3b5a149c/linked_in" target="_blank">Certified SAFe® 5 Practitioner</a>`,
        `MEAN Stack </br> <i class="fa fa-link"></i> <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-3F2HI84Z.pdf" target="_blank">MEAN Stack from Udemy</a>`
      ]
  }

  programmingLanguages = [
    { image: 'assets/images/js.png', text: 'javascript' },
    { image: 'assets/images/TypeScript.png', text: 'TypeScript' },
    { image: 'assets/images/java.png', text: 'java' }
  ]

  forntEndDevelopment = [
    { image: 'assets/images/html5.png', text: 'HTML 5' },
    { image: 'assets/images/css3.png', text: 'CSS' },
    { image: 'assets/images/angular.png', text: 'Angular 2+' },
    { image: 'assets/images/AngularMaterial.png', text: 'Angular Material' },
    { image: 'assets/images/React.png', text: 'React' },
    { image: 'assets/images/bootstrap.png', text: 'Bootstrap' }
  ]

  databases = [
    { image: 'assets/images/MySql.png', text: 'My SQL' },
    { image: 'assets/images/MongoDB.png', text: 'Mongo DB' }
  ]


  tools = [
    { image: 'assets/images/vscode.png', text: 'VS Code' },
    { image: 'assets/images/git.png', text: 'git' },
    { image: 'assets/images/npm.png', text: 'npm' },
    { image: 'assets/images/grunt.png', text: 'grunt' },
    { image: 'assets/images/postman.png', text: 'postman' },
    { image: 'assets/images/jira.png', text: 'jira' }
  ]

  backEndSkills = [
    { image: 'assets/images/node.png', text: 'Node.js' },
    { image: 'assets/images/Express.png', text: 'Express.js' },
    { image: 'assets/images/Java.svg', text: 'Java' }
  ]

  companyTech = {
    fis: {
      iconArray: [
        { image: 'assets/images/angular.png', text: 'angular' },
        { image: 'assets/images/AngularMaterial.png', text: 'material' },
        { image: 'assets/images/js.png', text: 'javascript' },
        { image: 'assets/images/ts.svg', text: 'typescript' },
        { image: 'assets/images/node.png', text: 'Node Js' },
        { image: 'assets/images/Express.png', text: 'Express JS' },
        { image: 'assets/images/grunt.png', text: 'grunt' },
        { image: 'assets/images/html5.png', text: 'html5' },
        { image: 'assets/images/css3.png', text: 'css3' },
        { image: 'assets/images/npm.png', text: 'npm' },
        { image: 'assets/images/git.png', text: 'git' },
        { image: 'assets/images/OpenShift.svg', text: 'openshift' },
        { image: 'assets/images/jenkins.png', text: 'jenkins' },
        { image: 'assets/images/vscode.png', text: 'vs code' },
        { image: 'assets/images/chromeD.png', text: 'dev tools' },
        { image: 'assets/images/jira.png', text: 'jira' },
        { image: 'assets/images/postman.png', text: 'postman' },
      ],
      aboutProd: [
        'Worked on large scale (1+ million users), cross platform banking application',
        `Travelled to Onshore on B1 Vissa for reviewing enhancement’s and took part in designing of Product`,
        'Provided innovative solution for generic scroll & focus to error fields in large forms',
        'Generic code for crud operations and view pages of varied form structures, with solution to overcome angular material data table slowness for large records in absence of server side pagination',
        'I was part of the team that converted complete legacy dot net application to angular in minimal time',
        'Worked on session handling using ng-idle',
        'Created generic directive to throttle click events in order to prevent multiple payments and to solve similar issues',
        'Handled nested api calls through rxjs',
        'Created maintainable and optimized code structure to handle complex scenarios involving lot of components interactions'
      ]
    },
    zenmonics: {
      iconArray: [
        { image: 'assets/images/angular.png', text: 'angular' },
        { image: 'assets/images/AngularMaterial.png', text: 'material' },
        { image: 'assets/images/js.png', text: 'javascript' },
        { image: 'assets/images/ts.svg', text: 'typescript' },
        { image: 'assets/images/bootstrap.png', text: 'bootstrap' },
        { image: 'assets/images/html5.png', text: 'html5' },
        { image: 'assets/images/css3.png', text: 'css3' },
        { image: 'assets/images/vscode.png', text: 'vs code' },
        { image: 'assets/images/npm.png', text: 'npm' },
        { image: 'assets/images/git.png', text: 'git' },
        { image: 'assets/images/chromeD.png', text: 'dev tools' },
        { image: 'assets/images/jira.png', text: 'jira' },
        { image: 'assets/images/vstudio.png', text: 'visual studio' },
        { image: 'assets/images/postman.png', text: 'postman' }
      ],
      aboutProd: [
        'Migration from Controller Approach to Component Approach.',
        'Project is an Hybrid app comprises of 60% Angular Js and 40% Angular.',
        'Migration of project from Angular 1.X to Angular 9.',
        'Implemented lazy loading using Angular to optimize response time of the application.',
        'Worked on session handling using ng-idle.',
        'Migrated Core Modules of Banker like DashBoard,Waitlist,Appointments and Opportunity Management.',
        'Handled nested api calls through rxjs.',
        'Created maintainable and optimized code structure to handle complex scenarios involving lot of components interactions.'
      ]
    },
    wipro: {
      iconArray: [
        { image: 'assets/images/extjs.png', text: 'Ext Js' },
        { image: 'assets/images/angular.png', text: 'angular' },
        { image: 'assets/images/js.png', text: 'javascript' },
        { image: 'assets/images/jquery.jpg', text: 'J Query' },
        { image: 'assets/images/ajax.jpg', text: 'Ajax' },
        { image: 'assets/images/html5.png', text: 'html5' },
        { image: 'assets/images/css3.png', text: 'css3' },
        { image: 'assets/images/bootstrap.png', text: 'bootstrap' },
        { image: 'assets/images/java.png', text: 'java' }
      ],
      aboutProd: [
        'Developed web pages using Extjs, Ajax and XML',
        'Developed web pages using Extjs intially to match look and feel with existing vc++ application',
        'Later Angular 2 was released and moved from Ext Js to Angular.',
        'we used Ajax to call backend services. All the request and response operations was done in Xml format.',
        'Worked on generic client side pagination logic that worked in sync with server side pagination.',
      ]
    },
    wiproIntern: {
      iconArray: [
        { image: 'assets/images/html5.png', text: 'html5' },
        { image: 'assets/images/css3.png', text: 'css3' },
        { image: 'assets/images/js.png', text: 'javascript' },
        { image: 'assets/images/java.png', text: 'java' },
        { image: 'assets/images/MySql.png', text: 'My SQL' }
      ],
      aboutProd: [
        `Designed and Developed the application page layouts using HTML5, CSS3 and JavaScript.`,
        `Built DB tables, stored procedures, and coded SQL statements for back-end communication using JDBC.`,
        `Programmed server-side code using Servlets and JSP and deployed application on Apache Tomcat Server.`
      ]
    }
  }

}

