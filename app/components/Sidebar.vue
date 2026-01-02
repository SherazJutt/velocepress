<script setup>
import { useSortable } from "@vueuse/integrations/useSortable";
import { Hamburger, Close } from "veloce-vue/icons";

const { addComponent, page, state } = useBuilderPage();

const items = [
	{ label: "Components", icon: "i-fluent-mdl2:web-components", slot: "components" },
	{ label: "Pages", icon: "i-material-symbols:library-books-outline", slot: "pages" },
	{ label: "Settings", icon: "i-heroicons-cog-6-tooth", slot: "settings" },
];

const removeComponent = (index) => {
	state.value.activeComponentIndex = null;
	page.value.splice(index, 1);
};

const tree = ref(null);

// Watch when `tree` to make the sortabe work
watch(tree, async (el) => {
	if (!el) return;
	await nextTick(); // Wait for the DOM to be updated
	useSortable(el, page, { handle: ".handle", animation: 200 });
});
</script>

<template>
	<UAccordion :items="items" :ui="{ header: 'px-4 hover:bg-primary/10', content: 'px-4 py-2', item: 'last:border-b' }">
		<template #components="{ item }">
			<div class="space-y-2">
				<!-- heading -->
				<div class="flex-center hover:bg-primary/10 cursor-pointer p-2 rounded-md border" @click="addComponent('heading')">Heading</div>
				<!-- paragraph -->
				<div class="flex-center hover:bg-primary/10 cursor-pointer p-2 rounded-md border" @click="addComponent('paragraph')">Paragraph</div>
				<!-- hero -->
				<div class="flex-center hover:bg-primary/10 cursor-pointer p-2 rounded-md border" @click="addComponent('hero')">Hero</div>
			</div>

			<hr class="mt-4" />

			<!-- tree -->
			<div>
				<h3 class="text-sm text-primary my-2 capitalize">Tree</h3>

				<div class="space-y-1" ref="tree">
					<div v-for="(component, index) in page" :key="index" class="flex items-center gap-2 justify-between hover:bg-gray-50 select-none">
						<div class="flex items-center gap-2">
							<Hamburger class="cursor-pointer handle" :size="18" />
							<h3 class="text-sm capitalize">{{ component.name }}</h3>
						</div>
						<Close class="cursor-pointer text-red-500" :size="18" @click="removeComponent(index)" />
					</div>
				</div>
			</div>
		</template>

		<template #pages="{ item }">
			<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure velit magni sequi enim corrupti atque, nihil minus harum perspiciatis! Officiis tenetur reiciendis rerum quam, quos amet explicabo enim nihil!</div>
		</template>

		<template #settings="{ item }">
			<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure velit magni sequi enim corrupti atque, nihil minus harum perspiciatis! Officiis tenetur reiciendis rerum quam, quos amet explicabo enim nihil!</div>
		</template>
	</UAccordion>
</template>
