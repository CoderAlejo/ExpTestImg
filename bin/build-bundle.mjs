#!/usr/bin/env node

import fs from 'node:fs/promises'
import path from 'node:path'
import chalk from 'chalk'

import esbuild from 'esbuild'
import babel from 'esbuild-plugin-babel'

const ExpTestImg_ROOT = new URL('../', import.meta.url)
const PACKAGES_ROOT = new URL('./packages/', ExpTestImg_ROOT)

function buildBundle (srcFile, bundleFile, { minify = true, standalone = '', plugins, target, format } = {}) {
  return esbuild.build({
    bundle: true,
    sourcemap: true,
    entryPoints: [srcFile],
    outfile: bundleFile,
    platform: 'browser',
    minify,
    keepNames: true,
    plugins,
    target,
    format,
  }).then(() => {
    if (minify) {
      console.info(chalk.green(`✓ Built Minified Bundle [${standalone}]:`), chalk.magenta(bundleFile))
    } else {
      console.info(chalk.green(`✓ Built Bundle [${standalone}]:`), chalk.magenta(bundleFile))
    }
  })
}

await fs.mkdir(new URL('./ExpTestImg/dist', PACKAGES_ROOT), { recursive: true })
await fs.mkdir(new URL('./@ExpTestImg/locales/dist', PACKAGES_ROOT), { recursive: true })

const methods = [
  buildBundle(
    './packages/ExpTestImg/index.mjs',
    './packages/ExpTestImg/dist/ExpTestImg.min.mjs',
    { standalone: 'ExpTestImg (ESM)', format: 'esm' },
  ),
  buildBundle(
    './packages/ExpTestImg/bundle.mjs',
    './packages/ExpTestImg/dist/ExpTestImg.min.js',
    { standalone: 'ExpTestImg', format: 'iife' },
  ),
  buildBundle(
    './packages/ExpTestImg/bundle-legacy.mjs',
    './packages/ExpTestImg/dist/ExpTestImg.legacy.min.js',
    {
      standalone: 'ExpTestImg (with polyfills)',
      target: 'es5',
      plugins:[babel({
        config:{
          compact: false,
          highlightCode: false,
          inputSourceMap: true,

          browserslistEnv: 'legacy',
          presets: [['@babel/preset-env',  {
            loose: false,
            targets: { ie:11 },
            useBuiltIns: 'entry',
            corejs: { version: '3.24', proposals: true },
          }]],
        },
      })],
    },
  ),
]

// Build mini versions of all the locales
const localesModules = await fs.opendir(new URL('./@ExpTestImg/locales/src/', PACKAGES_ROOT))
for await (const dirent of localesModules) {
  if (!dirent.isDirectory() && dirent.name.endsWith('.js')) {
    const localeName = path.basename(dirent.name, '.js')
    methods.push(
      buildBundle(
        `./packages/@ExpTestImg/locales/src/${localeName}.js`,
        `./packages/@ExpTestImg/locales/dist/${localeName}.min.js`,
        { minify: true },
      ),
    )
  }
}

// Add BUNDLE-README.MD
methods.push(
  fs.copyFile(
    new URL('./BUNDLE-README.md', ExpTestImg_ROOT),
    new URL('./ExpTestImg/dist/README.md', PACKAGES_ROOT),
  ),
)

await Promise.all(methods).then(() => {
  console.info(chalk.yellow('✓ JS bundles 🎉'))
}, (err) => {
  console.error(chalk.red('✗ Error:'), chalk.red(err.message))
})
