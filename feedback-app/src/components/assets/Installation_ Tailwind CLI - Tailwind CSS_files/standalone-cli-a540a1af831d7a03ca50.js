(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4926],{16018:function(e,t){"use strict";t.Z="/_next/static/media/card.7a0ad39535f31e4bf03373546dc0be43.jpg"},41557:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return h},default:function(){return k}});var n=a(159),s=a(10219),o=(a(67294),a(3905)),i=(a(41664),a(49485)),r=a(34304),l=a(29852),c=a(6953),d=a(16018);const p=["components"],u={meta:{title:"Standalone CLI: Use Tailwind CSS without Node.js",description:"Today we're announcing a new standalone CLI build that gives you the full power of Tailwind CLI in a self-contained executable \u2014 no Node.js or npm required.",date:"2021-12-16T16:00:00.000Z",authors:[c.Oq],image:d.Z},slug:"standalone-cli",tableOfContents:[{title:"Get started",slug:"get-started",children:[]},{title:"How does it work?",slug:"how-does-it-work",children:[]},{title:"Which CLI should I use?",slug:"which-cli-should-i-use",children:[]}]},m=l.B;var h=!0;function k(e){let{components:t}=e,a=(0,s.Z)(e,p);return(0,o.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tailwind CSS is written in JavaScript and distributed as an npm package, which means you\u2019ve always had to have Node.js and npm installed to use it."),(0,o.kt)("p",null,"This has made it harder to integrate into projects where using npm isn\u2019t always common, and with tools like ",(0,o.kt)("a",{parentName:"p",href:"https://world.hey.com/dhh/rails-7-will-have-three-great-answers-to-javascript-in-2021-8d68191b"},"Rails")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/phoenixframework/phoenix/pull/4377"},"Phoenix")," both moving away from npm by default, we needed to find a way for people to use Tailwind in these projects without forcing them to adopt an entirely separate ecosystem of tooling."),(0,o.kt)("p",null,"Today we\u2019re announcing a new ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tailwindlabs/tailwindcss/releases/latest"},"standalone CLI build")," that gives you the full power of Tailwind CLI in a self-contained executable \u2014 no Node.js or npm required."),(0,o.kt)("hr",null),(0,o.kt)(r.X,{level:2,id:"get-started",nextElement:{type:"paragraph"}},"Get started"),(0,o.kt)("p",null,"To install it, grab the executable for your platform from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tailwindlabs/tailwindcss/releases/latest"},"latest release")," on GitHub, making sure to give it executable permissions:"),(0,o.kt)(i.M,{filename:"Terminal"},(0,o.kt)("pre",{className:"language-shell"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},(0,o.kt)("span",{parentName:"code",className:"token comment"},"# Example for macOS arm64"),"\n",(0,o.kt)("span",{parentName:"code",className:"token function"},"curl")," -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64\n",(0,o.kt)("span",{parentName:"code",className:"token function"},"chmod")," +x tailwindcss-macos-arm64\n",(0,o.kt)("span",{parentName:"code",className:"token function"},"mv")," tailwindcss-macos-arm64 tailwindcss"))),(0,o.kt)("p",null,"Now you can use it just like our npm-distributed CLI tool:"),(0,o.kt)(i.M,{filename:"Terminal"},(0,o.kt)("pre",{className:"language-shell"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},(0,o.kt)("span",{parentName:"code",className:"token comment"},"# Create a tailwind.config.js file"),"\n./tailwindcss init\n\n",(0,o.kt)("span",{parentName:"code",className:"token comment"},"# Start a watcher"),"\n./tailwindcss -i input.css -o output.css --watch\n\n",(0,o.kt)("span",{parentName:"code",className:"token comment"},"# Compile and minify your CSS for production"),"\n./tailwindcss -i input.css -o output.css --minify"))),(0,o.kt)("p",null,"We\u2019ve even bundled the latest versions of all of our first-party plugins, so if you want to use them in your project, just ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," them in your ",(0,o.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file like you would in a Node-based project:"),(0,o.kt)(i.M,{filename:"tailwind.config.js"},(0,o.kt)("pre",{className:"language-js"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module",(0,o.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,o.kt)("span",{parentName:"code",className:"token property-access"},"exports")," ",(0,o.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,o.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,o.kt)("span",{parentName:"code",className:"token comment"},"// ..."),"\n  ",(0,o.kt)("span",{parentName:"code",className:"token literal-property property"},"plugins"),(0,o.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,o.kt)("span",{parentName:"code",className:"token punctuation"},"["),"\n    ",(0,o.kt)("span",{parentName:"code",className:"token function"},"require"),(0,o.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,o.kt)("span",{parentName:"code",className:"token string"},"'@tailwindcss/forms'"),(0,o.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,o.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",(0,o.kt)("span",{parentName:"code",className:"token function"},"require"),(0,o.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,o.kt)("span",{parentName:"code",className:"token string"},"'@tailwindcss/typography'"),(0,o.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,o.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n  ",(0,o.kt)("span",{parentName:"code",className:"token punctuation"},"]"),"\n",(0,o.kt)("span",{parentName:"code",className:"token punctuation"},"}")))),(0,o.kt)("p",null,"You get all the power of our standard npm-distributed CLI in a convenient, portable package \u2014 no dependencies required."),(0,o.kt)("hr",null),(0,o.kt)(r.X,{level:2,id:"how-does-it-work",nextElement:{type:"paragraph"}},"How does it work?"),(0,o.kt)("p",null,"We didn\u2019t rewrite Tailwind in Rust or anything (",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/malfaitrobin/status/1446905317825069063"},"yet\u2026"),") \u2014 we\u2019re actually using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vercel/pkg"},"pkg"),", a really cool project by ",(0,o.kt)("a",{parentName:"p",href:"https://vercel.com"},"Vercel")," that lets you turn a Node.js project into an executable that can be run without installing Node.js by bundling all of the parts your project needs right into the executable itself."),(0,o.kt)("p",null,"This is what makes it possible for you to still use a ",(0,o.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file with the full power of JavaScript, rather than a static format like JSON."),(0,o.kt)("hr",null),(0,o.kt)(r.X,{level:2,id:"which-cli-should-i-use",nextElement:{type:"paragraph"}},"Which CLI should I use?"),(0,o.kt)("p",null,"If you are already using npm in your project, use the npm-distributed version of our CLI that we\u2019ve always provided. It\u2019s simpler to update, the file size is smaller, and you\u2019re already in the ecosystem anyways \u2014 there\u2019s no benefit at all to using the standalone build."),(0,o.kt)("p",null,"If on the other hand you\u2019re working on a project where you don\u2019t otherwise need Node.js or npm, the standalone build can be a great choice. If Tailwind was the only reason you had a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file, this is probably going to feel like a nicer solution."))}k.isMDXComponent=!0,k.layoutProps=u},49485:function(e,t,a){"use strict";a.d(t,{M:function(){return o}});var n=a(79836),s=a(85893);function o({filename:e,children:t}){return(0,s.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,s.jsx)(n.n,{primary:{name:e},showTabMarkers:!1}),(0,s.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:t})]})}},79836:function(e,t,a){"use strict";a.d(t,{n:function(){return o}});var n=a(86010),s=a(85893);function o({primary:e,secondary:t=[],showTabMarkers:a=!0,side:o,translucent:i=!1,children:r}){return(0,s.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,s.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[e.name,a&&(e.saved?(0,s.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,s.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,s.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,s.jsxs)("div",{className:(0,n.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===o?"rounded-tl lg:rounded-tr":"rounded-tl",i&&"dark:bg-slate-800/50"),children:[t.map((({name:e,open:t=!0,className:a})=>(0,s.jsx)("div",{className:(0,n.Z)("px-4 py-1 border-r border-slate-200/5",a,{italic:!t}),children:e},e))),r&&(0,s.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:r})]})]})}},17893:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/standalone-cli",function(){return a(41557)}])}},function(e){e.O(0,[9774,184,4327,489,6183,2888,179],(function(){return t=17893,e(e.s=t);var t}));var t=e.O();_N_E=t}]);