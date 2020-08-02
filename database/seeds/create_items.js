const knex = require('knex');
const uuidv4 = require('uuidv4');

exports.seed = async function seed(knex) {
    await knex('todos').insert([
        { id: uuidv4.uuid(), title: 'Estudar mais Next.JS', isComplete: false },
        { id: uuidv4.uuid(), title: 'Estudar mais XState', isComplete: false },
    ]);
}