<template>
	<div class="flex flex-col rounded-xl drop-shadow-lg bg-white text-center justify-between">
		<img :src="meal?.strMealThumb" :alt="meal?.strMeal" class="rounded-t-xl h-64 w-full object-cover" />
		<h3 class="font-bold text-2xl">
			{{ meal?.strMeal }}
		</h3>
		<span v-if="meal?.strInstructions" class="text-xs font-medium no-scrollbar p-1 h-40 overflow-scroll">
			{{ meal?.strInstructions }}
		</span>
		<div class="flex flex-row items-center justify-between p-3" v-if="meal?.strYoutube">
			<a class="bg-red-600 text-white p-1 rounded-md text-xs font-semibold" :href="meal?.strYoutube" target="_blank"
				>Watch on YouTube</a
			>
			<button class="bg-blue-600 text-white text-xs font-semibold p-1 rounded-md" @click="onViewDetails">
				View Ingredients
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineProps, PropType, defineEmits } from "vue";
import { Meal } from "../types";

const props = defineProps({
	meal: {
		type: Object as PropType<Meal>,
		required: true,
	},
});
const emit = defineEmits(["onViewDetails"]);
const onViewDetails = () => emit("onViewDetails", props.meal);
</script>
