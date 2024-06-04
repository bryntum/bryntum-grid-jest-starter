import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
    extensionsToTreatAsEsm : ['.ts'],
    moduleNameMapper       : {
        '^(\\.{1,2}/.*)\\.js$' : '$1'
    },
    preset                  : 'ts-jest/presets/js-with-ts',
    testEnvironment         : 'jsdom',
    transformIgnorePatterns : ['node_modules/(?!@bryntum/grid-react|dynamics-web-api|@bryntum/grid)'],
    setupFilesAfterEnv      : ['<rootDir>/setupTests.ts']
};

export default jestConfig;