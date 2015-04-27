/// <reference path="../sails/sails.d.ts" />

declare module Test {
    export class ModelResult extends Sails.QueryResult {
        name:string;
        age:number;
    }
}