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
	<div class="p-6 flex items-center justify-center gap-3">
		<input
			type="text"
			v-model="keyword"
			class="rounded border ring-0 outline-none focus:ring-0 focus:border-orange-600 w-[300px]"
			placeholder="Search a meal"
		/>
		<button
			class="border-white border-2 p-1.5 rounded hover:border-orange-600 text-orange-600 font-semibold"
			@click="searchMeals"
		>
			Search
		</button>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 px-6 mb-10">
		<div v-for="meal of meals" v-bind:key="meal?.idMeal">
			<Meal :meal="meal" @on-view-details="onWiewDetails" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import Meal from "@/components/Meal.vue";
import store from "@/store";
import { onMounted, ref } from "vue";
import { computed } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { Meal as MealType } from "@/types";

const keyword = ref("");
const isDetailModalOpen = ref(false);
const selectedMeal = ref<undefined | any>(undefined);
const meals = computed(() => store.state.searchedMeals);

const route = useRoute();
const router = useRouter();

const onModalClose = () => {
	isDetailModalOpen.value = false;
	selectedMeal.value = undefined;
};

const onWiewDetails = (meal: MealType) => {
	selectedMeal.value = meal;
	isDetailModalOpen.value = true;
};
const searchMeals = () => {
	if (route.params.id) {
		router.replace({ params: { id: "" } });
	}
	store.dispatch("searchMeals", keyword.value);
};

onMounted(() => {
	if (route.params?.name) {
		keyword.value = route.params.name as string;
		if (keyword.value) {
			searchMeals();
		}
	} else {
		store.dispatch("getMealById", route.params.id);
	}
});
</script>
<style>
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 500ms ease-out;
}
</style>
