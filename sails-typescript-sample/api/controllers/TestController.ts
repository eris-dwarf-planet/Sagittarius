/// <reference path="../../typings/tsd.d.ts" />

declare
var sails:any;
var TestModel:Sails.Model = sails.models.test;

class TestController {
    test(req:Express.Request, res:Express.Response) {

        var hoge = TestModel.create({name: "alex", age: 22});

        res.view("hogehoge");
/*
        TestModel
            .create({name: "alex", age: 22})
            .then((created:Test.ModelResult)=> {
                res.view(created.toString());
            })
        ;
*/
    }
}

var controller = new TestController();
export = controller;

