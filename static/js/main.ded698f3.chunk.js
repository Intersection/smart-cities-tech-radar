(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(19)},16:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),s=t.n(o),i=(t(16),t(1)),l=t(2),c=t(4),m=t(3),u=t(5),h=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row pt-5",id:"introduction"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"What is the tech radar?"),r.a.createElement("p",null,"The tech radar for\xa0",r.a.createElement("a",{href:"https://www.intersection.com",rel:"noopener noreferrer",target:"_blank"},"Intersection"),"'s Smart Cities team is the list of technologies, tools, and techniques in our team's ecosystem. It is inspired by\xa0",r.a.createElement("a",{href:"https://www.thoughtworks.com/radar",rel:"noopener noreferrer",target:"_blank"},"ThoughtWorks' Tech Radar"),". Entries in each section (quadrant) of the tech radar are placed in one of the following categories (rings):"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Adopt")," \u2014 Entries in this ring are core to our ecosystem. They are the default choice when starting new projects, and are technologies we have chosen to stand behind as a fundamental piece of our stack."),r.a.createElement("li",null,r.a.createElement("strong",null,"Trial")," \u2014 These are items that we have started to use, but may not be proven as a core part of our toolkit yet. We may use them in new projects, but not without a bit of discussion to make sure we want to expand our footprint."),r.a.createElement("li",null,r.a.createElement("strong",null,"Assess")," \u2014 These are the things we want to learn more about in the nearterm. We probably don't have them in production yet, but we likely have a candidate project in mind that we will use to assess them."),r.a.createElement("li",null,r.a.createElement("strong",null,"Hold")," \u2014 These entries are on hold. Technologies in this ring are likely being phased out, though are still present in our toolkit. We are unlikely to start any new projects using items in this ring.")),r.a.createElement("h2",null,"How do we use it?"),r.a.createElement("p",null,"The Tech Radar helps drive the technical decisions that we make. Items in the Adopt category are default choices for new projects. As we find new technologies that interest us and seem relevant to our team, we add them to the Assess ring. The radar also serves as a public statement of technologies that are important to us."),r.a.createElement("p",null,"The source for this radar is\xa0",r.a.createElement("a",{href:"https://github.com/intersection/smart-cities-tech-radar",rel:"noopener noreferrer",target:"_blank"},"available on GitHub"),". If you are interested in joining our team,\xa0",r.a.createElement("a",{href:"https://www.intersection.com/join-our-team",rel:"noopener noreferrer",target:"_blank"},"we're hiring"),"!")))}}]),a}(n.Component),d=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg sticky-top navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"#introduction"},"Intersection Smart Cities Tech Radar"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#platforms"},"Platforms")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#languages"},"Languages & Frameworks")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#tools"},"Tools")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#techniques"},"Techniques")))))}}]),a}(n.Component),p=t(6),g=t(10),b=t.n(g),f=["adopt","trial","assess","hold"],v=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row pt-5",id:this.props.category},r.a.createElement("div",{className:"col-12 header"},r.a.createElement("h1",{className:"border-bottom border-secondary"},this.props.name)),f.map(function(a){return r.a.createElement("div",{className:"col",key:a},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item text-white bg-"+e.props.category},r.a.createElement("h3",null,b.a.capitalize(a))),e.props.rings[a].map(function(e){return r.a.createElement("li",{className:"list-group-item",key:e},e)})))}))}}]),a}(n.Component),w=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container pb-5"},r.a.createElement(d,null),r.a.createElement(h,null),r.a.createElement(v,{name:"Platforms",rings:p.platforms,category:"platforms"}),r.a.createElement(v,{name:"Languages & Frameworks",rings:p.languages_frameworks,category:"languages"}),r.a.createElement(v,{name:"Tools",rings:p.tools,category:"tools"}),r.a.createElement(v,{name:"Techniques",rings:p.techniques,category:"techniques"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports={platforms:{hold:["Android","Docker Swarm","Elastic Beanstalk","GCP for Infrastructure","Lambda / Serverless"],assess:["Cross-platform mobile","Embedded Containers","Kubernetes","Redshift","Yocto"],trial:["Cloudformation"],adopt:["Android for applications","AWS","Containers","iOS","Linux","VoIP","Web / Browser"]},languages_frameworks:{hold:["Django","Java","Play Framework","PHP","Scala"],assess:["Go","Java 11","React Native","Spring Boot"],trial:["Kotlin","TypeScript"],adopt:["Docker","Docker Compose","JavaScript","Python","Swift","React","Redux"]},tools:{hold:["Broadsign Admin","Okta","Splunk for service desk"],assess:["Bubble IQ","DialogFlow","HTTP/2 and QUIC","Linux Development","R","SonarQube","Timescale DB"],trial:["Appium","Auth0","Code Climate","ElasticSearch","GRPC","Insomnia","JSON Query","Python Debugger"],adopt:["BuddyBuild","Buildkite","Datadog","Google Analytics","JIRA","Management Agent","PyCharm / JetBrains","Sentry","Splunk for logging","Zendesk"]},techniques:{hold:["Bikeshedding"],assess:["Agile Service Desk","Component libs","Dashboard Driven Design","Game Day","PRPL Pattern","Red Team","Technical Partner Management","Tracing"],trial:["DevOps","TDD","Support Engineering","Security Static/Dynamic Analysis","Writing OSS"],adopt:["Automated Testing","Code Reviews","Iterative Development","Service Oriented Architecture","Static Code Analysis","Team Retrospectives"]}}}},[[11,2,1]]]);
//# sourceMappingURL=main.ded698f3.chunk.js.map