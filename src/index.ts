import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { homeRoute } from "./routes/home.tsx";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono()

app.use('/public/*', serveStatic({root: './'}))

app.route('/', homeRoute)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
