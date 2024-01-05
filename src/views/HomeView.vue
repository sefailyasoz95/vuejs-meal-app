<template>
	<div v-if="isDetailModalOpen">
		<div
			class="fixed transition-all flex items-center justify-center bg-black h-screen top-0 left-0 w-screen bg-opacity-70 inset-0 z-[999]"
			@click="onModalClose"
		>
			<div class="flex p-10 rounded-xl bg-white flex-col">
				<div v-for="i of 20" class="bg-opacity-100 flex flex-col gap-10 w-max">
					<div v-if="Boolean(selectedMeal['strIngredient' + i])">
						<code class="text-2xl font-semibold">{{ i }}. {{ selectedMeal["strIngredient" + i] }}</code>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-1 gap-2 p-5">
		<code class="font-semibold"> Categories </code>
		<div
			v-if="categories.length > 0"
			class="flex flex-row items-center flex-nowrap gap-5 overflow-scroll p-5 border-2 border-orange-600 no-scrollbar rounded-xl"
		>
			<div v-for="category of categories" v-bind:key="category?.idCategory">
				<CategoryItem :category="category" />
			</div>
		</div>
		<div v-else class="flex flex-row items-center justify-center font-semibold">
			<code> There is no category to show at the moment </code>
		</div>
	</div>
	<div class="grid grid-cols-1 gap-2 p-5">
		<code class="font-semibold"> Random Selections For You </code>
		<div
			v-if="randomMeals.length > 0"
			class="flex flex-row items-center flex-nowrap gap-5 overflow-scroll p-5 border-2 border-orange-600 no-scrollbar rounded-xl"
		>
			<div v-for="randomMeal of randomMeals" v-bind:key="randomMeal?.idMeal">
				<Meal :meal="randomMeal" @on-view-details="onWiewDetails" />
			</div>
		</div>
		<div v-else class="flex flex-row items-center justify-center font-semibold">
			<code> There is no category to show at the moment </code>
		</div>
	</div>
</template>

<script lang="ts" setup>
import store from "@/store";
import { computed, onBeforeMount, ref } from "vue";
import CategoryItem from "@/components/CategoryItem.vue";
import Meal from "@/components/Meal.vue";
import { Meal as MealType } from "@/types";
const isDetailModalOpen = ref(false);
const selectedMeal = ref<undefined | any>(undefined);

const onModalClose = () => {
	isDetailModalOpen.value = false;
	selectedMeal.value = undefined;
};

const onWiewDetails = (meal: MealType) => {
	selectedMeal.value = meal;
	isDetailModalOpen.value = true;
};

const categories = computed(() => store.state.categories);
const randomMeals = computed(() => store.state.randomMeals);

onBeforeMount(() => {
	categories.value.length < 1 && store.dispatch("getCategories");
	randomMeals.value.length < 1 && store.dispatch("getRandomMeals");
});
</script>
