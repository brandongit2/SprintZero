(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{63781:function(e,i,t){"use strict";t(67294);var s=t(94184),o=t.n(s),a=t(85893);i.Z=function(e){var i=e.children,t=e.className;return(0,a.jsx)("p",{className:o()("text-[#595959] pb-[16px] pr-[62px]",t),children:i})}},31147:function(e,i,t){"use strict";t.d(i,{Z:function(){return q}});var s=t(67294),o=t(87379);function a(e,i){if(null==e)return{};var t,s,o=function(e,i){if(null==e)return{};var t,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],i.indexOf(t)>=0||(o[t]=e[t]);return o}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function r(){return r=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},r.apply(this,arguments)}function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,s)}return t}function m(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){u(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function u(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}const d={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0};class c extends s.Component{constructor(e){let i;super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),i=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount:i}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((()=>{this.reCalculateColumnCount()}))):this.reCalculateColumnCount()}reCalculateColumnCount(){const e=window&&window.innerWidth||1/0;let i=this.props.breakpointCols;"object"!==typeof i&&(i={default:parseInt(i)||2});let t=1/0,s=i.default||2;for(let o in i){const a=parseInt(o);a>0&&e<=a&&a<t&&(t=a,s=i[o])}s=Math.max(1,parseInt(s)||1),this.state.columnCount!==s&&this.setState({columnCount:s})}itemsInColumns(){const e=this.state.columnCount,i=new Array(e),t=s.Children.toArray(this.props.children);for(let s=0;s<t.length;s++){const o=s%e;i[o]||(i[o]=[]),i[o].push(t[s])}return i}renderColumns(){const{column:e,columnAttrs:i={},columnClassName:t}=this.props,o=this.itemsInColumns(),a=100/o.length+"%";let n=t;n&&"string"!==typeof n&&(this.logDeprecated('The property "columnClassName" requires a string'),"undefined"===typeof n&&(n="my-masonry-grid_column"));const u=m(m(m({},e),i),{},{style:m(m({},i.style),{},{width:a}),className:n});return o.map(((e,i)=>s.createElement("div",r({},u,{key:i}),e)))}logDeprecated(e){console.error("[Masonry]",e)}render(){const e=this.props,{children:i,breakpointCols:t,columnClassName:o,columnAttrs:n,column:m,className:u}=e,d=a(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]);let c=u;return"string"!==typeof u&&(this.logDeprecated('The property "className" requires a string'),"undefined"===typeof u&&(c="my-masonry-grid")),s.createElement("div",r({},d,{className:c}),this.renderColumns())}}c.defaultProps=d;var p=c,l=t(85893),b=(0,o.ZP)(p).withConfig({displayName:"MasonryGrid__Grid",componentId:"sc-1q7lwtw-0"})(["display:flex;width:auto;gap:16px;"]),f={0:1,500:2},q=function(e){var i=e.columnClassName,t=e.className,s=e.breakpointCols,o=void 0===s?f:s,a=e.children;return(0,l.jsx)(b,{breakpointCols:o,className:t,columnClassName:i,children:a})}},9808:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return h}});var s=t(59499),o=t(67294),a=t(9008),r=t(11163),n=t(54359),m=t(46162),u=t(98818),d=t(63781),c=t(49978),p=t(31147),l=JSON.parse('{"Insight Meeting":[{"name":"Perceivable","title":"Users can identify content and interface elements by means of the senses. For many users, this means perceiving a system primarily visually, while for others, perceivability may be a matter of sound or touch.","challenges":[{"id":1,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi.Quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":2,"name":"Inner Card Title","description":"possimus sint quibusdam debitis. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi"},{"id":3,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":4,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi.Quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":5,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi"},{"id":6,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"}]},{"name":"Operable","title":"Users can successfully use controls, buttons, navigation, and other interactive elements. For many users this means using assistive technology like voice recognition, keyboards, screen readers etc.","challenges":[{"id":1,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi.Quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":2,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi"},{"id":3,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":4,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi.Quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":5,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi"},{"id":6,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"}]},{"name":"Understandable","title":"Users should be able to comprehend the content, and learn and remember how to use your OER site. Your OER should be consistent in its presentation and format, predictable in its design and usage patterns, and appropriate to the audience in its voice and tone.","challenges":[{"id":1,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi.Quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":2,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commode placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi"},{"id":3,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":4,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicinstias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":5,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi"},{"id":6,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"}]},{"name":"Robust","title":"Content must be robust enough that it can be interpreted reliably by a wide variety of users, allowing them to choose the technology they use to interact with websites, online documents, multimedia, and other information formats. Users should be allowed to choose their own technologies to access OER content.","challenges":[{"id":1,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi.Quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":2,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commode placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi"},{"id":3,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":4,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicinstias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":5,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi"},{"id":6,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"}]}],"Alpha Sheet":[{"name":"Perceivable","title":"Users can identify content and interface elements by means of the senses. For many users, this means perceiving a system primarily visually, while for others, perceivability may be a matter of sound or touch.","challenges":[{"id":1,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi.Quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":2,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi"},{"id":3,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":4,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi.Quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":5,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi"},{"id":6,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"}]},{"name":"Operable","title":"Users can successfully use controls, buttons, navigation, and other interactive elements. For many users this means using assistive technology like voice recognition, keyboards, screen readers etc.","challenges":[{"id":1,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi.Quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":2,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi"},{"id":3,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":4,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi.Quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":5,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi"},{"id":6,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"}]},{"name":"Understandable","title":"Users should be able to comprehend the content, and learn and remember how to use your OER site. Your OER should be consistent in its presentation and format, predictable in its design and usage patterns, and appropriate to the audience in its voice and tone.","challenges":[{"id":1,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi.Quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":2,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi"},{"id":3,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":4,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi.Quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":5,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi"},{"id":6,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"}]},{"name":"Robust","title":"Content must be robust enough that it can be interpreted reliably by a wide variety of users, allowing them to choose the technology they use to interact with websites, online documents, multimedia, and other information formats. Users should be allowed to choose their own technologies to access OER content.","challenges":[{"id":1,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi.Quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":2,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi"},{"id":3,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":4,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi.Quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"},{"id":5,"name":"Inner Card Title","description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis. Cumque cum quia quos perspiciatis dolore ratione labore placeat impedit, ipsam commodi. Molestias exercitationem fugiat commodi"},{"id":6,"name":"Inner Card Title","description":"Molestias exercitationem fugiat commodi sunt assumenda quis unde eius tempore vero magni? Iusto, sit? Sunt facere laboriosam adipisci praesentium reprehenderit dolorum possimus sint quibusdam debitis"}]}]}'),b=t(80116),f=t(85893);function q(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,s)}return t}function g(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?q(Object(t),!0).forEach((function(i){(0,s.Z)(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function h(){var e,i=(0,r.useRouter)().pathname,t=(0,o.useState)(l),s=t[0],q=t[1],h=(0,o.useState)(!1),C=h[0],v=h[1],I=(0,o.useState)(b[0]),x=I[0],y=I[1],M=(0,o.useState)(s[x][0]),w=M[0],S=M[1],O=function(e,i){var t=s[i||x].find((function(i){return i.name===e}));S(t)};return(0,f.jsxs)("div",{className:"mb-8",children:[(0,f.jsxs)(a.default,{children:[(0,f.jsx)("title",{children:"Dashboard | Sprint Zero"}),(0,f.jsx)("meta",{name:"description",content:"Sprint Zero strategy accessiblity"}),(0,f.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,f.jsxs)(n.Z,{onChangeProduct:function(e){y(e);var i=s[e][0].name;O(i,e),v(!1)},rightNavItems:(e=s[x],e.map((function(e){return e.name}))),activeRightItem:null===w||void 0===w?void 0:w.name,setActiveRightNav:O,hasMainAdd:!0,onMainAdd:function(){var e,i,t;v(!0),null===(e=window)||void 0===e||e.scrollTo({top:2*(null===(i=document)||void 0===i||null===(t=i.body)||void 0===t?void 0:t.scrollHeight),behavior:"smooth"})},hasSideAdd:!1,breadCrumbItems:(0,c.N)(i),children:[(0,f.jsx)(d.Z,{children:null===w||void 0===w?void 0:w.title}),(0,f.jsxs)(p.Z,{children:[null===w||void 0===w?void 0:w.challenges.map((function(e,i){return(0,f.jsx)(u.Z,{onEdit:function(e){return function(e,i){var t=g({},s);t[x].find((function(e){return e.name===w.name})).challenges[e]=i,q(t)}(i,e)},item:e},1)})),C?(0,f.jsx)(m.Z,{onSubmit:function(e){var i=g({},s),t=i[x].find((function(e){return e.name===w.name}));null===t||void 0===t||t.challenges.push(e),q(i),v(!1)}}):null]})]})]})}},27276:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/strategy/accessibility",function(){return t(9808)}])}},function(e){e.O(0,[569,116,137,310,756,450,774,888,179],(function(){return i=27276,e(e.s=i);var i}));var i=e.O();_N_E=i}]);