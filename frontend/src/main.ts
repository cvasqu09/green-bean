import 'primevue/resources/themes/saga-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Button from "primevue/button";
import ToggleButton from "primevue/togglebutton";
import Menubar from 'primevue/menubar';
import Menu from "primevue/menu";
import Dialog from "primevue/dialog";
import Card from "primevue/card";
import Calendar from "primevue/calendar";
import TabMenu from "primevue/tabmenu";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import ConfirmDialog from "primevue/confirmdialog";
import { createPinia } from 'pinia'
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";

import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const pinia = createPinia()
const app = createApp(App);
app.use(router);


app.component("Button", Button);
app.component("ToggleButton", ToggleButton);
app.component("Dialog", Dialog);
app.component("Menu", Menu);
app.component("Menubar", Menubar);
app.component("InputText", InputText);
app.component("InputNumber", InputNumber);
app.component("TabMenu", TabMenu);
app.component("Card", Card);
app.component("Calendar", Calendar);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ConfirmDialog", ConfirmDialog);

app.use(PrimeVue)
app.use(ToastService)
app.use(ConfirmationService)
app.use(pinia)
app.mount('#app')
