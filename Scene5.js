class Scene5 extends Phaser.Scene {
  constructor() {
    super("cinquieme_scene");
  }

preload(){
  this.load.image('background', 'assets/background.png');
  this.load.image('carre', 'assets/carre1.png');
  this.load.image('boite', 'assets/boite.png');
}


create ()  {
  this.compteurtext = 0;
  this.add.image(400,300, 'background');
  this.carre = this.add.image(200,875, 'boite').setInteractive();
  this.text = this.add.text(5, 425, 'Bon boulot, John. \n Je ne sais pas encore ce que ça va donner,\n mais l’important, c’est que tu ne t’arrêtes jamais d’essayer.', {fontSize: '20px', fill:'#000', align: 'center'});
   this.add.image(400,300, 'carre').setInteractive();
  this.carre.on("pointerdown", this.textset, this);


  }

  textset(pointer){
    this.compteurtext +=1;
    this.carre.off("pointerdown", this.textset, this);
    this.carre.on("pointerup", this.stop, this);
    if (this.compteurtext == 1) {
      this.text.setText('  Il se fait tard, la nuit commence à tomber.');
    }
    if (this.compteurtext == 2) {
      this.text.setText(" Tu devrais rentrer chez toi, prendre un peu de repos.");
    }
    if (this.compteurtext == 3) {
      this.text.setText(' On reprendra le travail demain matin.');
    }
    if (this.compteurtext == 4) {
      this.text.setText(" Tu as raison.");
    }
    if (this.compteurtext == 5) {
      this.scene.start("deuxieme_scene");
    }

  }

  stop(){
    this.carre.on("pointerdown", this.textset, this);
    this.carre.off("pointerup", this.stop, this);
  }
  update(){

  }

}
