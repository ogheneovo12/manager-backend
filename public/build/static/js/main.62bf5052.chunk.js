(this.webpackJsonpmuse=this.webpackJsonpmuse||[]).push([[0],{45:function(e,t,a){},47:function(e,t,a){},56:function(e,t,a){e.exports=a(80)},61:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),o=(a(61),a(51)),s=(a(62),a(9)),i=a(10),m=a(11),u=a(12),d=a(26),h=a(23),p=(a(45),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={username:"",password:""},e.handleChange=function(t){var a=t.target.name;e.setState(Object(d.a)({},a,t.target.value))},e.onSubmit=function(t){t.preventDefault(),fetch("/api/managers/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state)}).then((function(e){return e.json()})).then((function(t){t?(e.props.loadUser(t),e.props.history.push("/team")):console.log("no response")})).catch((function(e){return alert(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement("form",{className:""},l.a.createElement("div",{className:"fm-group"},l.a.createElement("p",{className:"ml-3"},"Username"),l.a.createElement("input",{type:"text",name:"username",onChange:this.handleChange})),l.a.createElement("div",{className:"fm-group"},l.a.createElement("p",{className:"ml-3"},"Password"),l.a.createElement("input",{type:"password",name:"password",onChange:this.handleChange})),l.a.createElement("input",{type:"submit",className:"",value:"login",onClick:this.onSubmit})))}}]),a}(l.a.Component)),E=Object(h.e)(p),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target.name;e.setState(Object(d.a)({},a,t.target.value))},e.handleSubmit=function(t){fetch("/api/managers/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state)}).then((function(e){return e.json()})).then((function(t){t&&(e.props.loadUser(t),e.props.history.push("/team"))})),e.setState({name:"",email:"",username:"",club:"",password:""})},e.state={name:"",email:"",username:"",club:"",password:""},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement("form",{className:""},l.a.createElement("div",{className:"fm-group"},l.a.createElement("p",{className:""},"Name"),l.a.createElement("input",{type:"text",className:"",onChange:this.handleChange,name:"name"})),l.a.createElement("div",{className:"fm-group"},l.a.createElement("p",null,"Email"),l.a.createElement("input",{type:"",className:"",onChange:this.handleChange,name:"email"})),l.a.createElement("div",{className:"fm-group"},l.a.createElement("p",{className:"ml-3"},"Username"),l.a.createElement("input",{type:"text",className:"",onChange:this.handleChange,name:"username"})),l.a.createElement("div",{className:"fm-group"},l.a.createElement("p",null,"Club"),l.a.createElement("input",{type:"text",className:"",onChange:this.handleChange,name:"club"})),l.a.createElement("div",{className:"fm-group"},l.a.createElement("p",{className:"ml-3"},"Password"),l.a.createElement("input",{type:"password",className:"",onChange:this.handleChange,name:"password"})),l.a.createElement("input",{type:"submit",className:"",value:"Sign up",onClick:this.handleSubmit})))}}]),a}(l.a.Component),v=Object(h.e)(f),g=(a(68),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onLinkClick=function(t){e.setState({signUp:t})},e.state={signUp:!0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){localStorage.removeItem("users"),console.log("removed user")}},{key:"render",value:function(){var e=this,t=this.state.signUp?l.a.createElement(E,{loadUser:this.props.loadUser}):l.a.createElement(v,{loadUser:this.props.loadUser});return l.a.createElement("div",{className:"container-fluid whole_div"},l.a.createElement("div",{className:"welcome-flag"},l.a.createElement("div",{className:""},l.a.createElement("h1",null,"Player Manager 2020")),l.a.createElement("div",{className:"links"},l.a.createElement("a",{href:"#",className:"",onClick:function(){return e.onLinkClick(!1)}},"Register"),l.a.createElement("a",{href:"#",className:"",onClick:function(){return e.onLinkClick(!0)}},"Sign in"))),l.a.createElement("div",{className:"fm-div"},t))}}]),a}(n.Component)),y=function(e){return l.a.createElement("div",null,e.children)},b=(a(69),function(e){var t=e.player,a=e.info;return l.a.createElement("div",{className:"player_desc"},l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:"https://robohash.org/".concat(t._id,"?200x200"),alt:"imagegravatar"})),l.a.createElement("div",{className:"player_short_info"},l.a.createElement("table",{className:"player_short_info_table"},l.a.createElement("tr",null,l.a.createElement("td",null,"name"),l.a.createElement("td",null,t.name," ")),l.a.createElement("tr",null,l.a.createElement("td",null,"nationality"),l.a.createElement("td",null,t.nationality," ")),l.a.createElement("tr",null,l.a.createElement("td",null,"Position"),l.a.createElement("td",null,t.position," ")),l.a.createElement("tr",null,l.a.createElement("td",null,"Value"),l.a.createElement("td",null,t.value," "))),l.a.createElement("div",{className:"buy_button"},l.a.createElement("button",{className:"btn-primary"},"Buy"),l.a.createElement("button",{className:"btn-danger butt",onClick:function(){return a(t._id)}},"Info"))))}),N=(a(47),function(e){var t=e.player,a=e.hideModal;return l.a.createElement("div",{className:"player_modal_info"},l.a.createElement("div",{className:"img_div"},l.a.createElement("img",{src:"https://robohash.org/".concat(t.id,"?200x200"),alt:"playergravatar"})),l.a.createElement("div",null,l.a.createElement("table",{className:"table info_modal_table"},l.a.createElement("tr",null,l.a.createElement("td",null,"Name"),l.a.createElement("td",null,t.name," ")),l.a.createElement("tr",null,l.a.createElement("td",null,"Nationality"),l.a.createElement("td",null,t.nationality," ")),l.a.createElement("tr",null,l.a.createElement("td",null,"age"),l.a.createElement("td",null,t.age," ")),l.a.createElement("tr",null,l.a.createElement("td",null,"position"),l.a.createElement("td",null,t.position," ")),l.a.createElement("tr",null,l.a.createElement("td",null,"value"),l.a.createElement("td",null,t.value," ")),l.a.createElement("tr",null,l.a.createElement("td",null,"strength"),l.a.createElement("td",null,t.strength," ")),l.a.createElement("tr",null,l.a.createElement("td",null,"strong foot"),l.a.createElement("td",null,t.strong_foot," "))),l.a.createElement("div",{className:"but_div"},l.a.createElement("button",{className:"btn btn-danger bott",onClick:a},"close"))))}),C=function(e){var t=e.show,a=e.children,n=t?"modal display-block":"modal display-none";return l.a.createElement("div",{className:n},l.a.createElement("section",{className:"modal-main"},a))},w=(a(70),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={id:"",name:"",nationality:"",age:"",strength:"",position:"",status:"",value:"",strong_foot:"",show:!1},e.info=function(t){e.props.players.map((function(a){a._id===t&&e.setState({id:a._id,name:a.name,nationality:a.nationality,age:a.age,strength:a.strength,position:a.position,status:a.status,value:a.value,strong_foot:a.strong_foot,show:!0,searchTerm:""})}))},e.onSearch=function(t){e.setState({searchTerm:t.target.value}),e.props.onSearch(e.state.searchTerm)},e.hideModal=function(){e.setState({show:!1})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.players.map((function(t){return l.a.createElement(b,{key:t._id,player:t,info:e.info})}));return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",{className:"text-center"},"Available Player for sale"),l.a.createElement("div",{className:"search"},l.a.createElement("form",{className:"form form-inline right_form"},l.a.createElement("input",{type:"search",placeholder:"name or club"}),l.a.createElement("input",{type:"button",className:"btn btn-primary",value:"search",onChange:this.onSearch})))),l.a.createElement("div",{className:"players_for_sale"},t),l.a.createElement("di",null,l.a.createElement(C,{hideModal:this.hideModal,show:this.state.show},l.a.createElement(N,{player:this.state,hideModal:this.hideModal}))))}}]),a}(n.Component)),_=a(108),O=a(109),j=a(50),S=a.n(j),k=a(110),x=a(111),P=a(107),T=a(112),M=a(18),A=function(e){return l.a.createElement(x.a,{anchor:"right",open:e.open,onClose:function(){return e.onClose(!1)}},l.a.createElement(P.a,{component:"nav"},l.a.createElement(T.a,{button:!0,onClick:function(){return e.onClose(!1)}},l.a.createElement(M.b,{to:"/home"},"Transfer Market")),l.a.createElement(T.a,{button:!0,onClick:function(){return e.onClose(!1)}},l.a.createElement(M.b,{to:"/team"},"Team")),l.a.createElement(T.a,{button:!0,onClick:function(){return e.onClose(!1)}},l.a.createElement(M.b,{to:"/team/addPlayer"},"Add Player"))))},U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={drawerOpen:!1},e.toggleDrawer=function(t){e.setState({drawerOpen:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(_.a,{position:"fixed",style:{backgroundColor:"#2f2f2f",boxShadow:"none",padding:"1px 0px"}},l.a.createElement(O.a,null,l.a.createElement("div",{className:"header_logo",style:{flexGrow:"1"}},l.a.createElement("div",{className:""},"Player"),l.a.createElement("div",{className:""},"Manager 2019")),l.a.createElement(k.a,{"ariel-label":"Menu",color:"inherit",onClick:function(){return e.toggleDrawer(!0)}},l.a.createElement(S.a,null)),l.a.createElement(A,{open:this.state.drawerOpen,onClose:function(t){return e.toggleDrawer(t)}})))}}]),a}(n.Component),D=(a(73),function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("footer",null,l.a.createElement("h3",null,"Made with love by a Yoruba Dev")))}),I=(a(74),a(52)),H=(a(75),function(e){var t=e.player;return l.a.createElement("div",{className:"player_info"},l.a.createElement("div",{className:"head"},l.a.createElement("h4",null,"Player Information")),l.a.createElement("div",{className:"img_div"},l.a.createElement("img",{src:"https://robohash.org/".concat(t.id,"?200x200"),alt:"playergravatat"})),l.a.createElement("div",null,l.a.createElement("table",{className:"table info_table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"td"},t.name," "),l.a.createElement("td",{className:"td"},"Name")),l.a.createElement("tr",null,l.a.createElement("td",{className:"td"},t.nationality," "),l.a.createElement("td",{className:"td"},"Nationality")),l.a.createElement("tr",null,l.a.createElement("td",{className:"td"},t.age," "),l.a.createElement("td",{className:"td"},"age")),l.a.createElement("tr",null,l.a.createElement("td",{className:"td"},t.position," "),l.a.createElement("td",{className:"td"},"position")),l.a.createElement("tr",null,l.a.createElement("td",{className:"td"},t.status?"sold":"not sold"," "),l.a.createElement("td",{className:"td"},"status")),l.a.createElement("tr",null,l.a.createElement("td",{className:"td"},t.value," "),l.a.createElement("td",{className:"td"},"value")),l.a.createElement("tr",null,l.a.createElement("td",{className:"td"},t.strength," "),l.a.createElement("td",{className:"td"},"strength")),l.a.createElement("tr",null,l.a.createElement("td",{className:"td"},"strong foot"),l.a.createElement("td",{className:"td"},t.strong_foot," "))))))});a(76);var J=function(e){var t=e.balance;return l.a.createElement("div",{className:"account"},l.a.createElement("div",null,l.a.createElement("h3",null,"Available Balance")),l.a.createElement("div",null,t," "))},L=(a(77),function(e){var t=e.player,a=e.onClick,n=e.onPlayerRemove,r=e.onPlayerSale;return l.a.createElement("div",{className:"player_list"},l.a.createElement("ul",null,l.a.createElement("li",{className:"li_name"},t.name," "),l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){return a(t)},className:" butt btn btn-success"},"Info")),l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){return n(t._id)},className:" butt btn btn-danger"},"remove")),l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){return r(t._id)},className:" butt btn btn-primary"},"sell"))))}),R=(a(78),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={name:"",nationality:"",age:"",strength:"",position:"",value:"",strong_foot:"",club:"",managerId:e.props.managerId},e.onHandleChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(d.a)({},n,l))},e.createPlayer=function(t){t.preventDefault();var a=e.state;fetch("/api/players/addPlayer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(t){t.ok?t.json().then((function(t){alert(t),e.props.addPlayer(t),e.props.history.push("/team")})):t.json().then((function(e){return alert("could not add player"+e.message)}))})).catch((function(e){return alert("bad request"+e.message)})),e.setState({name:"",nationality:"",age:"",strength:"",position:"",value:"",strong_foot:"",club:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container text-center"},l.a.createElement("div",null,l.a.createElement("h2",null,"Add New Player")),l.a.createElement("div",{className:"big_form"},l.a.createElement("form",{className:"form form-group main_form"},l.a.createElement("div",{className:"row main_row"},l.a.createElement("p",null,"name"),l.a.createElement("input",{type:"text",className:"text",name:"name",value:this.state.name,onChange:this.onHandleChange})),l.a.createElement("div",{className:"row main_row"},l.a.createElement("p",null,"nationality"),l.a.createElement("input",{type:"text",className:"text",name:"nationality",value:this.state.nationality,onChange:this.onHandleChange})),l.a.createElement("div",{className:"row main_row"},l.a.createElement("p",null,"club"),l.a.createElement("input",{type:"text",className:"text",name:"club",value:this.state.club,onChange:this.onHandleChange})),l.a.createElement("div",{className:"row main_row"},l.a.createElement("p",null,"age"),l.a.createElement("input",{type:"text",className:"text",name:"age",value:this.state.age,onChange:this.onHandleChange})),l.a.createElement("div",{className:"row main_row"},l.a.createElement("p",null,"position"),l.a.createElement("input",{type:"text",className:"text",name:"position",value:this.state.position,onChange:this.onHandleChange})),l.a.createElement("div",{className:"row main_row"},l.a.createElement("p",null,"strength"),l.a.createElement("input",{type:"text",className:"text",name:"strength",value:this.state.strength,onChange:this.onHandleChange})),l.a.createElement("div",{className:"row main_row"},l.a.createElement("p",null,"value"),l.a.createElement("input",{type:"text",className:"text",name:"value",value:this.state.value,onChange:this.onHandleChange})),l.a.createElement("div",{className:"row main_row"},l.a.createElement("p",null,"strong foot"),l.a.createElement("input",{type:"text",className:"text",name:"strong_foot",value:this.state.strong_foot,onChange:this.onHandleChange})),l.a.createElement("div",null,l.a.createElement("input",{type:"submit",className:"btn btn-primary pl-5 pr-5 mb-5 mt-3",value:"Add Player",onClick:this.createPlayer})))))}}]),a}(n.Component)),V=Object(h.e)(R),B=(a(79),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={sold:!1,players:[],playerView:{id:"",name:"",nationality:"",age:"",strength:"",position:"",status:"",value:"",strong_foot:""},user:{name:"",id:"",account:"",club:""}},e.addPlayer=function(t){e.setState({players:[].concat(Object(I.a)(e.state.players),[t])})},e.onPlayerSale=function(t){fetch("/api/players/sale",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})}).then((function(a){a&&e.setState((function(e){return{players:e.players.filter((function(e){return e._id!==t}))}}))})).catch((function(e){return console.log(e)}))},e.onPlayerRemove=function(t){console.log(t),fetch("/api/players/delete/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify()}).then((function(a){a.ok?e.setState((function(e){return{players:e.players.filter((function(e){return e._id!==t}))}})):alert("player cannot be deleted")})).catch((function(e){return alert("bad request"+e.message)}))},e.infoClick=function(t){e.setState({playerView:{id:t._id,name:t.name,nationality:t.nationality,age:t.age,strength:t.strength,position:t.position,status:t.forSale,value:t.value,strong_foot:t.strong_foot}})},e}return Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this.props.user,t=e.id,a=e.name,n=e.account,l=e.club;this.setState((function(){return{user:{name:a,id:t,account:n,club:l}}}))}},{key:"componentDidMount",value:function(){var e=this;console.log(this.state.user),fetch("/api/players/own/".concat(this.state.user.id)).then((function(e){return e.json()})).then((function(t){console.log(t);var a=t[0],n=a._id,l=a.name,r=a.nationality,c=a.age,o=a.strength,s=a.position,i=a.status,m=a.value,u=a.strong_foot;e.setState({players:t,playerView:{id:n,name:l,nationality:r,age:c,strength:o,position:s,status:i,value:m,strong_foot:u}})})).catch((function(e){return console.log("error oo "+e.message)})),console.log("component has mounted wioth the id",this.state.user.id)}},{key:"render",value:function(){var e=this,t=this.state.players.map((function(t){return l.a.createElement(L,{player:t,key:t._id,onClick:e.infoClick,onPlayerRemove:e.onPlayerRemove,onPlayerSale:e.onPlayerSale})}));return l.a.createElement("div",{className:"main-team"},l.a.createElement(U,null),l.a.createElement("div",{className:"con_div"},l.a.createElement(y,null,l.a.createElement(h.a,{path:"/team",exact:!0},l.a.createElement("div",{className:"text-center"},l.a.createElement("h4",null,this.state.user.name," "),l.a.createElement("h3",null,this.state.user.club," Football Club")),l.a.createElement("div",null,l.a.createElement(J,{balance:this.state.user.account})),this.state.players.length<=0?l.a.createElement("h1",{style:{textAlign:"center",margin:"20px auto",width:"50%"}},"no players"):l.a.createElement("div",{className:"contain_div"},l.a.createElement("div",null,t),l.a.createElement("div",{className:"info-div"},l.a.createElement(H,{player:this.state.playerView})))),l.a.createElement(h.a,{path:"team/addPlayer"},l.a.createElement(V,{addPlayer:this.addPlayer,managerId:this.state.user.id})))),l.a.createElement(D,null))}}]),a}(n.Component)),W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={players:[],loading:!0,searchTerm:""},e.onSearch=function(t){e.setState({searchTerm:t})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/players/forSale").then((function(e){return e.json()})).then((function(t){console.log("from response",t),e.setState({players:t,loading:!1})})),console.log(this.props.user,"from home")}},{key:"render",value:function(){var e=this.state,t=e.players;e.searchTerm;return l.a.createElement("div",{className:"home-container"},l.a.createElement(U,null),l.a.createElement("div",{className:"home_page"},l.a.createElement(y,null,this.state.loading?l.a.createElement("div",{className:"spinner"},l.a.createElement("div",{className:"spin"}),l.a.createElement("div",null,"LOADING")):l.a.createElement(w,{players:t,onSearch:this.onSearch}))),l.a.createElement(D,null))}}]),a}(n.Component);var q=function(){var e=Object(n.useState)({name:"",id:"",account:""}),t=Object(o.a)(e,2),a=(t[0],t[1]),r=JSON.parse(localStorage.getItem("users"));return l.a.createElement(M.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(h.a,{path:"/",exact:!0},l.a.createElement(g,{loadUser:function(e){return t=e,localStorage.setItem("users",JSON.stringify(t)),void a({name:t.name,id:t.id,account:t.account,club:t.club});var t}})),l.a.createElement("div",{className:""},l.a.createElement("div",{className:"route-div"},l.a.createElement(h.a,{path:"/home"},l.a.createElement(W,{user:r})),l.a.createElement(h.a,{path:"/team"},l.a.createElement(B,{user:r}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.62bf5052.chunk.js.map