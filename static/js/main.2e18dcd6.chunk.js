(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(10),i=n.n(o),s=n(15),r=n(6),d=n(8),l=(n(30),n(31),n(32),n(12)),b=n(16),j=n(7),u=Object(b.b)({name:"todo",initialState:{todoList:[{state:"TODO",color:"danger",todos:[{id:"1",title:"Create TODO App",description:"Create a SPA for DiscoverMyFranchise.",dueDate:"2021-10-31"},{id:"2",title:"Shopping",description:"Drive to Nesters to buy food.",dueDate:"2021-11-5"}]},{state:"In Progress",color:"warning",todos:[{id:"3",title:"Improve TODO App",description:"Create a SPA for DiscoverMyFranchise.",dueDate:"2021-10-31"}]},{state:"Done",color:"success",todos:[{id:"4",title:"Done TODO App",description:"Create a SPA for DiscoverMyFranchise.",dueDate:"2021-10-31"}]}],countId:4},reducers:{add:function(e,t){e.countId++,e.todoList.at(t.payload.stateIndex).todos.push(Object(r.a)(Object(r.a)({},t.payload.todo),{},{id:""+e.countId})),e.todoList.at(t.payload.stateIndex).sortLabel=void 0},remove:function(e,t){e.todoList.at(t.payload.stateIndex).todos.splice(t.payload.index,1)},changeState:function(e,t){var n=e.todoList.at(parseInt(t.payload.sourceStateIndex)).todos.splice(t.payload.sourceIndex,1),a=Object(d.a)(n,1)[0];e.todoList.at(parseInt(t.payload.destStateIndex)).todos.splice(t.payload.destIndex,0,Object(j.a)(a)),e.todoList.at(t.payload.destStateIndex).sortLabel=void 0},reorderTodo:function(e,t){var n=e.todoList.at(parseInt(t.payload.stateIndex)).todos.splice(t.payload.sourceIndex,1),a=Object(d.a)(n,1)[0];e.todoList.at(parseInt(t.payload.stateIndex)).todos.splice(t.payload.destIndex,0,Object(j.a)(a)),e.todoList.at(t.payload.stateIndex).sortLabel=void 0},reorderTable:function(e,t){var n=e.todoList.splice(t.payload.sourceIndex,1),a=Object(d.a)(n,1)[0];e.todoList.splice(t.payload.destIndex,0,Object(j.a)(a))},edit:function(e,t){e.todoList[t.payload.stateIndex].todos[t.payload.index]=t.payload.todo,e.todoList.at(t.payload.stateIndex).sortLabel=void 0},sort:function(e,t){e.todoList.at(t.payload.index).todos.sort(t.payload.func),e.todoList.at(t.payload.index).sortLabel=t.payload.sortLabel}}}),O=u.actions,p=O.add,x=O.remove,f=O.toggleState,h=O.changeState,m=O.reorderTodo,g=O.reorderTable,D=O.edit,v=O.sort,y=u.reducer,I=n(4),C=n(2),L=function(e){var t=e.props;return Object(C.jsxs)(I.m,{isOpen:t.isOpen,toggle:t.onClose,keyboard:!1,backdrop:"static",children:[Object(C.jsx)(I.p,{toggle:t.onClose,children:"Delete TODO"}),Object(C.jsx)(I.n,{children:Object(C.jsxs)("p",{children:["Do you want to delete ",Object(C.jsx)("span",{className:"text-primary",children:t.todo?t.todo.title:""}),"?"]})}),Object(C.jsxs)(I.o,{children:[Object(C.jsx)(I.b,{color:"secondary",onClick:t.onClose,children:"Close"}),Object(C.jsx)(I.b,{color:"danger",onClick:function(){return t.onDelete(t.stateIndex,t.index)},children:"Delete"})]})]})},N=[{label:"None",filterType:"",disabled:!0,isActive:!1},{label:"Table",filterType:"state",disabled:!1,isActive:!1},{label:"Title",filterType:"title",disabled:!1,isActive:!1},{label:"ID",filterType:"id",disabled:!1,isActive:!1},{label:"Due Date",filterType:"dueDate",disabled:!1,isActive:!1}],S=function(e){var t=e.filters,n=e.onChange,c=Object(a.useState)(!1),o=Object(d.a)(c,2),i=o[0],s=o[1],r=Object(a.useState)(!1),l=Object(d.a)(r,2),b=l[0],j=l[1],u=Object(a.useState)(N[0]),O=Object(d.a)(u,2),p=O[0],x=O[1],f=function(e,t){p.isActive=""!==t,n(e,t)};return Object(C.jsxs)(I.s,{color:"light",fixed:"top",sticky:"true",light:!0,className:"mb-xs-3",children:[Object(C.jsxs)(I.t,{children:[Object(C.jsx)("i",{className:"bi bi-check2-square me-2"}),"Your TODO's"]}),Object(C.jsx)(I.q,{children:Object(C.jsx)(I.r,{children:Object(C.jsxs)(I.k,{children:[Object(C.jsxs)(I.d,{toggle:function(){return s(!i)},isOpen:i,children:[Object(C.jsx)(I.g,{className:"rounded-end-0",caret:!0,children:p.label}),Object(C.jsx)(I.f,{children:N.map((function(e){return Object(C.jsx)(I.e,{onClick:function(){return x(e)},children:e.label},e.label)}))})]}),Object(C.jsx)(I.j,{id:"filter",name:"filter",type:"search",value:t[p.filterType],disabled:p.disabled,onChange:function(e){return f(p.filterType,e.target.value)}}),Object(C.jsxs)(I.d,{toggle:function(){return j(!b)},isOpen:b,children:[Object(C.jsx)(I.g,{color:"warning",caret:!0,children:function(){var e=0;for(var n in t)""!==t[n]&&e++;return e}()}),Object(C.jsx)(I.f,{children:N.map((function(e){return e.isActive?Object(C.jsx)(I.e,{children:"".concat(e.label)},e.filterType):null}))})]})]})})})]})},T=n(13),A=[{label:"ID (1-9)",func:function(e,t){return e.id-t.id}},{label:"ID (9-1)",func:function(e,t){return t.id-e.id}},{label:"Title (A-Z)",func:function(e,t){return(""+e.title).localeCompare(t.title)}},{label:"Title (Z-A)",func:function(e,t){return(""+t.title).localeCompare(e.title)}},{label:"Date (past - future)",func:function(e,t){return Date.parse(e.dueDate)-Date.parse(t.dueDate)}},{label:"Date (future - past)",func:function(e,t){return Date.parse(t.dueDate)-Date.parse(e.dueDate)}}],k=function(e){var t=e.onSort,n=e.index,c=Object(a.useState)(!1),o=Object(d.a)(c,2),i=o[0],s=o[1],r=function(){return s(!i)};return Object(C.jsxs)(I.d,{toggle:r,isOpen:i,size:"sm",className:"d-inline-block me-2",children:[Object(C.jsx)(I.g,{color:"secondary",className:"rounded rounded-circle mt-1",onClick:r,children:Object(C.jsx)("i",{className:"bi bi-filter"})}),Object(C.jsx)(I.f,{container:"body",children:A.map((function(e){return Object(C.jsx)(I.e,{onClick:function(){return t({index:n,func:e.func,sortLabel:e.label})},children:e.label},e.label)}))})]})},w=n(23),E=n.n(w),M=new Date;M.setHours(0,0,0,0),M.setDate(M.getDate()-1);var P=function(e){var t=e.todo,n=e.index,a=e.tableIndex,c=e.table,o=e.onEdit,i=e.onDelete;return Object(C.jsx)(T.b,{draggableId:"".concat(t.id),index:n,children:function(e,s){return Object(C.jsx)("div",Object(r.a)(Object(r.a)(Object(r.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:Object(C.jsxs)(I.c,{fluid:!0,className:"bg-light p-3 rounded shadow mt-3",children:[Object(C.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(C.jsxs)("p",{className:"fs-5",children:["".concat(t.id,". ").concat(t.title),Object(C.jsx)(I.a,{pill:!0,color:c.color,className:"ms-1 ms-sm-2",children:c.state})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(I.b,{size:"sm",color:"warning",className:"rounded-circle me-2",onClick:function(){return o(a,c,n)},children:Object(C.jsx)("i",{className:"bi bi-pencil-fill"})}),Object(C.jsx)(I.b,{size:"sm",color:"danger",className:"rounded-circle",onClick:function(){return i(t,a,n)},children:Object(C.jsx)("i",{className:"bi bi-trash-fill"})}),Object(C.jsx)(I.b,{size:"sm",disabled:!0,color:"none",className:"rounded-circle ms-1 position-relative top-50",children:Object(C.jsx)("i",{className:"bi bi-grip-vertical"})})]})]}),Object(C.jsx)(I.b,{id:"toggler".concat(t.id),size:"sm",color:"none",className:"rounded-circle",children:Object(C.jsx)("i",{className:"bi bi-caret-down-fill"})}),Object(C.jsx)(E.a,{format:"MMM D, YYYY",className:"ms-2",children:t.dueDate}),M>Date.parse(t.dueDate)&&"Done"!==c.state&&Object(C.jsx)(I.a,{color:"danger",className:"ms-2",children:"Overdue"}),Object(C.jsx)(I.w,{toggler:"toggler".concat(t.id),children:Object(C.jsx)("p",{className:"border-top border-".concat(c.color," mt-2 pt-2 ms-0 me-3 mb-0 text-break fst-italic"),children:t.description})})]})}))}},t.id)},Y=n(17),z=n.n(Y),F=function(e){var t=e.table,n=e.tableIndex,a=e.onStateChange,c=e.onDelete,o=e.onAdd,i=e.onEdit,s=e.onSort,d=e.filters;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"bg-light d-flex justify-content-between mt-3 p-3 border border-3 border-start-0 border-end-0 border-top-0 border-".concat(t.color),children:[Object(C.jsx)("p",{className:"text-".concat(t.color," m-0 fs-4"),children:t.state}),Object(C.jsxs)("div",{children:[t.sortLabel&&Object(C.jsx)("p",{className:"d-inline-block text-primary m-0 me-2 p-0",children:t.sortLabel}),Object(C.jsx)(k,{onSort:s,index:n}),Object(C.jsx)(I.b,{size:"sm",color:t.color,className:"rounded-circle mt-1",onClick:function(){return o(n,t)},children:Object(C.jsx)("i",{className:"bi bi-plus-lg"})}),Object(C.jsx)(I.b,{size:"sm",disabled:!0,color:"none",className:"rounded-circle mt-1 ms-1",children:Object(C.jsx)("i",{className:"bi bi-grip-vertical"})})]})]}),Object(C.jsx)(T.c,{droppableId:"".concat(n),type:"TODO",children:function(e,o){return Object(C.jsxs)("div",Object(r.a)(Object(r.a)({className:"bg-".concat(t.color," ").concat(o.isDraggingOver?"bg-opacity-50":"bg-opacity-25"," p-2")},e.droppableProps),{},{ref:e.innerRef,children:[t.todos.map((function(e,o){for(var s in e){if("dueDate"===s&&!z()(e[s]).format("MMM D, YYYY").toLowerCase().includes(d[s].toLowerCase()))return null;if("dueDate"!==s&&!e[s].toLowerCase().includes(d[s].toLowerCase()))return null}return Object(C.jsx)(I.u,{children:Object(C.jsx)(P,{todo:e,index:o,tableIndex:n,onDelete:c,onEdit:i,onStateChange:a,table:t})},e.id)})),e.placeholder]}))}},n)]})},R=function(e){var t=e.title,n=e.description,a=e.state,c=e.dueDate,o=e.setTitle,i=e.setDescription,s=e.setDueDate;return Object(C.jsxs)(I.h,{children:[Object(C.jsx)(I.u,{form:!0,children:Object(C.jsxs)(I.i,{children:[Object(C.jsx)(I.l,{for:"title",children:"Title"}),Object(C.jsx)(I.j,{id:"title",name:"title",placeholder:"My TODO's title",type:"text",valid:""!==t,invalid:""===t,value:t,onChange:function(e){return o(e.target.value)}})]})}),Object(C.jsx)(I.u,{form:!0,children:Object(C.jsxs)(I.i,{children:[Object(C.jsx)(I.l,{for:"description",children:"Description (Optional)"}),Object(C.jsx)(I.j,{id:"description",name:"description",placeholder:"My TODO's description (Optional)",type:"textarea",value:n,onChange:function(e){return i(e.target.value)}})]})}),Object(C.jsx)(I.u,{form:!0,children:Object(C.jsxs)(I.i,{children:[Object(C.jsx)(I.l,{for:"state",children:"State"}),Object(C.jsx)(I.j,{disabled:!0,id:"state",name:"state",type:"text",className:a?"bg-".concat(a.color," text-light"):"",value:a?a.state:""})]})}),Object(C.jsx)(I.u,{form:!0,children:Object(C.jsxs)(I.i,{children:[Object(C.jsx)(I.l,{for:"date",children:"Due Date"}),Object(C.jsx)(I.j,{id:"date",name:"date",type:"date",value:c,valid:""!==c,invalid:""===c,onChange:function(e){return s(e.target.value)}})]})})]})},q=function(e){var t=e.props,n=Object(a.useState)(t.data?t.data.title:""),c=Object(d.a)(n,2),o=c[0],i=c[1],s=Object(a.useState)(t.data?t.data.description:""),r=Object(d.a)(s,2),l=r[0],b=r[1],j=Object(a.useState)(t.data?t.data.dueDate:""),u=Object(d.a)(j,2),O=u[0],p=u[1],x=Object(a.useState)(!1),f=Object(d.a)(x,2),h=f[0],m=f[1];return Object(C.jsxs)(I.m,{isOpen:t.isOpen,toggle:t.onClose,keyboard:!1,backdrop:"static",children:[Object(C.jsx)(I.p,{toggle:t.onClose,children:t.data?"Edit TODO":"Add TODO"}),Object(C.jsxs)(I.n,{children:[h&&Object(C.jsx)(I.v,{color:"warning",children:"Some of the required fields are empty. ;("}),Object(C.jsx)(R,{title:o,description:l,dueDate:O,setTitle:i,setDescription:b,setDueDate:p,state:t.state})]}),Object(C.jsxs)(I.o,{children:[Object(C.jsx)(I.b,{color:"secondary",onClick:t.onClose,children:"Close"}),Object(C.jsx)(I.b,{color:t.data?"warning":"success",onClick:function(){""!==o&&""!==O?(t.data?(t.onEdit(t.stateIndex,t.index,o,l,O,t.data.id),t.data=null):t.onAdd(t.stateIndex,o,l,O),i(""),b(""),p(""),t.onClose()):m(!0)},children:t.data?"Edit":"Add"})]})]})},B=function(){var e=Object(l.d)((function(e){return e.todo})).todoList,t=Object(l.c)(),n=Object(a.useState)({state:"",title:"",id:"",dueDate:"",description:""}),c=Object(d.a)(n,2),o=c[0],i=c[1],b=function(){return E(Object(r.a)(Object(r.a)({},w),{},{isOpen:!1}))},j=function(){return N(Object(r.a)(Object(r.a)({},y),{},{isOpen:!1}))},u=Object(a.useState)({isOpen:!1,onClose:j,onAdd:function(e,n,a,c){t(p({stateIndex:e,todo:{title:n,description:a,dueDate:c}})),j()},onEdit:function(e,n,a,c,o,i){t(D({stateIndex:e,index:n,todo:{title:a,description:c,dueDate:o,id:i}}))}}),O=Object(d.a)(u,2),y=O[0],N=O[1],A=Object(a.useState)({isOpen:!1,onClose:b,onDelete:function(e,n){t(x({stateIndex:e,index:n})),b()}}),k=Object(d.a)(A,2),w=k[0],E=k[1],M=function(e){return t(f(e.id))},P=function(e,t){return N(Object(r.a)(Object(r.a)({},y),{},{isOpen:!0,stateIndex:e,state:t}))},Y=function(t,n,a){var c=e.at(t).todos.at(a);N(Object(r.a)(Object(r.a)({},y),{},{isOpen:!0,stateIndex:t,state:n,index:a,data:c}))},z=function(e,t,n){return E(Object(r.a)(Object(r.a)({},w),{},{isOpen:!0,todo:e,stateIndex:t,index:n}))},R=function(e){var n=e.index,a=e.func,c=e.sortLabel;return t(v({index:n,func:a,sortLabel:c}))};return Object(C.jsxs)(C.Fragment,{children:[w.isOpen&&Object(C.jsx)(L,{props:w}),y.isOpen&&Object(C.jsx)(q,{props:y}),Object(C.jsx)(S,{filters:o,onChange:function(e,t){i(Object(r.a)(Object(r.a)({},o),{},Object(s.a)({},e,t)))}}),Object(C.jsx)(I.c,{fluid:!0,children:Object(C.jsx)(T.a,{onDragEnd:function(e){var n=e.source,a=e.destination;a&&(a.droppableId===n.droppableId&&a.index===n.index||("TABLE"!==e.type?n.droppableId!==a.droppableId?t(h({sourceStateIndex:n.droppableId,sourceIndex:n.index,destStateIndex:a.droppableId,destIndex:a.index})):t(m({sourceIndex:n.index,destIndex:a.index,stateIndex:n.droppableId})):t(g({sourceIndex:n.index,destIndex:a.index}))))},children:Object(C.jsx)(T.c,{direction:"horizontal",droppableId:"tables",type:"TABLE",children:function(t,n){return Object(C.jsxs)("div",Object(r.a)(Object(r.a)({className:"row"},t.droppableProps),{},{ref:t.innerRef,children:[e.map((function(e,t){return e.state.toLowerCase().includes(o.state.toLowerCase())?Object(C.jsx)(T.b,{draggableId:"table-".concat(t),index:t,children:function(n,a){return Object(C.jsx)("div",Object(r.a)(Object(r.a)(Object(r.a)({className:"col-12 col-md-6 col-xl-4",ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(C.jsx)(F,{table:e,tableIndex:t,onStateChange:M,onDelete:z,onAdd:P,onEdit:Y,onSort:R,filters:o})}),t)}},"table-".concat(t)):null})),t.placeholder]}))}})})})]})},H=Object(b.a)({reducer:{todo:y}});i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(l.a,{store:H,children:Object(C.jsx)(B,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.2e18dcd6.chunk.js.map