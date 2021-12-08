class Block {
  constructor(x, y){
    var options = {
      restitution: 0.1,
      friction: 1.5,
      density:2.8
    }
    this.block = Bodies.rectangle(x, y, 30, 50, options);
    World.add(world, this.block);
  }
  display() {
    var pos = this.block.position;

    push();
    translate(pos.x, pos.y);
    rotate(this.block.angle);
    rectMode(CENTER);
    strokeWeight(2);
    stroke('black');
    rect(0, 0, 30, 50);
    pop();
  }
}