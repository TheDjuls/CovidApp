<template>
  <q-page>
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">En México</div>
          <div class="text-h6 q-mt-sm q-mb-xs text-info">Total de Casos: {{datosGlobales.total}}</div>
          <div class="text-h6 q-mt-sm q-mb-xs text-negative">Muertos: {{datosGlobales.muertos}}</div>
          <div class="text-h6 q-mt-sm q-mb-xs text-positive">Recuperados:{{datosGlobales.Recuperados}}</div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <div class="q-pa-md">
        <q-chip  color="info" text-color="dark" icon="fiber_new">
        {{datosGlobales.nuevosCasos}} Nuevos Casos
        </q-chip>
      <q-chip color="negative" text-color="white" icon="single_bed">
       {{datosGlobales.nuevasMuertes}} Decesos Hoy
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
        Recuperados:0,
        nuevosCasos:0,
        nuevasMuertes:0
      }
    }
    },
    methods:{
      async getGlobalInfo() {
        try {
          const response = await axiosInstance.get('/countries/mexico');
          this.datosGlobales.total=response.data.cases
          this.datosGlobales.muertos=response.data.deaths
          this.datosGlobales.Recuperados=response.data.recovered
          this.datosGlobales.nuevasMuertes=response.data.todayDeaths
          this.datosGlobales.nuevosCasos=response.data.todayCases
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
