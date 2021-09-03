// const defaultState = {
//     users: []
// }

function pinned(state = [], action) {
    switch (action.type) {
        case 'PIN_USER':
            return [ ...state, action.user]
        case 'UNPIN_USER':
            return state.filter(user => user.data.summary.all.timePlayed !== action.user.data.summary.all.timePlayed)
        default:
            return state
    }
}

export default pinned

