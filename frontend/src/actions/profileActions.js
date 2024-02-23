import axios from "axios"
import { PROFILE_DETAILS_REQUEST, PROFILE_DETAILS_SUCCESS, PROFILE_DETAILS_FAIL } from "../constants/profileConstants"

export const detailsProfile = () => async (dispatch) => {
    try {
        dispatch({ type: PROFILE_DETAILS_REQUEST })

        const { data } = await axios.get('/api/profile')

        dispatch({
            type: PROFILE_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}