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

        <div>Version 1.0.12</div>
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
      <q-btn color="primary" icon="keyboard_backspace" label="Swipe To Close" class="absolute-bottom-right" style="height: 40px;margin-top: 30px;" />
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
          title: 'Playlist',
          caption: 'Our most recent episodes',
          icon: 'radio',
          link: './index.html#/'
        },
        {
          title: 'Beyond Intention',
          caption: 'LOA Mastery Audio Course by Daniel Mangena',
          icon: 'radio',
          link: './index.html#/bi'
        },
        {
          title: 'The Money Game',
          caption: 'An E-Book Course by Daniel Mangena',
          icon: 'book',
          link: './index.html#/moneygame'
        },
        {
          title: 'The Grass Is Greener',
          caption: 'Audio Play - Fiction',
          icon: 'radio',
          link: './index.html#/tgig'
        },
        {
          title: 'Co-Hosts On LOA Today',
          caption: 'Meet the team',
          icon: 'person',
          link: './index.html#/hosts'
        },
        {
          title: 'Schedule',
          caption: 'Our 5-day-per-week schedule',
          icon: 'schedule',
          link: './index.html#/schedule'
        },
        {
          title: 'Contact LOA Today',
          caption: 'Send an email',
          icon: 'email',
          link: './index.html#/contact'
        },
        {
          title: 'External Links',
          caption: 'Links to other websites',
          icon: 'web',
          link: './index.html#/links'
        },
        {
          title: 'Privacy Policy',
          caption: 'for the LOA Today App',
          icon: 'security',
          link: './index.html#/privacy'
        },
        {
          title: 'Terms of Service',
          caption: 'with the LOA Today App',
          icon: 'thumb_up_alt',
          link: './index.html#/terms'
        },
        {
          title: '',
          caption: '',
          icon: '',
          link: ''
        }
      ]
    }
  },
  components: {
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
    font-size: 16px;
  }
  ul {
    color: lime;
    font-size: 16px;
  }
  a {
    color: orange;
    text-text-decoration: underline;
  }
  hr {
    border-color: darkred;
    border-width : 0.5px;
  }
  .padDiv {
    padding: 0;
  }
  .center {
    text-align: center;
  }
  .image {
    width: 120px;
    margin: 20px 20px 0 0;
    padding: 0;
    float: left;
  }
</style>