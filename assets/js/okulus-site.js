/* CONSTANTS */
const values = {
  paths:{
    home:"/home", profile:"/profile", login:"/login", resume:"/resume"
  }

};

const i18n_english = {
    page:{ title:"Okulus Project",
          description:"Your Church's new digital experience"},
    menu:{ app:"Okulus", home:"Home", about:"About Us" ,
          features:"Features", team:"Team", pricing:"Pricing",
          contact:"Contact Us", started:"Get Started!"},
    hero:{ title:"Your Church's new digital experience",
          description:"Okulus provides you a way to keep an eye on your Church Group's reunions.",
        },
    about:{
      title:"A tool to keep the record of what's going on ...",
      description:"You should keep a record for all your Church Group\'s reunions, so you can track their growth during it\'s life time, and keep a close eye (Oculus) on their perfomance.",
      items:[
        {
          title:"Set your Groups",
          description:"Create all the groups you want, assignnig contact information, and other details of your interest.",
          icon:"bx-home"
        },
        {
          title:"Assign the Members",
          description:"Add Members, and assign them to specific grups. Your members can play different roles in your groups.",
          icon:"bx-group"
        },
        {
          title:"Create the Reports",
          description:"For every reunion, you can create a report that will feed a dashboar to track the group growth and performance.",
          icon:"bx-receipt"
        },
        {
          title:"Limit the Access",
          description:"Your data is secure! Provide access only to the people you want to.",
          icon:"bx-shield"
        }
      ]
    },
    features:{
      title:"Features",
      description:"Okulus is a web based application. It provides different features built around requirements for Churches that want to keep a record of their Group's reunion. The information comes from reports created by Group leaders, and it is used to monitor the performance and growth of each group and its members. All the collected data can be displayed in real=time dashboards.",
      items:[
        {
          image:{
            orderSm:"order-1",orderMd:"order-md-1",fade:"fade-right", src:"assets/img/features/features-1.svg"
          },
          text:{
            orderSm:"order-2",orderMd:"order-md-2",fade:"fade-left",
            title:"Keep an Open Communication",
            subtitle:"Make use of all Okulu's Communication tools",
            description:"",
            bullets:[
              {type:"check", text:"Feedback Comments on Reports"},
              {type:"check", text:"Announcements from Admin"},
              {type:"check", text:"Real time Chat"},
              {type:"check", text:"Notification Center"}
            ]
          }
        },
        {
          image:{
            orderSm:"order-1",orderMd:"order-md-2",fade:"fade-left", src:"assets/img/features/features-2.svg"
          },
          text:{
            orderSm:"order-2",orderMd:"order-md-1",fade:"fade-right",
            title:"Real Time Dashboard", subtitle:"Keep track of your Group's informatio",
            description: "Okulus has a real time dashboard accecible for Admins, where they can see all the information collected with the created reports. Taking advantage of charts and table, you can easily track the Groups' perfomance", bullets:""
          }
        },
        {
          image:{
            orderSm:"order-1",orderMd:"order-md-1",fade:"fade-right", src:"assets/img/features/features-3.svg"
          },
          text:{
            orderSm:"order-2",orderMd:"order-md-2",fade:"fade-left",
            title:"New web Technology", subtitle:"",
            description:"We have used edge technologies to build Okulus, so you can enjoy some of the coolest solutions.",
            bullets:[
              {type:"check", text:"HTML5"},
              {type:"check", text:"Bootstrap"},
              {type:"check", text:"Angular"},
              {type:"check", text:"Firebase"}
            ]
          }
        },
        {
          image:{
            orderSm:"order-1",orderMd:"order-md-2",fade:"fade-left", src:"assets/img/features/features-4.svg"
          },
          text:{
            orderSm:"order-2",orderMd:"order-md-1",fade:"fade-right",
            title:"Configurable", subtitle:"Make it yours.",
            description:"There are many settings you can adjust, to make Okulus more like you want it to be.",
            bullets:""
          }
        }
      ]
    },
    team:{
      title:"Team",
      description:"Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
      members:[
        {name:"Fernando Gil", role:"Chief Executive Officer",
            image:"assets/img/team/team-1.jpg",
            twitter:"https://twitter.com/LobhoGil", facebook:"",
            instagram:"https://www.instagram.com/lobhogil/", linkedin:"",
            resume:"https://kariertabelo.netlify.app/#!/resume/gilfranfer" },
        {name:"Leslie Vergara", role:"Product Manager",
            image:"assets/img/team/team-2.jpg",
            twitter:"https://twitter.com/lezzlie20", facebook:"",
            instagram:"https://www.instagram.com/lezz.vergara/", linkedin:"",
            resume:"https://kariertabelo.netlify.app/#!/resume/gilfranfer" }
      ]
    }
};

/* ANGULAR */
let app = angular.module('OkulusSite',[]);

app.run(function($rootScope){
	$rootScope.i18n = i18n_english;
});
