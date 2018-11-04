import { State, DEFAULT_STATE } from '../lib'
import { NEW_DATA, IS_FETCHING, ERROR_FETCHING_DATA } from '../actions';

export default function (state: State = DEFAULT_STATE, action: any = {}) {
    switch (action.type) {
        case IS_FETCHING:
            return {
                ...state, loading: action.payload.fetching
            };
            break;

        case NEW_DATA:
            return {
                ...state, results: action.payload.response.data.data.data
            };
            break;

        case ERROR_FETCHING_DATA:
            return state;
            break;

        default:
            return state;
            break;
    }
}