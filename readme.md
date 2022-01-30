# クリエイティブコーディングのボイラーテンプレート

## three.js

https://yuki-sakaguchi.github.io/creative-coding-boilerplate/threejs-boilerplate/dist/

- TypeScript + Vite
- 画面いっぱい表示
- リサイズ
- どこでも動くように相対パスでのビルド
- dat.gui
- OrbitControls

## glsl（three.js）

https://yuki-sakaguchi.github.io/creative-coding-boilerplate/threejs-glsl-boilerplate/dist/

- TypeScript + Vite
- 画面いっぱい表示
- リサイズ
- どこでも動くように相対パスでのビルド
- dat.gui
- OrbitControls
- fragmentShader, vertexShader の外部ファイル化
- uniforms で js と glsl で値をやり取り

## pixi.js

https://yuki-sakaguchi.github.io/creative-coding-boilerplate/pixijs-boilerplate/dist/

- TypeScript + Vite
- 画面いっぱい表示
- リサイズ
- dat.gui
- filter
- どこでも動くように相対パスでのビルド

## p5.js

https://yuki-sakaguchi.github.io/creative-coding-boilerplate/p5-boilerplate/dist/

- TypeScript + Vite
- 画面いっぱい表示
- リサイズ
- どこでも動くように相対パスでのビルド

## Vite で環境構築

```bash
npm init vite
```

で `vanilla` → `vanilla-ts` を選択

```bash
npm i three @types/three dat.gui @types/dat.gui
```

or

```bash
npm i pixi.js dat.gui @types/dat.gui @type/offscreencanvas
```

（pixi.js の 6 系は型定義も一緒にあるので別途読み込まなくて OK)

`vite.config.ts` に以下を設定すればビルド時に相対パスになる

```ts
import { defineConfig } from "vite";
export default defineConfig({
  base: "./",
});
```
