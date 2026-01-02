<script setup lang="ts">
const { state, page } = useBuilderPage();
const { textSizes, textStyles, headings, textWeights } = staticData();

const openPopovers = ref<Record<string, boolean>>({});

const togglePopover = (key: string) => {
	// Close all other popovers
	Object.keys(openPopovers.value).forEach((k) => {
		if (k !== key) openPopovers.value[k] = false;
	});
	openPopovers.value[key] = !openPopovers.value[key];
};

const closePopover = (key: string) => {
	openPopovers.value[key] = false;
};

// Close popovers when clicking outside
const handleClickOutside = (e: MouseEvent) => {
	const target = e.target as HTMLElement;
	if (!target.closest('.popover-container')) {
		Object.keys(openPopovers.value).forEach((key) => {
			openPopovers.value[key] = false;
		});
	}
};

onMounted(() => {
	document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
	document.removeEventListener('click', handleClickOutside);
});

// Convert items array to VeloceVue Accordion format
const accordionItems = computed(() => {
	if (!page.value[state.value.activeComponentIndex]?.customizer) return [];
	return page.value[state.value.activeComponentIndex].customizer.map((item: any) => ({
		title: item.category,
		icon: item.category === 'content' ? 'fluent:content-view-32-regular' : item.category === 'customizations' ? 'hugeicons:customize' : '',
		slot: item.category,
	}));
});
</script>

<template>
	<div class="px-3.5 py-2 flex justify-between items-center">
		<h2 class="text-primary text-base">Customizations</h2>
		<VButton variant="ghost" severity="neutral" class="text-xl cursor-pointer" @click="state.activeComponentIndex = null">
			<Icon name="i-tabler:arrow-right" />
		</VButton>
	</div>

	<div class="space-y-2 border-t">
		<VAccordion :items="accordionItems" header-class="px-3.5 hover:bg-primary/5" content-class="px-3.5 pb-3.5">
			<template v-for="currItem in page[state.activeComponentIndex]?.customizer" :key="currItem.category" #[currItem.category]>
				<template v-for="(item, index) in currItem.items" :key="index">
					<!-- select -->
					<div v-if="item.component === 'select'">
						<h3 :class="{ 'mt-0': index === 0 }" class="my-2 text-sm">{{ item.label }}</h3>
						<div class="flex items-center gap-1 relative">
							<VSelect
								v-model="page[state.activeComponentIndex][currItem.category][item.ref]"
								class="w-full"
								:options="item.type === 'heading' ? headings : item.type === 'size' ? textSizes : item.type === 'style' ? textStyles : item.type === 'weight' ? textWeights : []"
							/>
							<div class="relative popover-container">
								<VButton variant="soft" severity="neutral" @click.stop="togglePopover(`${currItem.category}-${item.ref}`)">
									<Icon name="i-famicons:options-outline" />
								</VButton>
								<div
									v-if="openPopovers[`${currItem.category}-${item.ref}`]"
									class="absolute right-0 top-full mt-1 bg-white border rounded-md shadow-lg z-10 p-2"
									@click.stop
								>
									<VButton variant="soft" severity="error" @click="page[state.activeComponentIndex][currItem.category][item.ref] = item.default || ''; closePopover(`${currItem.category}-${item.ref}`)">
										Reset
									</VButton>
								</div>
							</div>
						</div>
					</div>
					<!-- input -->
					<div v-if="item.component === 'input'">
						<h3 :class="{ 'mt-0': index === 0 }" class="my-2 text-sm">{{ item.label }}</h3>
						<div class="flex items-center gap-1 relative">
							<VInput
								v-model="page[state.activeComponentIndex][currItem.category][item.ref]"
								class="w-full"
								placeholder="Enter text"
							/>
							<div class="relative popover-container">
								<VButton variant="soft" severity="neutral" @click.stop="togglePopover(`input-${currItem.category}-${item.ref}`)">
									<Icon name="i-famicons:options-outline" />
								</VButton>
								<div
									v-if="openPopovers[`input-${currItem.category}-${item.ref}`]"
									class="absolute right-0 top-full mt-1 bg-white border rounded-md shadow-lg z-10 p-2"
									@click.stop
								>
									<VButton variant="soft" severity="error" @click="page[state.activeComponentIndex][currItem.category][item.ref] = item.default || ''; closePopover(`input-${currItem.category}-${item.ref}`)">
										Reset
									</VButton>
								</div>
							</div>
						</div>
					</div>
				</template>
			</template>
		</VAccordion>

		<!-- <pre>{{ page[state.activeComponentIndex]?.customizer }}</pre> -->
	</div>
</template>
