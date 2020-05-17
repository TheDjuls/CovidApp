<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-secondary">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          CovidApp
        </q-toolbar-title>

        <div><q-btn
          flat
          dense
          round
          icon="info"
          aria-label="info"
        /></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menú
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'En el Mundo',
          caption: '',
          icon: 'language',
          link: '/#/'
        },
        {
          title: 'Por Pais',
          caption: '',
          icon: 'flag',
          link: '/#/paises'
        },
        {
          title: 'México',
          caption: '',
          icon: 'home',
          link: '/#/mexico'
        }
      ]
    }
  }
}
</script>
