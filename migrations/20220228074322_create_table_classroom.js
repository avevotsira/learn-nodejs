/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.raw(`
    CREATE TABLE \`classroom\` (
        \`id\` INT(10) NOT NULL AUTO_INCREMENT,
        \`classroom_name\` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
        \`classroom_year\` INT(10) NOT NULL,
        PRIMARY KEY (\`id\`) USING BTREE
    )
    COLLATE='utf8mb4_0900_ai_ci'
    ENGINE=InnoDB
  
    ;
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
