(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[30,31],{652:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n="http://52.221.199.238:3000/api"},655:function(t,e,a){},700:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return v}));var n=a(662),i=a.n(n),c=a(663),r=a(177),o=a(178),s=a(180),u=a(179),l=(a(655),a(1)),d=a(659),h=a.n(d),p=a(653),b=a(761),m=a(97),j=a(652),O=a(649),f=a(13),C=a(661);C.Datatable=a(664);var v=function(t){Object(s.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={period:[],loading:!0},n}return Object(o.a)(a,[{key:"getUsersData",value:function(){var t=Object(c.a)(i.a.mark((function t(){var e,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.mounted=!0,e="".concat(j.a,"/item/list"),t.next=4,h()(e,{method:"POST",headers:{"x-access-token":Object(m.a)(),"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"}});case 4:a=t.sent,this.setState({loading:!1,period:a.data.results});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=this;this.getUsersData().then((function(){return t.syncTable()}))}},{key:"syncTable",value:function(){this.$el=C(this.el),this.$el.DataTable({data:this.state.period,columns:[{title:"Record Status",data:"RECORD_STATUS"},{title:"Company Code",data:"COMPANY_CODE"},{title:"Branch Code",data:"BRANCH_CODE"},{title:"Item Code",data:"ITEM_CODE"},{title:"Item Name",data:"ITEM_NAME"},{title:"Item Photo",data:"ITEM_PHOTO"},{title:"Item Group",data:"ITEM_GROUP"},{title:"Purchase Price",data:"PURCHASE_PRICE"},{title:"Creation User Id",data:"CREATION_USER_ID"},{title:"Creation Datetim",data:"CREATION_DATETIME"}]})}},{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var t=this;return Object(f.jsx)(O.wb,{children:Object(f.jsx)(O.u,{xs:"12",md:"12",children:Object(f.jsxs)(O.j,{children:[Object(f.jsx)(O.n,{children:Object(f.jsx)(O.db,{to:"/item-create",children:Object(f.jsxs)(O.f,{type:"button",size:"sm",color:"success",children:[Object(f.jsx)(p.a,{content:b.a})," Add Item"]})})}),Object(f.jsx)(O.k,{children:Object(f.jsx)("table",{className:"table table-bordered ",width:"100%",ref:function(e){return t.el=e}})})]})})})}}]),a}(l.Component)}}]);
//# sourceMappingURL=30.049b48c6.chunk.js.map