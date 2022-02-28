/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  return knex.schema.raw(`
    INSERT INTO student(\`student_name\`, \`age\`, \`phone\`,\`classroom_id\`)
    VALUES
    ('Ave',18, 'None', 1),
    ('AveVotsira',18, 'None', 2)
  `);
};
