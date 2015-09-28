/// <reference path="../../app.ts" />

class HomeController extends TF.Controller {

    index() {
        // this.view('index', { layout: 'layout' });
        Todo.all().done((err, todos: Todo[]) => {
          this.view('index', { layout: 'layout', todos: JSON.stringify(todos) });
        });
    }

}