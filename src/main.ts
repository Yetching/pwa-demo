import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

if (window.electronApi) {
  console.log('electron api detected');
  console.log(window.electronApi.getTheme());
}

createApp(App).mount('#app');
