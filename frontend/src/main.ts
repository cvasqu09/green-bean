import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Button from "primevue/button";
import Menu from "primevue/menu";
import Dialog from "primevue/dialog";
import Card from "primevue/card";
import Calendar from "primevue/calendar";
import TabMenu from "primevue/tabmenu";
import InputText from "primevue/inputtext";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import ConfirmationService from "primevue/confirmationservice";
import ConfirmDialog from "primevue/confirmdialog";
import { createPinia, PiniaVuePlugin } from 'pinia'

const pinia = createPinia()
const app = createApp(App);


app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("Menu", Menu);
app.component("InputText", InputText);
app.component("TabMenu", TabMenu);
app.component("Card", Card);
app.component("Calendar", Calendar);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ConfirmDialog", ConfirmDialog);

app.use(PrimeVue)
app.use(pinia)
app.mount('#app')
