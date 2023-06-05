import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)

// cuidado com a ordem correta dos plugins
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
