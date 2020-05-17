<template>
  <q-page>
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">En el Mundo</div>
          <div class="text-h6 q-mt-sm q-mb-xs text-info">Total de Casos: {{datosGlobales.total}}</div>
          <div class="text-h6 q-mt-sm q-mb-xs text-negative">Muertos: {{datosGlobales.muertos}}</div>
          <div class="text-h6 q-mt-sm q-mb-xs text-positive">Recuperados:{{datosGlobales.Recuperados}}</div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <div class="q-pa-md">
    <q-chip color="Info" text-color="dark" icon="bookmark">
      <a href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019?gclid=EAIaIQobChMIlLqZ7Na76QIV0_7jBx2o5g1bEAAYASAAEgIbPfD_BwE">Mas Info</a>
    </q-chip>
  </div>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { axiosInstance } from 'boot/axios'
export default {
  name: 'PageIndex',
  data() {
    return {
      datosGlobales:{
        total:0,
        muertos:0,
        Recuperados:0
      }
    }
    },
    methods:{
      async getGlobalInfo() {
        try {
          const response = await axiosInstance.get('/all');
          this.datosGlobales.total=response.data.cases
          this.datosGlobales.muertos=response.data.deaths
          this.datosGlobales.Recuperados=response.data.recovered
          console.log(this.datosGlobales);
        } catch (error) {
          console.error(error);
        }
      }
    },
    mounted(){
      this.getGlobalInfo()
    }
}
</script>
