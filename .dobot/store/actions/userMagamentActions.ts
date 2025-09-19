export const userMagamentActionsType = {
  SETUSERMODALDATA: 'setUserModalData',
  SET_PERMISSIONLIST: 'setPermissionList',
  SET_CURRENT_LEVEL: 'setCurrentLevel',
  SET_CURRENT_USER_INFO: 'setCurrentUserInfo'
}
class UserMagamentActions {
  setUserModalData = (params: any) => ({
    type: userMagamentActionsType.SETUSERMODALDATA,
    params,
  })
  setPermissionList = (params: any) => ({
    type: userMagamentActionsType.SET_PERMISSIONLIST,
    params,
  })
  setCurrentLevel = (params: any) => ({
    type: userMagamentActionsType.SET_CURRENT_LEVEL,
    params,
  })
  setCurrentUserInfo = (params: any) => ({
    type: userMagamentActionsType.SET_CURRENT_USER_INFO,
    params,
  })
}
export const userMagamentActions = new UserMagamentActions()
