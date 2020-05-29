(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{374:function(e,t,a){"use strict";a.r(t);var s=a(18),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"maths"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maths"}},[e._v("#")]),e._v(" Maths")]),e._v(" "),a("p",[e._v("The library supports a multitude of mathematical expressions, with quite a lot of flexibility.")]),e._v(" "),a("h2",{attrs:{id:"operators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operators"}},[e._v("#")]),e._v(" Operators")]),e._v(" "),a("p",[e._v("You can use mathematical operators to carry out equations with roll results")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("d6*5     // roll a 6 sided die and multiple the result by 5\n2d10/d20 // roll a 10 sided die 2 times and add the results together, then roll a 20 sided dice and divide the two totals\n3d20^4   // roll a 20 sided die 3 times and raise the result to the power of 4 (Exponent)\n3d20**4  // Equivalent to above (Exponent)\nd15%2    // roll a 15 sided die and return the remainder after division (Modulus)\n")])])]),a("p",[e._v("You can even use them to determine the number of dice to roll, or how many sides a die should have:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(4-2)d10 // subtract 2 from 4 (`2`) and then roll a 10 sided dice that many times\n3d(2*6)  // multiple 2 by 6 (`12`) and roll a dice with that many sides 3 times\n")])])]),a("DiceRoller",{attrs:{notation:"3d(2*6)"}}),a("h2",{attrs:{id:"parenthesis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parenthesis"}},[e._v("#")]),e._v(" Parenthesis")]),e._v(" "),a("p",[e._v("Parenthesis are recognised anywhere in notations to group sections and define the order of operations, as you would expect:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("1d6+2*3: [4]+2*3 = 10\n(1d6+2)*3: ([4]+2)*3 = 18\n")])])]),a("DiceRoller",{attrs:{notation:"(1d6+2)*3"}}),a("h2",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[e._v("#")]),e._v(" Functions")]),e._v(" "),a("p",[e._v("You can also use an array of mathematical formulas and functions.")]),e._v(" "),a("p",[e._v("It works with the following "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math#Methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("Javascript math functions"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("p",[a("code",[e._v("abs")]),e._v(", "),a("code",[e._v("ceil")]),e._v(", "),a("code",[e._v("cos")]),e._v(", "),a("code",[e._v("exp")]),e._v(", "),a("code",[e._v("floor")]),e._v(", "),a("code",[e._v("log")]),e._v(", "),a("code",[e._v("round")]),e._v(", "),a("code",[e._v("sign")]),e._v(", "),a("code",[e._v("sin")]),e._v(", "),a("code",[e._v("sqrt")]),e._v(", "),a("code",[e._v("tan")]),e._v(", "),a("code",[e._v("pow")]),e._v(", "),a("code",[e._v("max")]),e._v(", "),a("code",[e._v("min")])]),e._v(" "),a("p",[e._v("Some examples:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("round(4d10/3): round([3, 6, 1, 1]/3) = 3.7\nfloor(4d10/3): round([3, 6, 1, 1]/3) = 3.6\nceil(4d10/3): round([3, 6, 1, 1]/3) = 3.7\nabs(4d10-25): abs([3, 6, 1, 1]-25) = 14\nsqrt(4d10/3): sqrt([3, 6, 1, 1]) = 1.91\nmin(4d6, 2d10): min([3, 4, 1, 5], [10, 6]) = 13\n")])])]),a("DiceRoller",{attrs:{notation:"min(4d6, 2d10)"}}),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If we're missing a math function that you want, "),a("a",{attrs:{href:"https://github.com/GreenImp/rpg-dice-roller/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("let us know"),a("OutboundLink")],1),e._v("!")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);