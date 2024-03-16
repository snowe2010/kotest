"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[93409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||i;return r?o.createElement(d,a(a({ref:t},u),{},{components:r})):o.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},42921:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const i={id:"project_timeout",title:"Project Timeout",slug:"project-timeouts.html",sidebar_label:"Project Timeout"},a=void 0,s={unversionedId:"framework/timeouts/project_timeout",id:"version-5.8/framework/timeouts/project_timeout",title:"Project Timeout",description:"Kotest supports a project level timeout.",source:"@site/versioned_docs/version-5.8/framework/timeouts/project_timeout.md",sourceDirName:"framework/timeouts",slug:"/framework/timeouts/project-timeouts.html",permalink:"/docs/framework/timeouts/project-timeouts.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.8/framework/timeouts/project_timeout.md",tags:[],version:"5.8",frontMatter:{id:"project_timeout",title:"Project Timeout",slug:"project-timeouts.html",sidebar_label:"Project Timeout"},sidebar:"framework",previous:{title:"Test Timeouts",permalink:"/docs/framework/timeouts/test-timeouts.html"},next:{title:"Blocking Tests",permalink:"/docs/framework/timeouts/blocking-tests.html"}},c={},l=[],u={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Kotest supports a project level timeout.\nThis timeout applies to all tests in a module and includes the setup/teardown time of every spec/test in the module."),(0,n.kt)("p",null,"To enable this, we can use ",(0,n.kt)("a",{parentName:"p",href:"/docs/framework/project-config.html"},"ProjectConfig"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ProjectConfig : AbstractProjectConfig() {\n  override val projectTimeout: Duration = 10.minutes\n}\n")),(0,n.kt)("p",null,"In the above example, we have specified a project timeout of 10 minutes. All specs and tests must complete within\nthat 10 minute period or the build will fail."))}m.isMDXComponent=!0}}]);