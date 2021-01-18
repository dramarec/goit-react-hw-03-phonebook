(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={container:"Layot_container__3RcAE"}},14:function(t,e,n){t.exports={input:"Find_input__1LIRT",button:"Find_button__3bLPg"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(12),i=n.n(r),s=(n(20),n(2)),l=n(3),u=n(5),d=n(4),m=n(10),b=n(11),j=n(23),p=n(7),h=n(8),f=n.n(h),O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",completed:!1},t.handleInputChange=function(e){t.setState(Object(p.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact({name:t.state.name,number:t.state.number,completed:t.state.completed}),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("input",{type:"text",name:"name",className:f.a.input,placeholder:"Name",value:this.state.name,onChange:this.handleInputChange})]}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)("input",{type:"text",name:"number",className:f.a.input,placeholder:"Number",value:this.state.number,onChange:this.handleInputChange})]}),Object(a.jsx)("button",{className:f.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),x=function(t){return Object(a.jsx)("header",{style:{textAlign:"center"},children:Object(a.jsx)("h1",{children:t.title})})},g=n(13),v=n.n(g),C=function(t){var e=t.children,n=t.title;return Object(a.jsxs)("section",{className:v.a.container,children:[n&&Object(a.jsx)("h2",{children:n}),e]})},_=n(6),y=n.n(_),N=function(t){var e=t.dataId,n=t.name,c=t.number,o=t.onRemove,r=t.completed,i=t.onUpdate;return Object(a.jsxs)("li",{className:y.a.item,children:[Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"checkbox",checked:r,onChange:i,"data-id":e})}),Object(a.jsx)("span",{className:y.a.span,children:"\u221a"}),Object(a.jsx)("p",{className:y.a.text,children:n}),Object(a.jsx)("p",{className:y.a.text,children:c}),Object(a.jsx)("button",{"data-id":e,type:"button",className:y.a.button,onClick:o,children:"Delete"})]})},S=function(t){var e=t.contacts,n=t.onRemove,c=t.onUpdateContact;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.name,o=t.number,r=t.id,i=t.completed;return Object(a.jsx)(N,{name:e,number:o,dataId:r,completed:i,onRemove:n,onUpdate:c},r)}))})},k=n(14),I=n.n(k),F=function(t){var e=t.filter,n=t.onChangeFilter;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("input",{type:"text",className:I.a.input,placeholder:"Find contacts by name",value:e,onChange:n})})},w=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{completed:"",id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{completed:"",id:"id-2",name:"Hermione Kline",number:"443-89-12"},{completed:"",id:"id-3",name:"Eden Clements",number:"645-17-79"},{completed:"",id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c=e.completed,o=t.state.contacts,r={id:Object(j.a)(),name:n,number:a,completed:c};o.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," \u0442\u0430\u043a\u043e\u0435 \u0438\u043c\u044f \u0443\u0436\u0435 \u0435\u0441\u0442\u044c!")):o.find((function(t){return t.number===a}))?alert("".concat(a," \u0442\u0430\u043a\u043e\u0439 \u043d\u043e\u043c\u0435\u0440 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c!")):n.length&&a.length?t.setState((function(t){return{contacts:[].concat(Object(b.a)(t.contacts),[r])}})):alert("\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b!")},t.removeContact=function(e){var n=e.target.dataset.id;t.setState({contacts:Object(b.a)(t.state.contacts.filter((function(t){return t.id!==n})))})},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.updateCompleted=function(e){var n=e.target.dataset.id;t.setState((function(t){return{contacts:t.contacts.map((function(t){return t.id===n?Object(m.a)(Object(m.a)({},t),{},{completed:!t.completed}):t}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount");var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){console.log("componentDidUpdate"),e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.getVisibleContacts();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x,{title:"Home Work #2 Phonebook"}),Object(a.jsx)(C,{title:"Phonebook",children:Object(a.jsx)(O,{onAddContact:this.addContact})}),e.length>1&&Object(a.jsx)(C,{title:"Finder contacts",children:Object(a.jsx)(F,{filter:n,onChangeFilter:this.changeFilter})}),e.length>0&&Object(a.jsx)(C,{title:"My Contacts",children:Object(a.jsx)(S,{contacts:c,onRemove:this.removeContact,onUpdateContact:this.updateCompleted})})]})}}]),n}(c.Component),A=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(w,{})})}}]),n}(c.Component);i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={item:"ContactsItem_item__3zWh0",span:"ContactsItem_span__fhIsl",text:"ContactsItem_text__1rYQP",button:"ContactsItem_button__2mjtH"}},8:function(t,e,n){t.exports={input:"Form_input__28m9x",button:"Form_button__2GsM6"}}},[[21,1,2]]]);
//# sourceMappingURL=main.41e95f1d.chunk.js.map