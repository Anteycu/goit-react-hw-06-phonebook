(this.webpackJsonpfirst_project=this.webpackJsonpfirst_project||[]).push([[0],{12:function(t,e,a){t.exports={contactsCards:"contactListItem_contactsCards__1iFgr",contactsCardsItems:"contactListItem_contactsCardsItems__u82Sl",button:"contactListItem_button__1dJ_P"}},26:function(t,e,a){t.exports=a(40)},36:function(t,e,a){},37:function(t,e,a){},38:function(t,e,a){},39:function(t,e,a){},40:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),l=a(14),u=a(15),m=a(17),i=a(16),s=a(42),b=a(11),d=a(4),f=a(5),p=a(43),C={addContact:Object(f.b)("contacts/addContact",(function(t,e){return{payload:{contact:{id:Object(p.a)(),text:t,number:e,showContactListItem:!1}}}})),removeContact:Object(f.b)("contacts/removeContact",(function(t){return{payload:{id:t}}})),toggleSameName:Object(f.b)("contacts/toggleSameName"),changeFilter:Object(f.b)("contact/changeFilter",(function(t){return{payload:{filter:t}}}))},h=a(12),v=a.n(h);var j=Object(d.b)((function(t,e){var a=t.contacts.items.find((function(t){return t.id===e.id}));return Object(b.a)({},a)}),(function(t,e){return{onRemove:function(){return t(C.removeContact(e.id))}}}))((function(t){var e=t.text,a=t.number,n=t.onRemove;return c.a.createElement("li",{className:v.a.contactsCards},c.a.createElement("p",{className:v.a.contactsCardsItems},e,":"),c.a.createElement("p",{className:v.a.contactsCardsItems},a),c.a.createElement("button",{className:v.a.button,type:"button",onClick:n},"x"))})),E=a(44),O=(a(36),Object(d.b)((function(t){var e=t.contacts,a=e.items,n=e.filter.toLowerCase();return{contacts:a.filter((function(t){return t.text.toLowerCase().includes(n)}))}}))((function(t){var e=t.contacts;return c.a.createElement(E.a,{component:"ul",className:"ContactList"},e.map((function(t){var e=t.id;return c.a.createElement(s.a,{key:e,timeout:250,classNames:"TaskListSlide"},c.a.createElement(j,{key:e,id:e}))})))}))),g=a(6),N=a(8),_=a.n(N),y=function(t){Object(m.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var a=e.target,n=a.name,c=a.value;t.setState(Object(g.a)({},n,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onToggleSameName(t.state.name),t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.number;return c.a.createElement("div",{className:_.a.container},c.a.createElement("form",{className:_.a.form,onSubmit:this.handleSubmit},c.a.createElement("label",{className:_.a.label},"Name",c.a.createElement("input",{className:_.a.inputs,type:"text",value:e,onChange:this.handleChange,name:"name",placeholder:"name",required:!0})),c.a.createElement("label",{className:_.a.label},"Tel.number",c.a.createElement("input",{className:_.a.inputs,type:"number",value:a,onChange:this.handleChange,name:"number",placeholder:"number",required:!0})),c.a.createElement("button",{className:_.a.button,type:"submit"},"Add contact")))}}]),a}(n.Component),S={onAddContact:C.addContact,onToggleSameName:C.toggleSameName},F=Object(d.b)(null,S)(y);a(37);var x={onChangeFilter:C.changeFilter},I=Object(d.b)((function(t){return{value:t.contacts.filter}}),x)((function(t){var e=t.value,a=t.onChangeFilter;return c.a.createElement("div",{className:"Container"},c.a.createElement("input",{className:"FilterInput",type:"text",value:e,onChange:function(t){return a(t.target.value)}}))}));a(38);function k(){return c.a.createElement(s.a,{in:!0,appear:!0,timeout:500,classNames:"TitleSlide",unmountOnExit:!0},c.a.createElement("div",null,c.a.createElement("h1",{className:"Title"},"Phonebook")))}a(39);var L,w=function(t){Object(m.a)(a,t);var e=Object(i.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(k,null),c.a.createElement(F,null),c.a.createElement("h2",{className:"Contacts"},"Contacts"),c.a.createElement(s.a,{in:!0,timeout:1e3,classNames:"Fade",unmountOnExit:!0},c.a.createElement(I,null)),c.a.createElement(s.a,{in:!0,timeout:500,classNames:"SlideIn",unmountOnExit:!0},c.a.createElement(O,null)))}}]),a}(n.Component),T=a(24),A=a(3),q=Object(f.c)([],(L={},Object(g.a)(L,C.addContact,(function(t,e){return[].concat(Object(T.a)(t),[e.payload.contact])})),Object(g.a)(L,C.removeContact,(function(t,e){return t.filter((function(t){return t.id!==e.payload.id}))})),Object(g.a)(L,C.toggleSameName,(function(t,e){return t.map((function(t){return t.text===e.payload?Object(b.a)(Object(b.a)({},t),{},{showContactListItem:!0}):t}))})),L)),J=Object(f.c)("",Object(g.a)({},C.changeFilter,(function(t,e){return e.payload.filter}))),P=Object(A.c)({items:q,filter:J}),R=Object(f.a)({reducer:{contacts:P}});o.a.render(c.a.createElement(d.a,{store:R},c.a.createElement(w,null)),document.getElementById("root"))},8:function(t,e,a){t.exports={container:"contactForm_container__3w9Gr",form:"contactForm_form__1XNrA",label:"contactForm_label__1Cql0",inputs:"contactForm_inputs__ESel7",button:"contactForm_button__1ijyj"}}},[[26,1,2]]]);
//# sourceMappingURL=main.20e85780.chunk.js.map