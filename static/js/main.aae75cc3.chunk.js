(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s,a=c(4),n=c.n(a),l=c(2),i=c(1),d=(c(9),c(10),c(0)),o=function(e){var t=e.todos,c=e.selectedTodoId,s=e.todoToOpen;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"todo",className:c!==e.id?"":"has-background-info-light",children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),Object(d.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:c!==e.id?"far fa-eye":"far fa-eye-slash"})})})})]},e.id)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(s||(s={}));var r=function(e){var t=e.changeFilterBy,c=e.changeQuery,a=e.query;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){t(e.target.value)},children:[Object(d.jsx)("option",{value:s.ALL,children:"All"}),Object(d.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(d.jsx)("option",{value:s.COMPLETED,children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){c(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})};function j(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(12);var u=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},b=function(e){var t=e.todo,c=e.selectedTodo,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],o=a[1],r=Object(i.useState)(!0),b=Object(l.a)(r,2),h=b[0],O=b[1];return Object(i.useEffect)((function(){var e;(e=t.userId,j("/users/".concat(e))).then((function(e){o(e),O(!1)}))}),[]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),h?Object(d.jsx)(u,{}):Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(d.jsx)("strong",{className:"has-text-danger",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})},h=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(!0),h=Object(l.a)(n,2),O=h[0],m=h[1],x=Object(i.useState)(s.ALL),f=Object(l.a)(x,2),p=f[0],v=f[1],N=Object(i.useState)(""),y=Object(l.a)(N,2),g=y[0],T=y[1],C=Object(i.useState)([]),L=Object(l.a)(C,2),E=L[0],k=L[1],S=Object(i.useState)(null),w=Object(l.a)(S,2),A=w[0],I=w[1];Object(i.useEffect)((function(){j("/todos").then((function(e){a(e),k(e),m(!1)}))}),[]);var B=function(e){return e.toLowerCase().includes(g.toLowerCase())};Object(i.useEffect)((function(){switch(p){case s.ALL:return k(c.filter((function(e){return B(e.title)})));case s.ACTIVE:return k(c.filter((function(e){return!e.completed&&B(e.title)})));case s.COMPLETED:return k(c.filter((function(e){return e.completed&&B(e.title)})));default:return k(c)}}),[g,p]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(r,{changeFilterBy:function(e){v(e)},changeQuery:function(e){T(e)},query:g})}),Object(d.jsx)("div",{className:"block",children:O?Object(d.jsx)(u,{}):Object(d.jsx)(o,{todos:E,selectedTodoId:(null===A||void 0===A?void 0:A.id)||0,todoToOpen:function(e){I(e)}})})]})})}),A&&Object(d.jsx)(b,{todo:A,selectedTodo:I})]})};n.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.aae75cc3.chunk.js.map