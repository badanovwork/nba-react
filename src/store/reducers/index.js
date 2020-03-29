import { GET_PLAYERS, TOOGLE_IS_FETCHING, TOOGLE_IS_MAIN, INC_COUNT_CARDS, SEARCH_NAME, FAVORITES_PLAYER } from '../action'
import teams from '../../assets/teams-desc.json';


const initialState = {
    searchName: '',
    countCards: 10,
    isFetching: false,
    players: [],
    teams: teams
}

function rootReducer(state = initialState, action){
    switch(action.type) {
        case GET_PLAYERS:  
            return {
                ...state,
                players: action.payload
            }
        case TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching : !state.isFetching
            }
        case TOOGLE_IS_MAIN:
            return {
                ...state,
                isMainToggle: !state.isMainToggle
            }
        case INC_COUNT_CARDS:
            return {
                ...state,
                countCards: state.countCards + action.payload
            }
        case SEARCH_NAME:
            return {
                ...state,
                searchName: action.payload 
            }
        case FAVORITES_PLAYER:
            return Object.assign({}, state, {
                players: state.players.map((player, index) => {
                  if (index === action.payload) {
                    return Object.assign({}, player, {
                        favorites: !player.favorites
                    })
                  }
                  return player
                })
              })
        default:
            return state;
      }
}

export default rootReducer;