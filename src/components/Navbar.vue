<template>
	<header class="bg-white shadow-sm h-16 flex px-2 justify-between items-center">
		<router-link
			:to="{ name: 'home' }"
			class="px-2 transition-colors py-1 border-2 rounded-xl flex flex-col text-center border-white hover:border-orange-600 text-orange-600 font-semibold"
		>
			<span>World Kitchen</span>
			<small style="font-size: 10px">Different tastes from all around the world</small>
		</router-link>
		<div class="flex items-center gap-2">
			<router-link
				:to="{ name: 'byName' }"
				class="px-2 h-full transition-colors py-1 border-2 rounded-xl border-white hover:border-orange-600 text-orange-600 font-semibold"
			>
				Search Meals
			</router-link>
		</div>
	</header>
</template>
