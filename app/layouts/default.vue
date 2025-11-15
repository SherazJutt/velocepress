<template>
  <Layout>
    <template #sidebar="{ onClose }">
      <h3>Hellow</h3>
      <!-- <Sidebar :close-on-click="isMobile" @close="onClose" /> -->
    </template>
    <template #left-actions>
      <NuxtLink to="/">
        <h1 class="text-base font-medium">Velocepress</h1>
      </NuxtLink>
    </template>
    <template #right-actions>
      <Button :icon="Moon" class="p-1!" variant="ghost" @click="toggleDark" />
    </template>
    <template #view>
      <slot />
    </template>
  </Layout>

  <ToastContainer position="bottom-right" :max-toasts="5" />
</template>

<script setup lang="ts">
import { Button, Layout } from "veloce-vue/ui";
import { ToastContainer } from "veloce-vue/toast";
import { Sun, Moon } from "veloce-vue/icons";

import { computed } from "vue";
import { useColorMode } from "veloce-vue/composables";

const { isDark, toggleDark } = useColorMode();
const { width } = useWindowSize();
const isMobile = computed(() => width.value <= 992);
</script>
