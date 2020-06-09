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
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          content-class="text-white"
        />
      </q-list>
      <q-btn color="primary" icon="keyboard_backspace" label="Swipe" class="absolute-bottom-right" style="height: 40px;margin-top: 30px;" />
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
          link: './#/'
        },
        {
          title: 'Co-Hosts On LOA Today',
          caption: 'Meet the team',
          icon: 'person',
          link: './#/hosts'
        },
        {
          title: 'Contact LOA Today',
          caption: 'Send an email',
          icon: 'email',
          link: 'mailto:Walt%20Thiessen<walt@loatoday.net>?subject=Contact From LOA Today App'
        },
        {
          title: 'Your Daily Dose Of Happy',
          caption: 'Book: Real success stories of the Law of Attraction',
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
          caption: 'thegrassisgreener.loatoday.net',
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

<style lang="stylus">
  body {
    background-color: rgb(0,32,0);
    padding: 20px;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: yellow;
  }
  p {
    margin: 0;
    margin-bottom: 10px;
    color: lime;
    font-size: 18px;
  }
  hr {
    border-color: darkred;
    border-width : 0.5px;
  }
  .padDiv {
    padding: 0;
  }
</style>