export class Task{
  name: string;
  status: boolean;
  update: boolean;
  nameUpdated: string;

  constructor(name: string , status: boolean, update: boolean){
    this.name = name;
    this.status = status;
    this.update = update
    this,this.nameUpdated = name
  }
}