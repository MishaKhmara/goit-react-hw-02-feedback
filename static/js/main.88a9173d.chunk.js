(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),o=n.n(r),s=(n(13),n(4)),i=n(5),d=n(6),b=n(8),j=n(7),l=n(0),u=function(e){var t=e.handleIncrement;return Object(l.jsxs)("section",{children:[Object(l.jsx)("button",{name:"good",type:"button",onClick:t,children:"Good"}),Object(l.jsx)("button",{name:"neutral",type:"button",onClick:t,children:"Neutral"}),Object(l.jsx)("button",{name:"bad",type:"button",onClick:t,children:"Bad"})]})},h=function(e){var t=e.title,n=e.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:t}),n]})},O=function(e){var t=e.message;return Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:t})})},x=function(e){var t=e.Good,n=e.Neutral,c=e.Bad,a=e.Total,r=e.feedback;return a?Object(l.jsxs)("section",{children:[Object(l.jsxs)("p",{children:["Good:",t]}),Object(l.jsxs)("p",{children:["Neutral:",n]}),Object(l.jsxs)("p",{children:["Bad:",c]}),Object(l.jsxs)("p",{children:["Total:",a]}),Object(l.jsxs)("p",{children:["Positive feedback:",r,"%"]})]}):Object(l.jsx)(O,{message:"No feedback given"})},f=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleIncrement=function(t){var n=t.target.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return e.countTotalFeedback()?(e.state.good/e.countTotalFeedback()*100).toFixed():0},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(h,{title:"Please leave feedback",children:Object(l.jsx)(u,{handleIncrement:this.handleIncrement})}),Object(l.jsx)(h,{title:"Statistics"}),Object(l.jsx)(x,{Good:this.state.good,Neutral:this.state.neutral,Bad:this.state.bad,Total:this.countTotalFeedback(),feedback:this.countPositiveFeedbackPercentage()})]})}}]),n}(c.Component),k=function(){return Object(l.jsx)(f,{})};n(15);o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.88a9173d.chunk.js.map