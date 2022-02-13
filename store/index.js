import { SET_USER } from './types'
const state = () => ({
  user: null,
})
const getters = {
  getUser: state => state.user
}
const actions = {
  onAuthStateChangedAction(ctx, { authUser, claims }){
    if (!authUser) {
      // remove state
      ctx.commit(SET_USER, null)

      //redirect from here
      this.$router.push({
        path: '/auth/signin',
      })
    } else {
      const { uid, email } = authUser
      ctx.commit(SET_USER, {
        uid,
        email,
      })
    }
  },
  // async onAuthStateChangedAction(ctx, { authUser, claims }) {
  //   if (!authUser) {
  //     // remove state
  //     ctx.commit(SET_USER, null)
  //
  //     //redirect from here
  //     this.$router.push({
  //       path: '/auth/signin',
  //     })
  //   } else {
  //     const { uid, email } = authUser
  //     ctx.commit(SET_USER, {
  //       uid,
  //       email,
  //     })
  //   }
  // },
}


const mutations = {
  [SET_USER](state, user) {
    console.log("s", user)
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
