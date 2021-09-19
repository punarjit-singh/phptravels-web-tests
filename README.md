[![phptravels](https://circleci.com/gh/punarjit-singh/phptravels-web-tests.svg?style=svg)](https://app.circleci.com/pipelines/github/punarjit-singh/phptravels-web-tests)

## Running the tests:
    npm run test                #run all tests using default config .testcaferc.js
    npm run test-smoke          #run only tests with meta data {suite: 'smoke'}
    npm run test-regression     #run only fixtures with meta data {suite: 'regression'}
    
### CircleCI
![CircleCI Sample Snapshot](/circleci.png)

### Further Improvements/Todos
-  More tests and detailed assertions.
- Test organisation can be done based on components 
    - i.e. we can go one step deeper and work on component level and then page level
  e.g. #hotels-search form is a component and selectors, client functions, actions etc. can be isolated in a HotelsSearch class 
  Which will promote the use of single responsibility principle and becomes easier to manage in long run
      
- Page objects can be chained as given below:
    ```
    Note: this structure can be improved to look something like:
    await Home
        .selectHotelsTab()
        .enterAndSelectCity({city: "Singapore"})
        .andSoOn(); ...
    
    Open issue/feature request: https://github.com/DevExpress/testcafe/issues/1535
  
    Need further investigation and could also use javascript's pipe() and compose() 
    ```