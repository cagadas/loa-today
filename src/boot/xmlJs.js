import Vue from 'vue'
import axios from 'axios'
import convert from 'xml-js'
export default async (/* { app, router, Vue ... } */) => {
  // await axios.get('https://rss.app/feeds/o3A1kTpgpKPRi9Py.xml')
  // await axios.get('https://www.loatoday.net/feed/mp3')
  await axios.get('https://thegrassisgreener.loatoday.net/feed/mp3')
    .then(function (response) {
      Vue.prototype.$xml = convert.xml2json(response.data, { compact: false, spaces: 1 })
    })
    .catch(function (error) {
      console.log(error)
    })
    .then(function () {
      // always executed
    })
  let xml = JSON.parse(Vue.prototype.$xml)
  let length = xml.elements[0].elements[0].elements.length
  let title = ''
  let description = ''
  let mp3 = ''
  let feed = []
  for (let i = 19; i < length; i++){
    title = xml.elements[0].elements[0].elements[i].elements[0].elements[0].text
    description = xml.elements[0].elements[0].elements[i].elements[4].elements[0].cdata
    mp3 = xml.elements[0].elements[0].elements[i].elements[7].attributes.url
    feed.push({
      "id": (i - 19),
      "title": title,
      "description": description,
      "mp3": mp3
    })
  }
  return Vue.prototype.$feed = feed
}
