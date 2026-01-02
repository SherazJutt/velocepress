<script setup lang="ts">
interface Props {
	content: {
		text: string;
	};
	customizations: {
		[key: string]: any;
	};
}

defineProps<Props>();
</script>
<template>
	<p :class="[Object.values(customizations)]">{{ content.text }}</p>
</template>
