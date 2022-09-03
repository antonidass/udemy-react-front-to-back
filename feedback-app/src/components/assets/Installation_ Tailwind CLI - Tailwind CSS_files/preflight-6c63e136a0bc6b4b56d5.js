(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7112],{21370:function(e,a){"use strict";a.Z="/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"},46841:function(e,a){"use strict";a.Z=e=>Object.getOwnPropertySymbols(e).filter((a=>Object.prototype.propertyIsEnumerable.call(e,a)))},64290:function(e){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},37777:function(e){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},27076:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return N}});var n=t(159),s=t(10219),p=(t(67294),t(3905)),o=t(41664),l=t(49485),r=t(34304),c=t(27606),i=t(83096);t(94110),t(85893);const m=["components"],k={Layout:c.L,meta:{title:"Preflight",description:"An opinionated set of base styles for Tailwind projects."},slug:"preflight",tableOfContents:[{title:"Overview",slug:"overview",children:[]},{title:"Default margins are removed",slug:"default-margins-are-removed",children:[]},{title:"Headings are unstyled",slug:"headings-are-unstyled",children:[]},{title:"Lists are unstyled",slug:"lists-are-unstyled",children:[{title:"Accessibility considerations",slug:"accessibility-considerations",children:[]}]},{title:"Images are block-level",slug:"images-are-block-level",children:[]},{title:"Border styles are reset globally",slug:"border-styles-are-reset-globally",children:[]},{title:"Buttons have a default outline",slug:"buttons-have-a-default-outline",children:[]},{title:"Extending Preflight",slug:"extending-preflight",children:[]},{title:"Disabling Preflight",slug:"disabling-preflight",children:[]}]},u=i.X_;function N(e){let{components:a}=e,t=(0,s.Z)(e,m);return(0,p.kt)(u,(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)(r.X,{level:2,id:"overview",nextElement:{type:"paragraph"},hidden:!0,mdxType:"Heading"},"Overview"),(0,p.kt)("p",null,"Built on top of ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/modern-normalize"},"modern-normalize"),", Preflight is a set of base styles for Tailwind projects that are designed to smooth over cross-browser inconsistencies and make it easier for you to work within the constraints of your design system."),(0,p.kt)("p",null,"Tailwind automatically injects these styles when you include ",(0,p.kt)("inlineCode",{parentName:"p"},"@tailwind base")," in your CSS:"),(0,p.kt)("pre",{className:"language-css"},(0,p.kt)("code",{parentName:"pre",className:"language-css"},(0,p.kt)("span",{parentName:"code",className:"token atrule"},(0,p.kt)("span",{parentName:"span",className:"token rule"},"@tailwind")," base",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},";"))," ",(0,p.kt)("span",{parentName:"code",className:"token comment"},"/* Preflight will be injected here */"),"\n\n",(0,p.kt)("span",{parentName:"code",className:"token atrule"},(0,p.kt)("span",{parentName:"span",className:"token rule"},"@tailwind")," components",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},";")),"\n\n",(0,p.kt)("span",{parentName:"code",className:"token atrule"},(0,p.kt)("span",{parentName:"span",className:"token rule"},"@tailwind")," utilities",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},";")))),(0,p.kt)("p",null,"While most of the styles in Preflight are meant to go unnoticed \u2014 they simply make things behave more like you\u2019d expect them to \u2014 some are more opinionated and can be surprising when you first encounter them."),(0,p.kt)("p",null,"For a complete reference of all the styles applied by Preflight, ",(0,p.kt)("a",{parentName:"p",href:"https://unpkg.com/tailwindcss@%5E3/src/css/preflight.css"},"see the stylesheet"),"."),(0,p.kt)("hr",null),(0,p.kt)(r.X,{level:2,id:"default-margins-are-removed",nextElement:{type:"paragraph"}},"Default margins are removed"),(0,p.kt)("p",null,"Preflight removes all of the default margins from elements like headings, blockquotes, paragraphs, etc."),(0,p.kt)("pre",{className:"language-css"},(0,p.kt)("code",{parentName:"pre",className:"language-css"},(0,p.kt)("span",{parentName:"code",className:"token selector"},"blockquote",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\ndl",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\ndd",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nh1",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nh2",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nh3",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nh4",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nh5",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nh6",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nhr",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nfigure",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\np",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\npre")," ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token property"},"margin"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},":")," ",(0,p.kt)("span",{parentName:"code",className:"token number"},"0"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"}"))),(0,p.kt)("p",null,"This makes it harder to accidentally rely on margin values applied by the user-agent stylesheet that are not part of your spacing scale."),(0,p.kt)("hr",null),(0,p.kt)(r.X,{level:2,id:"headings-are-unstyled",nextElement:{type:"paragraph"}},"Headings are unstyled"),(0,p.kt)("p",null,"All heading elements are completely unstyled by default, and have the same font-size and font-weight as normal text."),(0,p.kt)("pre",{className:"language-css"},(0,p.kt)("code",{parentName:"pre",className:"language-css"},(0,p.kt)("span",{parentName:"code",className:"token selector"},"h1",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nh2",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nh3",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nh4",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nh5",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nh6")," ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token property"},"font-size"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},":")," inherit",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token property"},"font-weight"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},":")," inherit",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"}"))),(0,p.kt)("p",null,"The reason for this is two-fold:"),(0,p.kt)("ul",{role:"list"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"It helps you avoid accidentally deviating from your type scale"),". By default, the browsers assigns sizes to headings that don\u2019t exist in Tailwind\u2019s default type scale, and aren\u2019t guaranteed to exist in your own type scale."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"In UI development, headings should often be visually de-emphasized"),". Making headings unstyled by default means any styling you apply to headings happens consciously and deliberately.")),(0,p.kt)("p",null,"You can always add default header styles to your project by ",(0,p.kt)(o.default,{href:"/docs/adding-base-styles",passHref:!0},(0,p.kt)("a",null,"adding your own base styles")),"."),(0,p.kt)("p",null,"If you\u2019d like to selectively introduce sensible default heading styles into article-style parts of a page, we recommend the ",(0,p.kt)(o.default,{href:"/docs/typography-plugin/",passHref:!0},(0,p.kt)("a",null,"@tailwindcss/typography plugin")),"."),(0,p.kt)("hr",null),(0,p.kt)(r.X,{level:2,id:"lists-are-unstyled",nextElement:{type:"paragraph"}},"Lists are unstyled"),(0,p.kt)("p",null,"Ordered and unordered lists are unstyled by default, with no bullets/numbers and no margin or padding."),(0,p.kt)("pre",{className:"language-css"},(0,p.kt)("code",{parentName:"pre",className:"language-css"},(0,p.kt)("span",{parentName:"code",className:"token selector"},"ol",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nul")," ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token property"},"list-style"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},":")," none",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token property"},"margin"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},":")," ",(0,p.kt)("span",{parentName:"code",className:"token number"},"0"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token property"},"padding"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},":")," ",(0,p.kt)("span",{parentName:"code",className:"token number"},"0"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"}"))),(0,p.kt)("p",null,"If you\u2019d like to style a list, you can do so using the ",(0,p.kt)(o.default,{href:"/docs/list-style-type",passHref:!0},(0,p.kt)("a",null,"list-style-type"))," and ",(0,p.kt)(o.default,{href:"/docs/list-style-position",passHref:!0},(0,p.kt)("a",null,"list-style-position"))," utilities:"),(0,p.kt)("pre",{className:"language-html"},(0,p.kt)("code",{parentName:"pre",className:"language-html"},(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"ul")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"list-disc list-inside",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"li"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"One",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"li"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"li"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"Two",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"li"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"li"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"Three",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"li"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"ul"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")))),(0,p.kt)("p",null,"You can always add default list styles to your project by ",(0,p.kt)(o.default,{href:"/docs/adding-base-styles",passHref:!0},(0,p.kt)("a",null,"adding your own base styles")),"."),(0,p.kt)("p",null,"If you\u2019d like to selectively introduce default list styles into article-style parts of a page, we recommend the ",(0,p.kt)(o.default,{href:"/docs/typography-plugin/",passHref:!0},(0,p.kt)("a",null,"@tailwindcss/typography plugin")),"."),(0,p.kt)(r.X,{level:3,id:"accessibility-considerations",nextElement:{type:"paragraph"}},"Accessibility considerations"),(0,p.kt)("p",null,"Unstyled lists are ",(0,p.kt)("a",{parentName:"p",href:"https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/"},"not announced as lists by VoiceOver"),". If your content is truly a list but you would like to keep it unstyled, ",(0,p.kt)("a",{parentName:"p",href:"https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html"},"add a \u201clist\u201d role")," to the element:"),(0,p.kt)("pre",{className:"language-html"},(0,p.kt)("code",{parentName:"pre",className:"language-html"},(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"ul")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"role"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"list",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"li"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"One",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"li"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"li"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"Two",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"li"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"li"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"Three",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"li"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"ul"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")))),(0,p.kt)("hr",null),(0,p.kt)(r.X,{level:2,id:"images-are-block-level",nextElement:{type:"paragraph"}},"Images are block-level"),(0,p.kt)("p",null,"Images and other replaced elements (like ",(0,p.kt)("inlineCode",{parentName:"p"},"svg"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"video"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"canvas"),", and others) are ",(0,p.kt)("inlineCode",{parentName:"p"},"display: block")," by default."),(0,p.kt)("pre",{className:"language-css"},(0,p.kt)("code",{parentName:"pre",className:"language-css"},(0,p.kt)("span",{parentName:"code",className:"token selector"},"img",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nsvg",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nvideo",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\ncanvas",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\naudio",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\niframe",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nembed",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\nobject")," ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token property"},"display"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},":")," block",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token property"},"vertical-align"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},":")," middle",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"}"))),(0,p.kt)("p",null,"This helps to avoid unexpected alignment issues that you often run into using the browser default of ",(0,p.kt)("inlineCode",{parentName:"p"},"display: inline"),"."),(0,p.kt)("p",null,"If you ever need to make one of these elements ",(0,p.kt)("inlineCode",{parentName:"p"},"inline")," instead of ",(0,p.kt)("inlineCode",{parentName:"p"},"block"),", simply use the ",(0,p.kt)("inlineCode",{parentName:"p"},"inline")," utility:"),(0,p.kt)("pre",{className:"language-html"},(0,p.kt)("code",{parentName:"pre",className:"language-html"},(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"img")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"inline",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"src"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"...",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'))," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"alt"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"...",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")))),(0,p.kt)("hr",null),(0,p.kt)(r.X,{level:2,id:"border-styles-are-reset-globally",nextElement:{type:"paragraph"}},"Border styles are reset globally"),(0,p.kt)("p",null,"In order to make it easy to add a border by simply adding the ",(0,p.kt)("inlineCode",{parentName:"p"},"border")," class, Tailwind overrides the default border styles for all elements with the following rules:"),(0,p.kt)("pre",{className:"language-css"},(0,p.kt)("code",{parentName:"pre",className:"language-css"},(0,p.kt)("span",{parentName:"code",className:"token selector"},"*",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n",(0,p.kt)("span",{parentName:"span",className:"token pseudo-element"},"::before"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n",(0,p.kt)("span",{parentName:"span",className:"token pseudo-element"},"::after"))," ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token property"},"border-width"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},":")," ",(0,p.kt)("span",{parentName:"code",className:"token number"},"0"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token property"},"border-style"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},":")," solid",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token property"},"border-color"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},":")," ",(0,p.kt)("span",{parentName:"code",className:"token function"},"theme"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,p.kt)("span",{parentName:"code",className:"token string"},"'borderColor.DEFAULT'"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},",")," currentColor",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"}"))),(0,p.kt)("p",null,"Since the ",(0,p.kt)("inlineCode",{parentName:"p"},"border")," class only sets the ",(0,p.kt)("inlineCode",{parentName:"p"},"border-width")," property, this reset ensures that adding that class always adds a solid 1px border using your configured default border color."),(0,p.kt)("p",null,"This can cause some unexpected results when integrating certain third-party libraries, like ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tailwindlabs/tailwindcss/issues/484"},"Google maps")," for example."),(0,p.kt)("p",null,"When you run into situations like this, you can work around them by overriding the Preflight styles with your own custom CSS:"),(0,p.kt)("pre",{className:"language-css"},(0,p.kt)("code",{parentName:"pre",className:"language-css"},(0,p.kt)("span",{parentName:"code",className:"token selector"},(0,p.kt)("span",{parentName:"span",className:"token class"},".google-map")," *")," ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token property"},"border-style"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},":")," none",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"}"))),(0,p.kt)("hr",null),(0,p.kt)(r.X,{level:2,id:"buttons-have-a-default-outline",nextElement:{type:"paragraph"}},"Buttons have a default outline"),(0,p.kt)("p",null,"To ensure that we provide accessible styles out of the box, we made sure\nthat buttons have a default outline. You can of course override this by\napplying ",(0,p.kt)("inlineCode",{parentName:"p"},"focus:ring")," or similar utilities to your buttons."),(0,p.kt)("pre",{className:"language-css"},(0,p.kt)("code",{parentName:"pre",className:"language-css"},(0,p.kt)("span",{parentName:"code",className:"token selector"},"button",(0,p.kt)("span",{parentName:"span",className:"token pseudo-class"},":focus"))," ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token property"},"outline"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},":")," ",(0,p.kt)("span",{parentName:"code",className:"token number"},"1"),(0,p.kt)("span",{parentName:"code",className:"token unit"},"px")," dotted",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token property"},"outline"),(0,p.kt)("span",{parentName:"code",className:"token punctuation"},":")," ",(0,p.kt)("span",{parentName:"code",className:"token number"},"5"),(0,p.kt)("span",{parentName:"code",className:"token unit"},"px")," auto -webkit-focus-ring-color",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"}"))),(0,p.kt)("hr",null),(0,p.kt)(r.X,{level:2,id:"extending-preflight",nextElement:{type:"paragraph"}},"Extending Preflight"),(0,p.kt)("p",null,"If you\u2019d like to add your own base styles on top of Preflight, simply add them to your CSS within a ",(0,p.kt)("inlineCode",{parentName:"p"},"@layer base")," directive:"),(0,p.kt)("pre",{className:"language-css"},(0,p.kt)("code",{parentName:"pre",className:"language-css"},(0,p.kt)("span",{parentName:"code",className:"token atrule"},(0,p.kt)("span",{parentName:"span",className:"token rule"},"@tailwind")," base",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},";")),"\n\n",(0,p.kt)("span",{parentName:"code",className:"token atrule"},(0,p.kt)("span",{parentName:"span",className:"token rule"},"@layer")," base")," ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token selector"},"h1")," ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",(0,p.kt)("span",{parentName:"code",className:"token atrule atapply"},(0,p.kt)("span",{parentName:"span",className:"token rule"},"@apply")," text-2",(0,p.kt)("span",{parentName:"span",className:"token unit"},"xl"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},";")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token selector"},"h2")," ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",(0,p.kt)("span",{parentName:"code",className:"token atrule atapply"},(0,p.kt)("span",{parentName:"span",className:"token rule"},"@apply")," text-xl",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},";")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token selector"},"h3")," ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",(0,p.kt)("span",{parentName:"code",className:"token atrule atapply"},(0,p.kt)("span",{parentName:"span",className:"token rule"},"@apply")," text-lg",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},";")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token selector"},"a")," ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",(0,p.kt)("span",{parentName:"code",className:"token atrule atapply"},(0,p.kt)("span",{parentName:"span",className:"token rule"},"@apply")," text-blue-600 underline",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},";")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n",(0,p.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n\n",(0,p.kt)("span",{parentName:"code",className:"token atrule"},(0,p.kt)("span",{parentName:"span",className:"token rule"},"@tailwind")," components",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},";")),"\n\n",(0,p.kt)("span",{parentName:"code",className:"token atrule"},(0,p.kt)("span",{parentName:"span",className:"token rule"},"@tailwind")," utilities",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},";")))),(0,p.kt)("p",null,"Learn more in the ",(0,p.kt)(o.default,{href:"/docs/adding-base-styles",passHref:!0},(0,p.kt)("a",null,"adding base styles documentation")),"."),(0,p.kt)("hr",null),(0,p.kt)(r.X,{level:2,id:"disabling-preflight",nextElement:{type:"paragraph"}},"Disabling Preflight"),(0,p.kt)("p",null,"If you\u2019d like to completely disable Preflight \u2014 perhaps because you\u2019re integrating Tailwind into an existing project or because you\u2019d like to provide your own base styles \u2014 all you need to do is set ",(0,p.kt)("inlineCode",{parentName:"p"},"preflight")," to ",(0,p.kt)("inlineCode",{parentName:"p"},"false")," in the ",(0,p.kt)("inlineCode",{parentName:"p"},"corePlugins")," section of your ",(0,p.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),(0,p.kt)(l.M,{filename:"tailwind.config.js"},(0,p.kt)("pre",{className:"language-diff-js"},(0,p.kt)("code",{parentName:"pre",className:"language-diff-js"},(0,p.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"module"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"."),(0,p.kt)("span",{parentName:"span",className:"token property-access"},"exports"),(0,p.kt)("span",{parentName:"span",className:"token plain"}," "),(0,p.kt)("span",{parentName:"span",className:"token operator"},"="),(0,p.kt)("span",{parentName:"span",className:"token plain"}," "),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-js inserted"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"  "),(0,p.kt)("span",{parentName:"span",className:"token literal-property property"},"corePlugins"),(0,p.kt)("span",{parentName:"span",className:"token operator"},":"),(0,p.kt)("span",{parentName:"span",className:"token plain"}," "),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-js inserted"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"    "),(0,p.kt)("span",{parentName:"span",className:"token literal-property property"},"preflight"),(0,p.kt)("span",{parentName:"span",className:"token operator"},":"),(0,p.kt)("span",{parentName:"span",className:"token plain"}," "),(0,p.kt)("span",{parentName:"span",className:"token boolean"},"false"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-js inserted"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"  "),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"}),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"),"\n")))))}N.isMDXComponent=!0,N.layoutProps=k},49485:function(e,a,t){"use strict";t.d(a,{M:function(){return p}});var n=t(79836),s=t(85893);function p({filename:e,children:a}){return(0,s.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,s.jsx)(n.n,{primary:{name:e},showTabMarkers:!1}),(0,s.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:a})]})}},79836:function(e,a,t){"use strict";t.d(a,{n:function(){return p}});var n=t(86010),s=t(85893);function p({primary:e,secondary:a=[],showTabMarkers:t=!0,side:p,translucent:o=!1,children:l}){return(0,s.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,s.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[e.name,t&&(e.saved?(0,s.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,s.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,s.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,s.jsxs)("div",{className:(0,n.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===p?"rounded-tl lg:rounded-tr":"rounded-tl",o&&"dark:bg-slate-800/50"),children:[a.map((({name:e,open:a=!0,className:t})=>(0,s.jsx)("div",{className:(0,n.Z)("px-4 py-1 border-r border-slate-200/5",t,{italic:!a}),children:e},e))),l&&(0,s.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:l})]})]})}},27606:function(e,a,t){"use strict";t.d(a,{L:function(){return u}});var n=t(92809),s=t(92417),p=t(9008),o=t(11163),l=t(21370),r=t(34878),c=t(50946),i=t(85893);function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){(0,n.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e){let a=(0,o.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.D,{suffix:"/"===a.pathname?void 0:"Tailwind CSS",children:e.layoutProps.meta.metaTitle||e.layoutProps.meta.title}),(0,i.jsxs)(p.default,{children:[(0,i.jsx)("meta",{name:"twitter:card",content:"summary"},"twitter:card"),(0,i.jsx)("meta",{name:"twitter:image",content:`https://tailwindcss.com${l.Z}`},"twitter:image")]}),(0,i.jsx)(s.C,k({nav:c.u},e))]})}u.nav=c.u},2011:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/preflight",function(){return t(27076)}])},94110:function(e,a,t){"use strict";const n=t(37777),s=t(64290),p=t(46841).Z;e.exports=(e,a,t)=>{const o=[];return function e(a,t,l){let r;(t=t||{}).indent=t.indent||"\t",l=l||"",r=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:l,indent:l+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const c=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),l).replace(new RegExp(r.indent,"g"),l+t.indent)};if(-1!==o.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";o.push(a);const n="["+r.newLine+a.map(((n,s)=>{const p=a.length-1===s?r.newLine:","+r.newLineOrSpace;let o=e(n,t,l+t.indent);return t.transform&&(o=t.transform(a,s,o)),r.indent+o+p})).join("")+r.pad+"]";return o.pop(),c(n)}if(s(a)){let n=Object.keys(a).concat(p(a));if(t.filter&&(n=n.filter((e=>t.filter(a,e)))),0===n.length)return"{}";o.push(a);const s="{"+r.newLine+n.map(((s,p)=>{const o=n.length-1===p?r.newLine:","+r.newLineOrSpace,c="symbol"===typeof s,i=!c&&/^[a-z$_][a-z$_0-9]*$/i.test(s),m=c||i?s:e(s,t);let k=e(a[s],t,l+t.indent);return t.transform&&(k=t.transform(a,s,k)),r.indent+String(m)+": "+k+o})).join("")+r.pad+"}";return o.pop(),c(s)}return a=String(a).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}}},function(e){e.O(0,[9774,184,4327,489,946,2888,179],(function(){return a=2011,e(e.s=a);var a}));var a=e.O();_N_E=a}]);