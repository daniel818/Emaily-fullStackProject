/**
 * Created by Daniel on 06/12/2017.
 */
import { FETCH_SURVEYS } from "../actions/types";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_SURVEYS:
            return action.payload;
        default:
            return state;
    }
}
