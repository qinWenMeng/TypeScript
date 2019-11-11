var Common;
(function (Common) {
    function all() {
        console.log("Common:all");
    }
    Common.all = all;
})(Common || (Common = {}));
/// <reference path="common.ts" />
var Common;
(function (Common) {
    function one() {
        console.log('Common:one');
    }
    Common.one = one;
})(Common || (Common = {}));
/// <reference path="common.ts" />
var Common;
(function (Common) {
    function two() {
        console.log('Common:two');
    }
    Common.two = two;
})(Common || (Common = {}));
/// <reference path="./ts/common.ts" />
/// <reference path="./ts/one.ts" />
/// <reference path="./ts/two.ts" />
Common.all();
Common.one();
Common.two();
