import { AbstractModel } from './abstract.mode';

export class Jogador extends AbstractModel {
    name: string = '';
    gameId: string = '';
    value: number = 0;
    percent?:number;
    valorEsperado?:number;
    createdOn: Date = new Date();
    modifiedOn: Date = new Date();
}