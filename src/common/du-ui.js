import duNavBarComponent from './NavBar/DuNavBar.vue'
import duTabItemComponent from './NavBar/DuTabItem.vue'
import duTabContainerComponent from './NavBar/DuTabContainer.vue'
import duTabContainerItemComponent from './NavBar/DuTabContainerItem.vue'
const duUi = {
  install: function (Vue) {
    Vue.component('duNavBar', duNavBarComponent)
    Vue.component('duTabItem', duTabItemComponent)
    Vue.component('duTabContainer', duTabContainerComponent)
    Vue.component('duTabContainerItem', duTabContainerItemComponent)
  }
}

export default duUi
