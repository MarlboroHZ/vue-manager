export default {
    state: {
        isCollapse: false
    },
    mutations: {
        collapseMenu(state) {
            return state.isCollapse = !state.isCollapse;
        }
    }
}