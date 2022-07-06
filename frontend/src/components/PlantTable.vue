<template>
  <div>
    <DataTable :value="plants" responsiveLayout="scroll">
      <Column field="name" header="Name"></Column>
      <Column field="days_to_harvest" header="Days to harvest"></Column>
      <Column header="Delete">
        <template #body="slotProps">
          <Button icon="pi pi-trash" @click="confirmPlantDelete(slotProps.data.id)"></Button>
        </template>
      </Column>
    </DataTable>
    <ConfirmDialog></ConfirmDialog>
  </div>
</template>

<script lang="ts">
import { Plant } from '../constants';
import { PropType } from 'vue';
import { useConfirm } from 'primevue/useconfirm';
import { usePlantStore } from '../stores/plantStore';
import { useToast } from 'primevue/usetoast';

interface PlantTableProps {
  plants: Plant[];
}

export default {
  name: "PlantTable",
  props: {
    plants: {
      type: Object as PropType<Plant[]>,
      required: true,
      default: []
    }
  },
  setup(props: PlantTableProps){
    const confirm = useConfirm()
    const toast = useToast()
    const plantStore = usePlantStore()

    const confirmPlantDelete = async (id: string) => {
      try {
        confirm.require({
          header: "Confirm deletion",
          message: "Do you want to delete this plant?",
          icon: 'pi pi-exclamation-triangle',
          accept: async () => {
            await plantStore.deletePlant(id)
          }
        })
      } catch(e) {
        toast.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Could not delete plant. Please try again.',
          life: 4000
        })
      }
    }

    return {
      confirmPlantDelete
    }
  }
}
</script>

<style scoped>

</style>
