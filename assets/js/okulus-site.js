/* CONSTANTS */
const values = {
  paths:{
    home:"/home", profile:"/profile", login:"/login", resume:"/resume"
  }

};

const i18n_english = {
    page:{ title:"Okulus Project",
          description:"Your Church's new digital experience"},
    menu:{ app:"Okulus", home:"Home", about:"Get Started",
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
          description:"Create all the groups you want, assigning contact information, and other details of your interest.",
          icon:"bx-home"
        },
        {
          title:"Assign the Members",
          description:"Add Members, and assign them to specific grups. Your members can play different roles in your groups.",
          icon:"bx-group"
        },
        {
          title:"Create the Reports",
          description:"For every reunion, your users can create reports that will feed a real time dashboard to track the group growth and performance.",
          icon:"bx-receipt"
        },
        {
          title:"Limit the Access",
          description:"Your data is secure! Provide access only to the people you want to, and limit which groups they can see.",
          icon:"bx-shield"
        }
      ]
    },
    features:{
      title:"Features",
      description:"Okulus is a web based application, that provides different features built around requirements for Churches that want to keep a record of their Group's reunions. The information comes from reports created by Group leaders, and it is used to monitor the performance and growth of each group and its members. All the collected data can be displayed in real=time dashboards.",
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
            title:"Real Time Dashboard", subtitle:"Keep track of your Group's information",
            description: "Okulus has a real time dashboard available for Users and Admins, where they can see all the information collected with the created reports. Taking advantage of charts and tables, you can easily track the Groups' perfomance during specific time frame.", bullets:""
          }
        },
        {
          image:{
            orderSm:"order-1",orderMd:"order-md-1",fade:"fade-right", src:"assets/img/features/features-3.svg"
          },
          text:{
            orderSm:"order-2",orderMd:"order-md-2",fade:"fade-left",
            title:"New Web Technology", subtitle:"",
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
            description:"There are many settings you can adjust, to make Okulus more like you want it to be. Feel free to contact us to request more features!",
            bullets:""
          }
        }
      ]
    },
    portfolio:{
      title:"Screen shots",
      description:"",
      items:[
        {filter:"filter-app", title:"Image 1", description:"Image Number One", image:"assets/img/portfolio/portfolio-1.jpg"},
        {filter:"filter-app", title:"Image 2", description:"Image Number Two", image:"assets/img/portfolio/portfolio-2.jpg"},
        {filter:"filter-app", title:"Image 3", description:"Image Number 3", image:"assets/img/portfolio/portfolio-3.jpg"},
        {filter:"filter-app", title:"Image 4", description:"Image Number 4", image:"assets/img/portfolio/portfolio-4.jpg"},
        {filter:"filter-app", title:"Image 5", description:"Image Number 5", image:"assets/img/portfolio/portfolio-5.jpg"},
        {filter:"filter-app", title:"Image 6", description:"Image Number 6", image:"assets/img/portfolio/portfolio-6.jpg"}
      ]
    },
    team:{
      title:"Team",
      description:"",
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
    },
    pricing:{
      title:"Pricing", description:"",
      plans:[
        {name:"Free", price:"$0", period:"per month", featured:"", fade:"zoom-in",
          bullets:[
            {type:"bx-check", text:"Create up to 20 Groups", included:true},
            {type:"bx-check", text:"Add up to 250 Members", included:true},
            {type:"bx-check", text:"Set up to 20 Users", included:true},
            {type:"bx-x", text:"Support", included:false}
          ]
        },
        {name:"Limited", price:"$15", period:"per month", featured:"featured", fade:"zoom-in",
          bullets:[
            {type:"bx-check", text:"Create up to 100 Groups", included:true},
            {type:"bx-check", text:"Add up to 1500 Members", included:true},
            {type:"bx-check", text:"Set up to 100 Users", included:true},
            {type:"bx-check", text:"Basic Support", included:true}
          ]
        },
        {name:"Unlimited", price:"$45", period:"per month", featured:"", fade:"zoom-in",
          bullets:[
            {type:"bx-check", text:"Create unlimited Groups", included:true},
            {type:"bx-check", text:"Add unlimited Members", included:true},
            {type:"bx-check", text:"Set up to 200 Users", included:true},
            {type:"bx-check", text:"24/7 Support", included:true}
          ]
        }
      ]
    },
    contact:{
      title:"Contact",
      description:"",
      locationBox: {title:"Location", fade:"fade-up", image:"bx-map", colSize:"col-6"},
      locations:[
        {address:"San Antonio Texas, USA"},{address:"Xalapa Veracruz, MEX"}
      ],
      email:"gil.franfer@gmail.com", emailUs:"Email Us",
      form:{
        nameLbl:"Your Name", emailLbl:"Your Email", subjectLbl:"Subject", messageLbl:"Type your Message",
        sendBtnLbl:"Send Message", loadingLbl:"Loading", sentLbl:"Your message has been sent. Thank you!"
      }
    }
};

/* ANGULAR */
let app = angular.module('OkulusSite',[]);

app.run(function($rootScope){
	$rootScope.i18n = i18n_english;
});
