class Scene4 extends Phaser.Scene {
  constructor() {
    super("quatrieme_scene");
  }

preload(){
  this.load.image('background', 'assets/background.png');
  this.load.image('carre', 'assets/carre1.png');
  this.load.image('boite', 'assets/boite.png');
}


create ()  {
  this.compteurtext = -1;
  this.add.image(400,300, 'background');
  this.carre = this.add.image(200,875, 'boite').setInteractive();
  this.text = this.add.text(5, 425, '“Journal de bord du Laboratoire, entrée 329. Sujet : Projet OAV.\n Tentative de Cure n° 27-03. Toujours aucun signe d’amélioration \nchez les sujets atteints par le Virus.\n La tentative n°27-02 avait semblé donner des résultats concluants,\n avant que son efficacité ne finisse par diminuer.\n Nous allons donc repartir d’après ce modèle. Bien, nous allons \n maintenant commencer… \nStérilisation du matériel et préparation des composants.\n Initialisation de la procédure de synthèse.”', {fontSize: '20px', fill:'#000'});
   this.add.image(400,300, 'carre').setInteractive();
  this.carre.on("pointerdown", this.textset, this);


  }

  textset(pointer){
    this.text.setText('John, tu es prêt ?');
    this.compteurtext +=1;
    this.carre.off("pointerdown", this.textset, this);
    this.carre.on("pointerup", this.stop, this);
    if (this.compteurtext == 1) {
      this.text.setText(' John ?\n John, tu dormais ?\n John ? \n Allez, John, du nerf.');
    }
    if (this.compteurtext == 2) {
      this.text.setText(" Tu te reposeras plus tard...\n Il nous reste encore assez de temps pour commencer la seconde\n partie du protocole.");
    }
    if (this.compteurtext == 3) {
      this.text.setText(' Courage.\n Bientôt, nous débarrasserons le monde de ce satané Virus !')
    }
    if (this.compteurtext == 4) {
      this.text.setText(" Mettons-nous au travail.\n \n Viens, aide-moi à créer ce remède.")
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
