import { legacy_createStore } from 'redux';

const couterReducer = (state = {coffee: 0, isLoggedIn: false, sugar: 0}, action) => {
    if (action.type === 'incrementCoffee'){
        return {
           coffee: state.coffee + 1,
           isLoggedIn: state.isLoggedIn,
           sugar: state.sugar
        }
    }
    else if (action.type === 'decrementCoffee'){
        return {
           coffee: state.coffee - 1,
           isLoggedIn: state.isLoggedIn,
           sugar: state.sugar
        }
    }
    else if (action.type === 'increase'){
        return {
           coffee: state.coffee + action.number,
           isLoggedIn: state.isLoggedIn,
           sugar: state.sugar
        }
    }
    else if(action.type === 'logIn'){
        return {
            coffee: state.coffee,
            isLoggedIn: true,
            sugar: state.sugar
         }
    }

    else if (action.type === 'incrementSugar'){
        return {
           sugar: state.sugar + 1,
           isLoggedIn: state.isLoggedIn,
           coffee: state.coffee
        }
    }
    else if (action.type === 'decrementSugar'){
        return {
            sugar: state.sugar - 1,
            isLoggedIn: state.isLoggedIn,
            coffee: state.coffee
        }
    }
    else if (action.type === 'increaseSugar'){
        return {
            sugar: state.sugar + action.number,
            isLoggedIn: state.isLoggedIn,
            coffee: state.coffee
        }
    }
    else if(action.type === 'logIn'){
        return {
            sugar: state.sugar,
            isLoggedIn: true,
            coffee: state.coffee
         }
    }else
    return state
}

const store = legacy_createStore(couterReducer); 

export default store;