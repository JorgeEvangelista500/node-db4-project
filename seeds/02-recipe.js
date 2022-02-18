const recipes = [

    {recipe_name: 'Cheese Pizza'},
    {recipe_name: 'Air Fryer Chicken'},
    {recipe_name: 'Fancy Pasta'},

]
const step_ingredients = [
    {step_id: 2, ingredient_id: 1, quantity: 1},
    {step_id: 5, ingredient_id: 3, quantity: 1},
    {step_id: 5, ingredient_id: 6, quantity: 1},
    {step_id: 8, ingredient_id: 2, quantity: 1},
    {step_id: 9, ingredient_id: 4, quantity: 1},
]

const ingredients = [
    {ingredient_name: 'Cheese', ingredient_unit:'lbs'},
    {ingredient_name: 'Sauce', ingredient_unit:'lbs'},
    {ingredient_name: 'Chicken', ingredient_unit:'lbs'},
    {ingredient_name: 'Pasta', ingredient_unit:'lbs'},
    {ingredient_name: 'Avocado', ingredient_unit:'lbs'},
    {ingredient_name: 'Garlic', ingredient_unit:'lbs'},
]

const steps = [
    { instructions: 'Prepare dough', step_number:1, recipe_id:1},
    { instructions: 'Add Cheese', step_number:2, recipe_id:1},
    { instructions: 'Bake Pizza', step_number:3, recipe_id:1},

    { instructions: 'Turn on Air Fryer', step_number:1, recipe_id:2},
    { instructions: 'Add Chicken and Garlic', step_number:2, recipe_id:2},
    { instructions: 'Prepare Bake', step_number:3, recipe_id:2},

    { instructions: 'Boil Water', step_number:1, recipe_id:3},
    { instructions: 'Add Sauce', step_number:2, recipe_id:3},
    { instructions: 'Cook pasta', step_number:3, recipe_id:3}
]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}