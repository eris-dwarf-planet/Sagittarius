/// <reference path="../../typings/tsd.d.ts" />
var Test = (function () {
    function Test(attr) {
        this.attributes = attr;
    }
    return Test;
})();
var model = new Test({
    name: "string",
    age: "integer"
});
module.exports = model;
//# sourceMappingURL=Test.js.map