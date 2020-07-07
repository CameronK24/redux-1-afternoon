import {createStore} from 'redux';

const initialState = {
    recipeName: '',
    recipeCategory: '',
    firstName: '',
    lastName: '',
    ingredients: [],
    instructions: [],
    recipes: []
};

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
export const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS';
export const UPDATE_RECIPES = 'UPDATE_RECIPES';

function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case UPDATE_NAME:
            return {...state, recipeName: payload};
        case UPDATE_CATEGORY:
            return {...state, recipeCategory: payload};
        case UPDATE_FIRSTNAME:
            return {...state, firstName: payload};
        case UPDATE_LASTNAME:
            return {...state, lastName: payload};
        case UPDATE_INGREDIENTS:
            const newIngredients = [...state.ingredients, payload];
            return {...state, ingredients: newIngredients};
        case UPDATE_INSTRUCTIONS:
            const newInstructions = [...state.instructions, payload];
            return {...state, instructions: newInstructions};
        case UPDATE_RECIPES:
            const {recipeName, recipeCategory, firstName, lastName, ingredients, instructions} = state;
            const recipe = {
                recipeName,
                recipeCategory,
                firstName,
                lastName,
                ingredients,
                instructions
            };
            const newRecipes = [...state.recipes, recipe];
            return {...state, recipes: newRecipes};
        default:
            return state;
    }
}

export default createStore(reducer);
