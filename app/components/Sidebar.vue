<script setup lang="ts">
import { useSortable } from "@vueuse/integrations/useSortable";

const { addComponent, page, state } = useBuilderPage();

const items = [
	{ title: "Components", icon: "i-fluent-mdl2:web-components", slot: "components" },
	{ title: "Pages", icon: "i-material-symbols:library-books-outline", slot: "pages" },
	{ title: "Settings", icon: "i-heroicons-cog-6-tooth", slot: "settings" },
];

const removeComponent = (index: number): void => {
	state.value.activeComponentIndex = null;
	page.value.splice(index, 1);
};

const tree = ref<HTMLElement | null>(null);

// Watch when `tree` to make the sortabe work
watch(tree, async (el) => {
	if (!el) return;
	await nextTick(); // Wait for the DOM to be updated
	useSortable(el, page, { handle: ".handle", animation: 200 });
});
</script>

<template>
	<VAccordion :items="items" header-class="px-4 hover:bg-primary/10" content-class="px-4 py-2">
		<template #components>
			<div class="grid grid-cols-4 gap-2">
				<!-- heading -->
				<div class="flex-center hover:bg-primary/10 aspect-square flex justify-center items-center cursor-pointer rounded-md border" @click="addComponent('heading')">
					<Icon class="text-3xl" name="i-gravity-ui:heading" />
				</div>
				<!-- paragraph -->
				<div class="flex-center hover:bg-primary/10 aspect-square flex justify-center items-center cursor-pointer rounded-md border" @click="addComponent('paragraph')">
					<Icon class="text-3xl" name="i-material-symbols:format-paragraph-rounded" />
				</div>
				<!-- hero -->
				<div class="flex-center hover:bg-primary/10 aspect-square flex justify-center items-center cursor-pointer rounded-md border" @click="addComponent('hero')">
					<Icon class="text-3xl" name="i-game-icons:tattered-banner" />
				</div>
			</div>

			<hr class="mt-4" />

			<!-- tree -->
			<div>
				<h3 class="text-sm text-primary my-2 capitalize">Tree</h3>

				<div class="space-y-1" ref="tree">
					<div v-for="(component, index) in page" :key="index" class="flex items-center gap-2 justify-between hover:bg-gray-50 select-none">
						<div class="flex items-center gap-2">
							<Icon class="cursor-pointer handle" name="i-heroicons:bars-3-solid" :width="18" :height="18" />
							<h3 class="text-sm capitalize">{{ component.name }}</h3>
						</div>
						<Icon class="cursor-pointer text-red-500" name="i-heroicons:x-mark-20-solid" :width="18" :height="18" @click="removeComponent(index)" />
					</div>
				</div>
			</div>
		</template>

		<template #pages>
			<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure velit magni sequi enim corrupti atque, nihil minus harum perspiciatis! Officiis tenetur reiciendis rerum quam, quos amet explicabo enim nihil!</div>
		</template>

		<template #settings>
			<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure velit magni sequi enim corrupti atque, nihil minus harum perspiciatis! Officiis tenetur reiciendis rerum quam, quos amet explicabo enim nihil!</div>
		</template>
	</VAccordion>
</template>
