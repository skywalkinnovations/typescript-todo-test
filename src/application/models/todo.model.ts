import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("todo")
export class TodoModel {
    @PrimaryGeneratedColumn()
    private _id: number;
    
    @Column()
    private _name: string;
    
    @Column()
    private _completed: boolean;

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get completed(): boolean {
        return this._completed;
    }
    public set completed(value: boolean) {
        this._completed = value;
    }
}