<template>
	<div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 px-6 mb-10">
		<div v-for="meal of meals" v-bind:key="meal?.idMeal">
			<router-link :to="{ name: 'byId', params: { id: meal.idMeal } }">
				<Meal :meal="meal" />
			</router-link>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Meal from "@/components/Meal.vue";
import store from "@/store";
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const meals = computed(() => store.state.mealsByCategory);

onBeforeMount(() => store.dispatch("getMealsByCategory", route.params.category));
</script>
