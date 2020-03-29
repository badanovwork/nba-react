import axios from 'axios';
import teams from '../../assets/teams-desc.json';

export const GET_PLAYERS = 'GET_PLAYERS';
export const FAVORITES_PLAYER = 'FAVORITES_PLAYER';
export const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
export const TOOGLE_IS_MAIN = 'TOOGLE_IS_MAIN';

export const INC_COUNT_CARDS = 'INC_COUNT_CARDS';
export const SEARCH_NAME = 'SEARCH_NAME';

export const getPlayers = () => {
    return dispatch => {
        dispatch(toggleIsFethchingAC());
        if (localStorage.getItem("players")) {
            const getLocalStoragePlayers = JSON.parse(localStorage.getItem("players"));
            dispatch(getPlayersAC(getLocalStoragePlayers));
            dispatch(toggleIsFethchingAC());
        } else {
            axios
                .get(`http://nba-players.herokuapp.com/players-stats`)
                .then(result => {
                    result.data.forEach(( player, index ) => {
                        player.id = index;
                        player.avatar_url = getAvatarPlayers(player.name);
                        player.logo_url = addLogoTeamToPlayer(player.team_acronym);
                        player.favorites = false;
                        return player;
                    })
                    const localStorageItems = JSON.stringify(result.data)
                    localStorage.setItem('players', localStorageItems);
                    dispatch(getPlayersAC(result.data));
                    dispatch(toggleIsFethchingAC());
                })
        }
    }
}

const addLogoTeamToPlayer = (value) => {
    let team = teams.find(item => item.tag === value && item.tag !== undefined)
    if (team !== undefined) {
        return team.logo
    }
    return 'no team'
}

const getAvatarPlayers = (fullName) => {
    const arrName = fullName.toLowerCase().split(' ');
    if (arrName.length > 2) {
        return `https://nba-players.herokuapp.com/players/${arrName[1].replace(".", "")}_${arrName[2].replace(".", "")}/${arrName[0].replace(".", "")}`;
    } else {
        return `https://nba-players.herokuapp.com/players/${arrName[1].replace(".", "")}/${arrName[0].replace(/\./g, "")}`;
    }
}

const getPlayersAC = (data) => ({
    type: GET_PLAYERS,
    payload: data
})

const toggleIsFethchingAC = () => ({
    type: TOOGLE_IS_FETCHING
})

export const changeInputAC = (data) => ({
    type: SEARCH_NAME,
    payload: data
})

export const toggleIsMainAC = () => ({
    type: TOOGLE_IS_MAIN
})

export const incCountCardsAC = () => ({
    type: INC_COUNT_CARDS,
    payload: 6
})

export const favoritesPlayerAC = (id) => ({
    type: FAVORITES_PLAYER,
    payload: id
})