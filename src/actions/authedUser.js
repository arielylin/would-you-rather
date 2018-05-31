export const AUTHED_USER = "AUTHED_USER"

export function getAuthedUser(user) {
   return {
       type: AUTHED_USER,
       user,
   }
}