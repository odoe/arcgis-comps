import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'arcgis-comps',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!(@arcgis|@esri)/)'],
    moduleFileExtensions: [
      'ts',
      'tsx',
      'js',
      'mjs',
      'jsx',
      'json',
      'd.ts'
    ]
  },
};
