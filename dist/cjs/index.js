"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@mui/material/Button"),a=require("react"),r=require("@mui/material/Accordion"),t=require("@mui/material/AccordionSummary"),n=require("@mui/material/AccordionDetails"),i=require("@mui/material/Paper"),o=require("@mui/material/Radio");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u,d=l(e),c=l(a),f=l(r),s=l(t),m=l(n),E=l(i),v=l(o);!function(e){e.INHERIT="inherit",e.PRIMARY="primary",e.SECONDARY="secondary",e.SUCCESS="success",e.ERROR="error",e.INFO="info",e.WARNING="warning"}(u||(u={}));var p,R=u;!function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large"}(p||(p={}));var A,C=p;!function(e){e.TEXT="text",e.OUTLINED="outlined",e.CONTAINED="contained"}(A||(A={}));var x,N=A;!function(e){e.ELEVATED="elevation",e.OUTLINED="outlined"}(x||(x={}));var I,S=x;!function(e){e.SMALL="small",e.MEDIUM="medium"}(I||(I={}));var D,h=I;!function(e){e.DEFAULT="default",e.PRIMARY="primary",e.SECONDARY="secondary",e.SUCCESS="success",e.ERROR="error",e.INFO="info",e.WARNING="warning"}(D||(D={}));var M=D;exports.GaAccordion=function(e){var a=e.defaultExpanded,r=e.disabled,t=e.expanded,n=e.onChange,i=e.accordianSummary,o=e.accordionDetails;return c.default.createElement(f.default,{disabled:r,onChange:function(e){return n(e)},expanded:t,defaultExpanded:a},c.default.createElement("div",null,c.default.createElement(s.default,{children:i})),c.default.createElement(m.default,{children:o}))},exports.GaButton=function(e){var a=e.children,r=e.color,t=void 0===r?R.SECONDARY:r,n=e.size,i=void 0===n?C.MEDIUM:n,o=e.variant,l=void 0===o?N.CONTAINED:o,u=e.onClick;return c.default.createElement(d.default,{color:t,fullWidth:!0,size:i,variant:l,onClick:u},a)},exports.GaButtonColor=R,exports.GaButtonSize=C,exports.GaPaper=function(e){var a=e.children,r=e.variant,t=e.square,n=e.elevation;return c.default.createElement(E.default,{elevation:n,square:t,variant:r},a)},exports.GaPaperVariant=S,exports.GaRadioButton=function(e){var a=e.value,r=e.size,t=void 0===r?h.SMALL:r,n=e.checked,i=e.onChange,o=e.color,l=e.label,u=void 0===l?"":l;return c.default.createElement("div",{style:{display:"flex"}},c.default.createElement(v.default,{value:a,size:t,checked:n,onChange:i,color:o}),c.default.createElement("div",{style:{paddingTop:"8px"}},u))},exports.GaRadioButtonColor=M;
//# sourceMappingURL=index.js.map