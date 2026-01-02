<script setup lang="ts">
interface Props {
	content: {
		text: string;
	};
	customizations: {
		level: number;
		[key: string]: any;
	};
}

defineProps<Props>();
</script>
<template>
	<component :is="'h' + customizations.level" :class="[Object.values(customizations)]">{{ content.text }}</component>
</template>
