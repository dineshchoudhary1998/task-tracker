(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),s=(n(14),n(9)),i=n(5),d=n(2),l=n(0),j=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(l.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};j.defaultProps={color:"steelblue"};var u=j,b=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsxs)("h1",{children:[" ",t," "]}),Object(l.jsx)(u,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})},h=n(8),O=function(e){return Object(l.jsxs)("div",{className:" task ".concat(e.task.reminder?"reminder":""),onDoubleClick:function(){return e.onToggle(e.task.id)},children:[Object(l.jsxs)("h3",{children:[e.task.text," ",Object(l.jsx)(h.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return e.onDelete(e.task.id)}})]}),Object(l.jsx)("p",{children:e.task.day})]})},m=function(e){return Object(l.jsx)(l.Fragment,{children:e.tasks.map((function(t){return Object(l.jsx)(O,{task:t,onDelete:e.onDelete,onToggle:e.onToggle},t.id)}))})},x=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(""),s=Object(d.a)(o,2),i=s[0],j=s[1],u=Object(c.useState)(""),b=Object(d.a)(u,2),h=b[0],O=b[1];return Object(l.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),r?(e.onAdd({text:r,day:i,reminder:h}),a(""),j(""),O(!1)):alert("Please Add a task")},children:[Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Task"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Task",value:r,onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Day and Time"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Daya and Time",value:i,onChange:function(e){return j(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control form-control-check",children:[Object(l.jsx)("label",{children:"Set Reminder"}),Object(l.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return O(e.currentTarget.checked)}})]}),Object(l.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})};var f=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"Doctors Appointment",day:"Feb 5th at 2:30pm",reminder:!0},{id:2,text:"Meeting at School",day:"Feb 6th at 1:30pm",reminder:!0},{id:3,text:"Meeting at Office",day:"Feb 6th at 1:30pm",reminder:!1},{id:4,text:"Meeting at Home",day:"Feb 6th at 1:30pm",reminder:!0}]),o=Object(d.a)(a,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(b,{onAdd:function(){return r(!n)},title:"Task Tracker",showAdd:n}),n&&Object(l.jsx)(x,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(i.a)({id:t},e);u([].concat(Object(s.a)(j),[n])),console.log(n)}}),Object(l.jsx)(m,{tasks:j,onDelete:function(e){u(j.filter((function(t){return t.id!==e})))},onToggle:function(e){u(j.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.98967bcf.chunk.js.map