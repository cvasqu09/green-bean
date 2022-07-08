<template>
  <div class="flex flex-column">
    <h2 class="align-self-start">Layout page</h2>
    <Button class="flex align-self-end mb-2" icon="pi pi-plus" label="Add Layout"></Button>
    <PlantLayout></PlantLayout>
  </div>
</template>

<script lang="ts">
import PlantLayout from '../components/PlantLayout.vue';

export default {
  name: "PlantLayoutPage",
  components: {PlantLayout},
  props: {},
  setup() {
  }
}
</script>

<style scoped>

</style>
