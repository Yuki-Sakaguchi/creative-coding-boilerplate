# クリエイティブコーディングのボイラーテンプレート

## three.js

- TypeScript + Vite
- 画面いっぱい表示
- リサイズ
- どこでも動くように相対パスでのビルド
- dat.gui
- OrbitControls

## pixi.js

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

`vite.config.ts` に以下を設定すればビルド時に相対パスになる

```ts
import { defineConfig } from "vite";
export default defineConfig({
  base: "./",
});
```
