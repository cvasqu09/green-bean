<template>
  <Toast position="top-right"></Toast>
  <div class="flex flex-column">
    <h2 class="flex">Dashboard page</h2>
    <Button class="flex align-self-end" icon="pi pi-plus" label="Add Plant" @click="toggleAddPlantModal"></Button>
    <Dialog v-model:visible="displayModal" :modal="true">
      <template #header><h3>Add Plant</h3></template>
      <AddPlantForm @close="toggleAddPlantModal"></AddPlantForm>
    </Dialog>
    <h3 class="align-self-start">Plants</h3>
    <PlantTable :plants="plants"></PlantTable>
  </div>
</template>

<script lang="ts">
import TheHeader from "../ui/TheHeader.vue";
import AddPlantForm from "../components/AddPlantForm.vue";
import Toast from 'primevue/toast';
import { onMounted, ref } from 'vue';
import { usePlantStore } from '../stores/plantStore';
import { storeToRefs } from 'pinia';
import PlantTable from '../components/PlantTable.vue';
export default {
  name: "DashboardPage",
  components: { PlantTable, TheHeader, AddPlantForm, Toast},
  setup() {
    const displayModal = ref(false);
    const toggleAddPlantModal = () => {
      displayModal.value = !displayModal.value
    }
    const plantStore = usePlantStore()
    const { plants } = storeToRefs(plantStore);

    onMounted(async () => {
      await plantStore.loadStore();
    })

    return {
      displayModal,
      toggleAddPlantModal,
      plants
    }
  }
}
</script>

<style scoped>

</style>
