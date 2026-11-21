import Knex from "knex";

export const knex = Knex({
    client: 'pg',
    connection: {},
    debug: false
});

