const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: process.env.SONAR_HOST,
    token: process.env.SONAR_TOKEN,
    options: {
      'sonar.projectKey': 'ts-lib-json-stream',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.projectName': 'ts-lib-json-stream',
      'sonar.sources': './',
    },
  },
  () => process.exit(),
);
