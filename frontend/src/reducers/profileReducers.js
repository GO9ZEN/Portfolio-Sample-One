import { PROFILE_DETAILS_REQUEST, PROFILE_DETAILS_SUCCESS, PROFILE_DETAILS_FAIL } from "../constants/profileConstants"

export const profileDetailsReducer = (state = { profileInformations: [] }, action) => {
    switch (action.type) {
        case PROFILE_DETAILS_REQUEST:
            return { loading: true, profileInformations: [] }
        case PROFILE_DETAILS_SUCCESS:
            return { loading: false, profileInformations: action.payload } 
        case PROFILE_DETAILS_FAIL:
            return { loading: false, error: action.payload } 
        default:
            return state
    }
}