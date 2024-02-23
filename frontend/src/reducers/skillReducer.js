import { SKILLS_DETAILS_FAIL, SKILLS_DETAILS_REQUEST, SKILLS_DETAILS_SUCCESS } from "../constants/skillConstants"

export const skillsDetailsReducer = (state = { skillsData: [] }, action) => {
    switch (action.type) {
        case SKILLS_DETAILS_REQUEST:
            return { loading: true, skillsData: [] }
        case SKILLS_DETAILS_SUCCESS:
            return { loading: false, skillsData: action.payload } 
        case SKILLS_DETAILS_FAIL:
            return { loading: false, error: action.payload } 
        default:
            return state
    }
}