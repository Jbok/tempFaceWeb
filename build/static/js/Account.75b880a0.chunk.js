(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{821:function(A,e,t){"use strict";t.d(e,"a",function(){return u}),t.d(e,"b",function(){return B});var a=t(827),n=t(826),r=t.n(n),o=t(828),c=t.n(o),i=t(117),g=t(14),l=r()({}),s=c()(),u=Object(a.connectedRouterRedirect)({redirectPath:"/login",AuthenticatingComponent:i.a,wrapperDisplayName:"UserIsAuthenticated",authenticatedSelector:function(A){var e=A.firebase.auth;return!e.isEmpty&&!!e.uid},authenticatingSelector:function(A){var e=A.firebase,t=e.auth,a=e.isInitializing;return!t.isLoaded||a},redirectAction:function(A){return function(e){s.push(A),e({type:"UNAUTHED_REDIRECT",payload:{message:"User is not authenticated."}})}}}),B=Object(a.connectedRouterRedirect)({AuthenticatingComponent:i.a,wrapperDisplayName:"UserIsNotAuthenticated",allowRedirectBack:!1,authenticatedSelector:function(A){return A.firebase.auth.isEmpty},authenticatingSelector:function(A){var e=A.firebase,t=e.auth,a=e.isInitializing;return!t.isLoaded||a},redirectPath:function(A,e){return console.log("state"),console.log(A),console.log("ownProps"),console.log(e),"admin@test.com"===A.firebase.auth.email?(console.log("isAdmin"),g.g):l.getRedirectQueryParam(e)||g.e},redirectAction:function(A){return function(e){s.push(A),e({type:"AUTHED_REDIRECT",payload:{message:"User is not authenticated."}})}}})},822:function(A,e,t){"use strict";t.d(e,"a",function(){return a}),t.d(e,"b",function(){return n}),t.d(e,"d",function(){return r}),t.d(e,"c",function(){return o});var a="account",n="login",r="signup",o="newPost"},915:function(A,e){A.exports="data:image/png;base64,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"},916:function(A,e,t){"use strict";var a=t(3);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}});var n=a(t(917))},917:function(A,e,t){"use strict";var a=t(3);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.styles=void 0;var n=a(t(12)),r=a(t(19)),o=a(t(15)),c=a(t(0)),i=(a(t(1)),a(t(4))),g=(t(20),a(t(28))),l=t(66),s=function(A){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:A.palette.text.secondary,fontFamily:A.typography.fontFamily,fontWeight:A.typography.fontWeightMedium,fontSize:A.typography.pxToRem(14)},colorPrimary:{color:A.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}};function u(A){var e,t=A.classes,a=A.className,g=A.color,s=A.component,u=A.disableGutters,B=A.disableSticky,d=A.inset,f=(0,o.default)(A,["classes","className","color","component","disableGutters","disableSticky","inset"]);return c.default.createElement(s,(0,n.default)({className:(0,i.default)(t.root,(e={},(0,r.default)(e,t["color".concat((0,l.capitalize)(g))],"default"!==g),(0,r.default)(e,t.inset,d),(0,r.default)(e,t.sticky,!B),(0,r.default)(e,t.gutters,!u),e),a)},f))}e.styles=s,u.defaultProps={color:"default",component:"li",disableGutters:!1,disableSticky:!1,inset:!1},u.muiName="ListSubheader";var B=(0,g.default)(s,{name:"MuiListSubheader"})(u);e.default=B},918:function(A,e,t){"use strict";var a=t(3);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}});var n=a(t(919))},919:function(A,e,t){"use strict";var a=t(3);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.styles=void 0;var n=a(t(12)),r=a(t(15)),o=a(t(0)),c=(a(t(1)),a(t(4))),i=a(t(28)),g=function(A){return{root:{marginRight:16,color:A.palette.action.active,flexShrink:0,display:"inline-flex"}}};e.styles=g;var l=(0,i.default)(g,{name:"MuiListItemIcon"})(function(A){var e=A.children,t=A.classes,a=A.className,i=(0,r.default)(A,["children","classes","className"]);return o.default.createElement("div",(0,n.default)({className:(0,c.default)(t.root,a)},i),e)});e.default=l},920:function(A,e,t){"use strict";var a=t(3);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}});var n=a(t(921))},921:function(A,e,t){"use strict";var a=t(3);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.styles=void 0;var n=a(t(12)),r=a(t(19)),o=a(t(15)),c=a(t(0)),i=(a(t(1)),a(t(4))),g=a(t(28)),l=a(t(281)),s=a(t(287)),u=function(A){return{root:{flex:"1 1 auto",minWidth:0,padding:"0 16px","&:first-child":{paddingLeft:0}},inset:{"&:first-child":{paddingLeft:56}},dense:{fontSize:A.typography.pxToRem(13)},primary:{"&$textDense":{fontSize:"inherit"}},secondary:{"&$textDense":{fontSize:"inherit"}},textDense:{}}};function B(A){var e=A.children,t=A.classes,a=A.className,g=A.disableTypography,u=A.inset,B=A.primary,d=A.primaryTypographyProps,f=A.secondary,C=A.secondaryTypographyProps,w=A.theme,D=(0,o.default)(A,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps","theme"]);return c.default.createElement(s.default.Consumer,null,function(A){var o,s=A.dense,m=null!=B?B:e;null==m||m.type===l.default||g||(m=c.default.createElement(l.default,(0,n.default)({variant:w.typography.useNextVariants?"body1":"subheading",className:(0,i.default)(t.primary,(0,r.default)({},t.textDense,s)),component:"span"},d),m));var Q=f;return null==Q||Q.type===l.default||g||(Q=c.default.createElement(l.default,(0,n.default)({className:(0,i.default)(t.secondary,(0,r.default)({},t.textDense,s)),color:"textSecondary"},C),Q)),c.default.createElement("div",(0,n.default)({className:(0,i.default)(t.root,(o={},(0,r.default)(o,t.dense,s),(0,r.default)(o,t.inset,u),o),a)},D),m,Q)})}e.styles=u,B.defaultProps={disableTypography:!1,inset:!1};var d=(0,g.default)(u,{name:"MuiListItemText",withTheme:!0})(B);e.default=d},984:function(A,e,t){"use strict";t.r(e);var a=t(0),n=t.n(a),r=t(268),o=t.n(r),c=t(915),i=t.n(c),g=t(983),l=t(125),s=t.n(l),u=t(830),B=t(434),d=t.n(B),f=t(435),C=t.n(f),w=t(918),D=t.n(w),m=t(920),Q=t.n(m),p=t(916),E=t.n(p),I=t(382),F=t.n(I),y=function(A){var e=A.providerData;return n.a.createElement(d.a,{subheader:n.a.createElement(E.a,null,"Accounts")},e.map(function(A,e){return n.a.createElement(C.a,{key:e},n.a.createElement(D.a,null,n.a.createElement(F.a,null)),n.a.createElement(Q.a,{primary:A.providerId}))}))},b=function(A){var e=A.account,t=A.handleSubmit,a=A.submitting,r=A.pristine,o=A.classes;return n.a.createElement("form",{className:o.root,onSubmit:t},n.a.createElement("h4",null,"Account"),n.a.createElement("div",{className:o.fields},n.a.createElement(g.a,{fullWidth:!0,name:"displayName",component:u.TextField,label:"Display Name"}),n.a.createElement(g.a,{name:"email",label:"Email",component:u.TextField,fullWidth:!0}),n.a.createElement(g.a,{name:"avatarUrl",label:"Avatar Url",component:u.TextField,fullWidth:!0})),!!e&&!!e.providerData&&n.a.createElement("div",null,n.a.createElement("h4",null,"Linked Accounts"),n.a.createElement(y,{providerData:e.providerData})),n.a.createElement(s.a,{color:"primary",type:"submit",disabled:r||a},a?"Saving":"Save"))},h=t(1),M=t.n(h),O=t(27),v=t(978),N=t(34),U=t(822),P=t(49),x=Object(O.b)(Object(O.g)({onSubmit:M.a.func.isRequired}),Object(v.a)({form:U.a}),Object(N.withStyles)(function(A){return{root:Object(P.a)({},A.flexColumnCenter,{justifyContent:"flex-start",width:"100%",height:"100%"}),fields:{width:"60%"}}}))(b),Y=function(A){var e=A.avatarUrl,t=A.updateAccount,a=A.profile,r=A.classes;return n.a.createElement("div",{className:r.root},n.a.createElement(o.a,{className:r.pane},n.a.createElement("div",{className:r.settings},n.a.createElement("div",null,n.a.createElement("img",{className:r.avatarCurrent,src:e||i.a,alt:""})),n.a.createElement("div",{className:r.meta},n.a.createElement(x,{onSubmit:t,account:a,initialValues:a})))))},j=t(92),R=t(50),G=t(30),J=t(133),H=t(821),T=Object(O.b)(H.a,R.withFirebase,J.c,Object(j.connect)(function(A){var e=A.firebase.profile;return{profile:e,avatarUrl:e.avatarUrl}}),Object(G.b)(["profile"]),Object(O.g)({showSuccess:M.a.func.isRequired,showError:M.a.func.isRequired,firebase:M.a.shape({updateProfile:M.a.func.isRequired})}),Object(O.h)({updateAccount:function(A){var e=A.firebase,t=A.showSuccess,a=A.showError;return function(A){return e.updateProfile(A).then(function(){return t("Profile updated successfully")}).catch(function(A){return a("Error updating profile: ",A.message||A),console.error("Error updating profile",A.message||A),Promise.reject(A)})}}}),Object(N.withStyles)(function(A){return{root:Object(P.a)({},A.flexRowCenter,{width:"100%",height:"100%",paddingTop:"1.5rem"}),pane:Object(P.a)({},A.flexColumnCenter,{justifyContent:"space-around",flexBasis:"60%",padding:A.spacing.unit}),settings:Object(P.a)({},A.flexRowCenter),avatarCurrent:{width:"100%",maxWidth:"13rem",marginTop:"3rem",height:"auto",cursor:"pointer"},meta:Object(P.a)({},A.flexColumnCenter,{flexBasis:"60%",marginBottom:"3rem",marginTop:"2rem"})}}));e.default=T(Y)}}]);
//# sourceMappingURL=Account.75b880a0.chunk.js.map