function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _slicedToArray(e,n){return _arrayWithHoles(e)||_iterableToArrayLimit(e,n)||_unsupportedIterableToArray(e,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,n):void 0}}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _iterableToArrayLimit(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return t}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&_setPrototypeOf(e,n)}function _setPrototypeOf(e,n){return(_setPrototypeOf=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function _createSuper(e){var n=_isNativeReflectConstruct();return function(){var t,r=_getPrototypeOf(e);if(n){var a=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(e):n}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{ECCn:function(e,n){function t(e){Object.freeze(e);var n="function"==typeof e;return Object.getOwnPropertyNames(e).forEach((function(r){!e.hasOwnProperty(r)||null===e[r]||"object"!=typeof e[r]&&"function"!=typeof e[r]||n&&("caller"===r||"callee"===r||"arguments"===r)||Object.isFrozen(e[r])||t(e[r])})),e}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function a(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach((function(e){for(n in e)t[n]=e[n]})),t}function i(e){return e.nodeName.toLowerCase()}var o=Object.freeze({__proto__:null,escapeHTML:r,inherit:a,nodeStream:function(e){var n=[];return function e(t,r){for(var a=t.firstChild;a;a=a.nextSibling)3===a.nodeType?r+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:r,node:a}),r=e(a,r),i(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:a}));return r}(e,0),n},mergeStreams:function(e,n,t){var a=0,o="",s=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function u(e){o+="<"+i(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+r(e.value).replace(/"/g,"&quot;")+'"'})).join("")+">"}function c(e){o+="</"+i(e)+">"}function f(e){("start"===e.event?u:c)(e.node)}for(;e.length||n.length;){var d=l();if(o+=r(t.substring(a,d[0].offset)),a=d[0].offset,d===e){s.reverse().forEach(c);do{f(d.splice(0,1)[0]),d=l()}while(d===e&&d.length&&d[0].offset===a);s.reverse().forEach(u)}else"start"===d[0].event?s.push(d[0].node):s.pop(),f(d.splice(0,1)[0])}return o+r(t.substr(a))}}),s=function(e){return!!e.kind},l=function(){function e(n,t){_classCallCheck(this,e),this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}return _createClass(e,[{key:"addText",value:function(e){this.buffer+=r(e)}},{key:"openNode",value:function(e){if(s(e)){var n=e.kind;e.sublanguage||(n="".concat(this.classPrefix).concat(n)),this.span(n)}}},{key:"closeNode",value:function(e){s(e)&&(this.buffer+="</span>")}},{key:"span",value:function(e){this.buffer+='<span class="'.concat(e,'">')}},{key:"value",value:function(){return this.buffer}}]),e}(),u=function(e){_inherits(t,e);var n=_createSuper(t);function t(e){var r;return _classCallCheck(this,t),(r=n.call(this)).options=e,r}return _createClass(t,[{key:"addKeyword",value:function(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}},{key:"addText",value:function(e){""!==e&&this.add(e)}},{key:"addSublanguage",value:function(e,n){var t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}},{key:"toHTML",value:function(){return new l(this,this.options).value()}},{key:"finalize",value:function(){}}]),t}(function(){function e(){_classCallCheck(this,e),this.rootNode={children:[]},this.stack=[this.rootNode]}return _createClass(e,[{key:"add",value:function(e){this.top.children.push(e)}},{key:"openNode",value:function(e){var n={kind:e,children:[]};this.add(n),this.stack.push(n)}},{key:"closeNode",value:function(){if(this.stack.length>1)return this.stack.pop()}},{key:"closeAllNodes",value:function(){for(;this.closeNode(););}},{key:"toJSON",value:function(){return JSON.stringify(this.rootNode,null,4)}},{key:"walk",value:function(e){return this.constructor._walk(e,this.rootNode)}},{key:"top",get:function(){return this.stack[this.stack.length-1]}},{key:"root",get:function(){return this.rootNode}}],[{key:"_walk",value:function(e,n){var t=this;return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((function(n){return t._walk(e,n)})),e.closeNode(n)),e}},{key:"_collapse",value:function(n){n.children&&(n.children.every((function(e){return"string"==typeof e}))?(n.text=n.children.join(""),delete n.children):n.children.forEach((function(n){"string"!=typeof n&&e._collapse(n)})))}}]),e}());function c(e){return e&&e.source||e}var f="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",d={begin:"\\\\[\\s\\S]",relevance:0},g={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[d]},h={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[d]},p={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},b=function(e,n,t){var r=a({className:"comment",begin:e,end:n,contains:[]},t||{});return r.contains.push(p),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},v=b("//","$"),m=b("/\\*","\\*/"),y=b("#","$"),_=Object.freeze({__proto__:null,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:f,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",BACKSLASH_ESCAPE:d,APOS_STRING_MODE:g,QUOTE_STRING_MODE:h,PHRASAL_WORDS_MODE:p,COMMENT:b,C_LINE_COMMENT_MODE:v,C_BLOCK_COMMENT_MODE:m,HASH_COMMENT_MODE:y,NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},C_NUMBER_MODE:{className:"number",begin:f,relevance:0},BINARY_NUMBER_MODE:{className:"number",begin:"\\b(0b[01]+)",relevance:0},CSS_NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},REGEXP_MODE:{begin:/(?=\/[^\/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[d,{begin:/\[/,end:/\]/,relevance:0,contains:[d]}]}]},TITLE_MODE:{className:"title",begin:"[a-zA-Z]\\w*",relevance:0},UNDERSCORE_TITLE_MODE:{className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0}}),x="of and for in not or if then".split(" ");function w(e,n){return n?Number(n):x.includes(e.toLowerCase())?0:1}var E=r,R=a,k=o.nodeStream,N=o.mergeStreams,O=function(e){var n=[],r={},i={},o=[],s=!0,l=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,f="Could not find the language '{}', did you forget to load/include a language module?",d={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0,__emitter:u};function g(e){return d.noHighlightRe.test(e)}function h(e,n,t,r){var a={code:n,language:e};T("before:highlight",a);var i=a.result?a.result:p(a.language,a.code,t,r);return i.code=a.code,T("after:highlight",i),i}function p(e,n,t,i){var o=n;function l(e,n){var t=m.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function u(){null!=_.subLanguage?function(){if(""!==A){var e="string"==typeof _.subLanguage;if(!e||r[_.subLanguage]){var n=e?p(_.subLanguage,A,!0,x[_.subLanguage]):b(A,_.subLanguage.length?_.subLanguage:void 0);_.relevance>0&&(T+=n.relevance),e&&(x[_.subLanguage]=n.top),R.addSublanguage(n.emitter,n.language)}else R.addText(A)}}():function(){var e,n,t,r;if(_.keywords){for(n=0,_.lexemesRe.lastIndex=0,t=_.lexemesRe.exec(A),r="";t;)r+=A.substring(n,t.index),(e=l(_,t))?(R.addText(r),r="",T+=e[1],R.addKeyword(t[0],e[0])):r+=t[0],n=_.lexemesRe.lastIndex,t=_.lexemesRe.exec(A);r+=A.substr(n),R.addText(r)}else R.addText(A)}(),A=""}function g(e){e.className&&R.openNode(e.className),_=Object.create(e,{parent:{value:_}})}var h={};function v(n,r){var a,i=r&&r[0];if(A+=n,null==i)return u(),0;if("begin"==h.type&&"end"==r.type&&h.index==r.index&&""===i){if(A+=o.slice(r.index,r.index+1),!s)throw(a=new Error("0 width match regex")).languageName=e,a.badRule=h.rule,a;return 1}if(h=r,"begin"===r.type)return function(e){var n=e[0],t=e.rule;return t.__onBegin&&(t.__onBegin(e)||{}).ignoreMatch?function(e){return 0===_.matcher.regexIndex?(A+=e[0],1):(I=!0,0)}(n):(t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?A+=n:(t.excludeBegin&&(A+=n),u(),t.returnBegin||t.excludeBegin||(A=n)),g(t),t.returnBegin?0:n.length)}(r);if("illegal"===r.type&&!t)throw(a=new Error('Illegal lexeme "'+i+'" for mode "'+(_.className||"<unnamed>")+'"')).mode=_,a;if("end"===r.type){var l=function(e){var n=e[0],t=o.substr(e.index),r=function e(n,t){if(function(e,n){var t=e&&e.exec(n);return t&&0===t.index}(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(_,t);if(r){var a=_;a.skip?A+=n:(a.returnEnd||a.excludeEnd||(A+=n),u(),a.excludeEnd&&(A=n));do{_.className&&R.closeNode(),_.skip||_.subLanguage||(T+=_.relevance),_=_.parent}while(_!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),g(r.starts)),a.returnEnd?0:n.length}}(r);if(null!=l)return l}if("illegal"===r.type&&""===i)return 1;if(S>1e5&&S>3*r.index)throw new Error("potential infinite loop, way more iterations than matches");return A+=i,i.length}var m=O(e);if(!m)throw console.error(f.replace("{}",e)),new Error('Unknown language: "'+e+'"');!function(e){function n(n,t){return new RegExp(c(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}var t=function(){function e(){_classCallCheck(this,e),this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}return _createClass(e,[{key:"addRule",value:function(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}},{key:"compile",value:function(){0===this.regexes.length&&(this.exec=function(){return null});var e=this.regexes.map((function(e){return e[1]}));this.matcherRe=n(function(e,n){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,a="",i=0;i<e.length;i++){var o=r+=1,s=c(e[i]);for(i>0&&(a+="|"),a+="(";s.length>0;){var l=t.exec(s);if(null==l){a+=s;break}a+=s.substring(0,l.index),s=s.substring(l.index+l[0].length),"\\"==l[0][0]&&l[1]?a+="\\"+String(Number(l[1])+o):(a+=l[0],"("==l[0]&&r++)}a+=")"}return a}(e),!0),this.lastIndex=0}},{key:"exec",value:function(e){this.matcherRe.lastIndex=this.lastIndex;var n=this.matcherRe.exec(e);if(!n)return null;var t=n.findIndex((function(e,n){return n>0&&null!=e}));return Object.assign(n,this.matchIndexes[t])}}]),e}(),r=function(){function e(){_classCallCheck(this,e),this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}return _createClass(e,[{key:"getMatcher",value:function(e){if(this.multiRegexes[e])return this.multiRegexes[e];var n=new t;return this.rules.slice(e).forEach((function(e){var t=_slicedToArray(e,2),r=t[0],a=t[1];return n.addRule(r,a)})),n.compile(),this.multiRegexes[e]=n,n}},{key:"considerAll",value:function(){this.regexIndex=0}},{key:"addRule",value:function(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}},{key:"exec",value:function(e){var n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;var t=n.exec(e);return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&(this.regexIndex=0)),t}}]),e}();function i(e){if("."===e.input[e.index-1]||"."===e.input[e.index+e[0].length])return{ignoreMatch:!0}}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");!function t(o,s){var l;o.compiled||(o.compiled=!0,o.__onBegin=null,o.keywords=o.keywords||o.beginKeywords,o.keywords&&(o.keywords=function(e,n){var t={};return"string"==typeof e?r("keyword",e):Object.keys(e).forEach((function(n){r(n,e[n])})),t;function r(e,r){n&&(r=r.toLowerCase()),r.split(" ").forEach((function(n){var r=n.split("|");t[r[0]]=[e,w(r[0],r[1])]}))}}(o.keywords,e.case_insensitive)),o.lexemesRe=n(o.lexemes||/\w+/,!0),s&&(o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?=\\b|\\s)",o.__onBegin=i),o.begin||(o.begin=/\B|\b/),o.beginRe=n(o.begin),o.endSameAsBegin&&(o.end=o.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),o.end&&(o.endRe=n(o.end)),o.terminator_end=c(o.end)||"",o.endsWithParent&&s.terminator_end&&(o.terminator_end+=(o.end?"|":"")+s.terminator_end)),o.illegal&&(o.illegalRe=n(o.illegal)),null==o.relevance&&(o.relevance=1),o.contains||(o.contains=[]),o.contains=(l=[]).concat.apply(l,_toConsumableArray(o.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return a(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}("self"===e?o:e)})))),o.contains.forEach((function(e){t(e,o)})),o.starts&&t(o.starts,s),o.matcher=function(e){var n=new r;return e.contains.forEach((function(e){return n.addRule(e.begin,{rule:e,type:"begin"})})),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(o))}(e)}(m);var y,_=i||m,x={},R=new d.__emitter(d);!function(){for(var e=[],n=_;n!==m;n=n.parent)n.className&&e.unshift(n.className);e.forEach((function(e){return R.openNode(e)}))}();var k,N,A="",T=0,C=0,S=0,I=!1;try{for(_.matcher.considerAll();S++,I?I=!1:(_.matcher.lastIndex=C,_.matcher.considerAll()),k=_.matcher.exec(o);)N=v(o.substring(C,k.index),k),C=k.index+N;return v(o.substr(C)),R.closeAllNodes(),R.finalize(),y=R.toHTML(),{relevance:T,value:y,language:e,illegal:!1,emitter:R,top:_}}catch(M){if(M.message&&M.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:M.message,context:o.slice(C-100,C+100),mode:M.mode},sofar:y,relevance:0,value:E(o),emitter:R};if(s)return{relevance:0,value:E(o),emitter:R,language:e,top:_,errorRaised:M};throw M}}function b(e,n){n=n||d.languages||Object.keys(r);var t=function(e){var n={relevance:0,emitter:new d.__emitter(d),value:E(e),illegal:!1,top:x};return n.emitter.addText(e),n}(e),a=t;return n.filter(O).filter(A).forEach((function(n){var r=p(n,e,!1);r.language=n,r.relevance>a.relevance&&(a=r),r.relevance>t.relevance&&(a=t,t=r)})),a.language&&(t.second_best=a),t}function v(e){return d.tabReplace||d.useBR?e.replace(l,(function(e,n){return d.useBR&&"\n"===e?"<br>":d.tabReplace?n.replace(/\t/g,d.tabReplace):""})):e}function m(e){var n,t,r,a,o,s=function(e){var n,t=e.className+" ";if(n=d.languageDetectRe.exec(t+=e.parentNode?e.parentNode.className:"")){var r=O(n[1]);return r||(console.warn(f.replace("{}",n[1])),console.warn("Falling back to no-highlight mode for this block.",e)),r?n[1]:"no-highlight"}return t.split(/\s+/).find((function(e){return g(e)||O(e)}))}(e);g(s)||(T("before:highlightBlock",{block:e,language:s}),d.useBR?(n=document.createElement("div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,o=n.textContent,r=s?h(s,o,!0):b(o),(t=k(n)).length&&((a=document.createElement("div")).innerHTML=r.value,r.value=N(t,k(a),o)),r.value=v(r.value),T("after:highlightBlock",{block:e,result:r}),e.innerHTML=r.value,e.className=function(e,n,t){var r=n?i[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),e.includes(r)||a.push(r),a.join(" ").trim()}(e.className,s,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function y(){if(!y.called){y.called=!0;var e=document.querySelectorAll("pre code");n.forEach.call(e,m)}}var x={disableAutodetect:!0,name:"Plain text"};function O(e){return e=(e||"").toLowerCase(),r[e]||r[i[e]]}function A(e){var n=O(e);return n&&!n.disableAutodetect}function T(e,n){var t=e;o.forEach((function(e){e[t]&&e[t](n)}))}for(var C in Object.assign(e,{highlight:h,highlightAuto:b,fixMarkup:v,highlightBlock:m,configure:function(e){d=R(d,e)},initHighlighting:y,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",y,!1)},registerLanguage:function(n,t){var a;try{a=t(e)}catch(o){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!s)throw o;console.error(o),a=x}a.name||(a.name=n),r[n]=a,a.rawDefinition=t.bind(null,e),a.aliases&&a.aliases.forEach((function(e){i[e]=n}))},listLanguages:function(){return Object.keys(r)},getLanguage:O,requireLanguage:function(e){var n=O(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:A,inherit:R,addPlugin:function(e,n){o.push(e)}}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="10.0.3",_)"object"==typeof _[C]&&t(_[C]);return Object.assign(e,_),e}({});e.exports=O}}]);