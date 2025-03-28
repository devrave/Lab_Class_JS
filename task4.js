export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = Number(level);
  }  

  info(){
    console.log(`${this.name} has reached Level ${this.level}!`);   
  } 

  levelUp(){
    this.level = (this.level) + 1; 
    console.log(`${this.name} has reached Level ${(this.level)}!`);   
  }    



}
const player1 = new Player("Grog","4")
player1.info();
player1.levelUp();