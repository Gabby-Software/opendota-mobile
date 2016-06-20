import { types } from '../actions/player_heroes_act';
var initialState = { isLoadingHeroes: false, isEmptyHeroes: false, heroes: {} };

export default function playerHeroesState(state = initialState, action = {}) {
    switch(action.type) {
        case types.REQUEST_HEROES:
            return Object.assign({}, state, { isLoadingHeroes: true, isEmptyHeroes: false, heroes: {} });
        case types.RECEIVE_HEROES:
            return Object.assign({}, state, { isLoadingHeroes: false, isEmptyHeroes: false, heroes: action.heroes });
        case types.RECEIVE_EMPTY_HEROES:
            return Object.assign({}, state, { isLoadingHeroes: false, isEmptyHeroes: true, heroes: {} });
        default:
            return state;
    }
}
