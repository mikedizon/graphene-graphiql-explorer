(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{132:function(e,t,n){e.exports=n(207)},137:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(59),i=n.n(o),s=(n(137),n(123)),l=n(37),u=n(38),c=n(112),d=n(109),h=n(111),f=n(58),p=n(50),E=n(74),m=n.n(E),g=n(27),T=n(63),y=n(108),v=n(0);function x(e){for(var t=e;Object(v.U)(t);)t=t.ofType;return t}function S(e,t){var n=x(e.type);return!(!n.name.startsWith("GitHub")||!n.name.endsWith("Connection")||"first"!==t.name&&"orderBy"!==t.name)}function _(e,t,n){var a=x(e.type);switch(a.name){case"GitHubRepository":if("name"===t.name)return{kind:"StringValue",value:"graphql-js"};if("owner"===t.name)return{kind:"StringValue",value:"graphql"};break;case"NpmPackage":if("name"===t.name)return{kind:"StringValue",value:"graphql"};break;default:if(Object(v.E)(n)&&a.name.startsWith("GitHub")&&a.name.endsWith("Connection")){if("direction"===t.name&&n.getValues().map(function(e){return e.name}).includes("DESC"))return{kind:"EnumValue",value:"DESC"};if("field"===t.name&&n.getValues().map(function(e){return e.name}).includes("CREATED_AT"))return{kind:"EnumValue",value:"CREATED_AT"}}return m.a.defaultValue(n)}return m.a.defaultValue(n)}n(205),n(206);function b(e,t){"undefined"===typeof t&&(t={});var n=t.headers||{};n.Accept=n.Accept||"application/json",n["Content-Type"]=n["Content-Type"]||"application/json";var a="//".concat(window.location.host).concat(window.location.pathname);return fetch(a,{method:"POST",headers:n,body:JSON.stringify(e)}).then(function(e){return e.text()}).then(function(e){try{return JSON.parse(e)}catch(t){return e}})}var k={SAVE_HEADERS_TEXT:"saveHeadersText",HEADERS_TEXT:"headersText"},H=function(e){try{return JSON.parse(e),!0}catch(t){return!1}},O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r))))._storage=new p.a,n.state={schema:null,query:"",explorerIsOpen:!0,showHeaderEditor:!1,saveHeadersText:"true"===n._storage.get(k.SAVE_HEADERS_TEXT),headersText:n._storage.get(k.HEADERS_TEXT)||"",headersTextValid:!0},n._handleInspectOperation=function(e,t){var a=Object(g.a)(n.state.query||"");if(!a)return console.error("Couldn't parse query document"),null;var r=e.getTokenAt(t),o={line:t.line,ch:r.start},i={line:t.line,ch:r.end},s={start:e.indexFromPos(o),end:e.indexFromPos(i)},l=a.definitions.find(function(e){if(!e.loc)return console.log("Missing location information for definition"),!1;var t=e.loc,n=t.start,a=t.end;return n<=s.start&&a>=s.end});if(!l)return console.error("Unable to find definition corresponding to mouse position"),null;var u="OperationDefinition"===l.kind?l.operation:"FragmentDefinition"===l.kind?"fragment":"unknown",c="OperationDefinition"===l.kind&&l.name?l.name.value:"FragmentDefinition"===l.kind&&l.name?l.name.value:"unknown",d=".graphiql-explorer-root #".concat(u,"-").concat(c),h=document.querySelector(d);h&&h.scrollIntoView()},n._handleEditQuery=function(e){return n.setState({query:e})},n._handleToggleExplorer=function(){n.setState({explorerIsOpen:!n.state.explorerIsOpen})},n.handleToggleSaveHeaders=function(){n.setState(function(e){return{saveHeadersText:!e.saveHeadersText}},function(){n._storage.set(k.SAVE_HEADERS_TEXT,JSON.stringify(n.state.saveHeadersText)),n._storage.set(k.HEADERS_TEXT,n.state.saveHeadersText?n.state.headersText:"")})},n.handleEditHeaders=function(e){n.setState({headersText:e,headersTextValid:H(e)},function(){n.state.headersTextValid&&n.state.saveHeadersText&&n._storage.set(k.HEADERS_TEXT,n.state.headersText),n.state.headersTextValid&&n.subscriptionsClient&&n.restartSubscriptionsClient()})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b({query:Object(T.a)()}).then(function(t){var n=e._graphiql.getQueryEditor();n.setOption("extraKeys",Object(s.a)({},n.options.extraKeys||{},{"Shift-Alt-LeftClick":e._handleInspectOperation})),e.setState({schema:Object(y.a)(t.data)})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.schema;return r.a.createElement("div",{className:"graphiql-container"},r.a.createElement(m.a,{schema:a,query:n,onEdit:this._handleEditQuery,onRunOperation:function(t){return e._graphiql.handleRunQuery(t)},explorerIsOpen:this.state.explorerIsOpen,onToggleExplorer:this._handleToggleExplorer,getDefaultScalarArgValue:_,makeDefaultArg:S}),r.a.createElement(f.a,{ref:function(t){return e._graphiql=t},fetcher:b,schema:a,query:n,onEditQuery:this._handleEditQuery,headerEditorEnabled:!0,headers:this.state.headersText,onEditHeaders:this.handleEditHeaders},r.a.createElement(f.a.Toolbar,null,r.a.createElement(f.a.Button,{onClick:function(){return e._graphiql.handlePrettifyQuery()},label:"Prettify",title:"Prettify Query (Shift-Ctrl-P)"}),r.a.createElement(f.a.Button,{onClick:function(){return e._graphiql.handleToggleHistory()},label:"History",title:"Show History"}),r.a.createElement(f.a.Button,{onClick:this._handleToggleExplorer,label:"Explorer",title:"Toggle Explorer"}),r.a.createElement(f.a.Button,{label:"Save headers "+(this.state.saveHeadersText?"\u2705":""),title:"Should the headers be saved to localStorage?",onClick:this.handleToggleSaveHeaders}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[132,10,11]]]);
//# sourceMappingURL=main.a3769462.chunk.js.map