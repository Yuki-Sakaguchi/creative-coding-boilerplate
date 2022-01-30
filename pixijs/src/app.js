import * as PIXI from 'pixi.js';
import * as dat from 'dat.gui';

let gui = new dat.GUI();
let params = {
  color: 0xff0000,
  blur: 0,
};
gui.addColor(params, 'color').onChange(() => sketch.block.tint = params.color);
gui.add(params, 'blur', 0, 10, 1).onChange(() => sketch.blurFilter.blur = params.blur);

class Sketch {
  constructor() {
    this.app = new PIXI.Application({
        width: this.width,
        height: this.height,
        antialias: true,
        resolution: (window.devicePixelRatio > 1) ? 2 : 1,
        autoDensity: true,
        resizeTo: window,
        backgroundColor: 0x000000,
    });
    document.body.appendChild(this.app.view);
    
    this.time = 0;
    this.container = new PIXI.Container();

    this.blurFilter = new PIXI.filters.BlurFilter();
    this.blurFilter.blur = params.blur;
    this.container.filters = [this.blurFilter];
    
    this.app.stage.addChild(this.container);
    this.add();
    this.render();

    window.addEventListener('resize', this.resize.bind(this));
  }

  add() {
    let block = new PIXI.Sprite(PIXI.Texture.WHITE);
    block.tint = params.color;
    block.width = 200;
    block.height = 200;
    block.anchor.set(0.5);
    block.x = this.app.screen.width / 2;
    block.y = this.app.screen.height / 2;
    this.container.addChild(block);
    this.block = block;
  }

  render() {
    this.app.ticker.add((delta) => {
      this.time += 0.01;
      this.block.rotation = this.time;
    });
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.app.renderer.resize(window.innerWidth, window.innerHeight);

    this.container.removeChildren(0, this.container.children.length);
    this.add();
  }
}

const sketch = new Sketch();