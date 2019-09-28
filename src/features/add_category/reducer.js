import {
    REQUEST_ADD_CATEGORY,
    RECEIVE_NEW_CATEGORY,
    GO_BACK
} from './action'

export default function categories(state = {
    isFetching : false,
    items : []
}, action
) {
    switch(action.type) {
        case REQUEST_ADD_CATEGORY:
            return Object.assign({}, state, {
                isFetching : true
            })
        case RECEIVE_NEW_CATEGORY:
            return Object.assign({}, state, {
                isFetching: false,
                items: [
                    ...state.items,
                    action.category
                ]
            })
        case GO_BACK: return state;        
    }
}

