import { getRepository } from "typeorm";
import { TodoModel } from "../models/todo.model";

export class TodoService {

    public async saveTodo(todoModel: TodoModel) {
        return await getRepository(TodoModel).save(todoModel);
    }
    
    public async getTodo(id: number) {
        return await getRepository(TodoModel).findOne(id);
    }
    
    public getAllTodos = async (): Promise<Array<TodoModel>> =>{
        return await getRepository(TodoModel).find();
    }
    
    public async updateTodo(id: number, todoModel: TodoModel) {
        let toUpdate = await getRepository(TodoModel).findOne(id);
        toUpdate.name = todoModel.name;
        toUpdate.completed = todoModel.completed;
        return await getRepository(TodoModel).save(toUpdate);
    }
    public async deleteTodo(id:number) {
        return await getRepository(TodoModel).delete(id);
    }
}