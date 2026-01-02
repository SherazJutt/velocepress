<script setup lang="ts">
useSeoMeta({ title: "Page Builder | VelocePress" });
const { state } = useApp();
const { state: builderState, page, save } = useBuilderPage();
</script>

<template>
	<nav class="relative flex h-[64px] w-full items-center justify-between self-center border-b pr-8 pl-4">
		<div class="flex items-center gap-4">
			<VButton variant="soft" severity="primary" size="md" class="hiddenmd:block cursor-pointer p-1" @click="state.showSidebar = !state.showSidebar">
				<Icon name="i-quill:hamburger-sidebar" class="size-6" />
			</VButton>
			<div class="text-lg text-gray-700">Page builder</div>
		</div>

		<div class="flex items-center gap-4">
			<VButton @click="save">
				<Icon name="i-lucide-lab:save" />
			</VButton>
			<div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
				<Icon name="i-lucide-image" class="size-6" />
			</div>
		</div>
	</nav>

	<main class="overflow-hidden relative">
		<div :class="state.showSidebar ? 'left-0' : '-left-full'" class="absolute w-[260px] z-10 top-0 bottom-0 border-r bg-white duration-200">
			<Sidebar />
		</div>
		<div :class="[state.showSidebar ? 'xl:pl-[268px] ' : 'pl-2 ', builderState.activeComponentIndex !== null ? '4xl:pr-[268px]' : '4xl:pr-2']" class="h-full duration-200 w-full p-2">
			<slot />
		</div>
		<div :class="builderState.activeComponentIndex !== null ? 'right-0' : '-right-full'" class="z-10 shadow-xl w-[260px] absolute top-0 bottom-0 border-l bg-white duration-200">
			<!-- customizer tab where we show the customizations of the selected component -->
			<Customizer />
		</div>
	</main>
</template>
