import axiosClient from "@/axiosClient";

async function searchMeals({ commit }: any, keyword: string) {
	try {
		const response = await axiosClient.get(`search.php?s=${keyword}`);
		commit("setState", { key: "searchedMeals", value: response.data.meals });
	} catch (error) {
		commit("setErrorMessage", "Cannot fetch meals");
	}
}
async function getCategories({ commit }: any) {
	try {
		const response = await axiosClient.get(`categories.php`);
		commit("setState", { key: "categories", value: response.data.categories });
	} catch (error) {
		commit("setErrorMessage", "Cannot fetch categories");
	}
}

async function getMealsByCategory({ commit }: any, category: string) {
	try {
		const response = await axiosClient.get(`filter.php?c=${category}`);
		commit("setState", { key: "mealsByCategory", value: response.data.meals });
	} catch (error) {
		commit("setErrorMessage", "Cannot fetch meals!!");
	}
}
async function getMealById({ commit }: any, id: string) {
	try {
		const response = await axiosClient.get(`lookup.php?i=${id}`);
		commit("setState", { key: "searchedMeals", value: response.data.meals });
	} catch (error) {
		commit("setErrorMessage", "Cannot fetch meals!!");
	}
}
export default {
	searchMeals,
	getCategories,
	getMealsByCategory,
	getMealById,
};
