import Vue from 'vue'
import axios from 'axios'
import convert from 'xml-js'
export default async (/* { app, router, Vue ... } */) => {
  await axios.get('https://www.loatoday.net/feed/mp3')
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
  let title = 'string'
  let description = 'string'
  let mp3 = 'string'
  let feed = []

  for (let i = 21; i < Math.min(length,25+21); i++) {
    title = xml.elements[0].elements[0].elements[i].elements[0].elements[0].text
    description = xml.elements[0].elements[0].elements[i].elements[4].elements[0].cdata
    mp3 = xml.elements[0].elements[0].elements[i].elements[6].attributes.url
    feed.push({
      id: (i - 21),
      title: title,
      description: description,
      mp3: mp3
    })
  }
  Vue.prototype.$showImage = xml.elements[0].elements[0].elements[4].elements[0].elements[0].text
  // Vue.prototype.$showTitle = xml.elements[0].elements[0].elements[4].elements[1].elements[0].text
  // Vue.prototype.$showUrl = xml.elements[0].elements[0].elements[4].elements[2].elements[0].text
  Vue.prototype.$showDescription = xml.elements[0].elements[0].elements[2].elements[0].text
  Vue.prototype.$feed = feed
  return feed
}
