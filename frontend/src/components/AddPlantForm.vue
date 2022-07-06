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
import { usePlantStore } from '../stores/plantStore';
import { Plant } from '../constants';
import { useToast } from 'primevue/usetoast';

export default {
  name: "AddPlantForm",
  props: {},
  setup(props, context: {emit}) {
    const plantName: Ref<string> = ref('')
    const timeToHarvest: Ref<number> = ref(0)
    const plantStore = usePlantStore()
    const toast = useToast();

    const addPlant = async () => {
      try {
        const newPlant: Plant = {name: plantName.value, days_to_harvest: timeToHarvest.value}
        await plantStore.addPlant(newPlant)
        toast.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Plant successfully added.',
          life: 4000
        })
        context.emit('close')
      } catch (e) {
        toast.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Could not add plant. Please try again',
          life: 4000
        })
      }
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
