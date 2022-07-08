import Dashboard from './pages/DashboardPage.vue';
import PlantLayoutPage from './pages/PlantLayoutPage.vue';

const routes = [
  { path: '/', component: Dashboard, name: 'home' },
  { path: '/layout', component: PlantLayoutPage, name: 'layout' },
]

export default routes;
