(this.webpackJsonpletter=this.webpackJsonpletter||[]).push([[0],{174:function(e,t,a){e.exports=a.p+"static/media/grad2.44e53ff8.jpeg"},175:function(e,t,a){e.exports=a.p+"static/media/tayrona2.227c6b16.jpg"},176:function(e,t,a){e.exports=a.p+"static/media/ctg2.cd351407.jpg"},177:function(e,t,a){e.exports=a.p+"static/media/lisboa22.553bd5fe.jpg"},178:function(e,t,a){e.exports=a.p+"static/media/hamburg2.39929f50.jpg"},179:function(e,t,a){e.exports=a.p+"static/media/madrid.34e70512.jpg"},180:function(e,t,a){e.exports=a.p+"static/media/berlin.8d314245.jpg"},181:function(e,t,a){e.exports=a.p+"static/media/blankenese2.52793a0b.jpg"},182:function(e,t,a){e.exports=a.p+"static/media/test3.d47331cb.jpg"},183:function(e,t,a){e.exports=a.p+"static/media/dreams2.fcc284b5.jpg"},184:function(e,t,a){e.exports=a.p+"static/media/persev.7ae290e8.jpg"},185:function(e,t,a){e.exports=a.p+"static/media/style2.cf611f10.jpg"},186:function(e,t,a){e.exports=a.p+"static/media/prof2.3cf85130.jpg"},187:function(e,t,a){e.exports=a.p+"static/media/dance2.29473fab.jpeg"},188:function(e,t,a){e.exports=a.p+"static/media/height2.27bbc125.jpg"},189:function(e,t,a){e.exports=a.p+"static/media/t2.f6d04468.jpg"},190:function(e,t,a){e.exports=a.p+"static/media/smile2.9f004f93.jpg"},194:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(20),o=a.n(c),s=(a(97),a(7)),r=a(8),i=a(9),m=a(10),u=(a(98),a(6)),d=a(27),h=a(2);function E(){return l.a.createElement("div",{className:"buttonInit"},l.a.createElement(u.b,{to:"/letter/1"},l.a.createElement(h.a,{size:"lg",theme:"secondary"},"Empezar!")))}var p=a(14),b=a.n(p),g=(a(33),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleShow=function(){n.setState({classButton:"showButton"})},n.state={classButton:"notShowButton"},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"cont textContent"},l.a.createElement(b.a,{onInit:function(t){t.typeString("Queria desde aca hacer algo para ti... Estuve pensando un tiempo y esto que veras aqui fue lo que se me ocurrio").callFunction((function(){console.log("String typed out!")})).pauseFor(500).callFunction((function(){console.log("All strings were deleted"),e.handleShow()})).start()}}),l.a.createElement("div",{className:this.state.classButton},l.a.createElement(u.b,{to:"/letter/"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Anterior")),l.a.createElement(u.b,{to:"/letter/2"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Siguiente"))))}}]),a}(n.Component)),f=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleShow=function(){n.setState({classButton:"showButton"})},n.state={classButton:"notShowButton"},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"cont textContent"},l.a.createElement(b.a,{onInit:function(t){t.typeString("Hemos pasado por muchas cosas desde que empezamos a salir...\n                 Aqui queria recordar algunos de los momentos que mas me han gustado").callFunction((function(){console.log("String typed out!")})).pauseFor(500).callFunction((function(){console.log("All strings were deleted"),e.handleShow()})).start()}}),l.a.createElement("div",{className:this.state.classButton},l.a.createElement(u.b,{to:"/letter/1"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Anterior")),l.a.createElement(u.b,{to:"/letter/3"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Siguiente"))))}}]),a}(n.Component),v=a(91),C=a(41),N=[1,2,3,4,5,6,7,8],S=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).toggle=function(e){var t=Object(v.a)(a.state.open);t[e-1]=!t[e-1],a.setState({open:t})},a.toggleAll=function(){a.setState({open:[!1,!1,!1,!1,!1,!1,!1,!1,!1]})},a.handleShowButton=function(){a.setState({buttonClass:"buttonCircle"})},a.toggle=a.toggle.bind(Object(C.a)(a)),a.state={open:[!1,!1,!1,!1,!1,!1,!1,!1,!1],bClass:N.sort((function(){return Math.random()-.5})),buttonClass:"notShowButton3"},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.state.bClass),setTimeout((function(){e.handleShowButton()}),500),l.a.createElement("div",{className:"buttonGroup"},l.a.createElement(h.a,{className:"".concat(this.state.buttonClass," b").concat(this.state.bClass[0]),theme:"secondary",id:"Modal-1",onClick:function(){return e.toggle(1)}},"Click me!"),l.a.createElement(h.a,{className:"".concat(this.state.buttonClass," b").concat(this.state.bClass[1]),theme:"success",id:"Modal-2",onClick:function(){return e.toggle(2)}},"Click me!"),l.a.createElement(h.a,{className:"".concat(this.state.buttonClass," b").concat(this.state.bClass[2]),theme:"primary",id:"Modal-3",onClick:function(){return e.toggle(3)}},"Click me!"),l.a.createElement(h.a,{className:"".concat(this.state.buttonClass," b").concat(this.state.bClass[3]),theme:"info",id:"Modal-4",onClick:function(){return e.toggle(4)}},"Click me!"),l.a.createElement(h.a,{className:"".concat(this.state.buttonClass," b").concat(this.state.bClass[4]),theme:"danger",id:"Modal-5",onClick:function(){return e.toggle(5)}},"Click me!"),l.a.createElement(h.a,{className:"".concat(this.state.buttonClass," b").concat(this.state.bClass[5]),theme:"warning",id:"Modal-6",onClick:function(){return e.toggle(6)}},"Click me!"),l.a.createElement(h.a,{className:"".concat(this.state.buttonClass," b").concat(this.state.bClass[6]),theme:"dark",id:"Modal-7",onClick:function(){return e.toggle(7)}},"Click me!"),l.a.createElement(h.a,{className:"".concat(this.state.buttonClass," b").concat(this.state.bClass[7]),theme:"info",id:"Modal-8",onClick:function(){return e.toggle(8)}},"Click me!"),l.a.createElement("div",{className:"showButton"},l.a.createElement(u.b,{to:"/letter/2"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Anterior")),l.a.createElement(u.b,{to:"/letter/4"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Siguiente"))),l.a.createElement(h.h,{open:this.state.open[0],toggle:this.toggleAll,target:"#Modal-1",modalContentClassName:"modalclass"},l.a.createElement(h.j,null,"Nuestro Grado"),l.a.createElement(h.i,null,l.a.createElement("div",{className:"modaldiv"},l.a.createElement("h5",null,"Habernos graduado juntos \ud83c\udf93... A\xfan recuerdo como me gust\xf3 bailar contigo esa noche "),l.a.createElement("img",{className:"imgModal",src:a(174),alt:""})))),l.a.createElement(h.h,{placement:"bottom",open:this.state.open[1],toggle:this.toggleAll,target:"#Modal-2",modalContentClassName:"modalclass"},l.a.createElement(h.j,null,"Tayrona"),l.a.createElement(h.i,null,l.a.createElement("div",{className:"modaldiv"},l.a.createElement("h5",null,"Nuestro primer viaje juntos, de los momentos en que v\xed que todo es mejor a tu lado \ud83c\udf0a"),l.a.createElement("img",{className:"imgModal",src:a(175),alt:""})))),l.a.createElement(h.h,{placement:"bottom",open:this.state.open[2],toggle:this.toggleAll,target:"#Modal-3",modalContentClassName:"modalclass"},l.a.createElement(h.j,null,"Cartagena"),l.a.createElement(h.i,null,l.a.createElement("div",{className:"modaldiv"},l.a.createElement("h5",null,"Mi cumplea\xf1os junto a ti... me hiciste ver cartagena de una manera que jam\xe1s olvidar\xe9"),l.a.createElement("img",{className:"imgModal",src:a(176),alt:""})))),l.a.createElement(h.h,{placement:"bottom",open:this.state.open[3],toggle:this.toggleAll,target:"#Modal-4",modalContentClassName:"modalclass"},l.a.createElement(h.j,null,"Lisboa"),l.a.createElement(h.i,null,l.a.createElement("div",{className:"modaldiv"},l.a.createElement("h5",null,"Este fue un viaje m\xe1gico y estar contigo solo lo hac\xeda mas"),l.a.createElement("img",{className:"imgModal",src:a(177),alt:""})))),l.a.createElement(h.h,{placement:"bottom",open:this.state.open[4],toggle:this.toggleAll,target:"#Modal-5",modalContentClassName:"modalclass"},l.a.createElement(h.j,null,"Hamburg"),l.a.createElement(h.i,null,l.a.createElement("div",{className:"modaldiv"},l.a.createElement("h5",null,"Recuerdo la primera vez que viniste, ame poder mostrarte y guiarte por la ciudad \ud83d\udea2"),l.a.createElement("img",{className:"imgModal",src:a(178),alt:""})))),l.a.createElement(h.h,{placement:"bottom",open:this.state.open[5],toggle:this.toggleAll,target:"#Modal-6",modalContentClassName:"modalclass"},l.a.createElement(h.j,null,"Madrid"),l.a.createElement(h.i,null,l.a.createElement("div",{className:"modaldiv"},l.a.createElement("h5",null,"Disfrute mucho el dia que caminamos por madrid r\xedo. Madrid sin ti no es Madrid."),l.a.createElement("img",{className:"imgModal",src:a(179),alt:""})))),l.a.createElement(h.h,{placement:"bottom",open:this.state.open[6],toggle:this.toggleAll,target:"#Modal-7",modalContentClassName:"modalclass"},l.a.createElement(h.j,null,"Berlin"),l.a.createElement(h.i,null,l.a.createElement("div",{className:"modaldiv"},l.a.createElement("h5",null,"Nuestro primer fin de a\xf1o juntos \ud83d\udc93"),l.a.createElement("img",{className:"imgModal",src:a(180),alt:""})))),l.a.createElement(h.h,{placement:"bottom",open:this.state.open[7],toggle:this.toggleAll,target:"#Modal-8",modalContentClassName:"modalclass"},l.a.createElement(h.j,null,"Blankenese"),l.a.createElement(h.i,null,l.a.createElement("div",{className:"modaldiv"},l.a.createElement("h5",null,"Ame caminar contigo por las calles de Blankenese. Esas callecitas estrechas contigo me enamoraban mucho"),l.a.createElement("img",{className:"imgModal",src:a(181),alt:""})))))}}]),n}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleButton1=function(){console.log("test"),n.setState({button1:l.a.createElement(h.a,{className:"mybrain",pill:!0,block:!0}," My Brain ")})},n.handleText2=function(){var e=l.a.createElement(b.a,{onInit:function(e){e.typeString("Si ves! No hace nada... As\xed quedo igual... \n                    Es que estar a tu lado son muchas cosas que siento...\n                    Sigamos, que aun no acabamos \ud83d\ude18").callFunction((function(){console.log("String typed out!")})).pauseFor(2500).callFunction((function(){console.log("All strings were deleted"),n.handleButton2()})).start()}});n.setState({text2:e})},n.handleButton2=function(){n.setState({classButton:"showButton"})},n.state={button1:null,text2:null,classButton:"notShowButton"},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"cont textContent"},l.a.createElement(b.a,{onInit:function(t){t.typeString("Y ya que estamos aqu\xed, te muestro como se pone mi cerebro a tu lado...").callFunction((function(){console.log("String typed out!")})).pauseFor(500).callFunction((function(){console.log("All strings were deleted"),e.handleButton1()})).pauseFor(1500).callFunction((function(){e.handleText2()})).start()}}),this.state.button1,this.state.text2,l.a.createElement("div",{className:this.state.classButton},l.a.createElement(u.b,{to:"/letter/3"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Anterior")),l.a.createElement(u.b,{to:"/letter/5"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Siguiente"))))}}]),a}(n.Component),w=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleShowCard=function(){a.setState({classCard:"showCard"})},a.handleShowButton=function(){a.setState({classButton:"showButton"})},a.state={classCard:"notShowCard",classButton:"notShowButton"},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement(h.f,null,l.a.createElement(h.k,null,l.a.createElement(h.e,null,l.a.createElement("div",{className:"contsm textContentsm"},l.a.createElement(b.a,{onInit:function(t){t.typeString("Durante el trabajo he usado estas tarjetas... ").pauseFor(500).callFunction((function(){e.handleShowCard()})).pauseFor(1e3).typeString("Desde que las vi pense en que me gustaria hacerte algo con ellas...\n                    y que mejor que decirte cosas que me gustan de ti \ud83d\ude0d").callFunction((function(){e.handleShowButton()})).start()}}),l.a.createElement("div",{className:this.state.classButton},l.a.createElement(u.b,{to:"/letter/4"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Anterior")),l.a.createElement(u.b,{to:"/letter/6"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Siguiente"))))),l.a.createElement(h.e,null,l.a.createElement("div",{className:this.state.classCard},l.a.createElement(h.b,{className:"cardClass"},l.a.createElement(h.d,{top:!0,src:a(182)}),l.a.createElement(h.c,null,l.a.createElement("p",null,"I love this photo.")))))))}}]),n}(n.Component),y=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleShowButton=function(){a.setState({classButton:"showButton"})},a.handleShowCard=function(){a.setState({classCard:"showCard2"})},a.state={classButton:"notShowButton",classCard:"notShowCard"},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return setTimeout((function(){e.handleShowCard()}),500),l.a.createElement("div",null,l.a.createElement(h.f,null,l.a.createElement(h.k,null,l.a.createElement("h1",null,"Parte 1"),l.a.createElement("div",{className:"totheleft"},l.a.createElement(u.b,{to:"/letter/5"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Anterior")),l.a.createElement(u.b,{to:"/letter/7"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Siguiente")))),l.a.createElement(h.k,null,l.a.createElement(h.e,null,l.a.createElement(h.b,{className:this.state.classCard},l.a.createElement(h.d,{top:!0,src:a(183)}),l.a.createElement(h.c,{className:"cardPadding"},l.a.createElement("p",null,"Tienes muchos ",l.a.createElement("b",null,"sue\xf1os")," que quieres cumplir y quiero ayudarte a lograrlos")))),l.a.createElement(h.e,null,l.a.createElement(h.b,{className:this.state.classCard},l.a.createElement(h.d,{top:!0,src:a(184)}),l.a.createElement(h.c,{className:"cardPadding"},l.a.createElement("p",null,"Has mostrado que aunque tengas momentos dificiles ",l.a.createElement("b",null,"no te dejas caer"))))),l.a.createElement(h.e,null,l.a.createElement(h.b,{className:this.state.classCard},l.a.createElement(h.d,{top:!0,src:a(185)}),l.a.createElement(h.c,{className:"cardPadding"},l.a.createElement("p",null,"Me encanta ",l.a.createElement("b",null,"tu estilo")," siempre me deslumbra y me enamora")))))))}}]),n}(n.Component),B=a(70),x=a.n(B),O=a(88),k=a.n(O),q=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleShowButton=function(){a.setState({classButton:"showButton"})},a.handleShowCard=function(){a.setState({classCard:"showCard2"})},a.handleImage=function(){a.state.st?a.setState({imageURL:x.a,content:a.content1,st:!1}):a.setState({imageURL:k.a,content:a.content2,st:!0})},a.content1=l.a.createElement("p",{className:"blink_me_r",onClick:a.handleImage},"Hay momentos en los que puedes ser muy ",l.a.createElement("b",null,"tierna...")),a.content2=l.a.createElement("p",{className:"blink_me_h",onClick:a.handleImage},"Pero tambien pudes ser muy ",l.a.createElement("b",null,"Sexy...")),a.state={classButton:"notShowButton",imageURL:x.a,classCard:"notShowCard",content:a.content1,st:!1},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return setTimeout((function(){e.handleShowCard()}),500),l.a.createElement("div",null,l.a.createElement(h.f,null,l.a.createElement(h.k,null,l.a.createElement("h1",null,"Parte 2"),l.a.createElement("div",{className:"totheleft"},l.a.createElement(u.b,{to:"/letter/6"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Anterior")),l.a.createElement(u.b,{to:"/letter/8"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Siguiente")))),l.a.createElement(h.k,null,l.a.createElement(h.e,null,l.a.createElement(h.b,{className:this.state.classCard},l.a.createElement(h.d,{top:!0,src:a(186)}),l.a.createElement(h.c,{className:"cardPadding"},l.a.createElement("p",null,"Me alegra mucho siempre ver lo pro que eres en tu trabajo")))),l.a.createElement(h.e,null,l.a.createElement(h.b,{className:this.state.classCard},l.a.createElement(h.d,{top:!0,src:this.state.imageURL}),l.a.createElement(h.c,{className:"cardPadding"},this.state.content))),l.a.createElement(h.e,null,l.a.createElement(h.b,{className:this.state.classCard},l.a.createElement(h.d,{top:!0,src:a(187)}),l.a.createElement(h.c,{className:"cardPadding"},l.a.createElement("p",null,"AMO que te guste ",l.a.createElement("b",null,"bailar conmigo"),", porque yo lo disfruto mucho")))))))}}]),n}(n.Component),F=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleShowButton=function(){a.setState({classButton:"showButton"})},a.handleShowCard=function(){a.setState({classCard:"showCard2"})},a.state={classButton:"notShowButton",classCard:"notShowCard"},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return setTimeout((function(){e.handleShowCard()}),500),l.a.createElement("div",null,l.a.createElement(h.f,null,l.a.createElement(h.k,null,l.a.createElement("h1",null,"Parte 1"),l.a.createElement("div",{className:"totheleft"},l.a.createElement(u.b,{to:"/letter/7"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Anterior")),l.a.createElement(u.b,{to:"/letter/9"},l.a.createElement(h.a,{theme:"secondary"},"Siguiente")),l.a.createElement(u.b,{to:"/letter/secret/enter"},l.a.createElement(h.a,{className:"buttonGeneral",outline:!0,pill:!0,theme:"danger"},"nsfw")))),l.a.createElement(h.k,null,l.a.createElement(h.e,null,l.a.createElement(h.b,{className:this.state.classCard},l.a.createElement(h.d,{top:!0,src:a(188)}),l.a.createElement(h.c,null,l.a.createElement("p",null,"Amo ",l.a.createElement("b",null,"tu estatura"),", amo amo amo ")))),l.a.createElement(h.e,null,l.a.createElement(h.b,{className:this.state.classCard},l.a.createElement(h.d,{top:!0,src:a(189)}),l.a.createElement(h.c,null,l.a.createElement("p",null,"You are quite ",l.a.createElement("b",null,"Curvy")," \ud83d\ude0d")))),l.a.createElement(h.e,null,l.a.createElement(h.b,{className:this.state.classCard},l.a.createElement(h.d,{top:!0,src:a(190)}),l.a.createElement(h.c,null,l.a.createElement("p",null,"Amo tu carita cuando me miras cuando ",l.a.createElement("b",null,"me sonries"))))))))}}]),n}(n.Component),M=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleShow=function(){n.setState({classButton:"showButton"})},n.handleBarOut=function(){n.setState({pbarOut:"progressbar"})},n.handleBar=function(){var e=n.state.index,t="progressbar_p"+e;n.setState({pbar:t,index:e+1})},n.handleText2=function(){var e=l.a.createElement("div",{className:"textContent"},l.a.createElement(b.a,{onInit:function(e){e.typeString("test").pauseFor(1500).callFunction((function(){n.handleBar()})).pauseFor(1500).callFunction((function(){n.handleBar()})).pauseFor(1500).callFunction((function(){n.handleBar()})).pauseFor(1500).callFunction((function(){n.handleBar()})).pauseFor(1500).callFunction((function(){n.handleBar()})).pauseFor(1500).callFunction((function(){n.handleBar()})).pauseFor(1500).callFunction((function(){n.handleBar()})).pauseFor(1500).callFunction((function(){n.handleShow()})).start()}}));n.setState({text2:e})},n.state={classButton:"notShowButton",pbarOut:"notshowpbar",pbar:"progressbar_p0",text2:null,index:0},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"cont"},l.a.createElement("div",{className:"textContent"},l.a.createElement(b.a,{onInit:function(t){t.typeString("Hay momentos en los que me preguntas que tanto te amo... bueno te lo mostrare aqui...").pauseFor(500).callFunction((function(){e.handleBarOut()})).pauseFor(1500).callFunction((function(){e.handleText2()})).start()}})),l.a.createElement("br",null),l.a.createElement("div",{className:this.state.pbarOut},l.a.createElement("div",{className:this.state.pbar})),this.state.text2,l.a.createElement("div",{className:this.state.classButton},l.a.createElement(u.b,{to:"/letter/8"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"info"},"Anterior")),l.a.createElement(u.b,{to:"/letter/10"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"info"},"Siguiente"))))}}]),a}(n.Component);function A(){return l.a.createElement("div",null,l.a.createElement("h1",null,"THE END"))}var I=a(71),G=a.n(I),P=a(89),T=l.a.createElement(b.a,{onInit:function(e){e.typeString("Intenta otra vez ").start()}}),H=l.a.createElement(b.a,{onInit:function(e){e.typeString("Listo, sigamos ").start()}}),D=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleContra=Object(P.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({text2:l.a.createElement("br",null)});case 2:n.state.typed===n.state.contra?(t={approved:!0},sessionStorage.setItem("token",JSON.stringify(t)),n.setState({valid:!0,showButton:"showButton",invalid:!1,text2:H})):n.setState({invalid:!0,valid:!1,showButton:"notShowButton",text2:T});case 3:case"end":return e.stop()}}),e)}))),n.handleOnChange=function(e){n.setState({typed:e.target.value})},n.handleShowInput=function(){n.setState({showInput:"showInput"})},n.state={contra:"160717",valid:!1,invalid:!1,showButton:"notShowButton",typed:"",showInput:"notShowInput",text2:l.a.createElement("br",null)},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"cont textContent"},l.a.createElement(b.a,{onInit:function(t){t.typeString("Esta parte es un poco... no tan safe de ver por eso tiene contrase\xf1a. Igual seguro sabr\xe1s cual es.").pauseFor(500).callFunction((function(){e.handleShowInput()})).start()}}),this.state.text2,l.a.createElement("div",{className:this.state.showInput},l.a.createElement(h.g,{onChange:this.handleOnChange,value:this.state.typed,type:"password",valid:this.state.valid,invalid:this.state.invalid,placeholder:"Clave",className:"mb-2"}),l.a.createElement(h.a,{onClick:this.handleContra,theme:"warning"},"Validar")),l.a.createElement("div",{className:this.state.showButton},l.a.createElement(u.b,{to:"/letter/secret/state"},l.a.createElement(h.a,{theme:"danger"},"Seguir"))))}}]),a}(n.Component),L=a(90),_=a.n(L),z=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleShowButton=function(){n.setState({classButton:"showButton"})},n.componentDidMount=function(){sessionStorage.getItem("token")||n.setState({redirect:!0})},n.componentWillUnmount=function(){sessionStorage.removeItem("token")},n.state={classButton:"notShowButton",redirect:!1},n}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,this.state.redirect?l.a.createElement(d.a,{to:"/secret/enter"}):null,l.a.createElement("div",{className:"vidDiv"},l.a.createElement("video",{className:"vidClass",autoPlay:!0,muted:!0,loop:!0},l.a.createElement("source",{src:_.a,type:"video/mp4"}))),l.a.createElement("div",{className:"contSecret"},l.a.createElement("p",null,"Ya tu sabes que quisiera meter en esa boquita rica... y tambien en ese pecho. Sabes que amo lo rica que eres")),l.a.createElement("div",{className:"showButton3"},l.a.createElement(u.b,{to:"/letter/8"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Anterior")),l.a.createElement(u.b,{to:"/letter/9"},l.a.createElement(h.a,{className:"buttonGeneral",theme:"secondary"},"Siguiente"))))}}]),a}(n.Component),R=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"boxCont"},l.a.createElement(d.d,null,l.a.createElement(d.b,{path:"/letter",exact:!0},l.a.createElement(E,null)),l.a.createElement(d.b,{path:"/letter/1",exact:!0},l.a.createElement(g,null)),l.a.createElement(d.b,{path:"/letter/2",exact:!0},l.a.createElement(f,null)),l.a.createElement(d.b,{path:"/letter/3",exact:!0},l.a.createElement(S,null)),l.a.createElement(d.b,{path:"/letter/4",exact:!0},l.a.createElement(j,null)),l.a.createElement(d.b,{path:"/letter/5",exact:!0},l.a.createElement(w,null)),l.a.createElement(d.b,{path:"/letter/6",exact:!0},l.a.createElement(y,null)),l.a.createElement(d.b,{path:"/letter/7",exact:!0},l.a.createElement(q,null)),l.a.createElement(d.b,{path:"/letter/8",exact:!0},l.a.createElement(F,null)),l.a.createElement(d.b,{path:"/letter/9",exact:!0},l.a.createElement(M,null)),l.a.createElement(d.b,{path:"/letter/10",exact:!0},l.a.createElement(A,null)),l.a.createElement(d.b,{path:"/letter/secret/enter",exact:!0},l.a.createElement(D,null)),l.a.createElement(d.b,{path:"/letter/secret/state",exact:!0},l.a.createElement(z,null)))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(192),a(193);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,a){},70:function(e,t,a){e.exports=a.p+"static/media/cute2.b5210704.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/hot2.b0a3b6fb.jpeg"},90:function(e,t,a){e.exports=a.p+"static/media/snap.afa9cb47.mp4"},92:function(e,t,a){e.exports=a(194)},97:function(e,t,a){},98:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.df1ec267.chunk.js.map