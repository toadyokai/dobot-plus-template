import { userMagamentActionsType } from '../actions/userMagamentActions'
import { userMagamentState } from '@dobot/store/types'

const initialStore: userMagamentState = {
  userModalData: {
    show: false,
  },
  permissionList: [
    [1, 'TR_LEVEL_1'],
    [2, 'TR_LEVEL_2'],
    [3, 'TR_LEVEL_3'],
  ],
  currentLevel: 0,
  currentUserInfo: ''
}
const userMagamentReducer = (
  state = initialStore,
  action: { type: string; params: any }
) => {
  switch (action.type) {
    case userMagamentActionsType.SETUSERMODALDATA: {
      return Object.assign({}, state, { userModalData: action.params })
    }
    case userMagamentActionsType.SET_PERMISSIONLIST: {
      return Object.assign({}, state, { permissionList: action.params })
    }
    case userMagamentActionsType.SET_CURRENT_LEVEL: {
      return Object.assign({}, state, { currentLevel: action.params })
    }
    case userMagamentActionsType.SET_CURRENT_USER_INFO: {
      return Object.assign({}, state, { currentUserInfo: action.params })
    }
    default:
      return state
  }
}

export default userMagamentReducer
