/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.raw(`
  CREATE TABLE \`student\` (
	\`id\` INT(10) NOT NULL AUTO_INCREMENT,
	\`student_name\` VARCHAR(50) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci',
	\`age\` INT(10) NOT NULL DEFAULT '0',
	\`phone\` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	\`classroom_id\` INT(10) NOT NULL DEFAULT '0',
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
