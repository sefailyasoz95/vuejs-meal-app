import { createStore } from "vuex";
import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default createStore({
	state: state,
	actions: actions,
	getters: getters,
	mutations: mutations,
	modules: {},
});
