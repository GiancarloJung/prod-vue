(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact","home"],{"480a":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:{"vh-100 overflow-hidden":t.showModal}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row py-5 min-vh-100 align-items-center"},[a("div",{staticClass:"col-12 pt-5"},[a("h1",{staticClass:"text-center mb-5",attrs:{"data-aos":"fade"}},[t._v("\n          Contato\n        ")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-5"},[a("GmapMap",{staticStyle:{width:"100%",height:"400px"},attrs:{center:t.mapPosition,zoom:16,options:t.mapOptions,"map-type-id":"terrain","data-aos":"fade","data-aos-delay":"450"}},[a("GmapMarker",{attrs:{position:t.mapPosition,clickable:!0,draggable:!1}})],1)],1),t._m(0),a("div",{staticClass:"col-12 col-lg-6 align-self-center",attrs:{"data-aos":"fade","data-aos-delay":"1500","data-aos-anchor":".aos-nav-anchor"}},[a("ul",{staticClass:"nav justify-content-center"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{size:"2x",icon:["fab","facebook-f"]}})],1)]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{size:"2x",icon:["fab","instagram"]}})],1)]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{size:"2x",icon:["fab","linkedin"]}})],1)]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{size:"2x",icon:["fab","youtube"]}})],1)])]),a("a",{staticClass:"d-block lead text-center mb-3",attrs:{href:"mailto:contato@produceria.com.br"}},[t._v("\n              contato@produceria.com.br\n            ")]),a("button",{staticClass:"btn btn-primary d-block mx-auto mb-5 mb-lg-0",attrs:{type:"button"},on:{click:t.openModal}},[t._v("\n              Entre em Contato\n            ")]),t.showModal?a("Modal",{on:{close:t.closeModal}},[a("form",{attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("h1",[t._v("Olá!")]),a("p",{staticClass:"lead"},[t._v("\n                      Preencha o formulário abaixo para entrar em contato conosco.\n                    ")])])]),a("div",{staticClass:"col-12 col-lg-10 offset-lg-1"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Nome")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.name,expression:"contact.name"},{name:"validate",rawName:"v-validate",value:"required|min:5",expression:"'required|min:5'"}],staticClass:"form-control",attrs:{type:"text",name:"name",autocomplete:"name",placeholder:"Preencha o seu Nome"},domProps:{value:t.contact.name},on:{input:function(e){e.target.composing||t.$set(t.contact,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"phone"}},[t._v("Telefone")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.phone,expression:"contact.phone"},{name:"validate",rawName:"v-validate",value:"required|min:14",expression:"'required|min:14'"},{name:"mask",rawName:"v-mask",value:["+# (###) ###-####","+## (##) #####-####","+## (##) ####-####"],expression:"['+# (###) ###-####', '+## (##) #####-####', '+## (##) ####-####']"}],staticClass:"form-control",attrs:{type:"text",name:"phone",autocomplete:"phone",placeholder:"Preencha o seu Telefone"},domProps:{value:t.contact.phone},on:{input:function(e){e.target.composing||t.$set(t.contact,"phone",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.email,expression:"contact.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",attrs:{type:"email",name:"email",autocomplete:"email",placeholder:"Preencha o seu Email"},domProps:{value:t.contact.email},on:{input:function(e){e.target.composing||t.$set(t.contact,"email",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"subject"}},[t._v("Assunto")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.contact.subject,expression:"contact.subject"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select",attrs:{name:"subject"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.contact,"subject",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:"",value:"contact"}},[t._v("Contato")]),a("option",{attrs:{value:"quotation"}},[t._v("Orçamento")]),a("option",{attrs:{value:"financial"}},[t._v("Financeiro")]),a("option",{attrs:{value:"supplier"}},[t._v("Fornecedor")]),a("option",{attrs:{value:"application"}},[t._v("Currículo")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[t._v("Mensagem")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contact.message,expression:"contact.message"},{name:"validate",rawName:"v-validate",value:"required|min:5",expression:"'required|min:5'"}],staticClass:"form-control",attrs:{name:"message",rows:"4",placeholder:"Preencha a sua Mensagem"},domProps:{value:t.contact.message},on:{input:function(e){e.target.composing||t.$set(t.contact,"message",e.target.value)}}})]),a("button",{staticClass:"btn btn-primary pull-right",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submitForm(e)}}},[t._v("\n                    Enviar Mensagem\n                  ")])])])]):t._e()],1)])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 col-lg-6 mb-5 mb-lg-0 text-white"},[a("div",{staticClass:"d-flex justify-content-around mb-3 aos-nav-anchor",attrs:{"data-aos":"fade","data-aos-delay":"900"}},[a("address",{staticClass:"mb-0"},[a("strong",[a("i",[t._v("BR")])]),a("br"),t._v("\n                R. Oliveira Dias, 163"),a("br"),t._v("\n                Jd. Paulista"),a("br"),t._v("\n                São Paulo, SP 01433 030"),a("br"),t._v("\n                +55 11 3854 8035\n              ")]),a("address",{staticClass:"mb-0"},[a("strong",[a("i",[t._v("USA")])]),a("br"),t._v("\n                201 S Biscayne Blvd"),a("br"),t._v("\n                #1200"),a("br"),t._v("\n                Miami, FL 33131"),a("br"),t._v("\n                +1 877 917 6648\n              ")])])])}],n=(a("96cf"),a("3b8d")),i=a("cebc"),r=a("f5af"),l=a.n(r),c=a("2f62"),m=a("2af9"),u={name:"ContactIndex",components:{Modal:m["b"]},data:function(){return{showModal:!1,contact:{name:"",phone:"",email:"",subject:"contact",message:""},mapPosition:{lat:-23.5828844,lng:-46.6689258},mapOptions:{zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!0,disableDefaultUi:!0,styles:[{stylers:[{visibility:"on"},{saturation:-100},{gamma:.54}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#4d4946"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{gamma:.48}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{gamma:7.18}]}]}}},mounted:function(){l.a.init({duration:900,easing:"ease-in-out",once:!0})},methods:Object(i["a"])({},Object(c["b"])({postContact:"POST_CONTACT"}),{submitForm:function(){var t=this;this.$validator.validateAll().then(function(e){e&&t.sendContact()})},sendContact:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.postContact({contact:this.contact});case 2:e=t.sent,e&&(this.$toasted.show(e.data.message,{duration:3e3,position:"bottom-right",type:e.ok?"success":"error"}),this.closeModal());case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),openModal:function(){this.showModal=!0,this.scrollY=window.scrollY},closeModal:function(){var t=this;this.showModal=!1,setTimeout(function(){window.scrollTo(0,t.scrollY)},50)}})},d=u,v=(a("f269"),a("2877")),p=Object(v["a"])(d,o,s,!1,null,"46859d52",null);e["default"]=p.exports},7172:function(t,e,a){},ab27:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},s=[],n={name:"Page"},i=n,r=a("2877"),l=Object(r["a"])(i,o,s,!1,null,null,null);e["default"]=l.exports},f269:function(t,e,a){"use strict";var o=a("7172"),s=a.n(o);s.a}}]);