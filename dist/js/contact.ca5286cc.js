(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact","home"],{"480a":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{class:{"vh-100 overflow-hidden":t.showModal}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row py-5 min-vh-100 align-items-center"},[e("div",{staticClass:"col-12 pt-5"},[e("h1",{staticClass:"text-center mb-5",attrs:{"data-aos":"fade"}},[t._v("\n          Contato\n        ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mb-5"},[e("GmapMap",{staticStyle:{width:"100%",height:"400px"},attrs:{center:t.mapPosition,zoom:16,options:t.mapOptions,"map-type-id":"terrain","data-aos":"fade","data-aos-delay":"450"}},[e("GmapMarker",{attrs:{position:t.mapPosition,clickable:!0,draggable:!1}})],1)],1),t._m(0),e("div",{staticClass:"col-12 col-lg-6 align-self-center",attrs:{"data-aos":"fade","data-aos-delay":"1500","data-aos-anchor":".aos-nav-anchor"}},[e("ul",{staticClass:"nav justify-content-center"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fab","facebook-f"]}})],1)]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fab","instagram"]}})],1)]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fab","linkedin"]}})],1)]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fab","youtube"]}})],1)])]),e("a",{staticClass:"d-block lead text-center mb-3",attrs:{href:"mailto:contato@produceria.com.br"}},[t._v("\n              contato@produceria.com.br\n            ")]),e("button",{staticClass:"btn btn-primary d-block mx-auto mb-5 mb-lg-0",attrs:{type:"button"},on:{click:t.openModal}},[t._v("\n              Entre em Contato\n            ")]),t.showModal?e("Modal",{on:{close:t.closeModal}},[e("form",{attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("h1",[t._v("Olá!")]),e("p",{staticClass:"lead"},[t._v("\n                      Preencha o formulário abaixo para entrar em contato conosco.\n                    ")])])]),e("div",{staticClass:"col-12 col-lg-10 offset-lg-1"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Nome")]),e("input",{staticClass:"form-control",attrs:{type:"text",name:"name",autocomplete:"name",placeholder:"Preencha o seu Nome"}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"phone"}},[t._v("Telefone")]),e("input",{staticClass:"form-control",attrs:{type:"text",name:"phone",autocomplete:"phone",placeholder:"Preencha o seu Telefone"}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{staticClass:"form-control",attrs:{type:"email",autocomplete:"email",placeholder:"Preencha o seu Email"}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"subject"}},[t._v("Assunto")]),e("select",{staticClass:"custom-select",attrs:{name:"subject"}},[e("option",{attrs:{selected:"",value:"contact"}},[t._v("Contato")]),e("option",{attrs:{value:"quotation"}},[t._v("Orçamento")]),e("option",{attrs:{value:"financial"}},[t._v("Financeiro")]),e("option",{attrs:{value:"supplier"}},[t._v("Fornecedor")]),e("option",{attrs:{value:"application"}},[t._v("Currículo")])])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"message"}},[t._v("Mensagem")]),e("textarea",{staticClass:"form-control",attrs:{name:"message",rows:"4",placeholder:"Preencha a sua Mensagem"}})]),e("button",{staticClass:"btn btn-primary pull-right",attrs:{type:"submit"},on:{click:function(a){return a.preventDefault(),t.submitForm(a)}}},[t._v("\n                    Enviar Mensagem\n                  ")])])])]):t._e()],1)])])])])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-12 col-lg-6 mb-5 mb-lg-0 text-white"},[e("div",{staticClass:"d-flex justify-content-around mb-3 aos-nav-anchor",attrs:{"data-aos":"fade","data-aos-delay":"900"}},[e("address",{staticClass:"mb-0"},[e("strong",[t._v("BR")]),e("br"),t._v("\n                R. Oliveira Dias, 163"),e("br"),t._v("\n                Jd. Paulista"),e("br"),t._v("\n                São Paulo, SP 01433 030"),e("br"),t._v("\n                +55 11 3854 8035\n              ")]),e("address",{staticClass:"mb-0"},[e("strong",[t._v("USA")]),e("br"),t._v("\n                201 S Biscayne Blvd"),e("br"),t._v("\n                #1200"),e("br"),t._v("\n                Miami, FL 33131"),e("br"),t._v("\n                +1 877 917 6648\n              ")])])])}],l=e("f5af"),n=e.n(l),i=e("2af9"),r={name:"ContactIndex",components:{Modal:i["b"]},data:function(){return{showModal:!1,mapPosition:{lat:-23.5828844,lng:-46.6689258},mapOptions:{zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!0,disableDefaultUi:!0,styles:[{stylers:[{visibility:"on"},{saturation:-100},{gamma:.54}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#4d4946"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{gamma:.48}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{gamma:7.18}]}]}}},mounted:function(){n.a.init({duration:900,easing:"ease-in-out",once:!0})},methods:{submitForm:function(){this.closeModal()},openModal:function(){this.showModal=!0,this.scrollY=window.scrollY},closeModal:function(){var t=this;this.showModal=!1,setTimeout(function(){window.scrollTo(0,t.scrollY)},50)}}},c=r,m=(e("f89d"),e("2877")),f=Object(m["a"])(c,s,o,!1,null,"45f6ada7",null);a["default"]=f.exports},a1c6:function(t,a,e){},ab27:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("router-view")},o=[],l={name:"Page"},n=l,i=e("2877"),r=Object(i["a"])(n,s,o,!1,null,null,null);a["default"]=r.exports},f89d:function(t,a,e){"use strict";var s=e("a1c6"),o=e.n(s);o.a}}]);