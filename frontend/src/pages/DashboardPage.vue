<template>
  <div class="flex flex-column">
    <h2 class="flex">Dashboard page</h2>
    <Button class="flex align-self-end" icon="pi pi-plus" label="Add Plant" @click="openAddPlantModal"></Button>
    <Dialog v-model:visible="displayModal" :modal="true">
      <template #header><h3>Add Plant</h3></template>
      <AddPlantForm></AddPlantForm>
    </Dialog>
    <h3 class="align-self-start">Plants</h3>
  </div>
</template>

<script lang="ts">
import TheHeader from "../ui/TheHeader.vue";
import AddPlantForm from "../components/AddPlantForm.vue";
import { ref } from 'vue';
export default {
  name: "DashboardPage",
  components: {TheHeader, AddPlantForm},
  setup() {
    const displayModal = ref(false);
    const openAddPlantModal = () => {
      displayModal.value = true
    }

    return {
      displayModal,
      openAddPlantModal,
    }
  }
}
</script>

<style scoped>

</style>
