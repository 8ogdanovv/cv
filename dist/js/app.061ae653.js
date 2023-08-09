(function(){"use strict";var t={2837:function(t,e,o){var a=o(9242),i=o(3396),n=o.p+"media/open-tab.9731f07b.wav",s=o.p+"media/close-tab.68763d7e.wav";const l=(0,i._)("h6",null,"© 2022 Vadym (vadym4che) Chervoniak",-1),r={class:"audio"},c={ref:"openSound",controls:""},p=(0,i._)("source",{src:n,type:"audio/wav"},null,-1),g={ref:"closeSound",controls:""},h=(0,i._)("source",{src:s,type:"audio/wav"},null,-1);function d(t,e,o,n,s,d){const m=(0,i.up)("WithUkraine"),u=(0,i.up)("HeadName"),v=(0,i.up)("InfoBlock");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(m),(0,i.Wm)(u),(0,i.Wm)(v,{text:"auto-biography-(č)oding",dataObject:t.summary,defaultShow:!1,openSound:d.openSound,closeSound:d.closeSound,keyString:"0",scrollColor:"#ff000088"},null,8,["dataObject","openSound","closeSound"]),(0,i.Wm)(v,{text:"curriculum vitae:",dataObject:t.stages,defaultShow:!1,openSound:d.openSound,closeSound:d.closeSound,keyString:"1",scrollColor:"#ffa50088"},null,8,["dataObject","openSound","closeSound"]),(0,i.Wm)(v,{text:"demo-pages (folio):",dataObject:t.folio,defaultShow:!0,openSound:d.openSound,closeSound:d.closeSound,keyString:"2",scrollColor:"#ffff00cc"},null,8,["dataObject","openSound","closeSound"]),(0,i.Wm)(v,{text:"main languages:",dataObject:t.languages,defaultShow:!1,openSound:d.openSound,closeSound:d.closeSound,keyString:"3",scrollColor:"#00ff00cc"},null,8,["dataObject","openSound","closeSound"]),(0,i.Wm)(v,{text:"main tech stack:",dataObject:t.toolkit,defaultShow:!1,openSound:d.openSound,closeSound:d.closeSound,keyString:"4",scrollColor:"#00ffffcc"},null,8,["dataObject","openSound","closeSound"]),(0,i.Wm)(v,{text:"interested in:",dataObject:t.interested,defaultShow:!1,openSound:d.openSound,closeSound:d.closeSound,keyString:"5",scrollColor:"#0000ffcc"},null,8,["dataObject","openSound","closeSound"]),(0,i.Wm)(v,{text:"inspired by:",dataObject:t.inspired,defaultShow:!1,openSound:d.openSound,closeSound:d.closeSound,keyString:"6",scrollColor:"#ff00ffcc"},null,8,["dataObject","openSound","closeSound"]),(0,i.Wm)(v,{text:"get in touch:",dataObject:t.contacts,defaultShow:!0,openSound:d.openSound,closeSound:d.closeSound,extraStyles:"contacts",keyString:"7",scrollColor:"#ffffffcc"},null,8,["dataObject","openSound","closeSound"]),l,(0,i.wy)((0,i._)("div",r,[(0,i._)("audio",c,[p,(0,i.Uk)(" Your browser does not support the audio element. ")],512),(0,i._)("audio",g,[h,(0,i.Uk)(" Your browser does not support the audio element. ")],512)],512),[[a.F8,!1]])])}var m=o(7139);const u=t=>((0,i.dD)("data-v-69a12ca1"),t=t(),(0,i.Cn)(),t),v={id:"withUkraine"},w={id:"time"},k=u((()=>(0,i._)("p",null,[(0,i.Uk)("Stand With "),(0,i._)("span",null,"Ukraine")],-1))),b=u((()=>(0,i._)("div",{id:"flag"},[(0,i._)("div",{id:"navy"},"navy"),(0,i._)("div",{id:"gold"},"gold")],-1)));function f(t,e,o,a,n,s){return(0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("div",w,(0,m.zw)(n.currentTime),1),k,b])}var y={name:"WithUkraine",data(){return{currentTime:""}},methods:{updateClock(){const t={},e=(new Date).toLocaleString("nl-BE",t);this.currentTime=e}},mounted(){this.updateClock(),this.clockInterval=setInterval(this.updateClock,1e3)},beforeUnmounted(){clearInterval(this.clockInterval)}},S=o(89);const _=(0,S.Z)(y,[["render",f],["__scopeId","data-v-69a12ca1"]]);var j=_,x=o.p+"img/photo956.46cbbe4b.png";const C={class:"main"},I=(0,i.uE)('<div class="top" data-v-2404b271><h1 data-v-2404b271><span class="vadym" data-v-2404b271><b data-v-2404b271>Vadym</b></span><span class="che" data-v-2404b271><b data-v-2404b271>Chervoniak</b></span></h1><h2 data-v-2404b271><span data-v-2404b271>w</span><span data-v-2404b271>w</span><span data-v-2404b271>w</span><span data-v-2404b271>-</span><span data-v-2404b271>d</span><span data-v-2404b271>e</span><span data-v-2404b271>v</span><span data-v-2404b271>e</span><span data-v-2404b271>l</span><span data-v-2404b271>o</span><span data-v-2404b271>p</span><span data-v-2404b271>e</span><span data-v-2404b271>r</span></h2></div><div class="photo" data-v-2404b271><img src="'+x+'" alt="photo" data-v-2404b271></div>',2),O=[I];function B(t,e,o,a,n,s){return(0,i.wg)(),(0,i.iD)("div",C,O)}var T={name:"HeadName"};const P=(0,S.Z)(T,[["render",B],["__scopeId","data-v-2404b271"]]);var W=P;const A=["href"],V=["src","alt"],D={key:1},L={class:(0,m.C_)(["stick"])};function N(t,e,o,n,s,l){return(0,i.wg)(),(0,i.iD)("div",{class:"block",style:(0,m.j5)(["contacts"===o.extraStyles?{paddingBottom:"3vh"}:{}])},[(0,i._)("div",{class:"toggler",onClick:e[2]||(e[2]=(...t)=>l.toggle&&l.toggle(...t)),style:(0,m.j5)([s.toggleBool?{background:"whitesmoke",color:"var(--viridian)",textShadow:"0 0 0.5vh var(--viridian)"}:{background:"var(--viridian)",color:"whitesmoke",textShadow:"0 0 0.5vh whitesmoke"}])},[(0,i._)("span",{class:(0,m.C_)(["scroll-v-left",[s.toggleBool?"mirrorVertSpan":"normalVertSpan"]]),style:(0,m.j5)([s.toggleBool?{background:"var(--viridian)",color:o.scrollColor,textShadow:"0 0 0.5vh whitesmoke"}:{background:o.scrollColor,color:"var(--viridian)",textShadow:"0 0 0.5vh var(--viridian)"}])},"V",6),(0,i._)("h5",{class:"toggler-title",style:(0,m.j5)([s.toggleBool?{textShadow:"0 0 4px "+o.scrollColor}:{textShadow:"0 0 4px "+s.localScrollColor}]),onMouseover:e[0]||(e[0]=(...t)=>l.applyTextShadow&&l.applyTextShadow(...t)),onMouseout:e[1]||(e[1]=(...t)=>l.resetTextShadow&&l.resetTextShadow(...t))},(0,m.zw)(o.text),37),(0,i._)("span",{class:(0,m.C_)(["scroll-v-right",[s.toggleBool?"mirrorVertSpan":"normalVertSpan"]]),style:(0,m.j5)([s.toggleBool?{background:"var(--viridian)",color:o.scrollColor}:{background:o.scrollColor,color:"var(--viridian)"}])},"V",6)],4),(0,i.wy)((0,i._)("ul",{onClick:e[3]||(e[3]=(...t)=>l.toggle&&l.toggle(...t)),class:(0,m.C_)([o.dataObject[0].link?"wrapper scrollable":"paragraphs scrollable","contacts"===o.extraStyles?"contacts":""]),ref:l.refName},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.dataObject,((t,e)=>((0,i.wg)(),(0,i.iD)("li",{key:e,class:(0,m.C_)([o.dataObject[0].link?"wrapper_li":"paragraph_li"]),style:(0,m.j5)(["contacts"===o.extraStyles?{justifyContent:"space-between",border:"none",width:"25%",margin:"1vh"}:{justifyContent:"space-between"}])},[o.dataObject[e].link&&o.dataObject[e].title?((0,i.wg)(),(0,i.iD)("a",{key:0,href:t.link},[o.dataObject[e].image?((0,i.wg)(),(0,i.iD)("img",{key:0,src:t.image,alt:t.title,style:(0,m.j5)(["contacts"!==o.extraStyles?{height:"11.5vh",width:"auto"}:{}])},null,12,V)):(0,i.kq)("",!0),(0,i.Uk)(" "+(0,m.zw)(t.title),1)],8,A)):((0,i.wg)(),(0,i.iD)("p",D,(0,m.zw)(t.paragraph),1))],6)))),128))],2),[[a.F8,s.toggleBool]]),(0,i.wy)((0,i._)("div",L,null,512),[[a.F8,s.toggleBool]])],4)}var F={name:"InfoBlock",props:{text:String,dataObject:Object,defaultShow:Boolean,extraStyles:String,keyString:String,openSound:{type:Function,required:!0},closeSound:{type:Function,required:!0},scrollColor:String},computed:{refName(){return"info"+this.keyString}},data(){return{toggleBool:!1,keyNumber:Number(this.keyString),localScrollColor:this.scrollColor,soundCouldBePlayed:!this.defaultShow}},methods:{handleOpenSound(){this.openSound()},handleCloseSound(){this.closeSound()},scroll(){const t=document.getElementsByClassName("scrollable")[this.keyString];setTimeout((()=>{t.scrollTop=t.scrollHeight}),0),this.soundCouldBePlayed&&this.handleOpenSound(),this.soundCouldBePlayed=!0},toggle(){return!0===this.toggleBool?this.handleCloseSound():!1===this.toggleBool&&this.scroll(),this.toggleBool=!this.toggleBool,this.toggleBool},applyTextShadow(){this.localScrollColor=this.scrollColor},resetTextShadow(){this.localScrollColor="var(--viridian)"}},mounted(){this.defaultShow&&this.toggle()}};const G=(0,S.Z)(F,[["render",N],["__scopeId","data-v-f982dcc2"]]);var M=G,E={summary:[{paragraph:"I've earned my own very first PC"},{paragraph:"By working summer holidays at 2003"},{paragraph:"I'm a `web-dev-loco` (if you will) code-addict"},{paragraph:"Devoted to development with JavaScript"},{paragraph:"I'm experienced enough to exact know"},{paragraph:"Using DOCs, AI, Google and Stackoverflow"}],stages:[{paragraph:"Step-by-step"},{paragraph:'\n          Living by the principle "Viam supervadet vadens" - "He who walks will overcome the road!", as my mother told\n          me, and when I took my first steps together with my father, from childhood I had become more and more sure\n          that nothing is unattainable for a Person.\n        '},{paragraph:"Top-3"},{paragraph:"\n          In the yard and on the sports field, I was always in the top three, among those who led the teams. After my\n          parents sent me to school (majoring in computer science) at the age of 6, I was interested in new subjects every\n          year, participated and took places in local inter school Olympiads in mathematics (VI), physics (II), chemistry (III),\n          foreign language (English), world literature.\n          In the higher school (at the electrification department) I was the second headman, received an increased\n          scholarship, graduated with a diploma with honors. At the university (green energy major, physics faculty), I was\n          one of three in the group who was awarded an increased scholarship.\n        "},{paragraph:"Where there’s a Will, there’s a Way"},{paragraph:'\n          When I was a seller, I increased the sales and rating of the store. When I was a self-employed electrician, people\n          knew me and recommended my services to their friends. When I was a call manager, the "most difficult"\n          customers were referred to me. When I worked at the factory, I was the second specialist after the foreman.\n          When I worked at a car service, on my own I turned a "seasonal business" into a stable business spot, where\n          people came to me for service by appointment.\n        '},{paragraph:"there is no time like the Present"},{paragraph:"\n          To buy my first PC in 2003, I earned money working as a carpenter's helper during the summer holidays. Since\n          then, I have been interested in digitization, technology and development in general, and it is still with me today.\n        "},{paragraph:"Fortune favors the brave"},{paragraph:". . . ."}],history:[{paragraph:"\n        I was born into a family of two engineers, when computers worked on punched cards."},{paragraph:"\n        I was sent to a school with a focus on computer science. It was BASIC and PASCAL.\n    "},{paragraph:"\n        I participated in educational competitions and took not the last places at the local level (mathematics, physics, chemistry, English).\n    "},{paragraph:"\n        I earned my first PC when I was 15 - in 2003, working part-time during the holidays.\n    "},{paragraph:"\n        These were Windows XP, Fruity Loops, Sound Forge, Audition, Photoshop.\n    "},{paragraph:"\n        I was engaged in sound processing at a local recording studio and printing on mugs, clothes, etc.\n    "},{paragraph:"Since 2014, I seriously thought about moving into IT, following my brother, who started a DevOps career.\n      "},{paragraph:"\n        First it was Java. Then Web Basics. Then Python with the Python Institute.\n        At first i began my self-educating with Flask and Django.\n        Thanks to the Harvard CS50 open courses, I also got acquainted with the low-level C language.\n    "},{paragraph:"\n        I am studying the generally accepted standards HTML5, CSS3, ES6.\n        I like JavaScript because with the appearance of NodeJS it took root on the server as a backend language as well.\n    "}],languages:[{link:"www.iso.org/standard/74528.html www.open-std.org/jtc1/sc22/wg14/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/200px-The_C_Programming_Language_logo.svg.png",title:"C"},{link:"https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/2048px-Bash_Logo_Colored.svg.png",title:"born again shell"},{link:"https://www.python.org/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png",title:"Python"},{link:"https://html.spec.whatwg.org/",image:"https://cdn-icons-png.flaticon.com/512/732/732212.png",title:"HTML"},{link:"https://www.w3.org/Style/CSS/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",title:"CSS"},{link:"https://sass-lang.com/",image:"https://sass-lang.com/assets/img/logos/logo.svg",title:"SASS"},{link:"https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",image:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433",title:"JavaScript"},{link:"https://www.typescriptlang.org/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",title:"TypeScript"},{link:"https://www.json.org/json-en.html",image:"https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg",title:"JSON"},{link:"https://www.iso.org/obp/ui/#iso:std:iso-iec:9075:-1:ed-5:v1:en",image:"https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png?20210130181641",title:"SQL"},{link:"https://go.dev/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/768px-Go_Logo_Blue.svg.png",title:"Go"}],toolkit:[{link:"https://code.visualstudio.com/",image:"https://code.visualstudio.com/favicon.ico",title:"VS Code"},{link:"https://nodejs.org/",image:"https://nodejs.org/static/images/logo.svg",title:"Node JS"},{link:"https://www.npmjs.com/",image:"https://static.npmjs.com/f1786e9b7cba9753ca7b9c40e8b98f67.png",title:"npm"},{link:"https://pnpm.io/",image:"https://res.cloudinary.com/practicaldev/image/fetch/s--GxwhFdGl--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1797/ae6be511-5635-4ab3-8ac1-762ccf317ac8.png",title:"pnpm"},{link:"https://git-scm.com/",image:"https://git-scm.com/favicon.ico",title:"git"},{link:"https://vitejs.dev/",image:"https://vitejs.dev/logo.svg",title:"Vite"},{link:"https://vuejs.org/",image:"https://vuejs.org/images/logo.png",title:"Vue.js"},{link:"https://react.dev/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",title:"ReactJS"},{link:"https://router.vuejs.org/",image:"https://router.vuejs.org/logo.png",title:"Vue Router"},{link:"https://reactrouter.com/en/main",image:"https://reactrouter.com/_brand/react-router-mark-color-inverted.png",title:"React-router"},{link:"https://angular.io/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",title:"Angular"},{link:"https://flask.palletsprojects.com/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png",title:"Flask"},{link:"https://www.djangoproject.com/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/2560px-Django_logo.svg.png",title:"Django"},{link:"https://pinia.vuejs.org/",image:"https://pinia.vuejs.org/logo.svg",title:"Pinia"},{link:"https://testing-library.com/docs/vue-testing-library/intro/",image:"https://testing-library.com/img/octopus-64x64.png",title:"@testing-library/vue"},{link:"https://www.cypress.io/",image:"https://www.cypress.io/images/layouts/navbar-brand.svg",title:"Cypress"},{link:"https://vitesse.netlify.app/",image:"https://vitesse.netlify.app/pwa-192x192.png",title:"Vitesse"},{link:"https://vuetifyjs.com/en/",image:"https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg",title:"Vuetify"},{link:"https://tailwindcss.com/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333",title:"Tailwind CSS"},{link:"https://bulma.io/",image:"https://bulma.io/assets/Bulma%20Icon.png",title:"Bulma"},{link:"https://getbootstrap.com/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",title:"Bootstrap"},{link:"https://vuestorefront.io/",image:"https://images.contentstack.io/v3/assets/blt189c1df68c6b48d7/blte44e5d5da716daba/624be65852b58c08a42de740/vsf_logo.svg?auto=webp&height=40",title:"Vue Storefront"},{link:"https://vuepress.vuejs.org/",image:"https://vuepress.vuejs.org/hero.png",title:"VuePress"},{link:"https://github.com/madlabsinc/mevn-cli",image:"https://camo.githubusercontent.com/ee7c64dc429a3befe69cfa0233a46d763a5ba81924fabceab69dad0f71eb2279/68747470733a2f2f692e696d6775722e636f6d2f4e5635317438342e6a7067",title:"MEVN"},{link:"https://nuxtjs.org/",image:"https://nuxt.com/assets/design-kit/logo/icon-green.svg",title:"Nuxt.js"},{link:"https://expressjs.com/",image:"https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",title:"Express.js"},{link:"https://cloud.google.com/",image:"https://static-00.iconduck.com/assets.00/google-cloud-platform-logo-icon-2048x1824-pg4wzspq.png",title:"GCP"},{link:"https://aws.amazon.com/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",title:"AWS"},{link:"https://www.postman.com/",image:"https://cdn.icon-icons.com/icons2/1381/PNG/512/postman_94739.png",title:"Postman"},{link:"https://www.figma.com/",image:"https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",title:"Figma"}],interested:[{link:"https://go.dev/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/768px-Go_Logo_Blue.svg.png",title:"Go"},{link:"https://www.docker.com/",image:"https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",title:"Docker"},{link:"https://kubernetes.io/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2109px-Kubernetes_logo_without_workmark.svg.png",title:"Kubernetes"},{link:"https://openai.com/",image:"https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png",title:"AI"},{link:"https://www.khronos.org/webgl/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WebGL_Logo.svg/1024px-WebGL_Logo.svg.png",title:"WebGL"},{link:"https://threejs.org/",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/1200px-Three.js_Icon.svg.png",title:"Three.js"},{link:"https://electronjs.org/",image:"https://cdn.icon-icons.com/icons2/2552/PNG/512/electron_browser_logo_icon_152997.png",title:"Electronjs.js"}],folio:[{link:"https://vadym4che.github.io/AIB/",image:"./01.png",title:"AiB (dynamic) logo"},{link:"https://vadym4che.github.io/fireSnow/",image:"./02.png",title:"Fire's'Now - nice SCSS snow"},{link:"https://vadym4che.github.io/clicker-js/",image:"./03.png",title:"Clicker -- simple test game"},{link:"https://vadym4che.github.io/tic-tac-toe-js/",image:"./04.png",title:"Tic-Tac-Toe (with drag'n'drop)"},{link:"https://vadym4che.github.io/wordle-js/",image:"./05.png",title:"Wordle guessing game (ukrainian)"},{link:"https://vadym4che.github.io/fetch-api-js/",image:"./06.png",title:"Fetch API with Rick and Morthy"},{link:"https://vadym4che.github.io/random-user-vue/",image:"./07.png",title:"Random user getting with vue.js"},{link:"https://vadym4che.github.io/travel-app-vue/",image:"./08.png",title:"Vue Travel app (SPA vue-router)"},{link:"https://vadym4che.github.io/food-cart-vue/",image:"./09.png",title:"Food delivery app with cart (vue)"},{link:"https://vadym4che.github.io/shop-react/",image:"./10.png",title:"Shop example (using ReactJS)"},{link:"https://vadym4che.github.io/gpt3-react/",image:"./11.png",title:"Responsive product landing (react)"},{link:"https://vadym4che.github.io/my-server-io/",image:"./12.png",title:"Loading - unique-shaped blocks"},{link:"https://vadym4che.github.io/json-list/",image:"./13.png",title:"JSON -> <ul /> - easy!)"},{link:"https://vadym4che.github.io/weather-app/",image:"./14.png",title:"Daily forecast app (Vue, API)"},{link:"https://vadym4che.github.io/rgb-to-hex/",image:"./15.png",title:"RGB to #hex converter"},{link:"https://vadym4che.github.io/layout_miami/",image:"./16.png",title:"MyBike - simple SCSS"},{link:"https://github.com/vadym4che/synthwave-black-neon",image:"./17.png",title:"Synth '84 theme deep-dark remake"},{link:"https://vadym4che.github.io/react_dynamic-list-of-goods/",image:"./18.png",title:"Dynamic goods-list (react, bulma)"},{link:"https://vadym4che.github.io/react_movies-list-add-form/",image:"./19.png",title:"Movies-list add-form (react)"},{link:"https://vadym4che.github.io/react_people-table-basics/#/people",image:"./20.png",title:"People table with API call (react)"},{link:"https://vadym4che.github.io/react_dynamic-list-of-todos/",image:"./21.png",title:"Dynamic todos list (react)"},{link:"https://vadym4che.github.io/react_todo-app-with-api/",image:"./22.png",title:"todos app with API (react, bulma)"},{link:"https://fe-jan23-team-six.github.io/product-catalog/",image:"./23.png",title:"Nice Gatgets - online store (PERN)"},{link:"https://vadym4che.github.io/orders-and-products-client/",image:"./24.png",title:"Another full-stack (MEVN) app"},{link:"https://vadym4che.github.io/abz-agency-test-assignment/",image:"./25.png",title:"abz.agency GET, POST (react) demo"},{link:"https://vadym4che.github.io/json-parser/",image:"./26.png",title:"JSON parser for fignel.com"},{link:"https://your-cocktail-dugu.vercel.app/",image:"./27.png",title:"Y(our)-cocktail (Nuxt2, vercel)"}],contacts:[{link:"+380505444199",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Phone_Shiny_Icon.svg/768px-Phone_Shiny_Icon.svg.png",title:"+380505444199"},{link:"mailto:vadym4che@gmail.com?subject=meeting",image:"https://iconarchive.com/download/i60229/zerode/plump/Mail.ico",title:"vadym4che@gmail.com"},{link:"https://t.me/vadym4che",image:"https://cdn3.iconfinder.com/data/icons/social-networks-34/96/social-22-512.png",title:"@vadym4che"}],inspired:[{link:"https://mate.academy/",image:"https://mate.academy/static/favicon/favicon-194x194.png",title:"Mate Academy"},{link:"https://cs50.harvard.edu/",image:"https://cs50.harvard.edu/college/2022/fall/favicon.ico?1670890523",title:"cs50"},{link:"https://www.mooc.org/",image:"https://www.mooc.org/hubfs/Mooc.org%20Logo.svg",title:"Massive Open Online Courses"},{link:"https://www.edx.org/",image:"https://www.edx.org/images/logos/edx-logo-elm.svg",title:"edX"},{link:"https://www.classcentral.com/",image:"https://www.classcentral.com/favicon-32x32.png",title:"class central"},{link:"https://www.udacity.com/",image:"https://www.udacity.com/images/svgs/udacity-tt-logo.svg",title:"Udacity"},{link:"https://ossu.firebaseapp.com/#/",image:"https://ossu.firebaseapp.com/favicon.ico?v2",title:"OSSU"},{link:"https://www.codewars.com/",image:"https://uploads-ssl.webflow.com/62e95dddfb380a0e61193e7d/6363e7db70db732290fa3db6_logo-256.png",title:"CodeWars"},{link:"https://www.w3schools.com/",image:"https://www.w3schools.com/favicon.ico",title:"W3School"},{link:"https://www.vuemastery.com/",image:"https://www.vuemastery.com/icons/mstile-144x144.png",title:"VueMastery"},{link:"https://www.vuetelescope.com/",image:"https://www.vuetelescope.com/favicon.ico",title:"Vue Telescope"},{link:"https://madewithvuejs.com/",image:"https://madewithvuejs.com/mandant/madewithvuejs/images/logo.png",title:"made with vue.js"},{link:"https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode",image:"https://robbowen.gallerycdn.vsassets.io/extensions/robbowen/synthwave-vscode/0.1.15/1670610064896/Microsoft.VisualStudio.Services.Icons.Default",title:"SynthWave '84"},{link:"https://pnpm.io/",image:"https://pnpm.io/img/pnpm-no-name-with-frame.svg",title:"pnpm"},{link:"https://rubjo.github.io/victor-mono/",image:"https://rubjo.github.io/victor-mono/favicon.ico",title:"Victor Mono font"},{link:"https://github.com/robb0wen",image:"https://avatars.githubusercontent.com/u/13797889?v=4",title:"Robb Owen"},{link:"https://github.com/rubjo",image:"https://avatars.githubusercontent.com/u/42270947?v=4",title:"Rubjo"},{link:"https://github.com/zkochan",image:"https://avatars.githubusercontent.com/u/1927579?v=4",title:"Zoltan Kochan"},{link:"https://github.com/danielroe",image:"https://avatars.githubusercontent.com/u/28706372?v=4",title:"Daniel Roe"},{link:"https://github.com/mhrynko",image:"https://avatars.githubusercontent.com/u/123093629?v=4",title:"Misha Hrynko"},{link:"https://github.com/readme/stories/evan-you",image:"https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=180&fm=avif",title:"Evan You"},{link:"https://sarahdrasnerdesign.com/",image:"https://avatars.githubusercontent.com/u/2281088?v=4",title:"Sarah Drasner"},{link:"https://www.programwitherik.com/",image:"https://avatars.githubusercontent.com/u/65630?v=4",title:"Erik Hanchett"},{link:"https://github.com/sergii-nosachenko",image:"https://avatars.githubusercontent.com/u/54940595?v=4",title:"Sergii Nosachenko"}]},z={name:"App",components:{WithUkraine:j,HeadName:W,InfoBlock:M},data(){return{...E}},methods:{audioPreload(){let t=this.$refs.openSound,e=this.$refs.closeSound;t.preload="auto",t.load(),e.preload="auto",e.load()},openSound(){const t=this.$refs.openSound;t.play()},closeSound(){const t=this.$refs.closeSound;t.play()}},mounted(){}};const R=(0,S.Z)(z,[["render",d]]);var J=R;(0,a.ri)(J).mount("#app")}},e={};function o(a){var i=e[a];if(void 0!==i)return i.exports;var n=e[a]={exports:{}};return t[a].call(n.exports,n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,a,i,n){if(!a){var s=1/0;for(p=0;p<t.length;p++){a=t[p][0],i=t[p][1],n=t[p][2];for(var l=!0,r=0;r<a.length;r++)(!1&n||s>=n)&&Object.keys(o.O).every((function(t){return o.O[t](a[r])}))?a.splice(r--,1):(l=!1,n<s&&(s=n));if(l){t.splice(p--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var p=t.length;p>0&&t[p-1][2]>n;p--)t[p]=t[p-1];t[p]=[a,i,n]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/cv/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,n,s=a[0],l=a[1],r=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(r)var p=r(o)}for(e&&e(a);c<s.length;c++)n=s[c],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(p)},a=self["webpackChunklanding_cv_vue"]=self["webpackChunklanding_cv_vue"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(2837)}));a=o.O(a)})();
//# sourceMappingURL=app.061ae653.js.map