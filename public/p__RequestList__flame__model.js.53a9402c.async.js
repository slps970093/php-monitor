(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"qx+u":function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.queryFlame=c;var n=r(a("d6i3")),u=r(a("1l/V")),s=r(a("t3Un"));function c(e){return p.apply(this,arguments)}function p(){return p=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/?r=api/flame",{params:t}));case 1:case"end":return e.stop()}},e)})),p.apply(this,arguments)}},tf9I:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("p0pE")),u=r(a("d6i3")),s=a("qx+u"),c={namespace:"requestFlame",state:{basicGoods:[]},effects:{fetchBasic:u.default.mark(function e(t,a){var r,n,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.call,n=a.put,e.next=3,r(s.queryFlame,t.param);case 3:return c=e.sent,e.next=6,n({type:"show",payload:c});case 6:case"end":return e.stop()}},e)})},reducers:{show:function(e,t){var a=t.payload;return(0,n.default)({},e,a)}}},p=c;t.default=p}}]);