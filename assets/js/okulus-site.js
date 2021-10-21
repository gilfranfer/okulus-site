const i18n_english = {
    page:{ title:"Okulus Project",
          description:"Your Church's new digital experience"},
    menu:{ app:"Okulus", home:"Home", about:"Get Started",
          features:"Features", team:"Team", pricing:"Pricing",
          portfolio:"Images", contact:"Contact Us", started:"Get Started!"},
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
            bullets:[
              {type:"check", text:"Interface Language in English/Spanish"},
              {type:"check", text:"Chart Colors Configurable"},
              {type:"check", text:"Select your preferred Date Format"},
            ]
          }
        }
      ]
    },
    portfolio:{
      title:"Okulus Images",
      description:"",
      filters:[
        {name:"*", active:"filter-active", title:"All"},
        {name:".filter-general", active:"", title:"General"},
        {name:".filter-reports", active:"", title:"Reports"},
        {name:".filter-dash", active:"", title:"Dashboard"},
        {name:".filter-admin", active:"", title:"Admin"}
      ],
      items:[
        {filter:"filter-general", title:"Home", description:"", image:"assets/img/portfolio/OkulusHome.png"},
        {filter:"filter-general", title:"Summary", description:"", image:"assets/img/portfolio/OkulusSummary.png"},
        {filter:"filter-general", title:"Chats", description:"", image:"assets/img/portfolio/OkulusChatCenter.png"},
        {filter:"filter-general", title:"Notifications", description:"", image:"assets/img/portfolio/OkulusNotifications.png"},
        {filter:"filter-general", title:"Configurations", description:"", image:"assets/img/portfolio/OkulusConfigs.png"},

        {filter:"filter-reports", title:"New Report", description:"", image:"assets/img/portfolio/ReportNew.png"},
        {filter:"filter-reports", title:"Attendance", description:"", image:"assets/img/portfolio/ReportAttendance.png"},
        {filter:"filter-reports", title:"Add Multiple", description:"", image:"assets/img/portfolio/ReportMultipleAdd.png"},
        {filter:"filter-reports", title:"Feedback", description:"", image:"assets/img/portfolio/ReportFeedback.png"},

        {filter:"filter-dash", title:"Search Reports", description:"", image:"assets/img/portfolio/DashboardSearch.png"},
        {filter:"filter-dash", title:"Reports", description:"", image:"assets/img/portfolio/DashboardReports.png"},
        {filter:"filter-dash", title:"Reunions", description:"", image:"assets/img/portfolio/DashboardReunions.png"},
        {filter:"filter-dash", title:"Attendance", description:"", image:"assets/img/portfolio/DashboardAttendance.png"},

        {filter:"filter-admin", title:"Groups", description:"", image:"assets/img/portfolio/AdminGroups.png"},
        {filter:"filter-admin", title:"Members", description:"", image:"assets/img/portfolio/AdminMembers.png"},
        {filter:"filter-admin", title:"Reports", description:"", image:"assets/img/portfolio/AdminReports.png"},
        {filter:"filter-admin", title:"Users", description:"", image:"assets/img/portfolio/AdminUsers.png"},
        {filter:"filter-admin", title:"Weeks", description:"", image:"assets/img/portfolio/AdminWeeks.png"}
      ]
    },
    team:{
      title:"Team",
      description:"",
      members:[
        {name:"Fernando Gil", role:"Development Lead"
            /*image:"assets/img/team/team-1.jpg",
            twitter:"https://twitter.com/LobhoGil", facebook:"",
            instagram:"https://www.instagram.com/lobhogil/", linkedin:"",
            resume:"https://kariertabelo.netlify.app/#!/resume/gilfranfer" */},
        {name:"Leslie Vergara", role:"QA Engineer"
            /*image:"assets/img/team/team-2.jpg",
            twitter:"https://twitter.com/lezzlie20", facebook:"",
            instagram:"https://www.instagram.com/lezz.vergara/", linkedin:"",
            resume:"https://kariertabelo.netlify.app/#!/resume/lessvergara" */}
      ]
    },
    pricing:{
      title:"Pricing", description:"",
      plans:[
        {name:"Free", price:"$0", period:"dlls per month", featured:"", fade:"zoom-in",
          bullets:[
            {type:"bx-check", text:"Create up to 10 Groups", included:true},
            {type:"bx-check", text:"Add up to 150 Members", included:true},
            {type:"bx-check", text:"Set up to 15 Users", included:true},
            {type:"bx-x", text:"Support", included:false}
          ]
        },
        {name:"Basic", price:"$25", period:"dlls per month", featured:"featured", fade:"zoom-in",
          bullets:[
            {type:"bx-check", text:"Create up to 100 Groups", included:true},
            {type:"bx-check", text:"Add up to 1500 Members", included:true},
            {type:"bx-check", text:"Set up to 100 Users", included:true},
            {type:"bx-x", text:"Support", included:false}
          ]
        },
        {name:"Premium", price:"$45", period:"dlls per month", featured:"", fade:"zoom-in",
          bullets:[
            {type:"bx-check", text:"Create Unlimited Groups", included:true},
            {type:"bx-check", text:"Add Unlimited Members", included:true},
            {type:"bx-check", text:"Set up to 200 Users", included:true},
            {type:"bx-check", text:"Support", included:true}
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
        sendBtnLbl:"Send Message", sendingLbl:"Sending Message", sentLbl:"Your message has been sent. Thank you!",
        nameInvalid:"Please enter at least 3 chars", emailInvalid:"Please enter a valid email",
        subjectInvalid:"Please enter at least 3 chars of subject", messageInvalid:"Please write something for us"
      }
    }
};
const i18n_spanish = {
    page:{ title:"Okulus Project",
          description:"La nueva experiencia digital de tu Iglesia"},
    menu:{ app:"Okulus", home:"Inicio", about:"Comenzar",
          features:"Características", team:"Equipo", pricing:"Precios",
          portfolio:"Imágenes", contact:"Contáctanos", started:"Comenzar!"},
    hero:{ title:"La nueva experiencia digital de tu Iglesia",
          description:"Okulus te provee una manera de mantenerte al tanto de las reuniones de los Grupos de tu Iglesia.",
        },
    about:{
      title:"Una herramienta para manterte informado de lo que sucede ...",
      description:"Definitivamente deberías mantener un registro de todas las reuniones de los Grupos de tu Iglesia, de modo que puedas monitorear su crecimiento, y estar al tanto del desempeño de cada Grupo.",
      items:[
        {
          title:"Crea tus Grupos",
          description:"Crea todos los grupos que quieras, establece su información de contacto, define los roles (líder, asistente, anfitrión) y otros detalles.",
          icon:"bx-home"
        },
        {
          title:"Asigna a los Miembros",
          description:"Agrega miembros, y asignalos a grupos específicos. Los miembros pueden desempeñar diferentes roles dentro de los grupos.",
          icon:"bx-group"
        },
        {
          title:"Crea los Reportes",
          description:"Para cada reunión, tus usuarios pueden crear Reportes, los cuáles proveen la información necesaria para alimentar el 'Dashboard' (tablero) en tiempo real, el cuál te ayudará a monitorear el crecimiento y desempeño de tus grupos.",
          icon:"bx-receipt"
        },
        {
          title:"Limita el Acceso",
          description:"Tu información está segura! Prpporciona acceso a la aplicación únicamente a las personas que quieres. También puedes limitar los grupos que cada usuario puede ver.",
          icon:"bx-shield"
        }
      ]
    },
    features:{
      title:"Características",
      description:"Okulus es una aplicación web, que provee diferentes caracter+isticas construidas al rededor de los requerimientos comunes de Iglesias que quieren mantener un registro de las reuniones de sus Grupos. La información es capturada por medio de reportes creados por los líderes de cada Grupo, y es utilizada para monitorear el desempeño y crecimiento de cada grupo así como de sus miembros (asistentes). Toda la información recolectada puede ser mostrada en 'Dashboars' (tableros) en tiempo real.",
      items:[
        {
          image:{
            orderSm:"order-1",orderMd:"order-md-1",fade:"fade-right", src:"assets/img/features/features-1.svg"
          },
          text:{
            orderSm:"order-2",orderMd:"order-md-2",fade:"fade-left",
            title:"Mantén una comunicación constante",
            subtitle:"Haciendo uso de las diferences herramientas de comunicación disponibles:",
            description:"",
            bullets:[
              {type:"check", text:"Comentarios de retroalimentación en los Reportes"},
              {type:"check", text:"Anuncios del Administrador en la página principal"},
              {type:"check", text:"Conversaciones en tiempo real"},
              {type:"check", text:"Centro de Notificaciones"}
            ]
          }
        },
        {
          image:{
            orderSm:"order-1",orderMd:"order-md-2",fade:"fade-left", src:"assets/img/features/features-2.svg"
          },
          text:{
            orderSm:"order-2",orderMd:"order-md-1",fade:"fade-right",
            title:"Dashboard en tiempo real", subtitle:"Mantente al tanto de tus Grupos",
            description: "Okulus tiene 'Dashboars' (tableros) en tiempo real, disponibles para los usuarios y administradoes, donde pueden revisar toda la informació recolectada por medio de los reportes creados. Haciendo uso de gráficas y tablas, es posbile comprender el crecimiento y desempeño de tus grupos durante periodos específicos de tiempo, muy fácilmente.", bullets:""
          }
        },
        {
          image:{
            orderSm:"order-1",orderMd:"order-md-1",fade:"fade-right", src:"assets/img/features/features-3.svg"
          },
          text:{
            orderSm:"order-2",orderMd:"order-md-2",fade:"fade-left",
            title:"Tecnología New Web", subtitle:"",
            description:"Hemos utilizado diversas tecnologías actuales para construir Okulues, así que puedes estar tranquilo de disfrutar el resultado de soluciones tecnológicas novedosas.",
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
            title:"Configurable", subtitle:"Hazlo tuyo!",
            description:"Okulus tiene muchas configuraciones y preferencias que pueden ajustarse en cualquier momento, para que hagas tu experiencia más personal. Siéntete con la libertad de contactarnos para sugerir nuevas funcionalidades!",
            bullets:[
              {type:"check", text:"Idioma ajustable: Español/Inglés"},
              {type:"check", text:"Colores de gráficas Configurables"},
              {type:"check", text:"Selecciona tu formato de fecha favorito"},
            ]
          }
        }
      ]
    },
    portfolio:{
      title:"Okulus Imágenes",
      description:"",
      filters:[
        {name:"*", active:"filter-active", title:"Todo"},
        {name:".filter-general", active:"", title:"General"},
        {name:".filter-reports", active:"", title:"Reportes"},
        {name:".filter-dash", active:"", title:"Dashboard"},
        {name:".filter-admin", active:"", title:"Admin"}
      ],
      items:[
        {filter:"filter-general", title:"Inicio", description:"", image:"assets/img/portfolio/OkulusHome.png"},
        {filter:"filter-general", title:"Resúmen", description:"", image:"assets/img/portfolio/OkulusSummary.png"},
        {filter:"filter-general", title:"Conversaciones", description:"", image:"assets/img/portfolio/OkulusChatCenter.png"},
        {filter:"filter-general", title:"Notificaciones", description:"", image:"assets/img/portfolio/OkulusNotifications.png"},
        {filter:"filter-general", title:"Configuraciones", description:"", image:"assets/img/portfolio/OkulusConfigs.png"},

        {filter:"filter-reports", title:"Nuevo Reporte", description:"", image:"assets/img/portfolio/ReportNew.png"},
        {filter:"filter-reports", title:"Asistencia", description:"", image:"assets/img/portfolio/ReportAttendance.png"},
        {filter:"filter-reports", title:"Agregar Multiple", description:"", image:"assets/img/portfolio/ReportMultipleAdd.png"},
        {filter:"filter-reports", title:"Comentarios", description:"", image:"assets/img/portfolio/ReportFeedback.png"},

        {filter:"filter-dash", title:"Buscar Reportes", description:"", image:"assets/img/portfolio/DashboardSearch.png"},
        {filter:"filter-dash", title:"Reportes", description:"", image:"assets/img/portfolio/DashboardReports.png"},
        {filter:"filter-dash", title:"Reuniones", description:"", image:"assets/img/portfolio/DashboardReunions.png"},
        {filter:"filter-dash", title:"Asistencia", description:"", image:"assets/img/portfolio/DashboardAttendance.png"},

        {filter:"filter-admin", title:"Groupos", description:"", image:"assets/img/portfolio/AdminGroups.png"},
        {filter:"filter-admin", title:"Miembros", description:"", image:"assets/img/portfolio/AdminMembers.png"},
        {filter:"filter-admin", title:"Reportes", description:"", image:"assets/img/portfolio/AdminReports.png"},
        {filter:"filter-admin", title:"Usuarios", description:"", image:"assets/img/portfolio/AdminUsers.png"},
        {filter:"filter-admin", title:"Semanas", description:"", image:"assets/img/portfolio/AdminWeeks.png"}
      ]
    },
    team:{
      title:"Equipo",
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
            resume:"https://kariertabelo.netlify.app/#!/resume/lessvergara" }
      ]
    },
    pricing:{
      title:"Precios", description:"",
      plans:[
        {name:"Gratis", price:"$0", period:"dlls al mes", featured:"", fade:"zoom-in",
          bullets:[
            {type:"bx-check", text:"Crea hasta 10 Grupos", included:true},
            {type:"bx-check", text:"Agrega hasta 150 Miembros", included:true},
            {type:"bx-check", text:"Asigna hasta 15 Usuarios", included:true},
            {type:"bx-x", text:"Soporte", included:false}
          ]
        },
        {name:"Básico", price:"$25", period:"dlls al mes", featured:"featured", fade:"zoom-in",
          bullets:[
            {type:"bx-check", text:"Crea hasta 100 Grupos", included:true},
            {type:"bx-check", text:"Agrega hasta 1500 Miembros", included:true},
            {type:"bx-check", text:"Asigna hasta 100 Usuarios", included:true},
            {type:"bx-x", text:"Soporte", included:false}
          ]
        },
        {name:"Premium", price:"$45", period:"dlls al mes", featured:"", fade:"zoom-in",
          bullets:[
            {type:"bx-check", text:"Crea Grupos ilimitados", included:true},
            {type:"bx-check", text:"Agrega Miembros ilimitados", included:true},
            {type:"bx-check", text:"Asigna hasta 200 Usuarios", included:true},
            {type:"bx-check", text:"Soporte", included:true}
          ]
        }
      ]
    },
    contact:{
      title:"Contacto",
      description:"",
      locationBox: {title:"Ubicación", fade:"fade-up", image:"bx-map", colSize:"col-6"},
      locations:[
        {address:"San Antonio Texas, USA"},{address:"Xalapa Veracruz, MEX"}
      ],
      email:"gil.franfer@gmail.com", emailUs:"Envíanos un Correo",
      form:{
        nameLbl:"Tu nombre", emailLbl:"Tu Correo", subjectLbl:"Asunto", messageLbl:"Escribe tu mensaje",
        sendBtnLbl:"Enviar mensaje", sendingLbl:"Enviando mensaje", sentLbl:"Tu mensaje ha sido enviado. Gracias!",
        nameInvalid:"Ingresa al menos 3 letras", emailInvalid:"Introduce un correo cálido",
        subjectInvalid:"Ingresa al menos 3 letras", messageInvalid:"Por favor escríbenos algo"
      }
    }
};

