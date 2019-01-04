### How to obtain typings from jsdoc

1. `npm run types`

```
node ./types/assemble.js
```

Script executes following steps:
1. take `dist/types/types.d.ts`
2. replace declarations from `statics.d.ts`
3. concat `events.d.ts` and `loader.d.ts`
4. output `dist/types/pixi.js.d.ts`

The last step is to copy output to `bundles/pixi.js/pixi.js.d.ts` and publish new version.

