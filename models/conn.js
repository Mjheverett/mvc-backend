const host = "raja.db.elephantsql.com";
const database = "pshtbhyd";
const user = "pshtbhyd";
const password = "592tAz32Vyq1CF6pJZyZhYApp3K6cftc";

const pgp = require("pg-promise")({
    query: function (e) {
        console.log("QUERY:", e.query);
    },
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
};

const db = pgp(options);

module.exports = db;
