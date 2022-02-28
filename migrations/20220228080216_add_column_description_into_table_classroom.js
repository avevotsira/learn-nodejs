/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.raw(`
    ALTER TABLE \`classroom\`
    ADD COLUMN \`classroom_description\` VARCHAR(50) NOT NULL AFTER \`classroom_name\`;
  `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
