import * as esbuild from 'esbuild';

const [_, __, mode] = process.argv;

const config = {
    entryPoints: ['main.js'],
    bundle: true,
    target: ['es2020'],
    outdir: './public',
    minify: true
};

mode === "watch"
    ? (await esbuild.context(config)).watch()
    : esbuild.buildSync(config)