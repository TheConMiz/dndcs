

export default function test(dbPath) {

    const knex = window.require('knex')({
        client: "sqlite3",
        connection: {
            filename: dbPath
        },
        useNullAsDefault: true,
        debug: true
    });

    const results = []


    let dbQuery = knex({
            lvl: 'Rule-Level'
        })

        .select({

            level: "lvl.level",
            xp: "lvl.xp",

        })

        .orderBy("lvl.level", "asc");

    dbQuery.then((rows) => {
        results.push(rows);
        // console.log(results);
    });

    return results;


}

