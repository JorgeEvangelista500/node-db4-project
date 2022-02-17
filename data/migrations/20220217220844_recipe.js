exports.up = function(knex) {
    return knex.schema.createTable('recipe', tbl => {
        tbl.increments('recipe_id');
        tbl.string('recipe_name', 128)
        .unique()
        .notNullable()
        tbl.timestamps();
    })
  
    .createTable('steps', tbl => {
        tbl.increments('step_id');
        tbl.integer('step_number')
          .unsigned()
          .notNullable();
        tbl.string('instructions').notNullable()
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('recipe_id')
          .inTable('recipe')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    })
  
    .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.string('ingredient_name')
        tbl.decimal('quantity')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('ingredients')
      .dropTableIfExists('steps')
      .dropTableIfExists('recipe');
      
  };
  