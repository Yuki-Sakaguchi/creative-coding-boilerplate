import p5 from 'p5';

import './style.css';

let p: p5;
let angle = 0;
let width = window.innerWidth;
let height = window.innerHeight;
let mouse = { x: width/2, y: height/2};

/**
 * 描画開始前に１度だけ動く処理
 */
const setup = () => {
  p.createCanvas(width, height);
};

/**
 * 1秒間に60回（frameRate関数で指定可能）実行される処理
 */
const draw = () => {
  p.background(0);
  p.fill(205);

  angle += 0.05;
  
  const size = 200;
  p.translate(mouse.x, mouse.y);
  p.rotate(angle);
  p.rect(-size/2, -size/2, size, size);
};

/**
 * マウスの動き
 */
const mouseMoved = (e: any) => {
  console.log('mouse moved', e);
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

/**
 * クリック（タップ）時に動く処理
 */
const mousePressed = (e: any) => {
  console.log('mouse pressed', e);
};

/**
 * キー入力された時に動く処理
 * keyCodeで入力されたキーを取得できる
 */
const keyPressed = (e: any) => {
  console.log('key pressed', e);
};

/**
 * リサイズ処理
 */
const windowResized = () => {
  width = window.innerWidth;
  height = window.innerHeight;
  p.resizeCanvas(width, height)
};

/**
 * 実行
 */
new p5(instance => {
  p = instance as unknown as p5;
  p.setup = setup;
  p.draw = draw;
  p.mouseMoved = mouseMoved;
  p.mousePressed = mousePressed;
  p.keyPressed = keyPressed;
  p.windowResized = windowResized;
}, document.getElementById('app')!);