(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{86593:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]",function(){return n(1281)}])},13172:function(e,t,n){"use strict";var a=n(11527),s=n(30143),r=n.n(s),c=function(e){var t=e.pages,n=e.currentPage,s=e.parentPath,c=e.topPath,i="bg-duchs-200 hover:bg-duchs-800 text-duchs-900 hover:text-duchs-100 ",l="w-14 ",o="w-20 ",d="font-display h-14 mr-5 last:mr-0 px-4 py-2 rounded-full text-4xl text-center transition-all",u=t.map(function(e){if(e===n)return(0,a.jsx)("div",{className:"bg-neutral-300 dark:bg-neutral-600 "+l+d,children:e},e);var t=1===e?c:"".concat(s,"/").concat(e);return(0,a.jsx)(r(),{href:t,children:(0,a.jsx)("a",{className:i+l+d,children:(0,a.jsx)("div",{children:e})})},e)});return n-1>1&&u.splice(0,0,(0,a.jsx)(r(),{href:c,children:(0,a.jsx)("a",{className:i+o+d,children:(0,a.jsx)("div",{children:"<<"})})},0)),n+1<t.length&&u.splice(t.length,0,(0,a.jsx)(r(),{href:"".concat(s,"/").concat(t.length),children:(0,a.jsx)("a",{className:i+o+d,children:(0,a.jsx)("div",{children:">>"})})},t.length+1)),(0,a.jsx)("div",{className:"flex justify-center",children:u})};t.Z=c},96916:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(11527),s=n(47889),r=n.n(s),c=n(67945),i=n(27710),l=n(96861),o=n(45217),d=function(e){var t=e.inline,n=e.className,s=e.children;if(t)return(0,a.jsx)("code",{className:n,children:s});var r=/language-(\w+)/.exec(n||""),c=r&&r[1]?r[1]:"";return(0,a.jsx)(l.Z,{style:o.Ro,language:c,children:String(s).replace(/\n$/,"")})},u=n(31996),h=function(e){var t=e.className,s=e.post,l=e.isPostPage,o=e.isStaticPostPage,h=o?null:(0,a.jsxs)("p",{children:[s.date.getFullYear(),"年",s.date.getMonth()+1,"月",s.date.getDate(),"日"]}),x=(0,a.jsx)(u.Z,{className:"mb-1",tags:s.tags}),p=(0,a.jsx)(u.Z,{className:"mt-3",tags:s.tags}),m="font-bold mt-3 text-4xl",g=l?(0,a.jsx)("h1",{className:"mb-3 "+m,children:s.title}):(0,a.jsx)("h2",{className:m,children:s.title}),j=l?(0,a.jsx)(c.D,{remarkPlugins:[i.Z],components:{code:d},children:s.content}):(0,a.jsx)("p",{className:"line-clamp-3 my-5 text-neutral-600 dark:text-neutral-300",children:s.desc}),f=r()(function(){return n.e(334).then(n.bind(n,46334))},{loadableGenerated:{webpack:function(){return[46334]}},ssr:!1}),v=r()(function(){return n.e(537).then(n.bind(n,87537))},{loadableGenerated:{webpack:function(){return[87537]}},ssr:!1}),N=o?null:(0,a.jsx)(v,{className:"flex",path:s.ref}),b=l?(0,a.jsxs)("div",{children:[h,g,x,N,(0,a.jsx)("div",{className:"my-5 "+t,children:j}),o?null:(0,a.jsx)(f,{path:s.ref}),N,p]}):(0,a.jsxs)("div",{children:[(0,a.jsxs)("a",{className:"block",href:s.ref,children:[h,g,j]}),p]});return(0,a.jsx)("div",{className:"bg-white dark:bg-neutral-700 mx-auto mb-11 p-8 rounded-3xl shadow-lg w-11/12",children:b})}},45702:function(e,t,n){"use strict";var a=n(11527),s=n(71161),r=n.n(s),c=n(45293),i=function(e){var t=e.title,n=e.description,s=e.path,i=e.type;return(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("meta",{"http-equiv":"content-language",content:"ja"}),(0,a.jsx)("meta",{property:"og:url",content:c.FH+s}),(0,a.jsx)("meta",{property:"og:type",content:i}),(0,a.jsx)("meta",{property:"og:title",content:t}),(0,a.jsx)("meta",{property:"og:description",content:n}),(0,a.jsx)("meta",{property:"og:site_name",content:c.y7}),(0,a.jsx)("meta",{property:"og:image",content:c.FH+"/images/ogp-image.jpg"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary"})]})};t.Z=i},1281:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var a=n(11527),s=n(13172),r=n(96916),c=n(45702),i=n(45293),l=n(83180),o=function(e){var t=e.slicedPosts,n=e.pages,o=e.tag,d=t.map(function(e,t){var n=(0,l.D)(e);return(0,a.jsx)(r.Z,{post:n,isPostPage:!1},t)});return(0,a.jsxs)("div",{children:[(0,a.jsx)(c.Z,{title:"".concat(o.name," - ").concat(i.y7),description:i.JG+"".concat(o.name,"についての記事を表示しています。"),path:o.ref,type:"website"}),d,(0,a.jsx)(s.Z,{pages:n,currentPage:1,parentPath:"".concat(o.ref,"/page"),topPath:o.ref})]})},d=!0;t.default=o}},function(e){e.O(0,[665,774,888,179],function(){return e(e.s=86593)}),_N_E=e.O()}]);