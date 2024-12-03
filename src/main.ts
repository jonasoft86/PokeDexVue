import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from 'pinia';

const app = createApp(App)
const pinia = createPinia();

const queryClient = new QueryClient({
    defaultOptions: { 
        queries: { 
            staleTime: 1000 * 120 // 2 minutos 
        } 
    },
  })
  const options = { queryClient }

app.use(VueQueryPlugin, options)
app.use(pinia);
app.use(router)
app.mount('#app')
