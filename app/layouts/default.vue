<script setup>
import { Button, Layout } from "veloce-vue/ui";
import { Hamburger, Save, LogOut } from "veloce-vue/icons";

useSeoMeta({ title: "Page Builder | VelocePress" });
const { state } = useApp();
const { state: builderState, page, save } = useBuilderPage();
</script>

<template>
  <nav class="relative flex h-[64px] w-full items-center justify-between self-center border-b pr-8 pl-4">
    <div class="flex items-center gap-4">
      <Button :icon="Hamburger" icon-class="size-6" class="p-1!" variant="soft" severity="primary" @click="state.showSidebar = !state.showSidebar" />
      <div class="text-lg text-gray-700">VelocePress</div>
    </div>

    <div class="flex items-center gap-4">
      <Button :icon="Save" @click="save" />
      <Button :icon="LogOut" />
    </div>
  </nav>

  <main class="relative overflow-hidden">
    <div :class="state.showSidebar ? 'left-0' : '-left-full'" class="absolute top-0 bottom-0 z-10 w-[260px] border-r bg-white duration-200">
      <Sidebar />
    </div>
    <div :class="[state.showSidebar ? 'xl:pl-[268px] ' : 'pl-2 ', builderState.activeComponentIndex !== null ? '4xl:pr-[268px]' : '4xl:pr-2']" class="h-full w-full p-2 duration-200">
      <slot />
    </div>
    <div :class="builderState.activeComponentIndex !== null ? 'right-0' : '-right-full'" class="absolute top-0 bottom-0 z-10 w-[260px] border-l bg-white shadow-xl duration-200">
      <!-- customizer tab where we show the customizations of the selected component -->
      <!-- <Customizer /> -->
    </div>
  </main>
</template>
