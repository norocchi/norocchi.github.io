"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{94705:function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var l=s(11527);function c(){let e=document.createElement("style");e.innerText="\n    .theme-selector .theme-selector__light,\n    .theme-selector .theme-selector__dark {\n      left: 0;\n      position: absolute;\n      top: 0;\n      transform: scale(0.5) translate(-2.5rem, -1rem);\n      transition: all .5s ease-in-out;\n    }\n\n    .theme-selector > .theme-selector__system {\n      opacity: 0;\n      right: 1.8rem;\n      position: absolute;\n      bottom: 0.2rem;\n    }\n\n    .theme-selector--system > .theme-selector__system {\n      opacity: 1;\n      word-break: keep-all;\n    }\n\n    @media screen and (min-width: 640px) {\n      .theme-selector {\n        position: relative;\n      }\n\n      .theme-selector .theme-selector__light,\n      .theme-selector .theme-selector__dark {\n        transform: scale(0.5) translate(-2.5rem, -2.5rem);\n      }\n\n      .theme-selector > .theme-selector__system  {\n        left: 2rem;\n        top: -0.8rem;\n      }\n    }\n\n    .theme-selector .theme-selector__light,\n    .theme-selector.theme-selector--light .theme-selector__dark {\n      fill: #401a0d;\n    }\n\n    .theme-selector .theme-selector__dark,\n    .theme-selector.theme-selector--dark .theme-selector__light {\n      fill: #ffeee8;\n    }\n\n    .theme-selector.theme-selector--light .theme-selector__light,\n    .theme-selector.theme-selector--dark .theme-selector__dark {\n      transform: scale(1) translate(0);\n    }\n  ",document.getElementsByTagName("head")[0].insertAdjacentElement("beforeend",e);let t=()=>"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches,s=()=>!("theme"in localStorage),c=()=>{t()?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")};c();let r=()=>{document.getElementById("themeSelector");let e={add:[],remove:[]};return t()?(e.add.push("theme-selector--dark"),e.remove.push("theme-selector--light")):(e.add.push("theme-selector--light"),e.remove.push("theme-selector--dark")),s()?e.add.push("theme-selector--system"):e.remove.push("theme-selector--system"),e},a=r().add.join(" ");return(0,l.jsxs)("button",{id:"themeSelector",className:"theme-selector absolute sm:static h-8 right-0 text-center top-0 w-6 sm:w-8 "+a,onClick:()=>{"light"===localStorage.theme?localStorage.setItem("theme","dark"):"dark"===localStorage.theme?localStorage.removeItem("theme"):localStorage.setItem("theme","light"),c();let e=r(),t=document.getElementById("themeSelector");e.add.forEach(e=>null==t?void 0:t.classList.add(e)),e.remove.forEach(e=>null==t?void 0:t.classList.remove(e))},children:[(0,l.jsx)("svg",{className:"theme-selector__light",viewBox:"0 0 70.1 80.32",children:(0,l.jsxs)("g",{children:[(0,l.jsx)("circle",{className:"cls-1",cx:"35.3",cy:"40",r:"24"}),(0,l.jsx)("path",{className:"cls-1",d:"M33.57,1l-5.2,9c-.77,1.33,.19,3,1.73,3h10.39c1.54,0,2.5-1.67,1.73-3L37.03,1c-.77-1.33-2.69-1.33-3.46,0Z"}),(0,l.jsx)("path",{className:"cls-1",d:"M37.03,79.32l5.2-9c.77-1.33-.19-3-1.73-3h-10.39c-1.54,0-2.5,1.67-1.73,3l5.2,9c.77,1.33,2.69,1.33,3.46,0Z"}),(0,l.jsx)("path",{className:"cls-1",d:"M.27,21.74l5.2,9c.77,1.33,2.69,1.33,3.46,0l5.2-9c.77-1.33-.19-3-1.73-3H2c-1.54,0-2.5,1.67-1.73,3Z"}),(0,l.jsx)("path",{className:"cls-1",d:"M69.83,57.9l-5.2-9c-.77-1.33-2.69-1.33-3.46,0l-5.2,9c-.77,1.33,.19,3,1.73,3h10.39c1.54,0,2.5-1.67,1.73-3Z"}),(0,l.jsx)("path",{className:"cls-1",d:"M2,60.9H12.4c1.54,0,2.5-1.67,1.73-3l-5.2-9c-.77-1.33-2.69-1.33-3.46,0L.27,57.9c-.77,1.33,.19,3,1.73,3Z"}),(0,l.jsx)("path",{className:"cls-1",d:"M68.1,18.74h-10.39c-1.54,0-2.5,1.67-1.73,3l5.2,9c.77,1.33,2.69,1.33,3.46,0l5.2-9c.77-1.33-.19-3-1.73-3Z"})]})}),(0,l.jsx)("svg",{className:"theme-selector__dark",viewBox:"0 0 42.85 46.18",children:(0,l.jsx)("path",{className:"cls-1",d:"M26.15,3.33c3.37,4,5.2,9.34,4.57,15.11-.99,9.01-8.15,16.35-17.14,17.55-3.88,.52-7.57-.08-10.81-1.52-1.92-.86-3.64,1.55-2.29,3.16,4.84,5.75,12.32,9.19,20.57,8.45,11.6-1.04,20.92-10.56,21.73-22.18,.74-10.57-5.38-19.81-14.35-23.72-1.93-.84-3.64,1.54-2.28,3.15Z"})}),(0,l.jsx)("div",{className:"theme-selector__system font-black font-display text-duchs-900 dark:text-duchs-100 text-xs transition-all",children:"AUTO"}),(0,l.jsx)("style",{})]})}}}]);