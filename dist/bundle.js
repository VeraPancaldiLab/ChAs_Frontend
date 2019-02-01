!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=5)}([function(e,t){e.exports=React},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(10);t.change_chromosome=n.change_chromosome,t.CHANGED_CHROMOSOME=n.CHANGED_CHROMOSOME;const r=o(11);t.change_download=r.change_download,t.CHANGED_DOWNLOAD=r.CHANGED_DOWNLOAD;const s=o(12);t.change_feature=s.change_feature,t.CHANGED_FEATURE=s.CHANGED_FEATURE;const a=o(13);t.change_search=a.change_search,t.CHANGED_SEARCH=a.CHANGED_SEARCH;const c=o(14);t.change_text=c.change_text,t.CHANGED_TEXT=c.CHANGED_TEXT},function(e,t){e.exports=ReactRedux},function(e,t){e.exports=Reactstrap},function(e,t){e.exports=Redux},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(6),s=o(2),a=o(4),c=o(7),i=o(34),l=a.createStore(i.root_reducers),d=document.getElementById("frontend_container");r.render(n.createElement(s.Provider,{store:l},n.createElement(c.Frontend,null)),d)},function(e,t){e.exports=ReactDOM},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(8),s=o(16);t.Frontend=class extends n.Component{render(){return n.createElement("div",null,n.createElement(r.Header,null),n.createElement(s.Viewer,null))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(3),s=o(9);t.Header=class extends n.Component{render(){return n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement("h1",{className:"text-center"},n.createElement("a",{href:"https://github.com/VeraPancaldiLab/GARDEN-NET"},"GARDEN-NET")))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col"}),n.createElement("div",{className:"col"},n.createElement(r.Alert,{color:"primary",className:"text-center"},"Still in development!")),n.createElement("div",{className:"col"})),n.createElement("div",{className:"row"},n.createElement("div",{className:"col"}),n.createElement("div",{className:"col"},n.createElement(s.SearchPanelContainer,null)),n.createElement("div",{className:"col"})))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(2),r=o(1),s=o(15);t.mapStateToProps=(e=>({search:e.search,text:e.text})),t.mapDispatchToProps={onSearchChange:r.change_search,onTextChange:r.change_text,onChromosomeChange:r.change_chromosome},t.SearchPanelContainer=n.connect(t.mapStateToProps,t.mapDispatchToProps)(s.SearchPanel)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_CHROMOSOME="CHANGED_CHROMOSOME",t.change_chromosome=(e=>({type:t.CHANGED_CHROMOSOME,chromosome:e}))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_DOWNLOAD="CHANGED_DOWNLOAD",t.change_download=(e=>({type:t.CHANGED_DOWNLOAD,download:e}))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_FEATURE="CHANGED_FEATURE",t.change_feature=(e=>({type:t.CHANGED_FEATURE,feature:e}))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_SEARCH="CHANGED_SEARCH",t.change_search=(e=>({type:t.CHANGED_SEARCH,search:e}))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGED_TEXT="CHANGED_TEXT",t.change_text=(e=>({type:t.CHANGED_TEXT,text:e}))},function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(r,s){function a(e){try{i(n.next(e))}catch(e){s(e)}}function c(e){try{i(n.throw(e))}catch(e){s(e)}}function i(e){e.done?r(e.value):new o(function(t){t(e.value)}).then(a,c)}i((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const r=o(0),s=o(3);t.SearchPanel=class extends r.Component{constructor(e){super(e),this.BASE_URL="https://pancaldi.bsc.es/garden-net/data/suggestions/",this.componentDidMount=(()=>{this.fetchAsyncJson(this.BASE_URL+"suggestions.json").then(e=>{this.suggestions=e})}),this.onInputChange=(e=>{const t=e.target.value;0!==t.length&&this.setState({filtered_suggestions:this.suggestions.filter(e=>e.startsWith(t))}),this.props.onTextChange(e.target.value)}),this.onSubmit=(()=>{this.props.onSearchChange(this.props.text),this.props.onTextChange("")}),this.handleEnterKey=(e=>{"Enter"===e.key&&(e.preventDefault(),this.onSubmit())}),this.onSuggestChange=(e=>{const t=e.target.innerText;this.props.onTextChange(t),this.props.onSearchChange(t),this.props.onTextChange("")}),this.suggestions=[],this.state={filtered_suggestions:[]}}fetchAsyncJson(e){return n(this,void 0,void 0,function*(){return fetch(e).then(e=>e.json()).catch(e=>{setTimeout(()=>{alert("There are not any suggestions to be downloaded")},0)})})}boldText(e,t){return r.createElement("span",null,r.createElement("b",null,e.slice(0,t)),e.slice(t))}render(){return r.createElement(s.Form,{className:"text-center"},r.createElement(s.FormGroup,null,r.createElement(s.Label,{for:"searcher"},"Search"),r.createElement(s.Input,{className:"text-center",value:this.props.text,type:"text",name:"Search",placeholder:"Hoxa1 6:52155590 6:52155590-52158317",onChange:this.onInputChange,onKeyPress:this.handleEnterKey}),r.createElement(s.ListGroup,{className:"text-center container-fluid",style:{height:"auto",maxHeight:"110px",overflowX:"hidden",padding:"0px",display:0!==this.props.text.length&&0!==this.state.filtered_suggestions.length?"block":"none"}},this.state.filtered_suggestions.map(e=>r.createElement(s.ListGroupItem,{key:e,value:e,onClick:this.onSuggestChange,style:{padding:"0px",cursor:"pointer"}},this.boldText(e,this.props.text.length))))),r.createElement(s.Button,{disabled:""==this.props.text,style:{marginBottom:"15px"},onClick:this.onSubmit},"Submit"))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(17),s=o(27);t.Viewer=class extends n.Component{render(){return n.createElement("div",{className:"container-fluid"},n.createElement("div",{className:"row flex-column-reverse flex-lg-row"},n.createElement("div",{className:"col-lg-10",style:{padding:"0px"}},n.createElement(r.CytoscapeManager,null)),n.createElement("div",{className:"col-lg-2",style:{padding:"0px"}},n.createElement(s.ControlPanel,null))))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(2),r=o(1),s=o(18);t.mapStateToProps=(e=>({chromosome:e.chromosome,feature:e.feature,download:e.download,search:e.search})),t.mapDispatchToProps={onChromosomeChange:r.change_chromosome,onDownloadChange:r.change_download,onSearchChange:r.change_search},t.CytoscapeManager=n.connect(t.mapStateToProps,t.mapDispatchToProps)(s.Cytoscape_manager)},function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(r,s){function a(e){try{i(n.next(e))}catch(e){s(e)}}function c(e){try{i(n.throw(e))}catch(e){s(e)}}function i(e){e.done?r(e.value):new o(function(t){t(e.value)}).then(a,c)}i((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const r=o(19),s=o(0),a=o(3),c=o(20);t.Cytoscape_manager=class extends s.Component{constructor(e){super(e),this.BASE_URL="https://pancaldi.bsc.es/garden-net/data/",this.cache=new Map,this.URL={chromosome:this.BASE_URL+"chromosomes/chr",search:"https://pancaldi.bsc.es/garden-net_rest?features=true&search="},this.left_container_id="left_container_id",this.right_container_id="right_container_id",this.clean_right_view=!0,this.onDownloadChange=(e=>{this.props.onDownloadChange(e)}),this.reuse_message=!1,this.state={cytoscape_loading:!0,loading_message:"",left_network:void 0,right_network:void 0,left_title:"",right_title:"",show_tooltip:!1,tooltip_text:"",tooltip_x:0,tooltip_y:0}}chromosomePath(e){return this.URL.chromosome+e+".json"}searchPath(e){return this.URL.search+e}fetchAsyncJson(e){return n(this,void 0,void 0,function*(){return fetch(e).then(e=>e.json()).catch(e=>{this.setState({cytoscape_loading:!1,right_title:""}),""!==this.props.search&&this.cache.delete(this.props.search),setTimeout(()=>{alert('There are not any node which matches with the search petition: "'+this.props.search+'"')},0)})})}buildNetwork(e,t){const o=r({container:document.getElementById(t),elements:e,style:[{selector:"node",style:{"background-color":"mapData("+this.props.feature+", 0, 1, #ccc, pink)",label:"data(curated_gene_name)",color:"black","font-size":9.5,"text-valign":"center","text-halign":"center",width:35,height:35,"border-color":"mapData(chr, 1, 21, blue, darkorange)","border-width":3}},{selector:'node[type = "bait"]',style:{shape:"ellipse"}},{selector:'node[type = "oe"]',style:{shape:"rectangle"}},{selector:"edge",style:{width:3,"line-color":"#ccc","target-arrow-color":"#ccc","target-arrow-shape":"triangle"}}],layout:{name:"preset",animate:!1,stop:()=>{void 0!==e&&this.setState({cytoscape_loading:!1})}}});return o.on("tap","node",e=>{const t=e.target,o=t.data("chr")+"_"+t.data("start"),n=o+"-"+t.data("end");let r="Search ";const s=t.data("curated_gene_name");if(""!=s)r+=s,this.setState({right_title:s});else{const e=n.replace("_",":");this.setState({right_title:e}),r+="by id "+e}this.reuse_message=!0,this.setState({loading_message:r}),this.props.onSearchChange(o)}),o.on("mouseover","node",e=>{const t=e.target,o=t.data("chr")+":"+t.data("start")+"-"+t.data("end"),n=e.originalEvent.clientX,r=e.originalEvent.clientY;this.setState({show_tooltip:!0,tooltip_text:o,tooltip_x:n+15,tooltip_y:r-10})}),o.on("mouseout","node",()=>{this.setState({show_tooltip:!1})}),o}componentDidMount(){setTimeout(()=>{const e="Chromosome "+this.props.chromosome;this.setState({loading_message:e,left_title:e});const t=this.chromosomePath(this.props.chromosome);this.onDownloadChange(t),this.clean_right_view=!0;const o=this.fetchAsyncJson(t);this.left_cy_network=this.buildNetwork(o,this.left_container_id),this.left_cy_network.on("layoutstop",e=>{e.cy.style().selector("node").style({width:e=>20+1.5*e.data("total_degree"),height:e=>20+1.5*e.data("total_degree")}).update()}),this.cache.set(this.props.chromosome,this.left_cy_network),this.right_cy_network=this.buildNetwork(void 0,this.right_container_id)},500)}componentDidUpdate(e){if(this.props.chromosome!==e.chromosome){this.setState({cytoscape_loading:!0,show_tooltip:!1});const e=this.chromosomePath(this.props.chromosome);this.onDownloadChange(e);const t="Chromosome "+this.props.chromosome;this.setState({loading_message:t,left_title:t}),setTimeout(()=>{if(this.cache.has(this.props.chromosome)){const e=this.cache.get(this.props.chromosome);this.left_cy_network=this.buildNetwork(e.elements().jsons(),this.left_container_id)}else{const t=this.fetchAsyncJson(e);this.left_cy_network=this.buildNetwork(t,this.left_container_id),this.cache.set(this.props.chromosome,this.left_cy_network)}this.left_cy_network.on("layoutstop",e=>{e.cy.style().selector("node").style({width:e=>20+1.5*e.data("total_degree"),height:e=>20+1.5*e.data("total_degree")}).update()}),this.clean_right_view?(this.right_cy_network.elements().remove(),this.setState({right_title:"Search view"})):this.clean_right_view=!0},500)}else if(this.props.search!==e.search&&""!==this.props.search){this.setState({cytoscape_loading:!0,show_tooltip:!1}),this.clean_right_view=!1;const e=this.props.search.toString().toLowerCase(),t=this.searchPath(e);if(this.reuse_message)this.reuse_message=!1;else{const e="Search "+this.props.search;this.setState({loading_message:e,right_title:this.props.search})}setTimeout(()=>{if(this.cache.has(e)){const t=this.cache.get(e);this.right_cy_network=this.buildNetwork(t.elements().jsons(),this.right_container_id);let o=Math.max(this.right_cy_network.nodes().data("total_degree")),n=o;this.right_cy_network.nodes().forEach(e=>{const t=e.data("total_degree");o<t&&(o=t),n>t&&(n=t)}),this.right_cy_network.style().selector("node").style({width:e=>20+1.5*e.data("degree"),height:e=>20+1.5*e.data("degree"),"border-color":"mapData(chr, 1, 21, blue, darkorange)","border-opacity":e=>{const t=(e.data("total_degree")-n)/(o-n);return t<=.3?.3:t},"background-opacity":e=>{const t=(e.data("total_degree")-n)/(o-n);return t<=.3?.3:t}}).update(),this.right_cy_network.nodes().forEach(t=>{const o=t.data("chr")+"_"+t.data("start"),n=e.split("-")[0].replace(":","_");if(t.data("curated_gene_name")!==e&&o!==n);else{const e=t.data("chr");this.props.onChromosomeChange(e)}})}else{const o=this.fetchAsyncJson(t);this.right_cy_network=this.buildNetwork(o,this.right_container_id),this.cache.set(e,this.right_cy_network),this.right_cy_network.one("layoutstop",t=>{let o=Math.max(t.cy.nodes().data("total_degree")),n=o;t.cy.nodes().forEach(e=>{const t=e.data("total_degree");o<t&&(o=t),n>t&&(n=t)}),t.cy.style().selector("node").style({width:e=>20+1.5*e.data("degree"),height:e=>20+1.5*e.data("degree"),"border-color":"mapData(chr, 1, 21, blue, darkorange)","border-opacity":e=>{const t=(e.data("total_degree")-n)/(o-n);return t<=.3?.3:t},"background-opacity":e=>{const t=(e.data("total_degree")-n)/(o-n);return t<=.3?.3:t}}).update(),this.right_cy_network.nodes().forEach(t=>{const o=t.data("chr")+"_"+t.data("start"),n=e.split("-")[0].replace(":","_");if(t.data("curated_gene_name")!==e&&o!==n);else{const e=t.data("chr");this.props.onChromosomeChange(e)}})})}},500)}else this.props.feature!==e.feature&&""!==this.props.feature&&(this.setState({cytoscape_loading:!1}),this.left_cy_network.style().selector("node").style({"background-color":"mapData("+this.props.feature+", 0, 1, #ccc, pink)"}).update(),void 0!==this.right_cy_network&&this.right_cy_network.style().selector("node").style({"background-color":"mapData("+this.props.feature+", 0, 1, #ccc, pink)"}).update())}render(){return s.createElement("div",{className:"row"},s.createElement(a.Modal,{isOpen:this.state.cytoscape_loading,centered:!0,className:"text-center"},s.createElement(a.ModalBody,null,"Be patient please",s.createElement("br",null),"Rendering ",this.state.loading_message,s.createElement("div",{className:"spinner"}))),s.createElement("div",{className:"col-sm-6",style:{padding:"0px",paddingLeft:"10px"}},s.createElement("h3",{className:"text-center"},this.state.left_title?this.state.left_title:"Chromosome "+this.props.chromosome),s.createElement(c.Cytoscape_container,{cytoscape_container_id:this.left_container_id})),s.createElement("div",{className:"col-sm-6",style:{padding:"0px"}},s.createElement("h3",{className:"text-center"},this.state.right_title?this.state.right_title:"Search view"),s.createElement(c.Cytoscape_container,{cytoscape_container_id:this.right_container_id})),s.createElement("div",{style:{display:this.state.show_tooltip?"block":"none",left:this.state.tooltip_x,top:this.state.tooltip_y,position:"fixed",border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px",backgroundColor:"white"}},this.state.tooltip_text))}}},function(e,t){e.exports=cytoscape},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(2),r=o(1),s=o(21);t.mapStateToProps=(e=>({chromosome:e.chromosome,feature:e.feature,download:e.download,search:e.search})),t.mapDispatchToProps={onDownloadChange:r.change_download},t.Cytoscape_container=n.connect(t.mapStateToProps,t.mapDispatchToProps)(s.Cytoscape)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0);o(22);t.Cytoscape=class extends n.Component{render(){return n.createElement("div",{className:"container-fluid"},n.createElement("div",{className:"cytoscape_container",id:this.props.cytoscape_container_id,style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px"}}))}}},function(e,t,o){var n=o(23);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(25)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(24)(!1)).push([e.i,".cytoscape_container {\n  min-height: calc(86vh - 170px);\n  width: 100%;\n}\n\n.spinner {\n  border: 16px solid #AAAAAA;\n  border-top: 16px solid #5C5C5C;\n  border-radius: 50%;\n  position: relative;\n  left: 40%;\n  width: 100px;\n  height: 100px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n",""])},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),s=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[o].concat(s).concat([r]).join("\n")}var a;return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];null!=s&&(n[s]=!0)}for(r=0;r<e.length;r++){var a=e[r];null!=a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),t.push(a))}},t}},function(e,t,o){var n,r,s={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),c=function(e){var t={};return function(e,o){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),i=null,l=0,d=[],h=o(26);function u(e,t){for(var o=0;o<e.length;o++){var n=e[o],r=s[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(y(n.parts[a],t))}else{var c=[];for(a=0;a<n.parts.length;a++)c.push(y(n.parts[a],t));s[n.id]={id:n.id,refs:1,parts:c}}}}function p(e,t){for(var o=[],n={},r=0;r<e.length;r++){var s=e[r],a=t.base?s[0]+t.base:s[0],c={css:s[1],media:s[2],sourceMap:s[3]};n[a]?n[a].parts.push(c):o.push(n[a]={id:a,parts:[c]})}return o}function m(e,t){var o=c(e.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=d[d.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),d.push(t);else if("bottom"===e.insertAt)o.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(e.insertAt.before,o);o.insertBefore(t,r)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function _(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return o.nc}();n&&(e.attrs.nonce=n)}return g(t,e.attrs),m(e,t),t}function g(e,t){Object.keys(t).forEach(function(o){e.setAttribute(o,t[o])})}function y(e,t){var o,n,r,s;if(t.transform&&e.css){if(!(s="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=s}if(t.singleton){var a=l++;o=i||(i=_(t)),n=v.bind(null,o,a,!1),r=v.bind(null,o,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),m(e,t),t}(t),n=function(e,t,o){var n=o.css,r=o.sourceMap,s=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||s)&&(n=h(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([n],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,o,t),r=function(){f(o),o.href&&URL.revokeObjectURL(o.href)}):(o=_(t),n=function(e,t){var o=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,o),r=function(){f(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var o=p(e,t);return u(o,t),function(e){for(var n=[],r=0;r<o.length;r++){var a=o[r];(c=s[a.id]).refs--,n.push(c)}e&&u(p(e,t),t);for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var i=0;i<c.parts.length;i++)c.parts[i]();delete s[c.id]}}}};var E,C=(E=[],function(e,t){return E[e]=t,E.filter(Boolean).join("\n")});function v(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=C(t,r);else{var s=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,n=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,s=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(r=0===s.indexOf("//")?s:0===s.indexOf("/")?o+s:n+s.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(28),s=o(30),a=o(32);t.ControlPanel=class extends n.Component{render(){return n.createElement("div",{className:"container-fluid"},n.createElement("h3",{className:"text-center",style:{visibility:"hidden"}},"Panel"),n.createElement("div",{className:"col"},n.createElement(r.ChromosomesPanelContainer,null),n.createElement(a.FeaturesPanelContainer,null),n.createElement(s.DownloadButtonContainer,null)))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(2),r=o(1),s=o(29);t.mapStateToProps=(e=>({chromosome:e.chromosome})),t.mapDispatchToProps={onChromosomeChange:r.change_chromosome,onTextChange:r.change_text},t.ChromosomesPanelContainer=n.connect(t.mapStateToProps,t.mapDispatchToProps)(s.ChromosomesPanel)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(3);t.ChromosomesPanel=class extends n.Component{constructor(e){super(e),this.onChromosomeChange=(e=>{const t=e.target;this.props.onChromosomeChange(t.value),this.props.onTextChange("")}),this.toggle=(()=>{this.setState({dropdownOpen:!this.state.dropdownOpen})}),this.state={dropdownOpen:!1}}render(){const e=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","X","Y"];return n.createElement(r.Form,{style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px",paddingLeft:"5px",paddingRight:"5px",marginBottom:"15px"}},n.createElement(r.FormGroup,{className:"text-center"},n.createElement(r.Label,{for:"Select"},"Chromosomes"),n.createElement("br",null),n.createElement(r.ButtonDropdown,{style:{display:"grid"},isOpen:this.state.dropdownOpen,toggle:this.toggle},n.createElement(r.DropdownToggle,{caret:!0},this.props.chromosome),n.createElement(r.DropdownMenu,{className:"text-center container-fluid",style:{height:"auto",maxHeight:"200px",overflowX:"hidden"}},e.slice(0,-1).map(e=>n.createElement("div",{key:e},n.createElement(r.DropdownItem,{value:e,onClick:this.onChromosomeChange},e),n.createElement(r.DropdownItem,{style:{margin:0},divider:!0}))),e.slice(-1).map(e=>n.createElement(r.DropdownItem,{key:e,value:e,onClick:this.onChromosomeChange},e))))))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(2),r=o(31);t.mapStateToProps=(e=>({download:e.download})),t.DownloadButtonContainer=n.connect(t.mapStateToProps,null)(r.DownloadButton)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(3);t.DownloadButton=class extends n.Component{constructor(){super(...arguments),this.onDownload=(()=>{fetch(this.props.download).then(e=>e.json()).then(e=>{const t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),o=document.createElement("a");document.body.appendChild(o),o.href=window.URL.createObjectURL(t),o.setAttribute("download",this.props.download.split("/").pop()),o.style.display="none",o.click(),document.body.removeChild(o)})})}render(){return n.createElement("div",{className:"text-center"},n.createElement(r.Button,{outline:!0,color:"secondary",onClick:this.onDownload,style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px",marginTop:"15px"}},"Download"))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(2),r=o(1),s=o(33);t.mapStateToProps=(e=>({feature:e.feature})),t.mapDispatchToProps={onFeatureChange:r.change_feature},t.FeaturesPanelContainer=n.connect(t.mapStateToProps,t.mapDispatchToProps)(s.FeaturesPanel)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0),r=o(3);t.FeaturesPanel=class extends n.Component{constructor(e){super(e),this.onFeatureChange=(e=>{this.props.onFeatureChange(e.target.value)}),this.toggle=(()=>{this.setState({dropdownOpen:!this.state.dropdownOpen})}),this.state={dropdownOpen:!1}}render(){const e=["BRG1","CBX3","CBX7","C_MYC","CoREST","E2F1","ESRRB","HCFC1","HDAC1","HDAC2","KAP1","KDM2A","KDM2B","KLF4","LAMINB","LSD1","MAFK","MAX","MBD1A","MBD1B","MBD2A","MBD2T","MBD3A","MBD4","MECP2","MED1","MED12","MI2B","MLL2","NANOG","NIPBL","N_MYC","OCT4","OGT","P300","PHF19","POLII","RAD21","REST","RING1B","RNAPII.8WG16","RNAPII.S2P","RNAPII.S5P","RNAPII.S7P","RYBP","SETDB1","SIN3A","SMAD1","SMC1","SMC3","SOX2","STAT3","SUZ12","TAF1","TCF3","TCFCP2I1","TET1","ZC3H11A","ZNF384","X5fC","X5hmC","X5mC","CTCF","H2AZ","H2Aub1","H3K27ac","H3K27me3","H3K36me2","H3K36me3","H3K4me1","H3K4me2","H3K4me3","H3K79me2","H3K9ac","H3K9me3","H4K20me3","EZH2","G9A"].sort();return n.createElement(r.Form,{className:"text-center",style:{border:"#aaa",borderRadius:"5px",borderStyle:"solid",borderWidth:"2px",paddingLeft:"5px",paddingRight:"5px",marginTop:"15px"}},n.createElement(r.FormGroup,{className:"text-center"},n.createElement(r.Label,{for:"Select"},"Features"),n.createElement("br",null),n.createElement(r.ButtonDropdown,{style:{display:"grid"},isOpen:this.state.dropdownOpen,toggle:this.toggle},n.createElement(r.DropdownToggle,{style:{color:"black",backgroundColor:"white"},caret:!0},this.props.feature),n.createElement(r.DropdownMenu,{className:"text-center container-fluid",style:{height:"auto",maxHeight:"200px",overflowX:"hidden"}},e.slice(0,-1).map(e=>n.createElement("div",{key:e},n.createElement(r.DropdownItem,{value:e,onClick:this.onFeatureChange},e),n.createElement(r.DropdownItem,{style:{margin:0},divider:!0}))),e.slice(-1).map(e=>n.createElement("div",{key:e},n.createElement(r.DropdownItem,{value:e,onClick:this.onFeatureChange},e)))))))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(4),r=o(35);t.chromosomes_reducer=r.chromosomes_reducer,t.DEFAULT_CHROMOSOME=r.DEFAULT_CHROMOSOME;const s=o(36);t.DEFAULT_DOWNLOAD=s.DEFAULT_DOWNLOAD,t.download_reducer=s.download_reducer;const a=o(37);t.DEFAULT_FEATURE=a.DEFAULT_FEATURE,t.features_reducer=a.features_reducer;const c=o(38);t.DEFAULT_SEARCH=c.DEFAULT_SEARCH,t.search_reducer=c.search_reducer;const i=o(39);t.DEFAULT_TEXT=i.DEFAULT_TEXT,t.text_reducer=i.text_reducer;const l=n.combineReducers({chromosome:r.chromosomes_reducer,feature:a.features_reducer,download:s.download_reducer,search:c.search_reducer,text:i.text_reducer});t.root_reducers=l},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(1);t.DEFAULT_CHROMOSOME="1",t.chromosomes_reducer=((e=t.DEFAULT_CHROMOSOME,o)=>{switch(o.type){case n.CHANGED_CHROMOSOME:return o.chromosome;default:return e}})},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(1);t.DEFAULT_DOWNLOAD="",t.download_reducer=((e=t.DEFAULT_DOWNLOAD,o)=>{switch(o.type){case n.CHANGED_DOWNLOAD:return o.download;default:return e}})},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(1);t.DEFAULT_FEATURE="EZH2",t.features_reducer=((e=t.DEFAULT_FEATURE,o)=>{switch(o.type){case n.CHANGED_FEATURE:return o.feature;default:return e}})},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(1);t.DEFAULT_SEARCH="",t.search_reducer=((e=t.DEFAULT_SEARCH,o)=>{switch(o.type){case n.CHANGED_SEARCH:return o.search;default:return e}})},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(1);t.DEFAULT_TEXT="",t.text_reducer=((e=t.DEFAULT_TEXT,o)=>{switch(o.type){case n.CHANGED_TEXT:return o.text;default:return e}})}]);