import ShuffleString from './components/ShuffleString'

export default ShuffleString

export function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('ShuffleString', ShuffleString)
}
