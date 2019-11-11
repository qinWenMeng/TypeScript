var Common;
(function (Common) {
    Common.PI = 3.14;
    function all() {
        console.log("Common:all", Common.PI);
    }
    Common.all = all;
})(Common || (Common = {}));
/// <reference path="common.ts" />
var Common;
(function (Common) {
    function one() {
        console.log('Common:one', Common.PI); // common.ts里的PI
    }
    Common.one = one;
})(Common || (Common = {}));
/// <reference path="common.ts" />
var Common;
(function (Common) {
    function two() {
        console.log('Common:two', Common.PI); // common.ts里的PI
    }
    Common.two = two;
})(Common || (Common = {}));
/// <reference path="./ts/common.ts" />
/// <reference path="./ts/one.ts" />
/// <reference path="./ts/two.ts" />
Common.all();
Common.one();
Common.two();
var MultiNamespace;
(function (MultiNamespace) {
    var Hello;
    (function (Hello) {
        function hi(message) {
            console.log(message);
        }
        Hello.hi = hi;
    })(Hello = MultiNamespace.Hello || (MultiNamespace.Hello = {}));
    function hey(msg) {
        console.log(msg);
    }
    MultiNamespace.hey = hey;
})(MultiNamespace || (MultiNamespace = {}));
MultiNamespace.Hello.hi("Hello, namespace!");
MultiNamespace.hey("Hello, world!");
