!function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=5)}([function(e,t,i){var o=i(1);"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i(3)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,i){(t=e.exports=i(2)(!1)).push([e.i,"._1Kweesk4MFAWknqqO3SK5q {\n  display: block;\n  text-align: center;\n  margin-bottom: 5px; }\n\n._2RS2wlFERD9ekFdj3fudTu {\n  display: flex;\n  flex-wrap: wrap;\n  width: 280px;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n  ._2RS2wlFERD9ekFdj3fudTu ._1Fsn4VBb5dPPVcTLlh4DUC {\n    width: 18px;\n    height: 18px;\n    margin: 5px;\n    background-size: contain;\n    cursor: pointer; }\n",""]),t.locals={"emoji-title":"_1Kweesk4MFAWknqqO3SK5q",emojiTitle:"_1Kweesk4MFAWknqqO3SK5q","emoji-list":"_2RS2wlFERD9ekFdj3fudTu",emojiList:"_2RS2wlFERD9ekFdj3fudTu","emoji-item":"_1Fsn4VBb5dPPVcTLlh4DUC",emojiItem:"_1Fsn4VBb5dPPVcTLlh4DUC"}},function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=function(e,t){var i=e[1]||"",o=e[3];if(!o)return i;if(t&&"function"==typeof btoa){var n=(c=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),s=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[i].concat(s).concat([n]).join("\n")}var c;return[i].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var s=this[n][0];null!=s&&(o[s]=!0)}for(n=0;n<e.length;n++){var c=e[n];null!=c[0]&&o[c[0]]||(i&&!c[2]?c[2]=i:i&&(c[2]="("+c[2]+") and ("+i+")"),t.push(c))}},t}},function(e,t,i){var o,n,s={},c=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=o.apply(this,arguments)),n}),r=function(e){var t={};return function(e,i){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,i);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),u=null,a=0,g=[],m=i(4);function d(e,t){for(var i=0;i<e.length;i++){var o=e[i],n=s[o.id];if(n){n.refs++;for(var c=0;c<n.parts.length;c++)n.parts[c](o.parts[c]);for(;c<o.parts.length;c++)n.parts.push(j(o.parts[c],t))}else{var r=[];for(c=0;c<o.parts.length;c++)r.push(j(o.parts[c],t));s[o.id]={id:o.id,refs:1,parts:r}}}}function l(e,t){for(var i=[],o={},n=0;n<e.length;n++){var s=e[n],c=t.base?s[0]+t.base:s[0],r={css:s[1],media:s[2],sourceMap:s[3]};o[c]?o[c].parts.push(r):i.push(o[c]={id:c,parts:[r]})}return i}function p(e,t){var i=r(e.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=g[g.length-1];if("top"===e.insertAt)o?o.nextSibling?i.insertBefore(t,o.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),g.push(t);else if("bottom"===e.insertAt)i.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=r(e.insertAt.before,i);i.insertBefore(t,n)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function f(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return i.nc}();o&&(e.attrs.nonce=o)}return b(t,e.attrs),p(e,t),t}function b(e,t){Object.keys(t).forEach(function(i){e.setAttribute(i,t[i])})}function j(e,t){var i,o,n,s;if(t.transform&&e.css){if(!(s="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=s}if(t.singleton){var c=a++;i=u||(u=f(t)),o=w.bind(null,i,c,!1),n=w.bind(null,i,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),p(e,t),t}(t),o=function(e,t,i){var o=i.css,n=i.sourceMap,s=void 0===t.convertToAbsoluteUrls&&n;(t.convertToAbsoluteUrls||s)&&(o=m(o));n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var c=new Blob([o],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(c),r&&URL.revokeObjectURL(r)}.bind(null,i,t),n=function(){h(i),i.href&&URL.revokeObjectURL(i.href)}):(i=f(t),o=function(e,t){var i=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}.bind(null,i),n=function(){h(i)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=c()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var i=l(e,t);return d(i,t),function(e){for(var o=[],n=0;n<i.length;n++){var c=i[n];(r=s[c.id]).refs--,o.push(r)}e&&d(l(e,t),t);for(n=0;n<o.length;n++){var r;if(0===(r=o[n]).refs){for(var u=0;u<r.parts.length;u++)r.parts[u]();delete s[r.id]}}}};var v,y=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function w(e,t,i,o){var n=i?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,n);else{var s=document.createTextNode(n),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(s,c[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var i=t.protocol+"//"+t.host,o=i+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,s=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(n=0===s.indexOf("//")?s:0===s.indexOf("/")?i+s:o+s.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(e,t,i){"use strict";i.r(t);var o=i(0),n=i.n(o),s=document.getElementById("app");[{title:"people",emojis:[{code:":grinning:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f600.png"},{code:":smiley:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f603.png"},{code:":smile:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f604.png"},{code:":grin:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f601.png"},{code:":laughing:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f606.png"},{code:":sweat_smile:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f605.png"},{code:":joy:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f602.png"},{code:":rofl:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f923.png"},{code:":relaxed:",url:"https://github.githubassets.com/images/icons/emoji/unicode/263a.png"},{code:":blush:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f60a.png"},{code:":innocent:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f607.png"},{code:":slightly_smiling_face:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f642.png"},{code:":upside_down_face:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f643.png"},{code:":wink:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f609.png"},{code:":relieved:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f60c.png"},{code:":heart_eyes:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f60d.png"},{code:":kissing_heart:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f618.png"},{code:":kissing:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f617.png"},{code:":kissing_smiling_eyes:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f619.png"},{code:":kissing_closed_eyes:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f61a.png"}]},{title:"animal",emojis:[{code:":dog:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f436.png"},{code:":cat:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f431.png"},{code:":mouse:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f42d.png"},{code:":hamster:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f439.png"},{code:":rabbit:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f430.png"},{code:":fox_face:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f98a.png"},{code:":bear:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f43b.png"},{code:":panda_face:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f43c.png"},{code:":koala:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f428.png"},{code:":tiger:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f42f.png"},{code:":lion:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f981.png"},{code:":cow:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f42e.png"},{code:":pig:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f437.png"},{code:":pig_nose:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f43d.png"},{code:":monkey_face:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f435.png"},{code:":hear_no_evil:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f649.png"},{code:":speak_no_evil:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f64a.png"},{code:":monkey:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f412.png"},{code:":chicken:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f414.png"},{code:":penguin:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f427.png"}]},{title:"food",emojis:[{code:":green_apple:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f34f.png"},{code:":apple:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f34e.png"},{code:":pear:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f350.png"},{code:":tangerine:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f34a.png"},{code:":lemon:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f34b.png"},{code:":banana:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f34c.png"},{code:":bear:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f43b.png"},{code:":watermelon:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f349.png"},{code:":grapes:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f347.png"},{code:":strawberry:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f353.png"},{code:":melon:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f348.png"},{code:":cherries:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f352.png"},{code:":peach:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f351.png"},{code:":pineapple:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f34d.png"},{code:":kiwi_fruit:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f95d.png"},{code:":avocado:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f951.png"},{code:":tomato:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f345.png"},{code:":cucumber:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f952.png"},{code:":carrot:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f955.png"},{code:":corn:",url:"https://github.githubassets.com/images/icons/emoji/unicode/1f33d.png"}]}].forEach(function(e){var t=document.createElement("span");t.className=n.a.emojiTitle,t.innerHTML=e.title,s.appendChild(t);var i=document.createElement("ul");i.className=n.a.emojiList,e.emojis.forEach(function(e){var t=document.createElement("li");t.className=n.a.emojiItem,t.style.backgroundImage="url(".concat(e.url,")"),t.addEventListener("click",function(){if(document.execCommand){var t=document.createElement("input");document.body.appendChild(t),t.setAttribute("value",e.code),t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("".concat(e.code," 已复制到剪切板"))}else alert("无法复制到剪切板 error: document.execCommand")}),i.appendChild(t)}),s.appendChild(i)})}]);