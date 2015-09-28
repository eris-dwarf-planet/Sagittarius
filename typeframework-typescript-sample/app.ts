/// <EXTERNAL REFERENCES>
/// <reference path="node_modules/typeframework/build/TypeFramework.d.ts" />

/// <HELPER REFERENCES>
/// <reference path="app/Global.ts" />

/// <MODEL REFERENCES>
/// <reference path="app/models/Todo.ts" />

/// <CONTROLLER REFERENCES>
/// <reference path="app/controllers/HomeController.ts" />
/// <reference path="app/controllers/TodoController.ts" />

app.addModel(Todo);

app.addController(HomeController);
app.addController(TodoController);

app.start();