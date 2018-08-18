import VShuffleString from './components/VShuffleString'

export default VShuffleString

export function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('VShuffleString', VShuffleString)
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
