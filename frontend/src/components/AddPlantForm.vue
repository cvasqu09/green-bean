<template>
  <div class="flex flex-column mt-1">
    <div class="mb-2">
      <InputText type="text" id="plant-name" v-model="plantName" placeholder="Name"></InputText>
    </div>
    <div>
      <InputNumber id="time-to-harvest" v-model="timeToHarvest"
                   placeholder="Time to Harvest (days)"></InputNumber>
    </div>
    <Button class="mt-2 align-self-end" @click="addPlant">Add</Button>
  </div>
</template>

<script lang="ts">
import { ref, Ref } from 'vue';
import httpClient from '../httpClient';

export default {
  name: "AddPlantForm",
  props: {},
  setup() {
    const plantName: Ref<string> = ref('')
    const timeToHarvest: Ref<number> = ref(0)

    const addPlant = async () => {
      await httpClient.post('/plants/', {
        name: plantName.value,
        days_to_harvest: timeToHarvest.value
      })
    }

    return {
      addPlant,
      plantName,
      timeToHarvest
    }
  }
}
</script>

<style scoped>

</style>
