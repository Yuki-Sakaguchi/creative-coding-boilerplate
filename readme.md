# クリエイティブコーディングのボイラーテンプレート

## three.js

https://yuki-sakaguchi.github.io/creative-coding-boilerplate/threejs-boilerplate/dist/

- TypeScript + Vite
- 画面いっぱい表示
- リサイズ
- どこでも動くように相対パスでのビルド
- dat.gui
- OrbitControls

## pixi.js

https://yuki-sakaguchi.github.io/creative-coding-boilerplate/pixijs-boilerplate/dist/

- TypeScript + Vite
- 画面いっぱい表示
- リサイズ
- dat.gui
- filter
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
（pixi.jsの6系は型定義も一緒にあるので別途読み込まなくてOK)

`vite.config.ts` に以下を設定すればビルド時に相対パスになる

```ts
import { defineConfig } from "vite";
export default defineConfig({
  base: "./",
});
```
