// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql2",
    connection: "mysql://root:12345@localhost/school",
  },

  staging: {
    client: "mysql2",
    connection: "mysql://root:12345@localhost/school",
  },

  production: {
    client: "mysql2",
    connection: "mysql://root:12345@localhost/school",
  },
};
