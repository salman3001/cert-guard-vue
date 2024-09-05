import Mailgen from 'mailgen'
import env from '#start/env'

export const mailGenerator = new Mailgen({
  product: {
    name: env.get('APP_NAME'),
    link: env.get('APP_URL'),
    copyright: `Copyright © ${new Date(Date.now()).getFullYear()} ${env.get('APP_NAME')}. All rights reserved.`,
  },
  theme: 'default',
})
