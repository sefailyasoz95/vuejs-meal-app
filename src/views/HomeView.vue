<template>
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
</template>

<script lang="ts" setup>
import store from "@/store";
import { computed, onBeforeMount } from "vue";
import CategoryItem from "@/components/CategoryItem.vue";
const categories = computed(() => store.state.categories);
onBeforeMount(() => {
	categories.value.length < 1 && store.dispatch("getCategories");
});
</script>
