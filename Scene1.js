class Scene1 extends Phaser.Scene {
  constructor() {
    super("premiere_scene");
  }

preload(){
  this.load.image('background', 'assets/background.png');
}


create ()
  {
    this.add.image(400,300,'background');
    var text;
    var timedEvent;
      // 2:30 in seconds
      this.initialTime = 1;

      text = this.add.text(32, 32, 'Temps: ' + this.initialTime, {fontSize: '20px', fill:'#000'});

      // Each 1000 ms call onEvent
      timedEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

      function formatTime(seconds){
          // Minutes
          var minutes = Math.floor(seconds/60);
          // Seconds
          var partInSeconds = seconds%60;
          // Adds left zeros to seconds
          partInSeconds = partInSeconds.toString().padStart(2,'0');
          // Returns formated time
          return `${minutes}:${partInSeconds}`;
      }

      function onEvent ()
      {
          if(this.initialTime > 0){
                  this.initialTime -= 1; // One second
          text.setText('Temps: ' + formatTime(this.initialTime));
          }
          if(this.initialTime <= 0){
              this.scene.start('quatrieme_scene');
          }

      }


      var text_ = this.add.text(550,10, 'Loading the Game ... ', {fontSize: '20px', fill:'#000'});

  }

}
