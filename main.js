console.log('main')

import testing from './pages/testing/main.js'
import testing2 from './pages/testing2/main.js'



document.addEventListener("turbolinks:load", function (e) {
    console.log('turbolinks load')
    const location = window.location.pathname
    console.log(location)

    const pages = {
        '/': () => { },
        '/pages/testing': testing,
        '/pages/testing2': testing2
    }

    pages[location]()

})