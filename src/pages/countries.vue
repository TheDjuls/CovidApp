<template>
  <q-page>
    <q-card class="my-card" flat bordered v-for="p in datosGlobales" v-bind:key="p.country">
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">En {{p.country}}</div>
          <div class="text-h6 q-mt-sm q-mb-xs text-info">Total de Casos: {{p.cases}}</div>
          <div class="text-h6 q-mt-sm q-mb-xs text-negative">Muertos: {{p.deaths}}</div>
          <div class="text-h6 q-mt-sm q-mb-xs text-positive">Recuperados:{{p.recovered}}</div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <div class="q-pa-md">
        <q-chip  color="info" text-color="dark" icon="fiber_new">
        {{p.todayCases}} Nuevos Casos
        </q-chip>
      <q-chip color="negative" text-color="white" icon="single_bed">
       {{p.todayDeaths}} Decesos Hoy
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
      datosGlobales:[]
    }
    },
    methods:{
      async getGlobalInfo() {
        try {
          const response = await axiosInstance.get('/countries');
          this.datosGlobales=response.data 
          /*this.datosGlobales.total=response.data.cases
          this.datosGlobales.muertos=response.data.deaths
          this.datosGlobales.Recuperados=response.data.recovered
          this.datosGlobales.nuevasMuertes=response.data.todayDeaths
          this.datosGlobales.nuevosCasos=response.data.todayCases*/
          console.log(response)
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
