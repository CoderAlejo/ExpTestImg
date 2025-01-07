import ExpTestImg from '@ExpTestImg/core'
import GoogleDrive from '@ExpTestImg/google-drive'
import Tus from '@ExpTestImg/tus'
import Dashboard from '@ExpTestImg/dashboard'
import MyCustomProvider from './MyCustomProvider.jsx'

import '@ExpTestImg/core/dist/style.css'
import '@ExpTestImg/dashboard/dist/style.css'

const ExpTestImg = new ExpTestImg({
  debug: true,
})

ExpTestImg.use(GoogleDrive, {
  companionUrl: 'http://localhost:3020',
})

ExpTestImg.use(MyCustomProvider, {
  companionUrl: 'http://localhost:3020',
})

ExpTestImg.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['GoogleDrive', 'MyCustomProvider'],
})

ExpTestImg.use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
