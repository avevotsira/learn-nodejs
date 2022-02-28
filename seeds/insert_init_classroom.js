/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  return knex.schema.raw(`
    INSERT INTO classroom(\`classroom_name\`, \`classroom_description\`, \`classroom_year\`)
    VALUES
    ('A1', 'Description A1', 2022),
    ('A2', 'Description A2', 2022)
  `);
};
