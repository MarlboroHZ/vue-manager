import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import {
  Button,
  DropdownItem,
  MenuItemGroup,
  MenuItem,
  Header,
  Radio,
  Container,
  Main,
  Aside,
  Menu,
  Submenu,
  Dropdown,
  DropdownMenu,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
} from 'element-ui';
import "./assets/less/index.less";

import router from '../router';
import store from '../store'
import http from 'axios'

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Radio);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.use(Dropdown); 
Vue.use(DropdownMenu);
Vue.use(DropdownItem); 
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);   
Vue.use(Table);
Vue.use(TableColumn);   


Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');