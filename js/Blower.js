class Blower {
  constructor(x, y, w, h) {
    let options = {
      isStatic: true
   
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.image=loadImage('IN.png')
    this.color = color;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    //fill("#8d6e63");
    image(pic,width / 2 - 50, height / 2 + 50, 150, 500)
    rect(0, 0, this.w, this.h);
    pop();
  }
}
