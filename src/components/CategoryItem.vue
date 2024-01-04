<template>
	<router-link
		:to="{ name: 'category', params: { category: category?.strCategory } }"
		class="flex flex-col rounded-xl drop-shadow-md bg-white text-center justify-between w-[350px] p-2 hover:drop-shadow-xl transition-all cursor-pointer duration-300 ease-in-out"
	>
		<img :src="category?.strCategoryThumb" :alt="category?.strCategory" class="rounded-t-xl h-40 w-full object-cover" />
		<h3 class="font-bold text-2xl">
			{{ category?.strCategory }}
		</h3>
		<span class="text-xs font-medium p-1 h-32 no-scrollbar overflow-scroll">
			{{ category?.strCategoryDescription }}
		</span>
	</router-link>
</template>

<script lang="ts" setup>
import { Category } from "@/types";
import { PropType, defineProps } from "vue";
const props = defineProps({
	category: Object as PropType<Category>,
});
</script>
