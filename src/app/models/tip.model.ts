import { AbstractModel } from './abstract.mode';

export class Game extends AbstractModel {
  title: string = '';
  empresaId: string = '';
  value: number = 0;
  createdOn: Date = new Date();
  modifiedOn: Date = new Date();
}