(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){e.exports=a.p+"static/media/Libros.d543bcd8.jpg"},122:function(e,t,a){e.exports=a.p+"static/media/series.f1e9dc0b.jpg"},123:function(e,t,a){e.exports=a.p+"static/media/movies.b31951b8.jpg"},124:function(e,t,a){e.exports=a.p+"static/media/comida.bc39cdd4.jpg"},136:function(e,t,a){e.exports=a.p+"static/media/Reko-mini.6b0e9f90.png"},139:function(e,t,a){e.exports=a(251)},144:function(e,t,a){},146:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),c=(a(144),a(15)),s=a(16),i=a(18),m=a(17),u=a(19),h=(a(146),a(262)),p=a(263),g=a(257),d=a(252),f=a(121),b=a.n(f),E=a(122),k=a.n(E),y=a(123),v=a.n(y),C=a(124),N=a.n(C),S=a(68),O=a.n(S),j=a(255),x=(g.a.Meta,function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:{}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.size;return r.a.createElement("div",{className:"homestyle2"},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"homeOne"},r.a.createElement("img",{className:"logomini",alt:"minilogo",src:O.a}),r.a.createElement("h1",null,"Recomendaciones reales de gente com\xfan"),r.a.createElement("h4",null,"\xdanete y comparte tus experiencias y descubrimientos con el mundo"),r.a.createElement("br",null),r.a.createElement(j.a,{to:"/signup"},r.a.createElement(d.a,{className:"homebutton",style:{backgroundColor:"#d8c361",border:"none",color:"black"},size:e},"Reg\xedstrate")))),r.a.createElement("br",null),r.a.createElement("div",{className:"catHome"},r.a.createElement(j.a,{to:"/rekos?category=Libros"},r.a.createElement(g.a,{className:"cardhome",hoverable:!0,style:{width:"300px",margin:"0 10px"},cover:r.a.createElement("img",{style:{height:"180px",width:"100%"},alt:"example",src:b.a})},r.a.createElement("p",{style:{fontSize:"20px"}}," Libros "))),r.a.createElement(j.a,{to:"/rekos?category=Series"},r.a.createElement(g.a,{hoverable:!0,style:{width:"300px",margin:"0 10px"},cover:r.a.createElement("img",{style:{height:"180px",width:"100%"},alt:"series",src:k.a})},r.a.createElement("p",{style:{fontSize:"20px"}},"Series"))),r.a.createElement(j.a,{to:"/rekos?category=Peliculas"},r.a.createElement(g.a,{hoverable:!0,style:{width:"300px",margin:"0 10px"},cover:r.a.createElement("img",{style:{height:"180px",width:"100%"},alt:"example",src:v.a})},r.a.createElement("p",{style:{fontSize:"20px"}},"Pel\xedculas"))),r.a.createElement(j.a,{to:"/rekos?category=Restaurantes"},r.a.createElement(g.a,{hoverable:!0,style:{width:"300px",margin:"10px 0px !important"},cover:r.a.createElement("img",{style:{height:"180px",width:"100%"},alt:"example",src:N.a})},r.a.createElement("p",{style:{fontSize:"20px"}},"Restaurantes")))))}}]),t}(n.Component)),w=a(14),R=a.n(w),I="https://rekosmb.herokuapp.com/auth",_=function(e){return console.log(e),R.a.post(I+"/signup",e,{}).then(function(e){return e.data}).catch(function(e){return e.response})},A=function(e){return R.a.post(I+"/login",e,{withCredentials:!0}).then(function(e){return e.data}).catch(function(e){return e.response})},B=function(){return R.a.get(I+"/logout",{withCredentials:!0}).then(function(e){return e.data}).catch(function(e){return e.response})},z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:{}},a.handleText=function(e){var t=a.state.user;t[e.target.name]=e.target.value,a.setState({user:t})},a.login=function(e){var t=a.state.user;e.preventDefault(),A(t).then(function(e){console.log(e),500===e.status||404===e.status?(console.log("Revisar Contrase\xf1a"),alert("Contrase\xf1a Incorrecta")):(localStorage.setItem("loggedUser",JSON.stringify(e)),a.props.history.push("/profile/"+e._id))}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.login,t=this.handleText;return r.a.createElement("div",{className:"homestyle3"},r.a.createElement("div",{className:"formulario"},r.a.createElement("form",{onSubmit:e,style:{margin:"auto",padding:"5% 3%"}},r.a.createElement("h1",null,"Iniciar Ses\xedon"),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Correo"),r.a.createElement("div",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{onChange:function(e){return t(e)},className:"input",name:"email",type:"email",placeholder:"reko@gmail.com"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Contrase\xf1a"),r.a.createElement("div",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{onChange:function(e){return t(e)},className:"input",name:"password",placeholder:"Contrase\xf1a",type:"password"}))),r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-link"},"Iniciar"))))))}}]),t}(n.Component),U=a(94);U.initializeApp({apiKey:"AIzaSyBDpRyajol7JimrZJ0XzTMikVegfq6lhc8",authDomain:"reko-63f20.firebaseapp.com",databaseURL:"https://reko-63f20.firebaseio.com",projectId:"reko-63f20",storageBucket:"reko-63f20.appspot.com",messagingSenderId:"133680693885"});for(var D=U,L=function(e){return console.log("subiendo"),D.storage().ref("img").child(e.name).put(e).then(function(e){return e.ref.getDownloadURL()}).then(function(e){return e})},M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:{}},a.signup=function(e){var t=a.state.user;e.preventDefault(),console.log(t),_(t).then(function(e){console.log(e),a.props.history.push("/profile")}).catch(function(e){return console.log(e)})},a.handleText=function(e){var t=a.state.user;t[e.target.name]=e.target.value,a.setState({user:t})},a.handleImage=function(e){console.log(e.target.files);var t=a.state.user,n=e.target.files[0];L(n).then(function(e){t.img=e,a.setState({user:t}),console.log("done")}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.signup,t=this.handleText,a=this.handleImage;return r.a.createElement("div",{className:"homestyle3"},r.a.createElement("div",{className:"formulario"},r.a.createElement("form",{onSubmit:e,style:{margin:"auto",padding:"5% 3%"}},r.a.createElement("h1",null,"Reg\xedstrate"),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Nombre"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{onChange:t,name:"name",className:"input",type:"text",placeholder:"Nombre"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Apellido"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{onChange:t,name:"lastname",className:"input",type:"text",placeholder:"Apellido"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Nombre de Usuario"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{onChange:t,name:"username",className:"input",type:"text",placeholder:"Nombre de usuario"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Correo"),r.a.createElement("div",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{onChange:t,name:"email",className:"input",type:"email",placeholder:"reko@gmail.com"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Contrase\xf1a"),r.a.createElement("div",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{onChange:t,name:"password",className:"input",type:"password",placeholder:"Contrase\xf1a"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Foto de Perfil"),r.a.createElement("div",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{name:"img",type:"file",placeholder:"Subir Foto",onChange:a}))),r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-link"},"Registrar"))))))}}]),t}(n.Component),T=a(21),J=a(258),P=a(256),F=(g.a.Meta,[]),W=0;W<5;W++)F.push({href:"http://ant.design",title:"ant design part ".concat(W),avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."});var K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},loggedUser:{},reko:{},authorList:[],bucketlist:[]},a.getUser=function(){var e=a.props.match.params.id;R.a.get("https://rekosmb.herokuapp.com/users/"+e).then(function(e){console.log(e),a.setState({user:e.data})}).catch(function(e){return console.log(e)})},a.getAuthorRekos=function(e){var t=a.props.match.params.id;R.a.get("https://rekosmb.herokuapp.com/authorrekos/"+t).then(function(e){a.setState({authorList:e.data})}).catch(function(e){return console.log(e)})},a.getBucketRekos=function(e){var t=a.props.match.params.id;R.a.get("https://rekosmb.herokuapp.com/bucketrekos/"+t).then(function(e){console.log(e.data.bucketlist),a.setState({bucketlist:e.data.bucketlist})}).catch(function(e){return console.log(e)})},a.removeBucketReko=function(e){console.log("hola");var t=e,n=a.props.match.params.id;R.a.put("https://rekosmb.herokuapp.com/bucket/"+n,{bid:t}).then(function(e){console.log(e.data.bucketlist),a.getBucketRekos()}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.getUser();var e=JSON.parse(localStorage.getItem("loggedUser"));e?(this.setState({loggedUser:e}),this.getAuthorRekos(),this.getBucketRekos()):this.props.history.push("/login")}},{key:"componentWillReceiveProps",value:function(e){console.log(e),this.getUser(),this.getAuthorRekos(),this.getBucketRekos()}},{key:"render",value:function(){var e=this,t=this.state,a=t.user;t.loggedUser,this.state.reko,this.state.size;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"portada"},r.a.createElement("div",{className:"profilecard",style:{borderRadius:8}},r.a.createElement("br",null),r.a.createElement(g.a,{style:{padding:"0px !important"},hoverable:!0,cover:r.a.createElement("img",{className:"fotoperfil",alt:"profPic",src:a.img})},r.a.createElement("p",{style:{fontSize:18}}," ",a.username),r.a.createElement("p",null," ",a.email," "),r.a.createElement("p",null,a.name," ",a.lastname)))),r.a.createElement("div",{className:"flexi"},r.a.createElement("div",{className:"misrekosttitle"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("h2",{style:{fontSize:40,color:"white",marginRight:"15px"}},"Mis Rekos")," ",r.a.createElement(j.a,{to:"/addrekos"},r.a.createElement(d.a,{className:"botonaddreko"}," Agregar Reko"))),r.a.createElement("div",{className:"userRekos"},null!==this.state.authorList?this.state.authorList.map(function(e,t){return r.a.createElement(g.a,{style:{margin:"30px",marginBottom:"30px",width:"200px"},cover:r.a.createElement("img",{style:{width:"100%",height:"100px"},alt:"rekopic",src:e.img}),key:e._id},r.a.createElement(j.a,{to:"/rekos/".concat(e._id)},r.a.createElement("h2",{style:{color:"grey"}},e.name)))}):"")),r.a.createElement("div",{className:"buckettitle"},r.a.createElement("h2",{style:{fontSize:40}},"Bucketlist"),null!==this.state.bucketlist&&this.state.bucketlist.length>0?r.a.createElement(J.a,{className:"bucketlist",itemLayout:"vertical",size:"large",dataSource:this.state.bucketlist,renderItem:function(t){return t?r.a.createElement(J.a.Item,{key:t?t._id:"",extra:r.a.createElement("img",{width:"150px",borderRadius:"8px",height:"170px",alt:"logo",src:t?t.img:""})},r.a.createElement(J.a.Item.Meta,{className:"bucketlistCard",avatar:r.a.createElement(j.a,{to:"/profile/".concat(t.author?t.author._id:t.author)},r.a.createElement(P.a,{src:t.author?t.author.img:t.img,style:{width:80,height:80}}))}),r.a.createElement("button",{onClick:function(){return e.removeBucketReko(t._id)},className:"botonaddreko2",style:{backgroundColor:"#d8c361"}},"Eliminar"),r.a.createElement(j.a,{to:"/rekos/".concat(t._id)},r.a.createElement("h2",null,t.name)),r.a.createElement("p",{style:{fontSize:"14px",color:"white"}}," ",t.category," ")):r.a.createElement("p",null)}}):r.a.createElement("p",null,"No has agregado nada a\xf9n")))))}}]),t}(r.a.Component),q=a(74),X=(a(92),g.a.Meta),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={list:[],rating:[],user:{},bucketlist:[],flagCreado:[]},a.getRekos=function(){var e,t=a.props.location.search;e=t?"https://rekosmb.herokuapp.com/rekos"+t:"https://rekosmb.herokuapp.com/rekos",R.a.get(e).then(function(e){a.setState({list:e.data}),console.log(e.data)}).catch(function(e){return console.log(e)})},a.getBucketRekos=function(){var e=JSON.parse(localStorage.getItem("loggedUser"));R.a.get("https://rekosmb.herokuapp.com/bucketrekos/"+e._id).then(function(e){var t=a.state.flagCreado,n=e.data.bucketlist;n.forEach(function(e){t.push(e._id)}),a.setState({bucketlist:n,flagCreado:t})}).catch(function(e){return console.log(e)})},a.addToBucketlist=function(e){console.log(e);var t={user:a.state.user,rekoid:e},n=a.state.flagCreado;n.push(e),a.setState({flagCreado:n}),console.log(n),R.a.put("https://rekosmb.herokuapp.com/bucket",t).then(function(e){console.log(e)}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.getBucketRekos(),this.getRekos();var e=JSON.parse(localStorage.getItem("loggedUser"));e?this.setState({user:e}):this.props.history.push("/login")}},{key:"render",value:function(){var e=this,t=this.state,a=t.user,n=t.flagCreado;return console.log(this.state),r.a.createElement("div",{className:"homestyle"},r.a.createElement("div",{className:"rekocard"},this.state.list.map(function(t,o){return r.a.createElement(g.a,{classname:"cardfondos",style:{marginTop:30,borderRadius:8},cover:r.a.createElement("div",{className:"padreImagenCard cardfondos"},r.a.createElement(X,{avatar:r.a.createElement(j.a,{to:"/profile/".concat(t.author?t.author._id:t.author)},r.a.createElement(P.a,{src:t.author?t.author.img:a.img,style:{marginTop:15,marginLeft:30,width:80,height:80}}),r.a.createElement("h3",{style:{marginTop:10,marginLeft:50,fontSize:20,color:"white"}},t.author?t.author.username:t.author," "))}),r.a.createElement("img",{style:{borderRadius:8},alt:"rekopic",src:t.img})),key:t._id},r.a.createElement("div",{className:"cardfondos"},r.a.createElement(j.a,{to:"/rekos/".concat(t._id)},r.a.createElement("h2",{style:{color:"white"}},t.name),r.a.createElement("h3",{style:{color:"white"}},t.category)),r.a.createElement("button",{value:"+ Bucketlist",onClick:function(){return e.addToBucketlist(t._id)}},"+ Bucketlist",n.includes(t._id)&&r.a.createElement(q.Progress,{style:{width:200},percent:100,status:"success"}))))})))}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={list:[]},a.getCategories=function(){R.a.get("https://rekosmb.herokuapp.com/categories").then(function(e){a.setState({list:e.data})}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getCategories()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{width:"50%",float:"left"}},this.state.list.map(function(e,t){return r.a.createElement("div",{key:e._id},r.a.createElement(j.a,{to:"/categories/".concat(e._id)}),r.a.createElement("h3",null,"Categor\xeda : ",e.name),r.a.createElement("h4",null,"N\xfamero de Rekos: ",e.numberRekosInCat),r.a.createElement("h3",null,"Sub Categor\xedas : ",e.subCategories),r.a.createElement("h2",null,"Numero de Sub Categor\xedas : ",e.numberSubCategories))})))}}]),t}(n.Component),$=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={list:[],members:[]},a.getClubs=function(){R.a.get("https://rekosmb.herokuapp.com/clubs").then(function(e){a.setState({list:e.data})}).catch(function(e){return console.log(e)})},a.addmember=function(){R.a.put("https://rekosmb.herokuapp.com/clubs/:id").then(function(e){a.setState({$push:{members:e.data}})}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getClubs()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{style:{width:"50%",float:"left"}},this.state.list.map(function(t,a){return r.a.createElement("div",{key:t._id},r.a.createElement(j.a,{to:"/clubs/".concat(t._id)}),r.a.createElement("h3",null,"Club : ",t.name),r.a.createElement("h4",null,"Descripci\xf3n : ",t.description),r.a.createElement("h3",null,"Miembros : ",t.members.email),r.a.createElement("h2",null,"Categoria : ",t.category.name),r.a.createElement("input",{type:"submit",value:"Unirme",onClick:function(){return e.addmember(t._id)}}))})))}}]),t}(n.Component),Y=a(54),Z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",numberRekosInCat:"",subCategory:"",numberSubCategories:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.name,n=a.state.numberRekosInCat,r=a.state.subCategory,o=a.state.numberSubCategories;R.a.post("https://rekosmb.herokuapp.com/categories",{name:t,numberRekosInCat:n,subCategory:r,numberSubCategories:o}).then(function(){a.props.getData(),a.setState({name:"",numberRekosInCat:"",subCategory:"",numberSubCategories:""})}).catch(function(e){return console.log})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(Y.a)({},n,r))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{name:"name",value:this.state.name,type:"text",placeholder:"categoria",onChange:this.handleChange}),r.a.createElement("input",{name:"numberRekosInCat",value:this.state.numberRekosInCat,type:"text",placeholder:"rekos en cat",onChange:this.handleChange}),r.a.createElement("input",{name:"subCategory",value:this.state.subCategory,type:"text",placeholder:"sub categoria",onChange:this.handleChange}),r.a.createElement("input",{name:"numberSubCategories",value:this.state.numberSubCategories,type:"text",placeholder:"num sub cat",onChange:this.handleChange})))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",description:"",members:"",category:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.name,n=a.state.description,r=a.state.members,o=a.state.category;R.a.post("https://rekosmb.herokuapp.com/clubs",{name:t,description:n,members:r,category:o}).then(function(){a.props.getData(),a.setState({name:"",description:"",members:"",category:""})}).catch(function(e){return console.log})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(Y.a)({},n,r))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{name:"name",value:this.state.name,type:"text",placeholder:"nombre del club",onChange:this.handleChange}),r.a.createElement("input",{name:"description",value:this.state.description,type:"text",placeholder:"descripci\xf3n de club",onChange:this.handleChange}),r.a.createElement("input",{name:"members",value:this.state.members,type:"text",placeholder:"miembros",onChange:this.handleChange}),r.a.createElement("input",{name:"category",value:this.state.category,type:"text",placeholder:"categoria del club",onChange:this.handleChange})))}}]),t}(n.Component),Q=a(259),ee=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},img:"",name:"",category:"",description:"",rating:"",author:"",flagCreado:!1},a.handleFormSubmit=function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("loggedUser")),n=a.state.img,r=a.state.name,o=a.state.category,l=a.state.description,c=a.state.rating,s=a.state.user._id,i=a.state.flagCreado;R.a.post("https://rekosmb.herokuapp.com/rekos",{img:n,name:r,category:o,description:l,rating:c,author:s}).then(function(e){201===e.status&&a.props.history.push("/profile/".concat(t._id)),a.setState({img:"",name:"",category:"",description:"",rating:"",author:"",flagCreado:i})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(Y.a)({},n,r))},a.handleSelectChange=function(e){a.setState({category:e})},a.handleImage=function(e){console.log(e.target.files);var t=a.state.img,n=e.target.files[0];L(n).then(function(e){t=e,a.setState({img:t}),console.log("done")}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("loggedUser"));e?this.setState({user:e}):this.props.history.push("/login")}},{key:"render",value:function(){this.state.user;return r.a.createElement("div",{className:"homestyle3"},r.a.createElement("div",{className:"formulario"},r.a.createElement("form",{onSubmit:this.handleFormSubmit,style:{margin:"auto",padding:"5% 3%"}},r.a.createElement("h1",null,"Agregar Reko"),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Subir Foto"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{name:"img",type:"file",placeholder:"Subir Foto",onChange:this.handleImage}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"T\xedtulo"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{name:"name",value:this.state.name,type:"text",placeholder:"Nombre",onChange:this.handleChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Elegir Categor\xeda"),r.a.createElement("div",{className:"control"},r.a.createElement(Q.a,{style:{width:150},options:[{value:"Series",label:"Series"},{value:"Libros",label:"Libros"},{value:"Peliculas",label:"Peliculas"},{value:"Restaurantes",label:"Restaurantes"}],onChange:this.handleSelectChange,placeholder:"Seleccionar"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Descripci\xf3n"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{name:"description",value:this.state.description,type:"text",placeholder:" Agregar descripci\xf3n",onChange:this.handleChange}))),r.a.createElement("br",null),r.a.createElement("input",{className:"botonaddreko",type:"submit",value:"Agregar Reko"}))))}}]),t}(n.Component),te=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={list:[]},a.getUsers=function(){R.a.get("https://rekosmb.herokuapp.com/users").then(function(e){a.setState({list:e.data})}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){return r.a.createElement("div",{className:"homestyle"},this.state.list.map(function(e,t){return r.a.createElement(g.a,{style:{width:500},key:e._id},r.a.createElement("img",{alt:"profPic",style:{width:70},src:e.img}),r.a.createElement(j.a,{to:"/profile/".concat(e._id)},r.a.createElement("h3",null,"Usuario : ",e.username)),r.a.createElement("h4",null,"Nombre : ",e.name),r.a.createElement("h3",null,"Apellido : ",e.lastname),r.a.createElement("h2",null,"Email : ",e.email))}))}}]),t}(n.Component),ae=g.a.Meta,ne=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={reko:{},list:[],rating:[],user:{},bucketlist:[],flagCreado:[]},a.getReko=function(){var e=a.props.match.params.id;R.a.get("https://rekosmb.herokuapp.com/rekos/"+e).then(function(e){console.log(e),a.setState({reko:e.data})}).catch(function(e){return console.log(e)})},a.getRekos=function(){var e,t=a.props.location.search;e=t?"https://rekosmb.herokuapp.com/rekos"+t:"https://rekosmb.herokuapp.com/rekos",R.a.get(e).then(function(e){a.setState({list:e.data}),console.log(e.data)}).catch(function(e){return console.log(e)})},a.getBucketRekos=function(){var e=JSON.parse(localStorage.getItem("loggedUser"));R.a.get("https://rekosmb.herokuapp.com/bucketrekos/"+e._id).then(function(e){var t=a.state.flagCreado,n=e.data.bucketlist;n.forEach(function(e){t.push(e._id)}),a.setState({bucketlist:n,flagCreado:t})}).catch(function(e){return console.log(e)})},a.addToBucketlist=function(e){console.log(e);var t={user:a.state.user,rekoid:e},n=a.state.flagCreado;n.push(e),a.setState({flagCreado:n}),console.log(n),R.a.put("https://rekosmb.herokuapp.com/bucket",t).then(function(e){console.log(e)}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.getReko(),this.getBucketRekos(),this.getRekos();var e=JSON.parse(localStorage.getItem("loggedUser"));e?this.setState({user:e}):this.props.history.push("/login")}},{key:"render",value:function(){var e=this,t=this.state,a=t.user,n=t.flagCreado,o=t.reko;return console.log(this.state),r.a.createElement("div",{className:"homestyle2"},r.a.createElement("div",{className:"rekocard",style:{paddingTop:"20px"}},r.a.createElement(g.a,{classname:"cardfondos",style:{margin:5},cover:r.a.createElement("div",{className:"padreImagenCard cardfondos"},r.a.createElement(ae,{avatar:r.a.createElement(j.a,{to:"/profile/".concat(o.author?o.author._id:o.author)},r.a.createElement(P.a,{src:o.author?o.author.img:a.img,style:{marginTop:15,marginLeft:30,width:80,height:80}}),r.a.createElement("h3",{style:{color:"white",fontSize:"30px"}},o.author?o.author.username:o.author))}),r.a.createElement("img",{alt:"rekopic",style:{width:"350px",height:"400px",marginTop:"-100px"},src:o.img})),key:o._id},r.a.createElement("div",{className:"cardfondos"},r.a.createElement(j.a,{to:"/rekos/".concat(o._id)},r.a.createElement("h2",{style:{color:"white",fontSize:"40px"}},o.name),r.a.createElement("h3",{style:{color:"white",fontSize:"26px"}},o.category),r.a.createElement("div",{className:"texto"},r.a.createElement("h4",{style:{color:"white",fontSize:"20px"}},o.description))),r.a.createElement("button",{value:"+ Bucketlist",onClick:function(){return e.addToBucketlist(o._id)}},"+ Bucketlist",n.includes(o._id)&&r.a.createElement(q.Progress,{style:{width:200},percent:100,status:"success"}))))))}}]),t}(n.Component);var re=function(){return r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:x}),r.a.createElement(p.a,{path:"/login",component:z}),r.a.createElement(p.a,{path:"/signup",component:M}),r.a.createElement(p.a,{path:"/profile/:id",component:K}),r.a.createElement(p.a,{exact:!0,path:"/rekos",component:H}),r.a.createElement(p.a,{path:"/categories",component:V}),r.a.createElement(p.a,{path:"/clubs",component:$}),r.a.createElement(p.a,{path:"/addcategories",component:Z}),r.a.createElement(p.a,{path:"/addclubs",component:G}),r.a.createElement(p.a,{path:"/addrekos",component:ee}),r.a.createElement(p.a,{path:"/users",component:te}),r.a.createElement(p.a,{path:"/rekos/:id",component:ne}))},oe=a(260),le=a(136),ce=a.n(le),se=oe.a.SubMenu,ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={current:"mail",user:{}},a.handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a.logout=function(e){var t=a.state.user;e.preventDefault(),B(t).then(function(e){console.log("Deslogeado",e),localStorage.clear()}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("loggedUser"));e&&this.setState({user:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(oe.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},r.a.createElement(oe.a.Item,{key:"logo"},r.a.createElement(j.a,{to:"/"},r.a.createElement("img",{alt:"logo",src:O.a,style:{width:100}}))),r.a.createElement(oe.a.Item,{key:"signup"},r.a.createElement(j.a,{to:"/signup"},r.a.createElement(T.a,{type:"plus"}),"Reg\xedstrate")),r.a.createElement(oe.a.Item,{key:"login"},r.a.createElement(j.a,{to:"/login"},r.a.createElement(T.a,{type:"login"}),"Inicia Sesi\xf3n")),r.a.createElement(oe.a.Item,{key:"rekos"},r.a.createElement(j.a,{to:"/rekos"},r.a.createElement(T.a,{type:"fire"}),"Rekos")),r.a.createElement(oe.a.Item,{key:"logout"},r.a.createElement(j.a,{to:"/",onClick:this.logout},r.a.createElement(T.a,{type:"logout"}),"Salir")),r.a.createElement(se,{title:r.a.createElement("span",{className:"submenu-title-wrapper"},r.a.createElement(T.a,{type:"bars"}),"Categorias")},r.a.createElement(oe.a.Item,{key:"setting:1"},"Libros",r.a.createElement(j.a,{to:"/rekos?category=Libros"})),r.a.createElement(oe.a.Item,{key:"setting:2"},"Series",r.a.createElement(j.a,{to:"/rekos?category=Series"})),r.a.createElement(oe.a.Item,{key:"setting:3"},"Pel\xedculas",r.a.createElement(j.a,{to:"/rekos?category=Peliculas"})),r.a.createElement(oe.a.Item,{key:"setting:4"},"Restaurantes",r.a.createElement(j.a,{to:"/rekos?category=Restaurantes"}))),r.a.createElement(oe.a.Item,{key:"profile"},r.a.createElement(j.a,{to:"/profile/"+this.state.user._id},r.a.createElement(T.a,{type:"profile"}),"Mi Perfil"))),r.a.createElement(re,null),r.a.createElement(oe.a,{className:"footer",onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},r.a.createElement(oe.a.Item,{key:"signup"},r.a.createElement(j.a,{to:"/signup"},r.a.createElement(T.a,{type:"plus"}),"Reg\xedstrate")),r.a.createElement(oe.a.Item,{key:"login"},r.a.createElement(j.a,{to:"/login"},r.a.createElement(T.a,{type:"login"}),"Inicia Sesi\xf3n")),r.a.createElement(oe.a.Item,{key:"rekos"},r.a.createElement(j.a,{to:"/rekos"},r.a.createElement(T.a,{type:"fire"}),"Rekos")),r.a.createElement(oe.a.Item,{key:"logout"},r.a.createElement(j.a,{to:"/",onClick:this.logout},r.a.createElement(T.a,{type:"logout"}),"Salir")),r.a.createElement(oe.a.Item,{key:"logo"},r.a.createElement(j.a,{to:"/"},r.a.createElement("img",{alt:"logo",src:ce.a,style:{width:30}})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(249);var me=a(261);l.a.render(r.a.createElement(function(){return r.a.createElement(me.a,null,r.a.createElement(ie,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){e.exports=a.p+"static/media/Copia de ReKoonlytext.7a645534.png"}},[[139,2,1]]]);
//# sourceMappingURL=main.a79c5f16.chunk.js.map