import { Scene, GameObjects, Cameras } from "phaser";
export class MainScene extends Scene {
  private grid!: Phaser.GameObjects.Grid;
  private helloLabel!: Phaser.GameObjects.Text;
  private player!: Phaser.Physics.Arcade.Sprite;
  private camera!: Cameras.Scene2D.Camera;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  init() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor("#24252A");
  }

  create() {
        // Enable keyboard input
        this.input.keyboard.enabled = true;

        // Create cursor keys
        this.cursors = this.input.keyboard.createCursorKeys();
    
    const { width, height } = this.sys.game.canvas;
    this.grid = this.add.grid(
      width / 2,
      height / 2,
      width,
      height,
      width/15,
      height/10,
      0xffffff,
      0.2,
      0 // specify the size of each cell
    );
   // Add a player sprite to the center of the grid
   this.player = this.physics.add.sprite(
    width / 2,
    
    height / 2,
    "player"
  );
  this.player.setAccelerationX(0);
  this.player.setAccelerationY(0);
  this.player.setBounce(0.2);
  this.player.setCollideWorldBounds(true,true);  
  
  
  this.player.setActive(true);
  this.player.setDepth(1); // ensure the player sprite appears on top of the grid

   
  }
  update(){
    if (this.cursors.left.isDown)
{
    this.player.setVelocityX(-460);

    this.player.anims.play('left', true);
}
else if (this.cursors.right.isDown)
{
    this.player.setVelocityX(460);

    this.player.anims.play('right', true);
}
else if (this.cursors.up.isDown)
{
    this.player.setVelocityY(-460);

    this.player.anims.play('up', true);
}
else if (this.cursors.down.isDown)
{
    this.player.setVelocityY(460);

    this.player.anims.play('up', true);
}
else
{
    this.player.setVelocityX(0);
    this.player.setVelocityY(0);

    this.player.anims.play('turn');
}

if (this.cursors.up.isDown && this.player.body.touching.down)
{
    this.player.setVelocityY(-330);
}
  }
}
