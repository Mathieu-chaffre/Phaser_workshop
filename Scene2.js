class Scene2 extends Phaser.Scene {
  constructor() {
    super('deuxieme_scene');
  }
  preload(){
    this.load.image('background', 'assets/background.png');
    for (var i = 1; i < 6; i++) {
      this.load.image('carre'+i, 'assets/carre'+i+".png");
    }
    this.load.image('sol', 'assets/sol.png');
    this.load.image('test', 'assets/carre1.png');
  }
  create(){
    var carre_sel;
    var platforms;
    var test;
        this.add.image(400, 300, 'background');
    test = this.physics.add.staticGroup();
    test.create(350, 450, 'test');
    platforms = this.physics.add.staticGroup();
    platforms.create(350, 550, 'sol').setScale(2).refreshBody(true);

    carre_sel = this.physics.add.group({
      key: 'carre1',
      repeat: 11,
      setXY: ({x: 10, y: 20, stepX: 70})
    });
    this.physics.add.collider(carre_sel, platforms);
    this.physics.add.overlap(carre_sel, test, hitCarre, null);
    let children = carre_sel.getChildren();
for(let i = 0; i < children.length; i++)
{
    children[i].setInteractive();
}

function hitCarre(carre_sel, test){
  carre_sel.disableBody(true, true);
}
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
}



  update(){

  }
}
