exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.string('recipe_name', 128)
        .unique()
        .notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id')
        tbl.string('ingredient_name').unique().notNullable()
        tbl.string('ingredient_unit')
    })
    
    .createTable('steps', tbl => {
        tbl.increments('step_id')
        tbl.integer('step_number').notNullable();
        tbl.string('instructions').notNullable()
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('recipe_id')
          .inTable('recipes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    })
  
    .createTable('step_ingredients', tbl => {
        tbl.increments('step_ingredients_id')
        tbl.float('quantity').notNullable()
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('step_ingredients')
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes')
  };
  