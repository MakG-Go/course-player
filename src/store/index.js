import { createStore } from 'vuex'
import header from "./header"
import status from "./status"

const store = {
    modules: { header, status },

    strict: process.env.NODE_ENV !== 'production'
}

export default createStore(store)

