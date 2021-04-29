import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import qs from "qs";
// 按需引入
import {
  Button,
  Dialog,
  Input,
  Form,
  FormItem,
  Container,
  Main,
  Table,
  TableColumn,
  Pagination,
  Header,
  Icon,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Aside,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  MessageBox,
  Message,
} from "element-ui";
import MyHeader from "./components/Header.vue";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:12321";
Vue.prototype.axios = axios;
Vue.prototype.qs = qs;

const components = [
  Button,
  Dialog,
  Input,
  Form,
  FormItem,
  Container,
  Main,
  Table,
  TableColumn,
  Pagination,
  Header,
  Icon,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Aside,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
];
components.forEach((component) => {
  Vue.use(component);
});
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;

Vue.config.productionTip = false;
Vue.component("my-header", MyHeader);

//系统错误捕获
const errorHandler = (error, vm) => {
  console.error("抛出全局异常");
  console.error(vm);
  console.error(error);
};
Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = function(error) {
  return errorHandler(error, this);
};
Vue.config.warnHandler = function(msg, vm, trace) {
  console.log(`Warn: ${msg}\nTrace: ${trace}`);
};

router.beforeEach((to, from, next) => {
  var token = window.localStorage.getItem("token"); //获取浏览器缓存的token
  if (token) {
    //如果有就直接到首页
    next();
  } else {
    if (to.path == "/ulog") {
      //如果是登录页面路径，就直接next()
      next();
    } else {
      //不然就跳转到登录；
      next("/ulog");
    }
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");