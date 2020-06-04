function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/yRO":function(t,e,n){"use strict";n.r(e);var a,i,c,o,s,r,l,b,p,d=n("ofXK"),u=n("tyNb"),f=n("AytR"),m=n("fXoL"),h=n("bwXy"),U=n("3Pt+"),V=n("iQ81"),v=((a=function(){function t(){_classCallCheck(this,t),this.uuidField={controlName:"uuid",type:{typeName:"input-text"},disabled:!0},this.passwordField={controlName:"password",type:{typeName:"input-text",class:"password"},validators:[U.w.required]},this.addressField={controlName:"address",label:"Address",placeholder:"Enter a complete address",type:{typeName:"textArea",maxLength:20},validators:[U.w.required]},this.emailField={controlName:"email",validators:[U.w.required,U.w.email],placeholder:"Enter an email",type:{typeName:"input-text",maxLength:30},errorMessages:{required:"The email is mandatory",email:"You must enter a valid email"},hint:"Enter a valid email"},this.myConfiguration=[this.uuidField,this.emailField,this.passwordField,this.addressField]}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=m.Jb({type:a,selectors:[["app-text-form"]],decls:3,vars:2,consts:[[3,"formConfig"],[1,"btn","btn-block","btn-info",3,"disabled"]],template:function(t,e){1&t&&(m.Vb(0,"ez-form",0),m.Vb(1,"button",1),m.Lc(2,"Submit"),m.Ub(),m.Ub()),2&t&&(m.nc("formConfig",e.myConfiguration),m.Cb(1),m.nc("disabled",!e.data))},directives:[V.a],styles:[""]}),a),y=n("wZkO"),x=n("OtPg"),L=n("fPGm"),C=((l=function(){function t(){_classCallCheck(this,t),this.codeURlEmail=f.a.uri+"/assets/codes/forms/email.txt",this.codeURlUUID=f.a.uri+"/assets/codes/forms/uuid.txt",this.codeURlAddress=f.a.uri+"/assets/codes/forms/textarea.txt",this.codeURlPassword=f.a.uri+"/assets/codes/forms/password.txt",this.pathComponentTs="https://raw.githubusercontent.com/velascoandres/ez-forms-homepage/master/home-page/src/app/modules/form-controls/components/text-form/text-form.component.ts",this.pathComponentHtml="https://raw.githubusercontent.com/velascoandres/ez-forms-homepage/master/home-page/src/app/modules/form-controls/components/text-form/text-form.component.html"}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||l)},l.\u0275cmp=m.Jb({type:l,selectors:[["app-text"]],decls:129,vars:10,consts:[[1,"container","d-flex","flex-column"],[1,"p-2","flex-fill"],["title","Text Input"],[1,"p-2"],[1,"subtitulo"],[1,"table","table-bordered"],[1,"list-group"],[1,"container-form"],["label","text-form.component.ts"],[3,"highlight"],["label","text-form.component.html"]],template:function(t,e){1&t&&(m.Vb(0,"div",0),m.Vb(1,"div",1),m.Qb(2,"app-title",2),m.Ub(),m.Vb(3,"div",1),m.Vb(4,"p"),m.Lc(5," To make use of text entries in the form, the field must first be defined through an object of type "),m.Vb(6,"strong"),m.Lc(7,"InputTextFieldInterface"),m.Ub(),m.Lc(8,". "),m.Ub(),m.Ub(),m.Vb(9,"div",3),m.Vb(10,"h3",4),m.Lc(11,"InputTextFieldInterface"),m.Ub(),m.Vb(12,"p"),m.Lc(13,"The "),m.Vb(14,"strong"),m.Lc(15,"InputTextFieldInterface"),m.Ub(),m.Lc(16," extends of "),m.Vb(17,"strong"),m.Lc(18,"PrincipalFormFieldInterface"),m.Ub(),m.Ub(),m.Vb(19,"table",5),m.Vb(20,"thead"),m.Vb(21,"tr"),m.Vb(22,"th"),m.Lc(23,"Property"),m.Ub(),m.Vb(24,"th"),m.Lc(25,"Description"),m.Ub(),m.Ub(),m.Ub(),m.Vb(26,"tbody"),m.Vb(27,"tr"),m.Vb(28,"td"),m.Lc(29,"controlName"),m.Ub(),m.Vb(30,"td"),m.Lc(31,"Field name"),m.Ub(),m.Ub(),m.Vb(32,"tr"),m.Vb(33,"td"),m.Lc(34,"label"),m.Ub(),m.Vb(35,"td"),m.Lc(36,"Label for input"),m.Ub(),m.Ub(),m.Vb(37,"tr"),m.Vb(38,"td"),m.Lc(39,"placeholder"),m.Ub(),m.Vb(40,"td"),m.Lc(41,"Short hint that descripbes the expected value of an input field"),m.Ub(),m.Ub(),m.Vb(42,"tr"),m.Vb(43,"td"),m.Lc(44,"type"),m.Ub(),m.Vb(45,"td"),m.Lc(46," Object of "),m.Vb(47,"strong"),m.Lc(48,"InputTextTypeInterface"),m.Ub(),m.Lc(49,": "),m.Ub(),m.Ub(),m.Vb(50,"tr"),m.Vb(51,"td"),m.Lc(52,"validators"),m.Ub(),m.Vb(53,"td"),m.Lc(54,"Array of angular validators or "),m.Vb(55,"strong"),m.Lc(56,"EzForms custom validators"),m.Ub(),m.Lc(57,"."),m.Ub(),m.Ub(),m.Ub(),m.Ub(),m.Ub(),m.Vb(58,"div",1),m.Vb(59,"h3",4),m.Lc(60,"InputTextTypeInterface"),m.Ub(),m.Vb(61,"p"),m.Lc(62,"The "),m.Vb(63,"strong"),m.Lc(64,"InputTextTypeInterface"),m.Ub(),m.Lc(65," extends of "),m.Vb(66,"strong"),m.Lc(67,"PrincipalTypeInterface"),m.Ub(),m.Lc(68,"."),m.Ub(),m.Vb(69,"table",5),m.Vb(70,"thead"),m.Vb(71,"tr"),m.Vb(72,"th"),m.Lc(73,"Property"),m.Ub(),m.Vb(74,"th"),m.Lc(75,"Description"),m.Ub(),m.Ub(),m.Ub(),m.Vb(76,"tbody"),m.Qb(77,"ul",6),m.Vb(78,"tr"),m.Vb(79,"td"),m.Lc(80,"typeName"),m.Ub(),m.Vb(81,"td"),m.Lc(82,'Type name could be "input-text" for simple input of "textArea" for textarea'),m.Ub(),m.Ub(),m.Vb(83,"tr"),m.Vb(84,"td"),m.Lc(85,"maxLength"),m.Ub(),m.Vb(86,"td"),m.Lc(87,"the input value max length "),m.Ub(),m.Ub(),m.Vb(88,"tr"),m.Vb(89,"td"),m.Lc(90,"minLenght"),m.Ub(),m.Vb(91,"td"),m.Lc(92,"the input value min length "),m.Ub(),m.Ub(),m.Vb(93,"tr"),m.Vb(94,"td"),m.Lc(95,"class"),m.Ub(),m.Vb(96,"td"),m.Lc(97,' Is used to hide the characters entered. The only value for this property is "password". '),m.Ub(),m.Ub(),m.Ub(),m.Ub(),m.Ub(),m.Vb(98,"div",1),m.Vb(99,"h3",4),m.Lc(100,"Example: "),m.Ub(),m.Vb(101,"p"),m.Lc(102," Lest create a form with the following fields: "),m.Ub(),m.Vb(103,"ul"),m.Vb(104,"li"),m.Lc(105,"UUID"),m.Ub(),m.Vb(106,"li"),m.Lc(107,"Email"),m.Ub(),m.Vb(108,"li"),m.Lc(109,"Password"),m.Ub(),m.Vb(110,"li"),m.Lc(111,"Address"),m.Ub(),m.Ub(),m.Ub(),m.Vb(112,"div",1),m.Vb(113,"h3"),m.Lc(114,"Results:"),m.Ub(),m.Vb(115,"div",7),m.Qb(116,"app-text-form"),m.Ub(),m.Ub(),m.Vb(117,"div",3),m.Vb(118,"mat-tab-group"),m.Vb(119,"mat-tab",8),m.Vb(120,"pre"),m.Qb(121,"code",9),m.ic(122,"async"),m.ic(123,"codeFromUrl"),m.Ub(),m.Ub(),m.Vb(124,"mat-tab",10),m.Vb(125,"pre"),m.Qb(126,"code",9),m.ic(127,"async"),m.ic(128,"codeFromUrl"),m.Ub(),m.Ub(),m.Ub(),m.Ub(),m.Ub()),2&t&&(m.Cb(121),m.nc("highlight",m.jc(122,2,m.jc(123,4,e.pathComponentTs))),m.Cb(5),m.nc("highlight",m.jc(127,6,m.jc(128,8,e.pathComponentHtml))))},directives:[h.a,v,y.b,y.a,x.b],pipes:[d.b,L.a],styles:[""]}),l),g=((r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=m.Jb({type:r,selectors:[["app-file"]],decls:3,vars:0,consts:[[1,"container","d-flex"],[1,"p-2","flex-fill"],["title","Files"]],template:function(t,e){1&t&&(m.Vb(0,"div",0),m.Vb(1,"div",1),m.Qb(2,"app-title",2),m.Ub(),m.Ub())},directives:[h.a],styles:[""]}),r),w=((s=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=m.Jb({type:s,selectors:[["app-checkbox"]],decls:3,vars:0,consts:[[1,"container","d-flex"],[1,"p-2","flex-fill"],["title","CheckBox"]],template:function(t,e){1&t&&(m.Vb(0,"div",0),m.Vb(1,"div",1),m.Qb(2,"app-title",2),m.Ub(),m.Ub())},directives:[h.a],styles:[""]}),s),k=((o=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=m.Jb({type:o,selectors:[["app-radio-button"]],decls:3,vars:0,consts:[[1,"container","d-flex"],[1,"p-2","flex-fill"],["title","Radio-Button"]],template:function(t,e){1&t&&(m.Vb(0,"div",0),m.Vb(1,"div",1),m.Qb(2,"app-title",2),m.Ub(),m.Ub())},directives:[h.a],styles:[""]}),o),I=((c=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||c)},c.\u0275cmp=m.Jb({type:c,selectors:[["app-select"]],decls:3,vars:0,consts:[[1,"container","d-flex"],[1,"p-2","flex-fill"],["title","Select"]],template:function(t,e){1&t&&(m.Vb(0,"div",0),m.Vb(1,"div",1),m.Qb(2,"app-title",2),m.Ub(),m.Ub())},directives:[h.a],styles:[""]}),c),_=((i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=m.Jb({type:i,selectors:[["app-date"]],decls:3,vars:0,consts:[[1,"container","d-flex"],[1,"p-2","flex-fill"],["title","Date"]],template:function(t,e){1&t&&(m.Vb(0,"div",0),m.Vb(1,"div",1),m.Qb(2,"app-title",2),m.Ub(),m.Ub())},directives:[h.a],styles:[""]}),i),T=[{path:"text-input",component:C},{path:"autoComplete",component:(b=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),b.\u0275fac=function(t){return new(t||b)},b.\u0275cmp=m.Jb({type:b,selectors:[["app-auto-complete"]],decls:3,vars:0,consts:[[1,"container","d-flex"],[1,"p-2","flex-fill"],["title","Auto-Complete"]],template:function(t,e){1&t&&(m.Vb(0,"div",0),m.Vb(1,"div",1),m.Qb(2,"app-title",2),m.Ub(),m.Ub())},directives:[h.a],styles:[""]}),b)},{path:"date-input",component:_},{path:"select",component:I},{path:"radio-button",component:k},{path:"checkbox",component:w},{path:"files",component:g},{path:"",redirectTo:"text-input",pathMatch:"full"}],F=((p=function t(){_classCallCheck(this,t)}).\u0275mod=m.Nb({type:p}),p.\u0275inj=m.Mb({factory:function(t){return new(t||p)},imports:[[u.f.forChild(T)],u.f]}),p),O=n("lOAm"),N=n("FpXt");n.d(e,"FormControlsModule",(function(){return Q}));var P,Q=((P=function t(){_classCallCheck(this,t)}).\u0275mod=m.Nb({type:P}),P.\u0275inj=m.Mb({factory:function(t){return new(t||P)},imports:[[d.c,F,O.a,N.a]]}),P)}}]);