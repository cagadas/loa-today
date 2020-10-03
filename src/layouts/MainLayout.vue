<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="list"
          aria-label="Goodies"
          label="Goodies"
          style="padding-right: 24px;"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          LOA Today
        </q-toolbar-title>

        <div>Ver. 1.1.77</div>
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
          title: 'Ask A Question',
          caption: 'Ask The Stream, Psychic Rita, Louis, Ami, Daniel, Alyx, Cindie, Linda, or Walt',
          icon: 'email',
          link: './index.html#/question'
        },
        {
          title: 'Beyond Intention',
          caption: 'LOA Mastery Audio Course by Daniel Mangena',
          icon: 'radio',
          link: './index.html#/bi'
        },
        {
          title: 'High Vibe Living',
          caption: 'A video course by Linda Armstrong',
          icon: 'movie',
          link: './index.html#/highvibeliving'
        },
        {
          title: 'The Lovely Magician’s Guide to Soulmate Success',
          caption: 'An E-Book by Cindie Chavez',
          icon: 'book',
          link: './index.html#/lmgss'
        },
        {
          title: 'The Money Game',
          caption: 'An E-Book by Daniel Mangena',
          icon: 'book',
          link: './index.html#/moneygame'
        },
        {
          title: 'Meditation',
          caption: 'The Stream Of David - Guided Meditation Seeing Through The Eyes of Source',
          icon: 'movie',
          link: './index.html#/streammeditation'
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
    padding: 10px;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    margin-bottom: 10px;
    color: yellow;
  }
  p, li {
    margin: 0;
    margin-bottom: 10px;
    color: rgb(160,255,160);
    font-size: 18px;
    text-indent: 2em;
  }
  li {
    text-indent: 0;
  }
  ul {
    color: rgb(160,255,160);
    font-size: 16px;
  }
  a {
    color: lime;
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
  .centerNoIndent {
    text-align: center;
    text-indent: 0;
  }
  .right {
    text-align: right;
  }
  .image {
    width: 120px;
    margin: 20px 20px 0 0;
    padding: 0;
    float: left;
  }
</style>