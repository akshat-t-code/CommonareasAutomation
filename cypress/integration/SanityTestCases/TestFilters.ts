/// <reference types="Cypress" />

const TestFilter = (definedTags: string[], runTest: Function) => {
  if (Cypress.env('TEST_TAGS')) {
    const tags = Cypress.env('smoke').split(',');
    const isFound = definedTags.some(definedTag => tags.includes(definedTag));

    if (isFound) {
      runTest();
    }
  }
};

export default TestFilter;