import Vue from 'vue'
import axios from 'axios'
import convert from 'xml-js'
export default async (/* { app, router, Vue ... } */) => {
  await axios
    .get('https://bi.loatoday.net/feed/m4a')
    .then(function (response) {
      Vue.prototype.$xmlBi = convert.xml2json(response.data, { compact: false, spaces: 1 })
    })
    .catch(function (error) {
      console.log("axios error in xmlBi.js: ",error)
    })
    .then(function () {
      // always executed
    })
  let xml = JSON.parse(Vue.prototype.$xmlBi)
  let length = xml.elements[0].elements[0].elements.length
  let title = 'string'
  let description = 'string'
  let m4a = 'string'
  let feed = []
  let date = ''
  let episodeId = 0
  let episodeNumber = 0
  let count = 5
  for (let i = 19; i < Math.min(length, 25 + 19); i++) {
    title = xml.elements[0].elements[0].elements[i].elements[0].elements[0].text
    episodeId = xml.elements[0].elements[0].elements[i].elements[1].elements[0].text
    if (episodeId.substring(32, 33) === '-') {
      count--
    }
    episodeId = episodeId.substring(28, count + 28)
    count++
    episodeNumber = xml.elements[0].elements[0].elements[i].elements[11].elements[0].text
    description = xml.elements[0].elements[0].elements[i].elements[4].elements[0].cdata
    m4a = xml.elements[0].elements[0].elements[i].elements[6].attributes.url
    date = Date.parse(xml.elements[0].elements[0].elements[i].elements[2].elements[0].text)
    date = new Date(date).toDateString()
    feed.unshift({
      element: (length - i -1),
      episodeNumber: episodeNumber,
      title: title,
      description: description,
      m4a: m4a,
      date: date
    })
  }
  Vue.prototype.$showImageBi = xml.elements[0].elements[0].elements[4].elements[0].elements[0].text
  // Vue.prototype.$showTitle = xml.elements[0].elements[0].elements[4].elements[1].elements[0].text
  // Vue.prototype.$showUrl = xml.elements[0].elements[0].elements[4].elements[2].elements[0].text
  Vue.prototype.$showDescriptionBi = xml.elements[0].elements[0].elements[2].elements[0].text
  Vue.prototype.$feedBi = feed
  return feed
}
