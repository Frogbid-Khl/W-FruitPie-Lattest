(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{342:function(n,t){},351:function(n,t){},369:function(n,t){},371:function(n,t){},392:function(n,t){},393:function(n,t){},456:function(n,t){},458:function(n,t){},490:function(n,t){},492:function(n,t){},493:function(n,t){},498:function(n,t){},500:function(n,t){},506:function(n,t){},508:function(n,t){},527:function(n,t){},539:function(n,t){},542:function(n,t){},547:function(n,t){},549:function(n,t){},550:function(n,t){},566:function(n,t){},568:function(n,t){},596:function(n,t){},598:function(n,t){},603:function(n,t){},605:function(n,t){},611:function(n,t){},613:function(n,t){},625:function(n,t){},628:function(n,t){},640:function(n,t){},649:function(n,t){},651:function(n,t){},722:function(n,t,e){},723:function(n,t,e){"use strict";e.r(t);var c,r,a,o,i,s,l,u,d,p,x,b,j,f,h,O,g=e(1),C=e(108),v=e.n(C),y=e(21),m=e.n(y),w=e(54),A=e(90),E=e(20),S=e(74),T=e(89),N=e.n(T),_=e(313),k=e.n(_),M=e(91),D=e(314),I=e(23),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},L),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},n),{},{account:t.payload.account});default:return n}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},K),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},U=Object(M.b)({blockchain:R,data:F}),P=[D.a],W=Object(M.c)(M.a.apply(void 0,P)),Y=Object(M.d)(U,W),z=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},B=function(){return function(){var n=Object(w.a)(m.a.mark((function n(t){var e;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(z("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},H=function(n){return{type:"CONNECTION_FAILED",payload:n}},G=function(n){return function(){var t=Object(w.a)(m.a.mark((function t(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(B());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},Q=e(18),q=Q.a.div(c||(c=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),J=Q.a.div(r||(r=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),X=Q.a.div(a||(a=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=Q.a.div(o||(o=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=Q.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=Q.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),nn=Q.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),tn=(Q.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Q.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),en=(Q.a.div(p||(p=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(2)),cn=Q.a.button(x||(x=Object(E.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rn=Q.a.button(b||(b=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),an=Q.a.div(j||(j=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),on=Q.a.img(f||(f=Object(E.a)(["\n  width: 150px;\n  @media (min-width: 767px) {\n    width: 150px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),sn=Q.a.img(h||(h=Object(E.a)(["\nwidth: 600px;\n@media (min-width: 767px) {\n  width: 600px;\n}\ntransition: width 0.5s;\ntransition: height 0.5s;\n"]))),ln=Q.a.a(O||(O=Object(E.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var un=function(){var n=Object(S.b)(),t=Object(S.c)((function(n){return n.blockchain})),e=Object(S.c)((function(n){return n.data})),c=Object(g.useState)(!1),r=Object(A.a)(c,2),a=r[0],o=r[1],i=Object(g.useState)("Click buy to mint your NFT."),s=Object(A.a)(i,2),l=s[0],u=s[1],d=Object(g.useState)(1),p=Object(A.a)(d,2),x=p[0],b=p[1],j=Object(g.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),f=Object(A.a)(j,2),h=f[0],O=f[1],C=function(){""!==t.account&&null!==t.smartContract&&n(B(t.account))},v=function(){var n=Object(w.a)(m.a.mark((function n(){var t,e;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,O(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(g.useEffect)((function(){v()}),[]),Object(g.useEffect)((function(){C()}),[t.account]),Object(en.jsx)(q,{children:Object(en.jsxs)($,{flex:0,ai:"center",style:{padding:20,backgroundColor:"var(--primary)"},image:h.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(en.jsx)(Z,{}),Object(en.jsx)(Z,{}),Object(en.jsx)(on,{alt:"logo",src:"/config/images/logo.png"}),Object(en.jsx)(X,{}),Object(en.jsxs)(an,{flex:1,style:{padding:0},test:!0,children:[Object(en.jsx)(Z,{}),Object(en.jsxs)($,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:5,borderRadius:5,border:"0px dashed var(--secondary)",boxShadow:"0px 0px 0px 0px rgba(0,0,0,0)"},children:[Object(en.jsxs)(tn,{style:{textAlign:"center",color:"var(--primary-text)"},children:[Object(en.jsx)(X,{}),Object(en.jsx)(sn,{alt:"fruit",src:"/config/images/fruit.png"})]}),Object(en.jsx)(X,{}),Number(e.totalSupply)>=h.MAX_SUPPLY?Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(en.jsxs)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",h.NFT_NAME," on"]}),Object(en.jsx)(X,{}),Object(en.jsx)(ln,{target:"_blank",href:h.MARKETPLACE_LINK,children:h.MARKETPLACE})]}):Object(en.jsxs)(en.Fragment,{children:[Object(en.jsxs)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["\u9444\u9020\u60a8\u7684 ",h.SYMBOL," NFT, \u6bcf\u53ea ",h.DISPLAY_COST," ",h.NETWORK.SYMBOL]}),Object(en.jsx)(J,{}),Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"}}),Object(en.jsx)(X,{}),""===t.account||null===t.smartContract?Object(en.jsxs)($,{ai:"center",jc:"center",children:[Object(en.jsxs)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",h.NETWORK.NAME," network"]}),Object(en.jsx)(X,{}),Object(en.jsx)(cn,{onClick:function(t){t.preventDefault(),n(function(){var n=Object(w.a)(m.a.mark((function n(t){var e,c,r,a,o,i,s,l,u;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=n.sent,n.next=12,r.json();case 12:if(a=n.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){n.next=33;break}return N.a.setProvider(i),s=new k.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==a.NETWORK.ID?(u=new N.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(n){t(G(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(H("Change network to ".concat(a.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),t(H("Something went wrong."));case 31:n.next=34;break;case 33:t(H("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t){return n.apply(this,arguments)}}()),C()},children:"CONNECT"}),""!==t.errorMsg?Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)(X,{}),Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.errorMsg})]}):null]}):Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:l}),Object(en.jsx)(V,{}),Object(en.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(en.jsx)(rn,{style:{lineHeight:.4},disabled:a?1:0,onClick:function(n){n.preventDefault(),function(){var n=x-1;n<1&&(n=1),b(n)}()},children:"-"}),Object(en.jsx)(V,{}),Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:x}),Object(en.jsx)(V,{}),Object(en.jsx)(rn,{disabled:a?1:0,onClick:function(n){n.preventDefault(),function(){var n=x+1;n>10&&(n=10),b(n)}()},children:"+"})]}),Object(en.jsx)(X,{}),Object(en.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(en.jsx)(cn,{disabled:a?1:0,onClick:function(e){e.preventDefault(),function(){var e=h.WEI_COST,c=h.GAS_LIMIT,r=String(e*x),a=String(c*x);console.log("Cost: ",r),console.log("Gas limit: ",a),u("Minting your ".concat(h.NFT_NAME,"...")),o(!0),t.smartContract.methods.mint(x).send({gasLimit:String(a),to:h.CONTRACT_ADDRESS,from:t.account,value:r}).once("error",(function(n){console.log(n),u("Sorry, something went wrong please try again later."),o(!1)})).then((function(e){console.log(e),u("WOW, the ".concat(h.NFT_NAME," is yours! go visit Opensea.io to view it.")),o(!1),n(B(t.account))}))}(),C()},children:a?"BUSY":"BUY"})})]})]}),Object(en.jsx)(V,{})]})]}),Object(en.jsx)(V,{}),Object(en.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(en.jsx)(X,{}),Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--primary-text)"}})]})]})})},dn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,727)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),c(n),r(n),a(n),o(n)}))};e(722);v.a.render(Object(en.jsx)(S.a,{store:Y,children:Object(en.jsx)(un,{})}),document.getElementById("root")),dn()}},[[723,1,2]]]);
//# sourceMappingURL=main.e906d3cc.chunk.js.map