/// <reference path="../../typings/tsd.d.ts" />
var TestModel = sails.models.test;
var TestController = (function () {
    function TestController() {
    }
    TestController.prototype.test = function (req, res) {
        var hoge = TestModel.create({ name: "alex", age: 22 });
        res.view("hogehoge");
        /*
                TestModel
                    .create({name: "alex", age: 22})
                    .then((created:Test.ModelResult)=> {
                        res.view(created.toString());
                    })
                ;
        */
    };
    return TestController;
})();
var controller = new TestController();
module.exports = controller;
//# sourceMappingURL=TestController.js.map