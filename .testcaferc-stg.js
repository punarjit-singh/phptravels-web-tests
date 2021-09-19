module.exports = {
    skipJsErrors: true,
    skipUncaughtErrors: true,
    stopOnFirstFail: true,
    quarantineMode: true,
    browsers: "chrome",
    src: ["./tests/**/*.js"],
    userVariables: {
        baseUrl: "https://www.phptravels-staging.net/",     //url is incorrect, just for demo env specific config
    },
    reporter: [
        {
            name: "list"
        },
        {
            name: "xunit",
            output: "reports/report.xml"
        }
    ],
    speed: 1,
    selectorTimeout: 3000,
    assertionTimeout: 3000,
    pageLoadTimeout: 3000
}