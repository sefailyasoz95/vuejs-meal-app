function setState(state: any, payload: { key: string; value: any }) {
	state[payload.key] = payload.value;
}

export default {
	setState,
};
