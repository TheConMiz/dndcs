/**
 * Variables used by the rest of the code. 
 */
let knex;
let results = [];

/**
 * Initialises a connection with the SQLite database using Knex and some of the global variables above.
 */
function connectKnex(dbPath) {
    knex = window.require('knex')({
        client: "sqlite3",
        connection: {
            filename: dbPath
        },
        useNullAsDefault: true,
        debug: true
    });
}


/**
 * 
 */
export default function getRulesLevel(dbPath) {

    connectKnex(dbPath);

    let dbQuery = knex({
            lvl: 'Rule-Level'
        })

        .select({
            level: "lvl.level",
            xp: "lvl.xp",
        })

        .orderBy("lvl.level", "asc");

    dbQuery.then((rows) => {
        for (const row of rows) {
            results.push(row);
        }
    });

    return results;

}