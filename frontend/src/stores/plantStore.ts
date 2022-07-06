import { defineStore } from 'pinia'
import httpClient from '../httpClient';
import { Plant } from '../constants';

interface PlantStoreState {
  plants: Plant[]
}

export const usePlantStore = defineStore('plants', {
  state: (): PlantStoreState => {
    return {
      plants: []
    }
  },
  actions: {
    async loadStore() {
      const response = await httpClient.get('/plants/')
      console.log('here')
      this.plants = response.data
    },
    async addPlant(plant: Plant) {
      try {
        const response = await httpClient.post('/plants/', plant)
        this.plants.push(response.data)
      } catch (e) {
        throw e
      }
    },
    async deletePlant(plantId: string) {
      try {
        await httpClient.delete(`/plants/${plantId}`)
        this.plants = this.plants.filter(plant => plant.id !== plantId)
      } catch (e) {
        throw e
      }
    }
  }
})
