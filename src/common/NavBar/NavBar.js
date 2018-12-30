import duNavBarComponent from './DuNavBar.vue'
import duTabItemComponent from './DuTabItem.vue'
import duTabContainerComponent from './DuTabContainer.vue'
import duTabContainerItemComponent from './DuTabContainerItem.vue'
const duNavBar = {
  install: function (Vue) {
    Vue.component('duNavBar', duNavBarComponent)
  }
}
const duTabItem = {
  install: function (Vue) {
    Vue.component('duTabItem', duTabItemComponent)
  }
}
const duTabContainer = {
  install: function (Vue) {
    Vue.component('duTabContainer', duTabContainerComponent)
  }
}
const duTabContainerItem = {
  install: function (Vue) {
    Vue.component('duTabContainerItem', duTabContainerItemComponent)
  }
}
export { duNavBar, duTabItem, duTabContainer, duTabContainerItem }
