module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  overrides: [
    {
      files: 'packages/@ExpTestImg/angular/**',
      options: {
        semi: true,
      },
    },
  ],
}
