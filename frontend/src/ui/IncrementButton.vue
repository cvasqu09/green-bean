<template>
  <div class="flex">
    <div class="flex flex-column">
      <InputNumber v-model="countRef" :min="0" showButtons button-layout="horizontal" @input="updateCount"></InputNumber>
      <span>{{label}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

interface IncrementButtonProps {
  count: number;
  label: string;
}

export default {
  name: "IncrementButton",
  props: {
    count: {
      type: Number,
      required: false,
      default: 0
    },
    label: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup(props: IncrementButtonProps, context: { emit: any }) {
    const countRef = ref(props.count);

    const updateCount = (e: {value: number}) => {
      if (e.value) {
        countRef.value = e.value;
        context.emit('update', e.value)
      } else {
        countRef.value = 0
      }
    }

    return {
      countRef,
      updateCount,
    }
  }
}
</script>

<style scoped>

</style>
