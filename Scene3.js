class Scene3 extends Phaser.Scene {
  constructor() {
    super('troisieme_scene');
  }
  preload(){
    this.load.image('background', 'assets/background.png');
    for (var i = 1; i < 6; i++) {
      this.load.image('carre'+i, 'assets/carre'+i+".png");
      this.load.image('carre8', 'assets/carre1.png');
    }
  }
  create(){
    var loop = 1;
 this.background = this.add.image(400,300, 'background');
  var xx = Phaser.Math.Between(50, 750);
  var yy = Phaser.Math.Between(20, 550);
  this.carre_sel_1 = this.add.image(xx, yy, 'carre1');
  xx = Phaser.Math.Between(50, 750);
  yy = Phaser.Math.Between(20, 550);
  this.carre_sel_2 = this.add.image(xx, yy, 'carre2');
  xx = Phaser.Math.Between(50, 750);
  yy = Phaser.Math.Between(20, 550);
  this.carre_sel_3 = this.add.image(xx, yy, 'carre3');
  xx = Phaser.Math.Between(50, 750);
  yy = Phaser.Math.Between(20, 550);
  this.carre_sel_4 = this.add.image(xx, yy, 'carre4');
  xx = Phaser.Math.Between(50, 750);
  yy = Phaser.Math.Between(20, 550);
  this.carre_sel_5 = this.add.image(xx, yy, 'carre5');

  this.carre_sel_1.setInteractive();
  this.carre_sel_2.setInteractive();
  this.carre_sel_3.setInteractive();
  this.carre_sel_4.setInteractive();
  this.carre_sel_5.setInteractive();
  this.background.setInteractive();




  this.input.on('pointerdown', this.startDrag, this);

  }

startDrag(pointer, targets){
  this.input.off('pointerdown', this.startDrag, this);
  this.dragobj = targets[0];
  this.input.on('pointermove', this.doDrag, this);
  this.input.on('pointerup', this.stopDrag, this);
}


doDrag(pointer){
  this.dragobj.x = pointer.x;
  this.dragobj.y = pointer.y;
}

stopDrag(){
  this.input.on('pointerdown', this.startDrag, this);
  this.input.off('pointermove', this.doDrag, this);
  this.input.off('pointerup', this.stopDrag, this);
  this.background.x = 400;
  this.background.y = 300;

}



  update(){
    if (this.carre_sel_1.x < this.carre_sel_2.x-50 && this.carre_sel_2.x < this.carre_sel_3.x-50 && this.carre_sel_3.x < this.carre_sel_4.x-50 && this.carre_sel_4.x < this.carre_sel_5.x-50) {
      this.carre_sel_1.destroy(true);
      this.carre_sel_2.destroy(true);
      this.carre_sel_3.destroy(true);
      this.carre_sel_4.destroy(true);
      this.carre_sel_5.destroy(true);
      this.add.image(400,300, 'carre8');
      this.scene.transition({
        target: 'deuxieme_scene',
        duration: 1000,
      });
    }
  }
}