/* ANGULAR */
let app = angular.module('OkulusSite',[]);

app.controller('LanguageCtrl', function($rootScope) {
    $rootScope.setLanguage = function(language) {
      if(language=='es'){
        $rootScope.i18n = i18n_spanish;
      }else {
        $rootScope.i18n = i18n_english;
      }
    };
});

app.run(function($rootScope){
  const lang = navigator.language.substring(0, 2);
  if(lang=='es'){
    $rootScope.i18n = i18n_spanish;
    console.log('Espaniol')
  }else{
    $rootScope.i18n = i18n_english;
    console.log('English')
  }

});

/* EmailJS */
var myform = $("form#contactForm");
myform.submit(function(event){
	event.preventDefault();
  //Form validations
  var f = $(this).find('.form-group'),
    ferror = false,
    emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

  f.children('input').each(function() { // run all inputs

    var i = $(this); // current input
    var rule = i.attr('data-rule');

    if (rule !== undefined) {
      var ierror = false; // error flag for current input
      var pos = rule.indexOf(':', 0);
      if (pos >= 0) {
        var exp = rule.substr(pos + 1, rule.length);
        rule = rule.substr(0, pos);
      } else {
        rule = rule.substr(pos + 1, rule.length);
      }

      switch (rule) {
        case 'required':
          if (i.val() === '') {
            ferror = ierror = true;
          }
          break;

        case 'minlen':
          if (i.val().length < parseInt(exp)) {
            ferror = ierror = true;
          }
          break;

        case 'email':
          if (!emailExp.test(i.val())) {
            ferror = ierror = true;
          }
          break;

        case 'checked':
          if (! i.is(':checked')) {
            ferror = ierror = true;
          }
          break;

        case 'regexp':
          exp = new RegExp(exp);
          if (!exp.test(i.val())) {
            ferror = ierror = true;
          }
          break;
      }
      i.next('.validate').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
    }
  });
  f.children('textarea').each(function() { // run all inputs

    var i = $(this); // current input
    var rule = i.attr('data-rule');

    if (rule !== undefined) {
      var ierror = false; // error flag for current input
      var pos = rule.indexOf(':', 0);
      if (pos >= 0) {
        var exp = rule.substr(pos + 1, rule.length);
        rule = rule.substr(0, pos);
      } else {
        rule = rule.substr(pos + 1, rule.length);
      }

      switch (rule) {
        case 'required':
          if (i.val() === '') {
            ferror = ierror = true;
          }
          break;

        case 'minlen':
          if (i.val().length < parseInt(exp)) {
            ferror = ierror = true;
          }
          break;
      }
      i.next('.validate').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
    }
  });
  if (ferror) return false;

  //Proceed to send email
  var service_id = "gmail";
  var template_id = "contact_us";

  myform.find("#sendingMessageAlert").show();
  myform.find("#messageSentAlert").hide();
  myform.find("#errorMessageAlert").hide();
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){
    	// alert("Sent!");
          myform.find("#sendingMessageAlert").hide();
          myform.find("#messageSentAlert").show();
  //      myform.find("button").text("Send");
  //   }, function(err) {
          myform.find("#sendingMessageAlert").hide();
          myform.find("#messageSentAlert").text("Send email failed!\r\n Response:\n " + JSON.stringify(err));
          myform.find("#messageSentAlert").show();
       console.err("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});
