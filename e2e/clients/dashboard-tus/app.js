import Dashboard from '@ExpTestImg/dashboard'
import Tus from '@ExpTestImg/tus'
import Unsplash from '@ExpTestImg/unsplash'
import Url from '@ExpTestImg/url'

import '@ExpTestImg/core/dist/style.css'
import '@ExpTestImg/dashboard/dist/style.css'

function onShouldRetry (err, retryAttempt, options, next) {
  if (err?.originalResponse?.getStatus() === 418) {
    return true
  }
  return next(err)
}

const companionUrl = 'http://localhost:3020'
const ExpTestImg = new ExpTestImg()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files', onShouldRetry })
  .use(Url, { target: Dashboard, companionUrl })
  .use(Unsplash, { target: Dashboard, companionUrl })
