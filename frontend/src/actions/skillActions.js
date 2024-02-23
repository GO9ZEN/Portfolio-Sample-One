import axios from "axios"
import { SKILLS_DETAILS_FAIL, SKILLS_DETAILS_REQUEST, SKILLS_DETAILS_SUCCESS } from "../constants/skillConstants"

export const detailsSkills = () => async (dispatch) => {
    try {
        dispatch({ type: SKILLS_DETAILS_REQUEST })

        const { data } = await axios.get('/api/skills')

        dispatch({
            type: SKILLS_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SKILLS_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}