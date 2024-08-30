module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'test',
        'merge',
        'style',
        'refactor',
        'chore',
        'docs',
        'revert',
        'perf',
        'build',
        'ci',
      ],
    ],
  },
};
