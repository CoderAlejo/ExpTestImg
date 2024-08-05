import { ExpTestImg } from '@ExpTestImg/core'
import Dashboard from '@ExpTestImg/dashboard'
import AwsS3 from '@ExpTestImg/aws-s3'

import '@ExpTestImg/core/dist/style.css'
import '@ExpTestImg/dashboard/dist/style.css'

const ExpTestImg = new ExpTestImg()
  .use(Dashboard, { target: '#app', inline: true })
  .use(AwsS3, {
    limit: 2,
    companionUrl: process.env.VITE_COMPANION_URL,
  })

