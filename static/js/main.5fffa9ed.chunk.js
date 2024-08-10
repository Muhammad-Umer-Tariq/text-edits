(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),l=n.n(s),c=n(3),o=n.n(c),a=(n(11),n(12),n(13),n(0));function r(e){return Object(a.jsx)("nav",{className:`my-nav navbar navbar-expand-lg navbar-${e.mode} bg-${e.mode}`,children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(a.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link","aria-current":"page",href:"/",children:"Home"})})}),Object(a.jsxs)("div",{className:"d-flex align-items-center",children:[Object(a.jsx)("div",{className:"form-check form-switch text-"+("light"===e.mode?"dark":"light"),children:Object(a.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"})}),Object(a.jsx)("button",{className:"btn btn-link text-decoration-none ms-2",onClick:e.toggleMode,children:Object(a.jsx)("i",{className:`fas fa-${"light"===e.mode?"moon":"sun"} fa-lg`,style:{color:"light"===e.mode?"black":"yellow"}})})]})]})]})})}function i(e){const[t,n]=Object(s.useState)("Enter your text here..."),[l,c]=Object(s.useState)(!1),[o,r]=Object(s.useState)(null);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(a.jsx)("h1",{className:"mb-4",children:e.heading}),Object(a.jsx)("div",{className:"mb-3",children:Object(a.jsx)("textarea",{className:"form-control w-5",value:t,onChange:e=>{n(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"6"})}),Object(a.jsxs)("div",{className:"dropdown",children:[Object(a.jsx)("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Text Editing Options"}),Object(a.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:"dropdown-item",disabled:0===t.length,onClick:()=>{let s=t.toUpperCase();n(s),e.showAlert("Converted to uppercase!","success")},children:"Convert to Uppercase"})}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:"dropdown-item",disabled:0===t.length,onClick:()=>{let s=t.toLowerCase();n(s),e.showAlert("Converted to lowercase!","success")},children:"Convert to Lowercase"})}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:"dropdown-item",disabled:0===t.length,onClick:()=>{n(""),e.showAlert("Text Cleared!","success")},children:"Clear Text"})}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:"dropdown-item",disabled:0===t.length,onClick:()=>{navigator.clipboard.writeText(t),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text"})}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:"dropdown-item",disabled:0===t.length,onClick:()=>{let s=t.split(/[ ]+/);n(s.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"})})]})]}),Object(a.jsx)("button",{className:"btn btn-primary mx-1 my-1",onClick:()=>{l?o&&(o.stop(),c(!1),e.showAlert("Microphone stopped.","info")):(()=>{if("webkitSpeechRecognition"in window||"SpeechRecognition"in window){let t=new(window.SpeechRecognition||window.webkitSpeechRecognition);t.lang="en-US",t.continuous=!0,t.interimResults=!1,t.onstart=()=>{e.showAlert("Listening...","info")},t.onspeechend=()=>{e.showAlert("Speech ended.","info")},t.onresult=t=>{let s=t.results[0][0].transcript;n((e=>e+" "+s)),e.showAlert("Text added from speech!","success")},t.onerror=t=>{e.showAlert("Error occurred during speech recognition: "+t.error,"danger")},t.start(),r(t),c(!0)}else e.showAlert("Speech recognition not supported in this browser.","danger")})()},children:l?"Stop Microphone":"Use Microphone"}),Object(a.jsx)("button",{disabled:0===t.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{let n=new SpeechSynthesisUtterance(t);window.speechSynthesis.speak(n),e.showAlert("Speaking text!","success")},children:"Speak Text"}),Object(a.jsx)("button",{disabled:0===t.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{window.speechSynthesis.cancel(),e.showAlert("Stopped speaking!","success")},children:"Stop Speaking"})]}),Object(a.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(a.jsx)("h2",{children:"Your text summary"}),Object(a.jsxs)("p",{children:[t.split(/\s+/).filter((e=>0!==e.length)).length," ","words and ",t.length," characters"]}),Object(a.jsxs)("p",{children:[.008*t.split(/\s+/).filter((e=>0!==e.length)).length," ","Minutes read"]}),Object(a.jsx)("h2",{children:"Preview"}),Object(a.jsx)("p",{children:t.length>0?t:"Nothing to preview!"})]})]})}r.defaultProps={title:"Set title here",aboutText:"About"};var d=function(e){return Object(a.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(a.jsxs)("div",{className:`alert alert-${e.alert.type} alert-dismissible fade show`,role:"alert",children:[Object(a.jsx)("strong",{children:(e=>{const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type)}),": ",e.alert.msg]})})};var b=function(){const[e,t]=Object(s.useState)("light"),[n,l]=Object(s.useState)(null),c=(e,t)=>{l({msg:e,type:t}),setTimeout((()=>{l(null)}),1500)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r,{title:"TextUtils",mode:e,toggleMode:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="#042743",c("Dark mode has been enabled","success")):(t("light"),document.body.style.backgroundColor="blanchedalmond",c("Light mode has been enabled","success"))}},new Date),Object(a.jsx)(d,{alert:n}),Object(a.jsx)("div",{className:"container my-3",children:Object(a.jsx)(i,{showAlert:c,heading:"Enter text and edit using the following options",mode:e})})]})};var h=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((t=>{let{getCLS:n,getFID:s,getFCP:l,getLCP:c,getTTFB:o}=t;n(e),s(e),l(e),c(e),o(e)}))};o.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.5fffa9ed.chunk.js.map