const knex = require('knex');

exports.up = async function (knex) {
    return knex.schema.createTable('todos', table => {
        table.string('id').primary().notNullable();
        table.string('title').notNullable();
        table.boolean('isComplete').notNullable();
    })

}

exports.down = async function (knex) {
    return knex.schema.dropTable('todos');
};