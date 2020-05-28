<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          LOA Today App
        </q-toolbar-title>

        <div>Version 1.00</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
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
          title: 'LOA Today website',
          caption: 'www.loatoday.net',
          icon: 'web',
          link: 'https://www.loatoday.net'
        },
        {
          title: 'The Grass Is Greener website',
          caption: 'thegrassisgreener.loatoday.net/',
          icon: 'web',
          link: 'https://thegrassisgreener.loatoday.net/'
        }
      ]
    }
  },
  computed: {
    if(leftDrawerOpen){
      console.log(leftDrawerOpen)
    }
  }
}
</script>
