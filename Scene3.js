class Scene3 extends Phaser.Scene {
  constructor() {
    super('troisieme_scene');
  }
  preload(){
    this.load.image('background', 'assets/background.png');
    for (var i = 1; i < 6; i++) {
      this.load.image('carre'+i, 'assets/carre'+i+".png");
    }
  }
  create(){
    var loop = 1;
 this.add.image(400,300, 'background');
  var xx = Phaser.Math.Between(50, 750);
  var yy = Phaser.Math.Between(20, 550);
  var carre_sel_1 = this.add.image(xx, yy, 'carre1');
  xx = Phaser.Math.Between(50, 750);
  yy = Phaser.Math.Between(20, 550);
  var carre_sel_2 = this.add.image(xx, yy, 'carre2');
  xx = Phaser.Math.Between(50, 750);
  yy = Phaser.Math.Between(20, 550);
  var carre_sel_3 = this.add.image(xx, yy, 'carre3');
  xx = Phaser.Math.Between(50, 750);
  yy = Phaser.Math.Between(20, 550);
  var carre_sel_4 = this.add.image(xx, yy, 'carre4');
  xx = Phaser.Math.Between(50, 750);
  yy = Phaser.Math.Between(20, 550);
  var carre_sel_5 = this.add.image(xx, yy, 'carre5');

  carre_sel_1.setInteractive();
  carre_sel_2.setInteractive();
  carre_sel_3.setInteractive();
  carre_sel_4.setInteractive();
  carre_sel_5.setInteractive();


  this.input.on('pointerdown', this.startDrag, this);

    console.log('x : '  + carre_sel_1.x);
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
}



  update(){

  }
}
