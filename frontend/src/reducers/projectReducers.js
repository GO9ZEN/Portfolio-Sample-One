import { PROJECT_DETAILS_FAIL, PROJECT_DETAILS_REQUEST, PROJECT_DETAILS_SUCCESS } from "../constants/projectConstants"

export const projectDetailsReducer = (state = { projects: [] }, action) => {
    switch (action.type) {
        case PROJECT_DETAILS_REQUEST:
            return { loading: true, projects: [] }
        case PROJECT_DETAILS_SUCCESS:
            return { loading: false, projects: action.payload } 
        case PROJECT_DETAILS_FAIL:
            return { loading: false, error: action.payload } 
        default:
            return state
    }
}