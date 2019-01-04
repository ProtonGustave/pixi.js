var fs = require("fs");

var typesText = fs.readFileSync('./dist/types/types.d.ts', 'utf8');

//TilingSprite problems
typesText = typesText.replace('class TilingSprite extends PIXI.Sprite {',
    ['class TilingSprite extends PIXI.Sprite {',
    '        static from(source: number | string | PIXI.Texture | HTMLCanvasElement | HTMLVideoElement, options?: any): PIXI.Sprite;',
    '        static fromFrame(): PIXI.Sprite;',
    '        static fromImage(): PIXI.Sprite;']
        .join('\n')
);

typesText = typesText.replace('class CubeTexture extends PIXI.BaseTexture {',
    ['class CubeTexture extends PIXI.BaseTexture {',
    '        static from(resources: string|HTMLImageElement|HTMLCanvasElement|SVGElement|HTMLVideoElement, options?: any): BaseTexture;']
        .join('\n')
);

var eventsText = fs.readFileSync('./types/events.d.ts', 'utf8');
var loaderText = fs.readFileSync('./types/loader.d.ts', 'utf8');

fs.writeFileSync('./dist/types/pixi.js.d.ts', [typesText, eventsText, loaderText].join('\n'));
