import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import ProperJsCore from '@popperjs/core'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App).use(Quasar, quasarUserOptions)

app.config.globalProperties.$sharePointUrl = process.env.NODE_ENV =='production'? "https://portal.army.idf/sites/gdud383/_api/web/Lists/" : "http://localhost:3000/" 
app.config.globalProperties.$isSharePointUrl = process.env.NODE_ENV =='production'

 
 app.use(VueSweetalert2)
 app.use(bootstrap)
 app.use(ProperJsCore)
 app.use(iconSet)
 app.use(router)
 app.mount('#app')
