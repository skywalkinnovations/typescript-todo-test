import "reflect-metadata";
import { ConnectionOptions } from "typeorm";

export let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Demo1234",
    database: "todo_testing",
    entities: [
        "./models/*.js"
    ],
    synchronize: true,
}