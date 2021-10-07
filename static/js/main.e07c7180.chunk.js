(this["webpackJsonpevm-music-player"]=this["webpackJsonpevm-music-player"]||[]).push([[0],{146:function(e,t,n){},252:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_NFTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_requestedAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_requestedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_requestedUrl","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_songCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"changePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newUrl","type":"string"}],"name":"changeUrl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"newRequestedUrl","type":"string"}],"name":"requestSong","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},262:function(e,t,n){},275:function(e,t){},300:function(e,t){},302:function(e,t){},320:function(e,t){},321:function(e,t){},382:function(e,t){},384:function(e,t){},395:function(e,t){},397:function(e,t){},422:function(e,t){},424:function(e,t){},425:function(e,t){},430:function(e,t){},432:function(e,t){},438:function(e,t){},440:function(e,t){},453:function(e,t){},465:function(e,t){},468:function(e,t){},479:function(e,t){},488:function(e,t){},490:function(e,t){},567:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(77),i=n.n(s),o=(n(146),n(5)),u=n(6),c=n(12),l=n(11),p=(n(262),n(107)),d=n(17),y=n(79),m=n(19),b=n.n(m),f=n(54),h=n(90),j=n(48),w=n.n(j),v=n(252),x=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.eth.getAccounts();case 2:return window.user=e.sent[0],window.instacePlayer=new t.eth.Contract(v,"0x30FE04408F9d177aac1f6C61479bb63D64460710",{from:window.user}),e.abrupt("return",window.instacePlayer);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var g=n(592),T=n(593),O=n(590),q=n(591),k=n(8),M=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a,r;return Object(o.a)(this,n),(r=t.call(this,e)).componentDidMount=Object(f.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(){var e=Object(f.a)(b.a.mark((function e(t,n){var a,r,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=13;break}return a=new w.a(window.ethereum),e.prev=2,e.next=5,window.ethereum.enable();case 5:t(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),n(e.t0);case 11:e.next=14;break;case 13:window.web3?(r=window.web3,console.log("Injected web3 detected."),t(r)):(console.log(""),s=new w.a.providers.HttpProvider("https://rpcapi.fantom.network"),i=new w.a(s),console.log("No web3 instance injected, using Local web3."),t(i));case 14:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}());case 3:return t=e.sent,window.web3=t,e.next=7,x(window.web3);case 7:return n=e.sent,r.setState({user:window.user}),r.setState({contractInstancePlayer:n}),e.next=12,r.loadData();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("Error",e.t0);case 17:return e.prev=17,r.setState({isLoadingHomepageData:!1}),e.finish(17);case 20:r.interval=setInterval((function(){return r.fetchBlockchainData()}),1e3);case 21:case"end":return e.stop()}}),e,null,[[0,14,17,20]])}))),r.state=(a={hasHomepageData:!1,isLoadingHomepageData:!0,lastRequestedAddress:"",requestedPrice:0,requestedTime:0,requestURL:"",songCounter:0},Object(y.a)(a,"requestedTime",0),Object(y.a)(a,"requestedAddress",""),Object(y.a)(a,"requestedUrl",""),a),r.requestSong=r.requestSong.bind(Object(h.a)(r)),r.fetchBlockchainData=r.fetchBlockchainData.bind(Object(h.a)(r)),r}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"fetchBlockchainData",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t,n,a,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("aqui"),e.prev=1,e.next=4,this.state.contractInstancePlayer.methods._price().call();case 4:return t=e.sent,e.next=7,this.state.contractInstancePlayer.methods._requestedTime().call();case 7:return n=e.sent,e.next=10,this.state.contractInstancePlayer.methods._songCounter().call();case 10:return a=e.sent,e.next=13,this.state.contractInstancePlayer.methods._requestedAddress().call();case 13:return r=e.sent,e.next=16,this.state.contractInstancePlayer.methods._requestedUrl().call();case 16:s=(s=e.sent).replace("watch?v=","/embed/"),a!=this.state.songCounter?this.setState({requestedPrice:t,requestedTime:n,songCounter:a,requestedAddress:r,requestedUrl:s}):this.setState({requestedTime:n}),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),console.log("Error",e.t0);case 24:case"end":return e.stop()}}),e,this,[[1,21]])})));return function(){return e.apply(this,arguments)}}()},{key:"loadData",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t,n,a,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.state.contractInstancePlayer.methods._price().call();case 3:return t=e.sent,e.next=6,this.state.contractInstancePlayer.methods._requestedTime().call();case 6:return n=e.sent,e.next=9,this.state.contractInstancePlayer.methods._songCounter().call();case 9:return a=e.sent,e.next=12,this.state.contractInstancePlayer.methods._requestedAddress().call();case 12:return r=e.sent,e.next=15,this.state.contractInstancePlayer.methods._requestedUrl().call();case 15:s=(s=e.sent).replace("watch?v=","/embed/"),this.setState({hasHomepageData:!0,requestedPrice:t,requestedTime:n,songCounter:a,requestedAddress:r,requestedUrl:s}),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log("Error",e.t0);case 23:case"end":return e.stop()}}),e,this,[[0,20]])})));return function(){return e.apply(this,arguments)}}()},{key:"requestSong",value:function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.state.contractInstancePlayer.methods.requestSong(this.state.requestURL).send({value:this.state.requestedPrice}),e.next=4,this.loadData();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error",e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"timeSince",value:function(e){var t=Math.floor((new Date-1e3*e)/1e3),n=t/31536e3;return n>1?Math.floor(n)+" years":(n=t/2592e3)>1?Math.floor(n)+" months":(n=t/86400)>1?Math.floor(n)+" days":(n=t/3600)>1?Math.floor(n)+" hours":(n=t/60)>1?Math.floor(n)+" minutes":Math.floor(t)+" seconds"}},{key:"render",value:function(){var e,t=this;return Object(k.jsxs)(O.a,{style:{textAlign:"center"},children:[Object(k.jsx)("h1",{children:"Crypto Youtube Player"}),Object(k.jsx)("br",{}),Object(k.jsxs)(q.a,{container:!0,spacing:2,children:[Object(k.jsx)(q.a,{item:!0,xs:12,md:6,style:{alignItems:"center",display:"flex",justifyContent:"center"},children:Object(k.jsx)("div",{children:Object(k.jsxs)("div",{style:{textAlign:"center"},children:[Object(k.jsx)("br",{}),this.state.isLoadingHomepageData?null:Object(k.jsx)("iframe",(e={width:"360",allow:"autoplay",height:"315",src:this.state.requestedUrl+"?autoplay=1&loop=1",title:"YouTube video player",frameborder:"0"},Object(y.a)(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),Object(y.a)(e,"allowfullscreen",!0),e))]})})}),Object(k.jsx)(q.a,{item:!0,xs:12,md:6,style:{alignItems:"center",display:"flex",justifyContent:"center"},children:Object(k.jsx)("div",{children:Object(k.jsxs)("div",{style:{textAlign:"center"},children:[Object(k.jsx)("br",{}),"Song counter: ",this.state.songCounter," songs",Object(k.jsx)("br",{}),"Last requested address: ",this.state.requestedAddress,Object(k.jsx)("br",{}),"Last song requested since: ",this.timeSince(this.state.requestedTime)," ago",Object(k.jsx)("br",{})]})})}),Object(k.jsxs)("p",{style:{textAlign:"center",width:"100%"},children:["Pay ",w.a.utils.fromWei(this.state.requestedPrice+""),"  ","FTM"," to play your song. Every time a new song plays, ",9*w.a.utils.fromWei(this.state.requestedPrice+"")/10,"  ","FTM"," goes to the last person that requested a song."]}),Object(k.jsx)("p",{style:{textAlign:"center",width:"100%"},children:" The first 10.000 to request a song get a Crypto Player NFT."}),void 0!=window.user?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(q.a,{item:!0,xs:12,md:12,style:{alignItems:"center",display:"flex",justifyContent:"center",padding:0},children:Object(k.jsxs)("div",{children:[Object(k.jsx)(T.a,{onChange:function(e){return t.setState({requestURL:e.target.value})},value:this.state.requestURL,style:{width:"100%"},placeholder:"Enter youtube url: (example https://www.youtube.com/watch?v=sadJYWbffdGTe)"}),Object(k.jsxs)(g.a,{onClick:function(e){t.requestSong(e)},children:["Confirm song request for ",w.a.utils.fromWei(this.state.requestedPrice+""),"  $","FTM"]})]})})}):Object(k.jsx)(q.a,{item:!0,xs:12,md:12,style:{alignItems:"center",display:"flex",justifyContent:"center"},children:Object(k.jsxs)("b",{children:["Connect your wallet to the website to submit your song for ",w.a.utils.fromWei(this.state.requestedPrice+"")," $","FTM"]})}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{})]})]})}}]),n}(r.a.Component),I=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(k.jsx)(p.b,{children:Object(k.jsxs)(d.c,{children:[Object(k.jsx)(d.a,{exact:!0,path:"/",component:M}),Object(k.jsx)(d.a,{exact:!0,path:"/home",component:M}),Object(k.jsx)(d.a,{render:function(){return Object(k.jsx)("h1",{children:"Not Found"})}})]})})}}]),n}(r.a.Component),P=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(k.jsx)(p.a,{children:Object(k.jsx)(I,{})})}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(k.jsx)(P,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[567,1,2]]]);
//# sourceMappingURL=main.e07c7180.chunk.js.map