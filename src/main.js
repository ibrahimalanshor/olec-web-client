import { createApp } from 'vue';
import myVueUi from '@ibrahimanshor/my-vue-ui';

import '@ibrahimanshor/my-vue-ui/dist/my-vue-ui.css';
import './style.css';

import App from './App.vue';

const app = createApp(App);

app.use(myVueUi);

app.mount('#app');
