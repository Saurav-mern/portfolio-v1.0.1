(this["webpackJsonpportfolio-aloha"]=this["webpackJsonpportfolio-aloha"]||[]).push([[0],{129:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(43),r=c.n(a),l=(c(50),c(8)),i=c(3),o=c.p+"static/media/backpacker-2.1a4c4210.jpg",j=c(0);function d(){return Object(j.jsxs)("main",{children:[Object(j.jsx)("img",{src:o,alt:"Image of a man on mountain",className:"absolute object-cover w-full h-full"}),Object(j.jsx)("section",{className:"relative flex justify-center min-h-screen pt-12 lg:pt-39 px-8",children:Object(j.jsx)("h1",{className:"text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name",children:"Namaste. I'm Saurav. "})})]})}var x=c(10),b=c(44),h=c.n(b)()({projectId:"n1nhe2bs",dataset:"production"}),m=c.p+"static/media/backpacker-3.09f41c3a.jpg",u=c(14),g=c.n(u),p=c(18),f=c.n(p),O=g()(h);function N(){var e,t=Object(s.useState)(null),c=Object(x.a)(t,2),n=c[0],a=c[1];return Object(s.useEffect)((function(){h.fetch("*[_type == 'author']{\n            name,\n            bio,\n            \"authorImage\": image.asset-> url\n        }").then((function(e){return a(e[0])})).catch(console.error)}),[]),n?Object(j.jsxs)("main",{className:"relative",children:[Object(j.jsx)("img",{src:m,alt:"backpacker",className:"absolute w-full"}),Object(j.jsx)("div",{className:"p-10 lg:pt-48 container mx-auto relative",children:Object(j.jsxs)("section",{className:"bg-green-800 rounded-lg shadow-2xl lg:flex p-20",children:[Object(j.jsx)("img",{src:(e=n.authorImage,O.image(e)).url(),className:"rounded w-32 h-32 lg:w-auto lg:h-96 mr-8"}),Object(j.jsxs)("div",{className:"text-lg flex flex-col justify-center",children:[Object(j.jsxs)("h1",{className:"cursive text-6xl text-green-300 mb-4",children:["Hey there. I'm"," ",Object(j.jsx)("span",{className:"text-green-100",children:n.name})]}),Object(j.jsx)("div",{className:"prose lg:prose-xl text-white",children:Object(j.jsx)(f.a,{blocks:n.bio,projectId:"n1nhe2bs",dataset:"production"})})]})]})})]}):Object(j.jsx)("div",{children:"Loading..."})}var v=g()(h);function y(){var e,t=Object(s.useState)(null),c=Object(x.a)(t,2),n=c[0],a=c[1],r=Object(i.f)().slug;return Object(s.useEffect)((function(){h.fetch('*[slug.current == "'.concat(r,'"]{\n           title,\n           _id,\n           slug,\n           mainImage{\n               asset ->{\n                   _id,\n                   url\n               }\n           },\n           body, \n           "name": author -> name,\n           "authorImage": author-> image\n        }')).then((function(e){return a(e[0])})).catch(console.error)}),[r]),n?Object(j.jsx)("main",{className:"bg-gray-200 min-h-screen p-12",children:Object(j.jsxs)("article",{className:"container shadow-lg mx-auto bg-green-100 rounded-lg",children:[Object(j.jsxs)("header",{className:"relative",children:[Object(j.jsx)("div",{className:"absolute h-full w-full flex items-center justify-center p-8",children:Object(j.jsxs)("div",{className:"bg-white bg-opacity-75 rounded p-12",children:[Object(j.jsx)("h1",{className:"cursive text-3xl lg:text-6xl mb-4",children:n.title}),Object(j.jsxs)("div",{className:"flex justify-center text-gray-800",children:[Object(j.jsx)("img",{src:(e=n.authorImage,v.image(e)).url(),alt:n.name,className:"w-10 h-10 rounded-full"}),Object(j.jsx)("p",{className:"cursive flex items-center pl-2 text-2xl",children:n.name})]})]})}),Object(j.jsx)("img",{src:n.mainImage.asset.url,alt:n.title,className:"w-full object-cover rounded-t",style:{height:"400px"}})]}),Object(j.jsx)("div",{className:"px-16 lg:px-48 y-12 lg:py-20 prose lg:prose-xl max-w-full",children:Object(j.jsx)(f.a,{blocks:n.body,projectId:"n1nhe2bs",dataset:"production"})})]})}):Object(j.jsx)("div",{children:"Loading ..."})}function w(){var e=Object(s.useState)(null),t=Object(x.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){h.fetch("*[_type == 'post']{\n              title,\n              slug,\n              mainImage{\n                  asset->{\n                      _id,\n                      url\n                  },\n                  alt\n              }\n          }").then((function(e){return n(e)})).catch(console.error)}),[]),Object(j.jsx)("main",{className:"bg-green-100 min-h-screen p-12",children:Object(j.jsxs)("section",{className:"container mx-auto",children:[Object(j.jsx)("h1",{className:"text-5xl flex justify-center cursive",children:"Blog Posts"}),Object(j.jsxs)("h2",{className:"text-lg text-grat-600 flex justify-center mb-12",children:["Things I like to talk about."," "]}),Object(j.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:c&&c.map((function(e,t){return Object(j.jsx)("article",{children:Object(j.jsx)(l.b,{to:"/post/"+e.slug.current,children:Object(j.jsxs)("span",{className:"block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400",children:[Object(j.jsx)("img",{src:e.mainImage.asset.url,className:"w-full h-full rounded-r object-cover absolute"}),Object(j.jsx)("span",{className:"block relative h-full flex justify-end items-end pr-4 pb-4",children:Object(j.jsx)("h3",{className:"text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded",children:e.title})})]},t)},e.slug.current)})}))})]})})}function k(){var e=Object(s.useState)(null),t=Object(x.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){h.fetch('*[_type == "project"]{\n            title,\n            date,\n            place,\n            description,\n            projectType,\n            link,\n            tags\n        }').then((function(e){return n(e)})).catch(console.error)}),[]),Object(j.jsx)("main",{className:"bg-green-100 min-h-screen p-12",children:Object(j.jsxs)("section",{className:"container mx-auto",children:[Object(j.jsx)("h1",{className:"text-5xl flex justify-center cursive",children:"Projects"}),Object(j.jsx)("h2",{className:"text-lg text-gray-600 flex justify-center mb-12",children:"Welcome to projects page!"}),Object(j.jsx)("section",{className:"grid grid-cols-2 gap-8",children:c&&c.map((function(e,t){return Object(j.jsxs)("article",{className:"relative rounded-lg shadow-xl bg-white p-16",children:[Object(j.jsx)("h3",{className:"text-gray-800 text-3xl font-bold mb-2 hover:text-red-700",children:Object(j.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.title})}),Object(j.jsxs)("div",{className:"text-gray-500 text-xs space-x-4",children:[Object(j.jsxs)("span",{children:[Object(j.jsxs)("strong",{className:"font-bold",children:["Finished on"," "]}),new Date(e.date).toLocaleDateString()]}),Object(j.jsxs)("span",{children:[Object(j.jsxs)("strong",{className:"font-bold",children:["Company"," "]}),e.place]}),Object(j.jsxs)("span",{children:[Object(j.jsxs)("strong",{className:"font-bold",children:["Type"," "]}),e.projectType]}),Object(j.jsx)("p",{className:"my-6 text-lg text-gray-700 leading-relaxed",children:e.description}),Object(j.jsxs)("a",{href:e.link,rel:"noopener noreferrer",target:"_blank",className:"text-red-500 font-bold hover:underline hover:text-red-400 text-xl",children:["View the project"," ",Object(j.jsx)("span",{role:"img","aria-label":"right pointer",children:"\u2714"})]})]})]})}))})]})})}var I=c(19);function S(){return Object(j.jsx)("header",{className:"bg-red-600",children:Object(j.jsxs)("div",{className:"container mx-auto flex justify-between ",children:[Object(j.jsxs)("nav",{className:"flex",children:[Object(j.jsx)(l.c,{to:"/",exact:!0,activeClassName:"text-white",className:"inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest",children:"Saurav"}),Object(j.jsx)(l.c,{to:"/post",className:"inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800",activeClassName:"text-red-100 bg-red-700",children:"Blog Posts"}),Object(j.jsx)(l.c,{to:"/project",className:"inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800",activeClassName:"text-red-100 bg-red-700",children:"Projects"}),Object(j.jsx)(l.c,{to:"/about",className:"inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800",activeClassName:"text-red-100 bg-red-700",children:"About Me!"})]}),Object(j.jsxs)("div",{className:"inline-flex py-3 px-3 my-6",children:[Object(j.jsx)(I.SocialIcon,{url:"https://twitter.com/sauravs58178019",className:"mr-4",target:"blank",fgColor:"#fff",style:{height:35,width:35}}),Object(j.jsx)(I.SocialIcon,{url:"https://www.linkedin.com/in/saurav-singh-270abb1b4/",className:"mr-4",target:"blank",fgColor:"#fff",style:{height:35,width:35}}),Object(j.jsx)(I.SocialIcon,{url:"https://github.com/saurav-mern",className:"mr-4",target:"blank",fgColor:"#fff",style:{height:35,width:35}})]})]})})}var C=function(){return Object(j.jsxs)(l.a,{children:[Object(j.jsx)(S,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{component:d,path:"/",exact:!0}),Object(j.jsx)(i.a,{component:N,path:"/about"}),Object(j.jsx)(i.a,{component:y,path:"/post/:slug"}),Object(j.jsx)(i.a,{component:w,path:"/post"}),Object(j.jsx)(i.a,{component:k,path:"/project"})]})]})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,130)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),_()},50:function(e,t,c){}},[[129,1,2]]]);
//# sourceMappingURL=main.31ff4ebe.chunk.js.map