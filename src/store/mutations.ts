// function setSearchedMeals(state: any, meals: any) {
// 	state.searchedMeals = meals;
// }
// function setCategories(state: any, categories: any) {
// 	state.categories = categories;
// }
// function setErrorMessage(state: any, message: string) {
// 	state.errorMessage = message;
// }

function setState(state: any, payload: { key: string; value: any }) {
	console.log("payload: ", payload);

	state[payload.key] = payload.value;
}

export default {
	// setSearchedMeals,
	// setErrorMessage,
	// setCategories,
	setState,
};
