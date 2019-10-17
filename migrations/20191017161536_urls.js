
exports.up = function(knex) {
    return knex.schema.createTable('urls', function(tbl) {
        //base-62 id
        tbl
            .string('id', 6)
            .notNullable();
        
        //URL
        tbl
            .string('url', 128)
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('urls');
};
