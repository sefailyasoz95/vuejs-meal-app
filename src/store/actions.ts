import axiosClient from "@/axiosClient";
import { Meal } from "@/types";

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

async function getRandomMeals({ commit }: any) {
	let meals = [] as Meal[];
	try {
		const response1 = await axiosClient.get(`random.php`);
		const response2 = await axiosClient.get(`random.php`);
		const response3 = await axiosClient.get(`random.php`);
		meals.push(response1.data.meals[0]);
		meals.push(response2.data.meals[0]);
		meals.push(response3.data.meals[0]);
		commit("setState", { key: "randomMeals", value: meals });
	} catch (error) {
		commit("setErrorMessage", "Cannot fetch meals!!");
	}
}

export default {
	searchMeals,
	getCategories,
	getMealsByCategory,
	getMealById,
	getRandomMeals,
};
