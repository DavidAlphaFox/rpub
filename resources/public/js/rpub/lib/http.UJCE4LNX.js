import*as l from"cherry-cljs/cljs.core.js";var y=function(r,c){const a=c,t=l.__destructure_map.call(null,a),u=l.get.call(null,t,l.keyword("anti-forgery-token")),o=l.get.call(null,t,l.keyword("body")),e=l.get.call(null,t,l.keyword("on-complete")),s=l.array_map("X-CSRF-Token",u,"Accept","application/json","Content-Type","application/json"),_=(()=>{const n=l.array_map(l.keyword("method"),l.keyword("post"),l.keyword("headers"),s);return l.truth_.call(null,o)?l.assoc.call(null,n,l.keyword("body"),JSON.stringify(l.clj__GT_js.call(null,o))):n})(),p=fetch(r,l.clj__GT_js.call(null,_));return l.truth_.call(null,e)&&p.then(function(n){return n.text()}).then(function(n){return e.call(null,l.js__GT_clj.call(null,JSON.parse(n)),null)}).catch(function(n){return e.call(null,null,n)}),null};export{y as post};
