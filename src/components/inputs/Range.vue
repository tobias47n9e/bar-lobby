<template>
    <form class="control range" @submit.prevent="">
        <label :for="uuid" v-if="label">{{ label }}</label>
        <div class="input">
            <vue-slider ref="slider" v-model="value" tooltip="none" :duration="0" :drag-on-click="true" v-bind="$attrs" @change="$emit('update:modelValue', value)" @error="error"></vue-slider>
        </div>
        <input ref="textbox" :id="uuid" v-model="value" :style="`width: ${max.toString().length + 1.85}ch`" :disabled="disableCustomInput">
    </form>
</template>

<script lang="ts" setup>
// https://nightcatsama.github.io/vue-slider-component/#/

import { onMounted, ref, toRefs } from "vue";
import { v4 as uuidv4 } from "uuid";
import { ERROR_TYPE } from "vue-slider-component";

const props = defineProps({
    label: String,
    modelValue: {
        type: Number,
        default: 0
    },
    disableCustomInput: Boolean,
    icon: String,
});

const uuid = ref(uuidv4());
const { label, icon } = toRefs(props);
const value = ref(props.modelValue);
const slider = ref();
const textbox = ref();
const max = ref(0);
const disableCustomInput = ref(props.disableCustomInput);

onMounted(() => {
    if (typeof slider.value.max === "number") {
        max.value = slider.value.max;
    }
});

const error = (type: ERROR_TYPE, msg: string) => {
    const textboxEl = textbox.value as HTMLInputElement;
    textboxEl.setCustomValidity(msg);
    textboxEl.reportValidity();
};
</script>

<style scoped lang="scss">
</style>