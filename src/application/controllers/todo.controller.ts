import { Request, Response} from "express";
import { TodoModel } from "../models/todo.model";
import { TodoService } from "../services/todo.service";
import {DeleteResult} from "typeorm";

export class TodoController {

    constructor(private todoService: TodoService) {
    }

    public saveTodo = async (req: Request, res: Response) => {
        console.log("Received Todo ==> POST");
        console.log(req.body);

        let todo : TodoModel = new TodoModel();
        todo.name = req.body.name;
        todo.completed = req.body.completed;

        this.todoService.saveTodo(todo).then((result: TodoModel) => {
            console.log("Result : " + result);
            res.send(result);
        });
    }

    public getAllTodos = async (req: Request, res: Response) => {
        this.todoService.getAllTodos().then((result: Array<TodoModel>)=>{
            console.log("Result : " + result);
            res.send(result);
        });
    }

    public getTodo = async (req: Request, res: Response) => {
        this.todoService.getTodo(req.params.id).then((result: TodoModel) => {
            console.log("Result : " + result);
            res.send(result);
        });
    }

    public updateTodo = async (req: Request, res: Response) => {
        console.log("Received Todo ==> POST");
        console.log(req.body);

        let todo : TodoModel = new TodoModel();
        todo.name = req.body.name;
        todo.completed = req.body.completed;

        this.todoService.updateTodo(req.params.id, todo).then((result: TodoModel) => {
            console.log("Result : " + result);
            res.send(result);
        });
    }

    public deleteTodo = async (req: Request, res: Response) => {
        this.todoService.deleteTodo(req.params.id).then((result: DeleteResult)=> {
            console.log("Result : " + result);
            res.send(result);
        });
    }
}