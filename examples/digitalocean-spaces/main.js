import ExpTestImg from '@ExpTestImg/core'
import Dashboard from '@ExpTestImg/dashboard'
import AwsS3 from '@ExpTestImg/aws-s3'

import '@ExpTestImg/core/dist/style.css'
import '@ExpTestImg/dashboard/dist/style.css'

const ExpTestImg = new ExpTestImg({
  debug: true,
})

ExpTestImg.use(Dashboard, {
  inline: true,
  target: 'body',
})

// No client side changes needed!
ExpTestImg.use(AwsS3, { companionUrl: '/companion' })
