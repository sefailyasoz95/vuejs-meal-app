import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByCategory from "../views/MealsByCategory.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: DefaultLayout,
		children: [
			{
				path: "/",
				name: "home",
				component: HomeView,
			},
			{
				path: "/search/:name?",
				name: "byName",
				component: MealsByName,
			},
			{
				path: "/search/:id?",
				name: "byId",
				component: MealsByName,
			},
			{
				path: "/category/:category",
				name: "category",
				component: MealsByCategory,
			},
		],
	},
	{
		path: "/guest",
		component: GuestLayout,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
