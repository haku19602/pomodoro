// Utilities
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// export default createPinia() 改成
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
