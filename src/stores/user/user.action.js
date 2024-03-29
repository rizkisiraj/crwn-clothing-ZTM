import { createAction } from "../../utils/reducers/reducer.utils"
import { USER_ACTION_TYPES } from "./user.type"

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)