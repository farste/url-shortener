
exports.up = function(knex) {
    return knex.schema.createTable('urls', function(tbl) {
        //base-62 id
        tbl
            .string('b62', 6)
            .notNullable()
            .unique();
        
        //URL
        tbl
            .string('url', 128)
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('urls');
};
