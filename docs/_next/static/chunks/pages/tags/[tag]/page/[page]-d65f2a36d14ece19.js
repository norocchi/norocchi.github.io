(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[568],{8395:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]/page/[page]",function(){return n(9325)}])},3172:function(t,e,n){"use strict";var a=n(1527),s=n(143),r=n.n(s),c=function(t){var e=t.pages,n=t.currentPage,s=t.parentPath,c=t.topPath,i="bg-duchs-200 hover:bg-duchs-800 text-duchs-900 hover:text-duchs-100 ",l="w-14 ",o="w-20 ",d="font-display h-14 mr-5 last:mr-0 px-4 py-2 rounded-full text-4xl text-center transition-all",u=e.map(function(t){if(t===n)return(0,a.jsx)("div",{className:"bg-neutral-300 dark:bg-neutral-600 "+l+d,children:t},t);var e=1===t?c:"".concat(s,"/").concat(t);return(0,a.jsx)(r(),{href:e,children:(0,a.jsx)("a",{className:i+l+d,children:(0,a.jsx)("div",{children:t})})},t)});return n-1>1&&u.splice(0,0,(0,a.jsx)(r(),{href:c,children:(0,a.jsx)("a",{className:i+o+d,children:(0,a.jsx)("div",{children:"<<"})})},0)),n+1<e.length&&u.splice(e.length,0,(0,a.jsx)(r(),{href:"".concat(s,"/").concat(e.length),children:(0,a.jsx)("a",{className:i+o+d,children:(0,a.jsx)("div",{children:">>"})})},e.length+1)),(0,a.jsx)("div",{className:"flex justify-center",children:u})};e.Z=c},1565:function(t,e,n){"use strict";var a=n(1527),s=n(7945),r=n(4485),c=n(1996),i=function(t){var e=t.className,n=t.post,i=t.isPostPage,l=t.isProfilePage?null:(0,a.jsxs)("p",{children:[n.date.getFullYear(),"年",n.date.getMonth()+1,"月",n.date.getDate(),"日"]}),o=(0,a.jsx)(c.Z,{tags:n.tags}),d="font-bold mt-3 text-4xl",u=i?(0,a.jsx)("h1",{className:"mb-3 "+d,children:n.title}):(0,a.jsx)("h2",{className:d,children:n.title}),h=i?(0,a.jsx)(s.D,{remarkPlugins:[r.Z],children:n.content}):(0,a.jsx)("p",{className:"line-clamp-3 my-5 text-neutral-600 dark:text-neutral-300",children:n.desc}),p=i?(0,a.jsxs)("div",{children:[l,u,o,(0,a.jsx)("div",{className:"my-5 "+e,children:h}),o]}):(0,a.jsxs)("div",{children:[(0,a.jsxs)("a",{className:"block",href:n.ref,children:[l,u,h]}),o]});return(0,a.jsx)("div",{className:"bg-white dark:bg-neutral-700 mx-auto mb-11 p-8 rounded-3xl shadow-lg w-11/12",children:p})};e.Z=i},5702:function(t,e,n){"use strict";var a=n(1527),s=n(1161),r=n.n(s),c=n(426),i=function(t){var e=t.title,n=t.description,s=t.path,i=t.type;return(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:e}),(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("meta",{property:"og:url",content:c.FH+s}),(0,a.jsx)("meta",{property:"og:type",content:i}),(0,a.jsx)("meta",{property:"og:title",content:e}),(0,a.jsx)("meta",{property:"og:description",content:n}),(0,a.jsx)("meta",{property:"og:site_name",content:c.y7}),(0,a.jsx)("meta",{property:"og:image",content:c.FH+"/images/ogp-image.jpg"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary"})]})};e.Z=i},9325:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return d}});var a=n(1527),s=n(3172),r=n(1565),c=n(5702),i=n(426),l=n(1443),o=function(t){var e=t.slicedPosts,n=t.pages,o=t.currentPage,d=t.tag,u=e.map(function(t,e){var n=(0,l.D)(t);return(0,a.jsx)(r.Z,{post:n,isPostPage:!1},e)}),h=d[0].toUpperCase()+d.slice(1);return(0,a.jsxs)("div",{children:[(0,a.jsx)(c.Z,{title:"".concat(h," - ").concat(i.y7),description:i.JG+"".concat(h,"についての記事を表示しています。"),path:"/tags/".concat(d,"/page/").concat(o),type:"website"}),u,(0,a.jsx)(s.Z,{pages:n,currentPage:o,parentPath:"/tags/".concat(d,"/page"),topPath:"/tags/".concat(d)})]})},d=!0;e.default=o}},function(t){t.O(0,[507,774,888,179],function(){return t(t.s=8395)}),_N_E=t.O()}]);