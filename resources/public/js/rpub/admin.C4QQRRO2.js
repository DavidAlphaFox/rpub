import*as e from"cherry-cljs/cljs.core.js";import"flowbite";import{useState as q}from"react";import*as D from"cherry-cljs/lib/clojure.string.js";import*as k from"rpub.admin.impl";import*as V from"rpub.lib.html";import*as Q from"rpub.lib.http";import*as T from"rpub.lib.reagent";import"rpub.plugins.content-types";var P=function(r){const t=r,l=e.__destructure_map.call(null,t),a=e.get.call(null,l,e.keyword("content-types"));return e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"w-full md:w-1/2 md:px-2 mb-4",e.keyword("data-test-id"),"dashboard-content-types"),e.vector(k.box,e.array_map(e.keyword("title"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"flex items-center"),e.vector(e.keyword("svg"),e.array_map(e.keyword("class"),"w-8 h-8 text-gray-500 dark:text-white mr-4",e.keyword("aria-hidden"),"true",e.keyword("xmlns"),"http://www.w3.org/2000/svg",e.keyword("width"),"24",e.keyword("height"),"24",e.keyword("fill"),"currentColor",e.keyword("viewBox"),"0 0 24 24"),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M5.005 10.19a1 1 0 0 1 1 1v.233l5.998 3.464L18 11.423v-.232a1 1 0 1 1 2 0V12a1 1 0 0 1-.5.866l-6.997 4.042a1 1 0 0 1-1 0l-6.998-4.042a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1ZM5 15.15a1 1 0 0 1 1 1v.232l5.997 3.464 5.998-3.464v-.232a1 1 0 1 1 2 0v.81a1 1 0 0 1-.5.865l-6.998 4.042a1 1 0 0 1-1 0L4.5 17.824a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1Z",e.keyword("clip-rule"),"evenodd")),e.vector(e.keyword("path"),e.array_map(e.keyword("d"),"M12.503 2.134a1 1 0 0 0-1 0L4.501 6.17A1 1 0 0 0 4.5 7.902l7.002 4.047a1 1 0 0 0 1 0l6.998-4.04a1 1 0 0 0 0-1.732l-6.997-4.042Z"))),"Content Types"),e.keyword("class"),"md:h-48",e.keyword("size"),e.keyword("half"),e.keyword("content"),e.vector(e.keyword("div"),(()=>{const u=k.pluralize.call(null,a,"types"),w=e.nth.call(null,u,0,null),i=e.nth.call(null,u,1,null);return e.vector(e.keyword("p"),e.array_map(e.keyword("class"),"mb-4"),"This site has ",e.vector(e.keyword("span"),e.array_map(e.keyword("class"),"font-semibold"),w)," ",i," of content:")})(),e.vector(k.content_item_counts,e.array_map(e.keyword("content-types"),a))))))},j=function(r){const t=r,l=e.__destructure_map.call(null,t),a=e.get.call(null,l,e.keyword("theme"));return e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"w-full md:w-1/2 md:px-2 mb-4",e.keyword("data-test-id"),"dashboard-theme"),e.vector(k.box,e.array_map(e.keyword("title"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"flex items-center"),e.vector(e.keyword("svg"),e.array_map(e.keyword("class"),"w-8 h-8 text-gray-500 dark:text-white mr-4",e.keyword("aria-hidden"),"true",e.keyword("xmlns"),"http://www.w3.org/2000/svg",e.keyword("width"),"24",e.keyword("height"),"24",e.keyword("fill"),"currentColor",e.keyword("viewBox"),"0 0 24 24"),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z",e.keyword("clip-rule"),"evenodd")),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z",e.keyword("clip-rule"),"evenodd"))),"Theme"),e.keyword("class"),"md:h-48",e.keyword("size"),e.keyword("half"),e.keyword("content"),e.vector(e.keyword("div"),"This site is using the ",e.vector(e.keyword("span"),e.array_map(e.keyword("class"),"font-semibold underline"),e.keyword("label").call(null,a)),"."))))},Y=function(r){const t=r,l=e.__destructure_map.call(null,t),a=e.get.call(null,l,e.keyword("activated-plugins"));return e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"w-full md:w-1/2 md:px-2 mb-4",e.keyword("data-test-id"),"dashboard-plugins"),e.vector(k.box,e.array_map(e.keyword("title"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"flex items-center"),e.vector(e.keyword("svg"),e.array_map(e.keyword("class"),"w-8 h-8 text-gray-500 dark:text-white mr-4",e.keyword("aria-hidden"),"true",e.keyword("xmlns"),"http://www.w3.org/2000/svg",e.keyword("width"),"24",e.keyword("height"),"24",e.keyword("fill"),"currentColor",e.keyword("viewBox"),"0 0 24 24"),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z",e.keyword("clip-rule"),"evenodd")),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z",e.keyword("clip-rule"),"evenodd"))),"Plugins"),e.keyword("class"),"md:h-48",e.keyword("size"),e.keyword("half"),e.keyword("content"),e.vector(e.keyword("div"),(()=>{const u=k.pluralize.call(null,a,"plugin"),w=e.nth.call(null,u,0,null),i=e.nth.call(null,u,1,null);return e.vector(e.keyword("p"),e.array_map(e.keyword("class"),"mb-4"),"This site has ",e.vector(e.keyword("span"),e.array_map(e.keyword("class"),"font-semibold"),w)," ",i," activated:")})(),e.vector(e.keyword("div"),function w(i){return new e.LazySeq(null,function(){let S=i;for(;;){const A=e.seq.call(null,S);if(e.truth_.call(null,A)){const b=A;if(e.truth_.call(null,e.chunked_seq_QMARK_.call(null,b))){const h=e.chunk_first.call(null,b),M=e.count.call(null,h),Z=e.chunk_buffer.call(null,M);return(()=>{let m=0;for(;;){if(m<M){const g=e._nth.call(null,h,m),f=e.nth.call(null,g,0,null),x=e.nth.call(null,g,1,null);e.chunk_append.call(null,Z,e.vector(e.keyword("span"),e.truth_.call(null,e._EQ_.call(null,f,0))?null:e.vector(e.keyword("span"),e.array_map(e.keyword("class"),"text-gray-300")," \u2022 "),e.vector(e.keyword("a"),e.array_map(e.keyword("class"),"underline text-nowrap font-semibold",e.keyword("href"),"/admin/plugins"),e.keyword("label").call(null,x)))),m=e.unchecked_inc.call(null,m);continue}else return!0;break}})()?e.chunk_cons.call(null,e.chunk.call(null,Z),w.call(null,e.chunk_rest.call(null,b))):e.chunk_cons.call(null,e.chunk.call(null,Z),null)}else{const h=e.first.call(null,b),M=e.nth.call(null,h,0,null),Z=e.nth.call(null,h,1,null);return e.cons.call(null,e.vector(e.keyword("span"),e.truth_.call(null,e._EQ_.call(null,M,0))?null:e.vector(e.keyword("span"),e.array_map(e.keyword("class"),"text-gray-300")," \u2022 "),e.vector(e.keyword("a"),e.array_map(e.keyword("class"),"underline text-nowrap font-semibold",e.keyword("href"),"/admin/plugins"),e.keyword("label").call(null,Z))),w.call(null,e.rest.call(null,b)))}}break}},null,null)}.call(null,e.map_indexed.call(null,e.vector,e.sort_by.call(null,e.keyword("label"),a))))))))},F=function(r){const t=r,l=e.__destructure_map.call(null,t),a=e.get.call(null,l,e.keyword("settings"));return e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"w-full md:w-1/2 md:px-2 mb-4",e.keyword("data-test-id"),"dashboard-settings"),e.vector(k.box,e.array_map(e.keyword("title"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"flex items-center"),e.vector(e.keyword("svg"),e.array_map(e.keyword("class"),"w-8 h-8 text-gray-500 dark:text-white mr-4",e.keyword("aria-hidden"),"true",e.keyword("xmlns"),"http://www.w3.org/2000/svg",e.keyword("width"),"24",e.keyword("height"),"24",e.keyword("fill"),"currentColor",e.keyword("viewBox"),"0 0 24 24"),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",e.keyword("clip-rule"),"evenodd"))),"Settings"),e.keyword("class"),"md:h-48",e.keyword("size"),e.keyword("half"),e.keyword("content"),e.vector(e.keyword("div"),e.vector(e.keyword("div"),e.vector(e.keyword("span"),e.array_map(e.keyword("class"),"font-semibold"),"Permalinks: "),e.vector(e.keyword("code"),e.get_in.call(null,a,e.vector(e.keyword("permalink-single"),e.keyword("value")))))))))},J=function(r){const t=r,l=e.__destructure_map.call(null,t),a=e.get.call(null,l,e.keyword("current-user"));return e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"w-full md:w-1/2 md:px-2 mb-4",e.keyword("data-test-id"),"dashboard-user"),e.vector(k.box,e.array_map(e.keyword("title"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"flex items-center"),e.vector(e.keyword("svg"),e.array_map(e.keyword("class"),"w-8 h-8 text-gray-500 dark:text-white mr-4",e.keyword("aria-hidden"),"true",e.keyword("xmlns"),"http://www.w3.org/2000/svg",e.keyword("width"),"24",e.keyword("height"),"24",e.keyword("fill"),"currentColor",e.keyword("viewBox"),"0 0 24 24"),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z",e.keyword("clip-rule"),"evenodd"))),"User"),e.keyword("class"),"md:h-48",e.keyword("size"),e.keyword("half"),e.keyword("content"),e.vector(e.keyword("div"),"You're logged in as ",e.vector(e.keyword("a"),e.array_map(e.keyword("class"),"font-semibold underline"),e.array_map(e.keyword("href"),"/admin/users"),e.keyword("username").call(null,a)),"."))))},W=function(r){const t=r,l=e.__destructure_map.call(null,t),a=e.get.call(null,l,e.keyword("rpub-version")),u=e.str.call(null,"https://github.com/rpub-clj/rpub/tree/v",a);return e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"w-full md:w-1/2 md:px-2 mb-4",e.keyword("data-test-id"),"dashboard-server"),e.vector(k.box,e.array_map(e.keyword("title"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"flex items-center"),e.vector(e.keyword("svg"),e.array_map(e.keyword("class"),"w-8 h-8 text-gray-500 dark:text-white mr-4",e.keyword("aria-hidden"),"true",e.keyword("xmlns"),"http://www.w3.org/2000/svg",e.keyword("width"),"24",e.keyword("height"),"24",e.keyword("fill"),"currentColor",e.keyword("viewBox"),"0 0 24 24"),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M5 5a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2H5Zm9 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H14Zm3 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17ZM3 17v-3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm11-2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H14Zm3 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z",e.keyword("clip-rule"),"evenodd"))),"Server"),e.keyword("class"),"md:h-48",e.keyword("size"),e.keyword("half"),e.keyword("content"),e.vector(e.keyword("div"),"This server is running ",e.vector(e.keyword("a"),e.array_map(e.keyword("class"),"font-semibold underline",e.keyword("href"),u,e.keyword("target"),"_blank"),e.str.call(null,"rPub v",a)),"."))))},X=function(r){return e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"flex flex-wrap py-4 px-4 md:px-2"),e.vector(P,r),e.vector(j,r),e.vector(Y,r),e.vector(F,r),e.vector(J,r),e.vector(W,r))};V.add_element.call(null,e.keyword("dashboard-page"),T.reactify_component.call(null,X));var $=function(r){const t=r,l=e.__destructure_map.call(null,t),a=l,u=e.get.call(null,l,e.keyword("anti-forgery-token")),w=q.call(null,e.merge.call(null,e.array_map(e.keyword("form-values"),e.array_map()),e.select_keys.call(null,a,e.vector(e.keyword("settings"))))),i=e.nth.call(null,w,0,null),S=e.array_map(e.keyword("anti-forgery-token"),u),A=function(m){return V.debounce.call(null,function(g){e.println.call(null,g);const f=g.target.value,x=e.assoc.call(null,S,e.keyword("body"),e.array_map(e.keyword("setting-key"),e.str.call(null,e.keyword.call(null,m)),e.keyword("setting-value"),f));return Q.post.call(null,"/api/update-setting",x)},V.default_debounce_timeout_ms)},b=function(m){return m.preventDefault()},h=i,M=e.__destructure_map.call(null,h),Z=e.get.call(null,M,e.keyword("settings"));return e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"p-4"),e.vector(k.box,e.array_map(e.keyword("title"),"Settings",e.keyword("content"),e.vector(e.keyword("section"),e.array_map(e.keyword("class"),"bg-white dark:bg-gray-900"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"max-w-2xl"),e.vector(e.keyword("form"),e.array_map(e.keyword("on-submit"),b),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"grid gap-4 sm:grid-cols-2 sm:gap-6"),function g(f){return new e.LazySeq(null,function(){let x=f;for(;;){const C=e.seq.call(null,x);if(e.truth_.call(null,C)){const L=C;if(e.truth_.call(null,e.chunked_seq_QMARK_.call(null,L))){const H=e.chunk_first.call(null,L),_=e.count.call(null,H),c=e.chunk_buffer.call(null,_);return(()=>{let o=0;for(;;){if(o<_){const n=e._nth.call(null,H,o),y=e.__destructure_map.call(null,n),s=e.get.call(null,y,e.keyword("key")),p=e.get.call(null,y,e.keyword("label")),d=e.get.call(null,y,e.keyword("value"));e.chunk_append.call(null,c,e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"sm:col-span-2"),e.vector(e.keyword("label"),e.array_map(e.keyword("class"),"block mb-2 text-sm font-semibold text-gray-900 dark:text-white",e.keyword("for"),"name"),p),e.vector(V.input,e.array_map(e.keyword("type"),e.keyword("text"),e.keyword("name"),s,e.keyword("default-value"),d,e.keyword("on-change"),A.call(null,s))))),o=e.unchecked_inc.call(null,o);continue}else return!0;break}})()?e.chunk_cons.call(null,e.chunk.call(null,c),g.call(null,e.chunk_rest.call(null,L))):e.chunk_cons.call(null,e.chunk.call(null,c),null)}else{const H=e.first.call(null,L),_=e.__destructure_map.call(null,H),c=e.get.call(null,_,e.keyword("key")),o=e.get.call(null,_,e.keyword("label")),n=e.get.call(null,_,e.keyword("value"));return e.cons.call(null,e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"sm:col-span-2"),e.vector(e.keyword("label"),e.array_map(e.keyword("class"),"block mb-2 text-sm font-semibold text-gray-900 dark:text-white",e.keyword("for"),"name"),o),e.vector(V.input,e.array_map(e.keyword("type"),e.keyword("text"),e.keyword("name"),c,e.keyword("default-value"),n,e.keyword("on-change"),A.call(null,c)))),g.call(null,e.rest.call(null,L)))}}break}},null,null)}.call(null,e.sort_by.call(null,e.keyword("label"),Z)))))))))};V.add_element.call(null,e.keyword("settings-page"),T.reactify_component.call(null,$));var se=e.vector(e.array_map(e.keyword("key"),e.keyword("id"),e.keyword("name"),"ID"),e.array_map(e.keyword("key"),e.keyword("created-at"),e.keyword("name"),"Created At"),e.array_map(e.keyword("key"),e.keyword("created-by"),e.keyword("name"),"Created By")),oe=e.vector(e.array_map(e.keyword("name"),"Username",e.keyword("value"),function(r){const t=r,l=e.__destructure_map.call(null,t),a=e.get.call(null,l,e.keyword("username"));return e.vector(e.keyword("a"),e.array_map(e.keyword("class"),"font-semibold"),a)})),ee=function(r){const t=r,l=e.__destructure_map.call(null,t),a=e.get.call(null,l,e.keyword("users"));return e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"p-4"),e.vector(k.table,e.array_map(e.keyword("title"),"Users",e.keyword("columns"),oe,e.keyword("rows"),a)))};V.add_element.call(null,e.keyword("users-page"),T.reactify_component.call(null,ee));var U=function(r){return e.vector(e.keyword("svg"),e.array_map(e.keyword("class"),"w-8 h-8 text-gray-500 dark:text-white mr-4",e.keyword("aria-hidden"),"true",e.keyword("xmlns"),"http://www.w3.org/2000/svg",e.keyword("width"),"24",e.keyword("height"),"24",e.keyword("fill"),"currentColor",e.keyword("viewBox"),"0 0 24 24"),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z",e.keyword("clip-rule"),"evenodd")),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z",e.keyword("clip-rule"),"evenodd")))},I=function(r,t){return e.into.call(null,e.array_map(),e.map.call(null,function(l){return e.vector(r.call(null,l),l)},t))},re=function(r){const t=r,l=e.__destructure_map.call(null,t),a=e.get.call(null,l,e.keyword("themes")),u=e.get.call(null,l,e.keyword("theme-name-setting")),w=e.get.call(null,l,e.keyword("anti-forgery-token")),i=q.call(null,e.array_map(e.keyword("current-theme-name-setting"),u)),S=e.nth.call(null,i,0,null),A=e.nth.call(null,i,1,null),b=S,h=e.__destructure_map.call(null,b),M=e.get.call(null,h,e.keyword("current-theme-name-setting")),Z=e.array_map(e.keyword("anti-forgery-token"),w),m=function(f){return e._EQ_.call(null,e.keyword("label").call(null,f),e.keyword("value").call(null,M))},g=function(f){return function(x){x.preventDefault();const C=e.array_map(e.keyword("setting-key"),e.str.call(null,e.keyword("theme-name")),e.keyword("setting-value"),e.keyword("label").call(null,f)),L=function(_,c){if(e.truth_.call(null,_))return A.call(null,e.assoc_in.call(null,S,e.vector(e.keyword("current-theme-name-setting"),e.keyword("value")),e.keyword("label").call(null,f)))},H=e.merge.call(null,Z,e.array_map(e.keyword("body"),C,e.keyword("on-complete"),L));return Q.post.call(null,"/api/update-setting",H)}};return e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"p-4"),function x(C){return new e.LazySeq(null,function(){let L=C;for(;;){const H=e.seq.call(null,L);if(e.truth_.call(null,H)){const _=H;if(e.truth_.call(null,e.chunked_seq_QMARK_.call(null,_))){const c=e.chunk_first.call(null,_),o=e.count.call(null,c),n=e.chunk_buffer.call(null,o);return(()=>{let y=0;for(;;){if(y<o){const s=e._nth.call(null,c,y),p=m.call(null,s);e.chunk_append.call(null,n,e.vector(e.keyword("form"),e.array_map(e.keyword("method"),e.keyword("post")),e.vector(e.keyword("input"),e.array_map(e.keyword("type"),"hidden",e.keyword("name"),"__anti-forgery-token",e.keyword("value"),w)),e.vector(e.keyword("input"),e.array_map(e.keyword("type"),"hidden",e.keyword("name"),"theme-name",e.keyword("value"),e.keyword("label").call(null,s))),e.vector(k.box,e.array_map(e.keyword("key"),e.keyword("label").call(null,s),e.keyword("title"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"flex items-center",e.keyword("style"),e.array_map(e.keyword("margin-top"),"-1px")),e.vector(U),e.keyword("label").call(null,s),e.truth_.call(null,p)?e.vector(e.keyword("button"),e.array_map(e.keyword("class"),"font-app-sans inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 shadow-inner ml-auto cursor-auto w-44"),e.array_map(e.keyword("type"),"submit"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"inline-flex items-center mx-auto"),e.vector(e.keyword("svg"),e.array_map(e.keyword("class"),"w-6 h-6 text-white mr-2",e.keyword("aria-hidden"),"true",e.keyword("xmlns"),"http://www.w3.org/2000/svg",e.keyword("width"),"24",e.keyword("height"),"24",e.keyword("fill"),"currentColor",e.keyword("viewBox"),"0 0 24 24"),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z",e.keyword("clip-rule"),"evenodd"))),"Active")):e.vector(e.keyword("button"),e.array_map(e.keyword("class"),"font-app-sans inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 shadow ml-auto w-44",e.keyword("onClick"),g.call(null,s)),e.array_map(e.keyword("type"),"submit"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"inline-flex items-center mx-auto"),e.vector(e.keyword("svg"),e.array_map(e.keyword("class"),"w-6 h-6 text-white dark:text-white mr-2",e.keyword("aria-hidden"),"true",e.keyword("xmlns"),"http://www.w3.org/2000/svg",e.keyword("width"),"24",e.keyword("height"),"24",e.keyword("fill"),"currentColor",e.keyword("viewBox"),"0 0 24 24"),e.vector(e.keyword("path"),e.array_map(e.keyword("d"),"M8 5v4.997a.31.31 0 0 1-.068.113c-.08.098-.213.207-.378.301-.947.543-1.713 1.54-2.191 2.488A6.237 6.237 0 0 0 4.82 14.4c-.1.48-.138 1.031.018 1.539C5.12 16.846 6.02 17 6.414 17H11v3a1 1 0 1 0 2 0v-3h4.586c.395 0 1.295-.154 1.575-1.061.156-.508.118-1.059.017-1.539a6.241 6.241 0 0 0-.541-1.5c-.479-.95-1.244-1.946-2.191-2.489a1.393 1.393 0 0 1-.378-.301.309.309 0 0 1-.068-.113V5h1a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2h1Z"))),"Activate Theme"))),e.keyword("class"),"mb-4",e.keyword("content"),(()=>{const z=e.keyword("description").call(null,s);if(e.truth_.call(null,z)){const v=z;return e.vector(e.keyword("p"),v)}})())))),y=e.unchecked_inc.call(null,y);continue}else return!0;break}})()?e.chunk_cons.call(null,e.chunk.call(null,n),x.call(null,e.chunk_rest.call(null,_))):e.chunk_cons.call(null,e.chunk.call(null,n),null)}else{const c=e.first.call(null,_),o=m.call(null,c);return e.cons.call(null,e.vector(e.keyword("form"),e.array_map(e.keyword("method"),e.keyword("post")),e.vector(e.keyword("input"),e.array_map(e.keyword("type"),"hidden",e.keyword("name"),"__anti-forgery-token",e.keyword("value"),w)),e.vector(e.keyword("input"),e.array_map(e.keyword("type"),"hidden",e.keyword("name"),"theme-name",e.keyword("value"),e.keyword("label").call(null,c))),e.vector(k.box,e.array_map(e.keyword("key"),e.keyword("label").call(null,c),e.keyword("title"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"flex items-center",e.keyword("style"),e.array_map(e.keyword("margin-top"),"-1px")),e.vector(U),e.keyword("label").call(null,c),e.truth_.call(null,o)?e.vector(e.keyword("button"),e.array_map(e.keyword("class"),"font-app-sans inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 shadow-inner ml-auto cursor-auto w-44"),e.array_map(e.keyword("type"),"submit"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"inline-flex items-center mx-auto"),e.vector(e.keyword("svg"),e.array_map(e.keyword("class"),"w-6 h-6 text-white mr-2",e.keyword("aria-hidden"),"true",e.keyword("xmlns"),"http://www.w3.org/2000/svg",e.keyword("width"),"24",e.keyword("height"),"24",e.keyword("fill"),"currentColor",e.keyword("viewBox"),"0 0 24 24"),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z",e.keyword("clip-rule"),"evenodd"))),"Active")):e.vector(e.keyword("button"),e.array_map(e.keyword("class"),"font-app-sans inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 shadow ml-auto w-44",e.keyword("onClick"),g.call(null,c)),e.array_map(e.keyword("type"),"submit"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"inline-flex items-center mx-auto"),e.vector(e.keyword("svg"),e.array_map(e.keyword("class"),"w-6 h-6 text-white dark:text-white mr-2",e.keyword("aria-hidden"),"true",e.keyword("xmlns"),"http://www.w3.org/2000/svg",e.keyword("width"),"24",e.keyword("height"),"24",e.keyword("fill"),"currentColor",e.keyword("viewBox"),"0 0 24 24"),e.vector(e.keyword("path"),e.array_map(e.keyword("d"),"M8 5v4.997a.31.31 0 0 1-.068.113c-.08.098-.213.207-.378.301-.947.543-1.713 1.54-2.191 2.488A6.237 6.237 0 0 0 4.82 14.4c-.1.48-.138 1.031.018 1.539C5.12 16.846 6.02 17 6.414 17H11v3a1 1 0 1 0 2 0v-3h4.586c.395 0 1.295-.154 1.575-1.061.156-.508.118-1.059.017-1.539a6.241 6.241 0 0 0-.541-1.5c-.479-.95-1.244-1.946-2.191-2.489a1.393 1.393 0 0 1-.378-.301.309.309 0 0 1-.068-.113V5h1a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2h1Z"))),"Activate Theme"))),e.keyword("class"),"mb-4",e.keyword("content"),(()=>{const n=e.keyword("description").call(null,c);if(e.truth_.call(null,n)){const y=n;return e.vector(e.keyword("p"),y)}})()))),x.call(null,e.rest.call(null,_)))}}break}},null,null)}.call(null,a))};V.add_element.call(null,e.keyword("themes-page"),T.reactify_component.call(null,re));var N=function(r){return e.vector(e.keyword("svg"),e.array_map(e.keyword("class"),"w-8 h-8 text-gray-500 dark:text-white mr-4",e.keyword("aria-hidden"),"true",e.keyword("xmlns"),"http://www.w3.org/2000/svg",e.keyword("width"),"24",e.keyword("height"),"24",e.keyword("fill"),"currentColor",e.keyword("viewBox"),"0 0 24 24"),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z",e.keyword("clip-rule"),"evenodd")),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z",e.keyword("clip-rule"),"evenodd")))},O=function(r){return e.str.call(null,"https://github.com/rpub-clj/plugins/tree/main/plugins/",e.last.call(null,D.split.call(null,e.keyword("key").call(null,r),/\./)))},K=function(r){const t=r,l=e.__destructure_map.call(null,t),a=e.get.call(null,l,e.keyword("on-click")),u=q.call(null,!1),w=e.nth.call(null,u,0,null),i=e.nth.call(null,u,1,null);return e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"ml-auto",e.keyword("onMouseEnter"),function(){return i.call(null,!0)},e.keyword("onMouseLeave"),function(){return i.call(null,!1)},e.keyword("onClick"),a),e.truth_.call(null,w)?e.vector(e.keyword("button"),e.array_map(e.keyword("type"),"submit",e.keyword("class"),"font-app-sans inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 shadow w-44"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"inline-flex items-center mx-auto"),e.vector(e.keyword("svg"),e.array_map(e.keyword("class"),"w-6 h-6 text-white dark:text-white mr-2",e.keyword("aria-hidden"),"true",e.keyword("xmlns"),"http://www.w3.org/2000/svg",e.keyword("width"),"24",e.keyword("height"),"24",e.keyword("fill"),"currentColor",e.keyword("viewBox"),"0 0 24 24"),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.757-1a1 1 0 1 0 0 2h8.486a1 1 0 1 0 0-2H7.757Z",e.keyword("clip-rule"),"evenodd"))),"Deactivate")):e.vector(e.keyword("button"),e.array_map(e.keyword("type"),"submit",e.keyword("class"),"font-app-sans inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 shadow-inner w-44"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"inline-flex items-center mx-auto"),e.vector(e.keyword("svg"),e.array_map(e.keyword("class"),"w-6 h-6 text-white mr-2",e.keyword("aria-hidden"),"true",e.keyword("xmlns"),"http://www.w3.org/2000/svg",e.keyword("width"),"24",e.keyword("height"),"24",e.keyword("fill"),"currentColor",e.keyword("viewBox"),"0 0 24 24"),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z",e.keyword("clip-rule"),"evenodd"))),"Active")))},R=function(r){const t=r,l=e.__destructure_map.call(null,t),a=e.get.call(null,l,e.keyword("on-click"));return e.vector(e.keyword("button"),e.array_map(e.keyword("class"),"font-app-sans inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 shadow ml-auto w-44",e.keyword("onClick"),a),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"inline-flex items-center mx-auto"),e.vector(e.keyword("svg"),e.array_map(e.keyword("class"),"w-6 h-6 text-white dark:text-white mr-2",e.keyword("aria-hidden"),"true",e.keyword("xmlns"),"http://www.w3.org/2000/svg",e.keyword("width"),"24",e.keyword("height"),"24",e.keyword("fill"),"currentColor",e.keyword("viewBox"),"0 0 24 24"),e.vector(e.keyword("path"),e.array_map(e.keyword("fill-rule"),"evenodd",e.keyword("d"),"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z",e.keyword("clip-rule"),"evenodd"))),"Activate Plugin"))},le=function(r){const t=r,l=e.__destructure_map.call(null,t),a=l,u=e.get.call(null,l,e.keyword("current-plugins")),w=e.get.call(null,l,e.keyword("available-plugins")),i=e.get.call(null,l,e.keyword("anti-forgery-token")),S=e.array_map(e.keyword("anti-forgery-token"),i),A=I.call(null,e.keyword("key"),u),b=q.call(null,e.array_map(e.keyword("current-plugin-index"),A,e.keyword("needs-restart"),!0)),h=e.nth.call(null,b,0,null),M=e.nth.call(null,b,1,null),Z=function(c,o){const n=e.assoc.call(null,o,e.keyword("activated"),!0),y=e.array_map(e.keyword("plugin"),e.update.call(null,e.select_keys.call(null,n,e.vector(e.keyword("key"))),e.keyword("key"),function(d){return e.str.call(null,":",d)})),s=function(d,z){if(e.truth_.call(null,d))return M.call(null,e.assoc_in.call(null,h,e.vector(e.keyword("current-plugin-index"),e.keyword("key").call(null,n),e.keyword("activated")),!0))},p=e.merge.call(null,S,e.array_map(e.keyword("body"),y,e.keyword("on-complete"),s));return Q.post.call(null,"/api/activate-plugin",p)},m=function(c,o){const n=e.array_map(e.keyword("plugin"),e.update.call(null,e.select_keys.call(null,o,e.vector(e.keyword("key"))),e.keyword("key"),function(p){return e.str.call(null,":",p)})),y=function(p,d){if(e.truth_.call(null,p))return M.call(null,e.assoc_in.call(null,h,e.vector(e.keyword("current-plugin-index"),e.keyword("key").call(null,o),e.keyword("activated")),!1))},s=e.merge.call(null,S,e.array_map(e.keyword("body"),n,e.keyword("on-complete"),y));return Q.post.call(null,"/api/deactivate-plugin",s)},g=function(c){const o=function(y,s){return null},n=e.merge.call(null,S,e.array_map(e.keyword("on-complete"),o));return Q.post.call(null,"/api/restart-server",n)},f=h,x=e.__destructure_map.call(null,f),C=e.get.call(null,x,e.keyword("current-plugin-index")),L=e.get.call(null,x,e.keyword("needs-restart")),H=I.call(null,e.keyword("key"),w),_=e.merge_with.call(null,e.merge,C,H);return e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"p-4"),e.vector(k.box,e.array_map(e.keyword("title"),"Plugins",e.keyword("class"),"mb-4",e.keyword("content"),e.vector(e.keyword("div"),e.truth_.call(null,L)?e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"flex"),e.vector(e.keyword("p"),e.array_map(e.keyword("class"),"italic"),"Note: The server must be restarted after activating a plugin for the first time."),e.vector(e.keyword("button"),e.array_map(e.keyword("class"),"font-app-sans inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 shadow ml-auto w-44",e.keyword("onClick"),g),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"inline-flex items-center mx-auto"),"Restart"))):null))),function o(n){return new e.LazySeq(null,function(){let y=n;for(;;){const s=e.seq.call(null,y);if(e.truth_.call(null,s)){const p=s;if(e.truth_.call(null,e.chunked_seq_QMARK_.call(null,p))){const d=e.chunk_first.call(null,p),z=e.count.call(null,d),v=e.chunk_buffer.call(null,z);return(()=>{let G=0;for(;;){if(G<z){const E=e._nth.call(null,d,G),te=e.get.call(null,C,e.keyword("key").call(null,E));e.chunk_append.call(null,v,e.vector(k.box,e.array_map(e.keyword("key"),e.keyword("key").call(null,E),e.keyword("title"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"flex items-center",e.keyword("style"),e.array_map(e.keyword("margin-top"),"-1px")),e.vector(N),e.vector(e.keyword("a"),e.array_map(e.keyword("class"),"underline",e.keyword("href"),O.call(null,E),e.keyword("target"),"_blank"),(()=>{const B=e.keyword("label").call(null,E);return e.truth_.call(null,B)?B:e.keyword("key").call(null,E)})()),e.truth_.call(null,e.keyword("activated").call(null,te))?e.vector(K,e.array_map(e.keyword("on-click"),function(B){return m.call(null,B,E)})):e.vector(R,e.array_map(e.keyword("on-click"),function(B){return Z.call(null,B,E)}))),e.keyword("class"),"mb-4",e.keyword("content"),e.vector(e.keyword("div"),(()=>{const B=e.keyword("description").call(null,E);if(e.truth_.call(null,B)){const ae=B;return e.vector(e.keyword("p"),ae)}})())))),G=e.unchecked_inc.call(null,G);continue}else return!0;break}})()?e.chunk_cons.call(null,e.chunk.call(null,v),o.call(null,e.chunk_rest.call(null,p))):e.chunk_cons.call(null,e.chunk.call(null,v),null)}else{const d=e.first.call(null,p),z=e.get.call(null,C,e.keyword("key").call(null,d));return e.cons.call(null,e.vector(k.box,e.array_map(e.keyword("key"),e.keyword("key").call(null,d),e.keyword("title"),e.vector(e.keyword("div"),e.array_map(e.keyword("class"),"flex items-center",e.keyword("style"),e.array_map(e.keyword("margin-top"),"-1px")),e.vector(N),e.vector(e.keyword("a"),e.array_map(e.keyword("class"),"underline",e.keyword("href"),O.call(null,d),e.keyword("target"),"_blank"),(()=>{const v=e.keyword("label").call(null,d);return e.truth_.call(null,v)?v:e.keyword("key").call(null,d)})()),e.truth_.call(null,e.keyword("activated").call(null,z))?e.vector(K,e.array_map(e.keyword("on-click"),function(v){return m.call(null,v,d)})):e.vector(R,e.array_map(e.keyword("on-click"),function(v){return Z.call(null,v,d)}))),e.keyword("class"),"mb-4",e.keyword("content"),e.vector(e.keyword("div"),(()=>{const v=e.keyword("description").call(null,d);if(e.truth_.call(null,v)){const G=v;return e.vector(e.keyword("p"),G)}})()))),o.call(null,e.rest.call(null,p)))}}break}},null,null)}.call(null,e.sort_by.call(null,function(o){return D.lower_case.call(null,(()=>{const n=e.keyword("label").call(null,o);return e.truth_.call(null,n)?n:e.keyword("key").call(null,o)})())},e.vals.call(null,_))))};V.add_element.call(null,e.keyword("plugins-page"),T.reactify_component.call(null,le));export{K as active_plugin_button,R as available_plugin_button,P as dashboard_content_types,X as dashboard_page,Y as dashboard_plugins,W as dashboard_server,F as dashboard_settings,j as dashboard_theme,J as dashboard_user,I as index_by,N as plugin_icon,O as plugin_url,le as plugins_page,$ as settings_page,U as theme_icon,re as themes_page,ee as users_page};
