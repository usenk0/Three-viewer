import store from '../store'
export default {
    state: {
        userData: "",
    },
    getters: {},
    mutations: {
        setUser(state, payload) {
            this.state.userData = payload
        },
        logOutUser(state) {
            this.state.userData = ""
        }
    },
    actions: {},
    methods: {},
    getters: {},

}