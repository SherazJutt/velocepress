<template>
  <div class="pb-16">
    <H4 text="Default Accordion" margin-bottom="md" />
    <Accordion :items="items" />
  </div>
</template>
<script setup lang="ts">
import { Accordion } from "veloce-vue/ui";
import { H4 } from "veloce-vue/typography";
import { type AccordionItem } from "veloce-vue/types";
import { Moon, Sun, Hamburger, ChevronDown } from "veloce-vue/icons";

const items: AccordionItem[] = [
  {
    title: "Item 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eos! Voluptas explicabo odit quis earum nobis! Totam, molestias, magni beatae illum assumenda ipsum quas a nemo, tenetur perferendis minima quis!",
    icon: Moon,
  },
  {
    title: "Item 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eos! Voluptas explicabo odit quis earum nobis! Totam, molestias, magni beatae illum assumenda ipsum quas a nemo, tenetur perferendis minima quis!",
    icon: Sun,
  },
  {
    title: "Item 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eos! Voluptas explicabo odit quis earum nobis! Totam, molestias, magni beatae illum assumenda ipsum quas a nemo, tenetur perferendis minima quis!",
    icon: ChevronDown,
  },
];

const MultipleOpenItems: AccordionItem[] = [
  {
    title: "Item 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eos! Voluptas explicabo odit quis earum nobis! Totam, molestias, magni beatae illum assumenda ipsum quas a nemo, tenetur perferendis minima quis!",
    icon: Moon,
    active: true,
  },
  {
    title: "Item 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eos! Voluptas explicabo odit quis earum nobis! Totam, molestias, magni beatae illum assumenda ipsum quas a nemo, tenetur perferendis minima quis!",
    icon: Sun,
    active: true,
  },
  {
    title: "Item 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eos! Voluptas explicabo odit quis earum nobis! Totam, molestias, magni beatae illum assumenda ipsum quas a nemo, tenetur perferendis minima quis!",
    icon: Hamburger,
  },
];
</script>
