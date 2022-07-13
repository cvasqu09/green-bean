<template>
  <div>
    <DataTable :value="layouts" responsiveLayout="scroll">
      <Column field="name" header="Name"></Column>
      <Column field="date_added" header="Date Added"></Column>
      <Column header="Edit">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" label="Edit" @click="selectLayout(slotProps.data.id)"></Button>
        </template>
      </Column>
      <Column header="Delete">
        <template #body="slotProps">
          <Button icon="pi pi-trash" @click="confirmLayoutDelete(slotProps.data.id)"></Button>
        </template>
      </Column>
    </DataTable>
    <ConfirmDialog></ConfirmDialog>
  </div>
</template>

<script lang="ts">
import { Layout } from '../constants';
import { PropType } from 'vue';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';
import { useLayoutStore } from '../stores/layoutStore';

interface LayoutListProps {
  layouts: Layout[];
}

export default {
  name: "LayoutList",
  props: {
    layouts: {
      type: Object as PropType<Layout[]>,
      required: true,
      default: []
    }
  },
  setup(props: LayoutListProps){
    const confirm = useConfirm()
    const toast = useToast()
    const layoutStore = useLayoutStore()

    const confirmLayoutDelete = async (id: string) => {
      try {
        confirm.require({
          header: "Confirm deletion",
          message: "Do you want to delete this layout?",
          icon: 'pi pi-exclamation-triangle',
          accept: async () => {
            await layoutStore.deleteLayout(id)
          }
        })
      } catch(e) {
        toast.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Could not delete layout. Please try again.',
          life: 4000
        })
      }
    }

    const selectLayout = (layoutId: string) => {
      layoutStore.setSelectedLayout(layoutId);
    }

    return {
      confirmLayoutDelete,
      selectLayout,
    }
  }
}
</script>

<style scoped>

</style>
