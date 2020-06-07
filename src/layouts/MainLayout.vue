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
      content-class="bg-black text-green-4"
    >
      <q-list>
        <q-item-label
          header
          class="text-yellow-4"
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
      <net-status />
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
          title: 'Playlist',
          caption: 'Our most recent episodes',
          icon: 'radio',
          link: '/#/'
        },
        {
          title: 'Co-Hosts On LOA Today',
          caption: 'Meet the team!',
          icon: 'person',
          link: '/#/hosts'
        },
        {
          title: 'Contact LOA Today',
          caption: 'send an email',
          icon: 'email',
          link: 'mailto:Walt%20Thiessen<walt@loatoday.net>?subject=Contact From LOA Today App'
        },
        {
          title: 'Book: Your Daily Dose Of Happy',
          caption: 'Real success stories of the Law of Attraction',
          icon: 'book',
          link: 'https://amzn.to/2LjXm5d'
        },
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
  components: {
    'net-status' : require('components/NetStatus.vue').default,
    'EssentialLink' : require('components/EssentialLink.vue').default
  }
}
</script>