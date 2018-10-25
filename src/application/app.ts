import * as express from 'express';
import * as bodyParser from "body-parser";
import "reflect-metadata";
import { createConnection } from "typeorm";
import * as appConfig from "./app-config";

/**
 * Controllers (route handlers).
 */
import { TodoController } from "./controllers/todo.controller";
import {TodoService} from "./services/todo.service";

/**
 * Create Express server.
 */
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});

/**
 * Primary app routes.
 */
const todoService = new TodoService();
const todoController = new TodoController(todoService);

app.post("/todos", todoController.saveTodo);
app.get("/todos", todoController.getAllTodos);
app.get("/todos/:id", todoController.getTodo);
app.put("/todos/:id", todoController.updateTodo);
app.delete("/todos/:id", todoController.deleteTodo);

/**
 * Create connection to DB using configuration provided in 
 * appconfig file.
 */
createConnection(appConfig.dbOptions).then(async connection => {
    console.log("Connected to DB");

}).catch(error => console.log("TypeORM connection error: ", error));

module.exports = app;