"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5309],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7365:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var n=r(3117),o=(r(7294),r(3905));const a={id:"openapi",title:"OpenAPI Swagger \u4f7f\u7528",description:"OpenAPI Swagger \u4f7f\u7528",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},i=void 0,p={unversionedId:"guide/openapi",id:"guide/openapi",title:"OpenAPI Swagger \u4f7f\u7528",description:"OpenAPI Swagger \u4f7f\u7528",source:"@site/docs/guide/02-openapi.md",sourceDirName:"guide",slug:"/guide/openapi",permalink:"/docs/guide/openapi",draft:!1,editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/guide/02-openapi.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"openapi",title:"OpenAPI Swagger \u4f7f\u7528",description:"OpenAPI Swagger \u4f7f\u7528",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Protobuf \u89c4\u8303",permalink:"/docs/guide/api-protobuf"},next:{title:"Wire \u4f9d\u8d56\u6ce8\u5165",permalink:"/docs/guide/wire"}},l={},c=[{value:"\u4f7f\u7528protoc\u63d2\u4ef6\u751f\u6210openapi.yaml\u6587\u4ef6",id:"\u4f7f\u7528protoc\u63d2\u4ef6\u751f\u6210openapiyaml\u6587\u4ef6",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:4},{value:"\u751f\u6210",id:"\u751f\u6210",level:4},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:4}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u4f7f\u7528protoc\u63d2\u4ef6\u751f\u6210openapiyaml\u6587\u4ef6"},"\u4f7f\u7528protoc\u63d2\u4ef6\u751f\u6210openapi.yaml\u6587\u4ef6"),(0,o.kt)("p",null,"\u65b0\u5efa\u9879\u76eeMakefile\u4e2d\u5df2\u7ecf\u9ed8\u8ba4\u96c6\u6210\u4e86\u751f\u6210openapi.yaml\u7684\u76f8\u5173\u547d\u4ee4\uff0c\u8fd9\u91cc\u4e5f\u4ecb\u7ecd\u4e0b\u5177\u4f53\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,o.kt)("h4",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"\u9996\u5148\u5168\u5c40\u5b89\u88c5protoc\u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/google/gnostic/cmd/protoc-gen-openapi@latest\n")),(0,o.kt)("h4",{id:"\u751f\u6210"},"\u751f\u6210"),(0,o.kt)("p",null,"\u5982\u679c\u662fkratos-layout\u4e3a\u6a21\u677f\u521b\u5efa\u51fa\u6765\u7684\u9879\u76ee\uff0c\u5df2\u7ecf\u96c6\u6210\u4e86\u76f8\u5e94\u7684\u6307\u4ee4\uff0c\u76f4\u63a5\u4f7f\u7528\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make api\n")),(0,o.kt)("p",null,"\u5373\u53ef\u751f\u6210openapi.yaml\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u8c03\u7528protoc\u547d\u4ee4\u8fdb\u884c\u751f\u6210\uff0c\u5728\u9879\u76ee\u6839\u76ee\u5f55\u76f4\u63a5\u4f7f\u7528protoc\u547d\u4ee4\uff0c\u8bf7\u6ce8\u610f\u4fee\u6539\u547d\u4ee4\u6700\u540e\u7684proto\u6587\u4ef6\u8def\u5f84\u4e3a\u5b9e\u9645\u8def\u5f84"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"protoc --proto_path=. \\\n        --proto_path=./third_party \\\n        --openapi_out=fq_schema_naming=true,default_response=false:. \\\n        api/helloworld/v1/greeter.proto\n")),(0,o.kt)("h4",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u6267\u884c\u6210\u529f\u540e\uff0c\u5c06\u5728\u60a8\u7684proto\u6587\u4ef6\u6240\u5728\u76ee\u5f55\u751f\u6210\u76f8\u5e94\u7684openapi.yaml\u6587\u4ef6\u3002\n\u60a8\u53ef\u4ee5\u5c06\u5176\u5bfc\u5165\u4efb\u4f55\u652f\u6301OpenAPI\u89c4\u8303\u7684\u5e73\u53f0\u8fdb\u884c\u6d4f\u89c8\uff0c\u4f8b\u5982:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/swagger-api/swagger-ui"},"Swagger UI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://editor.swagger.io/"},"Swagger Editor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Redocly/redoc"},"ReDoc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/YMFE/yapi"},"YApi")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"Postman"))))}s.isMDXComponent=!0}}]);