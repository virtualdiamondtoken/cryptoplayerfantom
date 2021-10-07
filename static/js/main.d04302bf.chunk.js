(this["webpackJsonpevm-music-player"]=this["webpackJsonpevm-music-player"]||[]).push([[0],{146:function(e,t,n){},252:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_requestedAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_requestedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_requestedUrl","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_songCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"changePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRequestedAddress","type":"address"},{"internalType":"string","name":"newRequestedUrl","type":"string"}],"name":"requestSong","outputs":[],"stateMutability":"payable","type":"function"}]')},262:function(e,t,n){},275:function(e,t){},300:function(e,t){},302:function(e,t){},320:function(e,t){},321:function(e,t){},382:function(e,t){},384:function(e,t){},395:function(e,t){},397:function(e,t){},422:function(e,t){},424:function(e,t){},425:function(e,t){},430:function(e,t){},432:function(e,t){},438:function(e,t){},440:function(e,t){},453:function(e,t){},465:function(e,t){},468:function(e,t){},479:function(e,t){},488:function(e,t){},490:function(e,t){},567:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(77),c=n.n(s),i=(n(146),n(5)),o=n(6),u=n(12),l=n(11),d=(n(262),n(107)),h=n(17),p=n(79),b=n(19),f=n.n(b),y=n(54),m=n(90),j=n(48),w=n.n(j),x=n(252),v=function(){var e=Object(y.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.eth.getAccounts();case 2:return window.user=e.sent[0],window.instacePlayer=new t.eth.Contract(x,"0xC26155619c24841688bb5F3579b1C993Eeb35d9B",{from:window.user}),e.abrupt("return",window.instacePlayer);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var g=n(592),O=n(593),q=n(590),k=n(591),P=n(8),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r,a;return Object(i.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(y.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(){var e=Object(y.a)(f.a.mark((function e(t,n){var r,a,s,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=13;break}return r=new w.a(window.ethereum),e.prev=2,e.next=5,window.ethereum.enable();case 5:t(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),n(e.t0);case 11:e.next=14;break;case 13:window.web3?(a=window.web3,console.log("Injected web3 detected."),t(a)):(console.log(""),s=new w.a.providers.HttpProvider("https://rpcapi.fantom.network"),c=new w.a(s),console.log("No web3 instance injected, using Local web3."),t(c));case 14:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}());case 3:return t=e.sent,window.web3=t,e.next=7,v(window.web3);case 7:return n=e.sent,a.setState({user:window.user}),a.setState({contractInstancePlayer:n}),e.next=12,a.loadData();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("Error",e.t0);case 17:return e.prev=17,a.setState({isLoadingHomepageData:!1}),e.finish(17);case 20:a.interval=setInterval((function(){return a.fetchBlockchainData()}),1e3);case 21:case"end":return e.stop()}}),e,null,[[0,14,17,20]])}))),a.state=(r={hasHomepageData:!1,isLoadingHomepageData:!0,lastRequestedAddress:"",requestedPrice:0,requestedTime:0,requestURL:"",songCounter:0},Object(p.a)(r,"requestedTime",0),Object(p.a)(r,"requestedAddress",""),Object(p.a)(r,"requestedUrl",""),r),a.requestSong=a.requestSong.bind(Object(m.a)(a)),a.fetchBlockchainData=a.fetchBlockchainData.bind(Object(m.a)(a)),a}return Object(o.a)(n,[{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"fetchBlockchainData",value:function(){var e=Object(y.a)(f.a.mark((function e(){var t,n,r,a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("aqui"),e.prev=1,e.next=4,this.state.contractInstancePlayer.methods._price().call();case 4:return t=e.sent,e.next=7,this.state.contractInstancePlayer.methods._requestedTime().call();case 7:return n=e.sent,e.next=10,this.state.contractInstancePlayer.methods._songCounter().call();case 10:return r=e.sent,e.next=13,this.state.contractInstancePlayer.methods._requestedAddress().call();case 13:return a=e.sent,e.next=16,this.state.contractInstancePlayer.methods._requestedUrl().call();case 16:s=(s=e.sent).replace("watch?v=","/embed/"),r!=this.state.songCounter?this.setState({requestedPrice:t,requestedTime:n,songCounter:r,requestedAddress:a,requestedUrl:s}):this.setState({requestedTime:n}),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),console.log("Error",e.t0);case 24:case"end":return e.stop()}}),e,this,[[1,21]])})));return function(){return e.apply(this,arguments)}}()},{key:"loadData",value:function(){var e=Object(y.a)(f.a.mark((function e(){var t,n,r,a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.state.contractInstancePlayer.methods._price().call();case 3:return t=e.sent,e.next=6,this.state.contractInstancePlayer.methods._requestedTime().call();case 6:return n=e.sent,e.next=9,this.state.contractInstancePlayer.methods._songCounter().call();case 9:return r=e.sent,e.next=12,this.state.contractInstancePlayer.methods._requestedAddress().call();case 12:return a=e.sent,e.next=15,this.state.contractInstancePlayer.methods._requestedUrl().call();case 15:s=(s=e.sent).replace("watch?v=","/embed/"),this.setState({hasHomepageData:!0,requestedPrice:t,requestedTime:n,songCounter:r,requestedAddress:a,requestedUrl:s}),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log("Error",e.t0);case 23:case"end":return e.stop()}}),e,this,[[0,20]])})));return function(){return e.apply(this,arguments)}}()},{key:"requestSong",value:function(){var e=Object(y.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.state.contractInstancePlayer.methods.requestSong(window.user,this.state.requestURL).send({value:this.state.requestedPrice}),e.next=4,this.loadData();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error",e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"timeSince",value:function(e){var t=Math.floor((new Date-1e3*e)/1e3),n=t/31536e3;return n>1?Math.floor(n)+" years":(n=t/2592e3)>1?Math.floor(n)+" months":(n=t/86400)>1?Math.floor(n)+" days":(n=t/3600)>1?Math.floor(n)+" hours":(n=t/60)>1?Math.floor(n)+" minutes":Math.floor(t)+" seconds"}},{key:"render",value:function(){var e,t=this;return Object(P.jsxs)(q.a,{style:{textAlign:"center"},children:[Object(P.jsx)("h1",{children:"Crypto Youtube Player"}),Object(P.jsx)("br",{}),Object(P.jsxs)(k.a,{container:!0,spacing:2,children:[Object(P.jsx)(k.a,{item:!0,xs:6,md:6,style:{alignItems:"center",display:"flex",justifyContent:"center"},children:Object(P.jsx)("div",{children:Object(P.jsxs)("div",{style:{textAlign:"center"},children:[Object(P.jsx)("br",{}),this.state.isLoadingHomepageData?null:Object(P.jsx)("iframe",(e={width:"560",allow:"autoplay",height:"315",src:this.state.requestedUrl+"?autoplay=1&loop=1",title:"YouTube video player",frameborder:"0"},Object(p.a)(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),Object(p.a)(e,"allowfullscreen",!0),e))]})})}),Object(P.jsx)(k.a,{item:!0,xs:6,md:6,style:{alignItems:"center",display:"flex",justifyContent:"center"},children:Object(P.jsx)("div",{children:Object(P.jsxs)("div",{style:{textAlign:"center"},children:[Object(P.jsx)("br",{}),"Song counter: ",this.state.songCounter," songs",Object(P.jsx)("br",{}),"Last requested address: ",this.state.requestedAddress,Object(P.jsx)("br",{}),"Last song requested since: ",this.timeSince(this.state.requestedTime)," ago",Object(P.jsx)("br",{})]})})}),Object(P.jsxs)("p",{style:{textAlign:"center",width:"100%"},children:["Pay ",w.a.utils.fromWei(this.state.requestedPrice+""),"  ","FTM"," to play your song. Every time a new song plays, ",w.a.utils.fromWei(this.state.requestedPrice+"")/2,"  ","FTM"," goes to the last person that requested a song."]}),void 0!=window.user?Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(k.a,{item:!0,xs:12,md:12,style:{alignItems:"center",display:"flex",justifyContent:"center",padding:0},children:Object(P.jsxs)("div",{children:[Object(P.jsx)(O.a,{onChange:function(e){return t.setState({requestURL:e.target.value})},value:this.state.requestURL,style:{width:"100%"},placeholder:"Enter youtube url: (example https://www.youtube.com/watch?v=sadJYWbffdGTe)"}),Object(P.jsxs)(g.a,{onClick:function(e){t.requestSong(e)},children:["Confirm song request for ",w.a.utils.fromWei(this.state.requestedPrice+""),"  $","FTM"]})]})})}):Object(P.jsx)(k.a,{item:!0,xs:12,md:12,style:{alignItems:"center",display:"flex",justifyContent:"center"},children:Object(P.jsxs)("b",{children:["Connect your wallet to the website to submit your song for ",w.a.utils.fromWei(this.state.requestedPrice+"")," $","FTM"]})}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{})]})]})}}]),n}(a.a.Component),T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(P.jsx)(d.b,{children:Object(P.jsxs)(h.c,{children:[Object(P.jsx)(h.a,{exact:!0,path:"/",component:C}),Object(P.jsx)(h.a,{exact:!0,path:"/home",component:C}),Object(P.jsx)(h.a,{render:function(){return Object(P.jsx)("h1",{children:"Not Found"})}})]})})}}]),n}(a.a.Component),I=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(P.jsx)(d.a,{children:Object(P.jsx)(T,{})})}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(P.jsx)(I,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[567,1,2]]]);
//# sourceMappingURL=main.d04302bf.chunk.js.map