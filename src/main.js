import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
// import 'element-ui/lib/theme-chalk/index.css';
// import { 
//   Dialog, 
//   Button,
//   Input,
//   Table,
//   Row,
//   Col,
//   DatePicker,
//   TableColumn,
//   Form,
//   FormItem,
//   MessageBox,
//   Message
// } from 'element-ui';

// Vue.use(Dialog)
// Vue.use(Button)
// Vue.use(Input)
// Vue.use(Table)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(DatePicker)
// Vue.use(TableColumn)
// Vue.use(Form)
// Vue.use(FormItem)

// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$message = Message;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
