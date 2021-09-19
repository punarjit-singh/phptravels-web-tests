module.exports = {
    skipJsErrors: true,
    skipUncaughtErrors: true,
    stopOnFirstFail: true,
    quarantineMode: false,
    browsers: "safari",
    src: ["./tests/**/*.js"],
    userVariables: {
        baseUrl: "https://www.phptravels.net/",
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
    selectorTimeout: 10000,
    assertionTimeout: 10000,
    pageLoadTimeout: 10000
}