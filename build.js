import * as esbuild from 'esbuild'

esbuild.buildSync({
    entryPoints: ['main.js'],
    bundle: true,
    target: ['es2020'],
    outdir: './public'
})