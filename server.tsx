/** @jsx jsx */
import { serve } from 'https://deno.land/std@0.146.0/http/server.ts'
import { Hono, logger, poweredBy, serveStatic, jsx } from 'https://deno.land/x/hono@v1.6.1/mod.ts'

const app = new Hono()

app.use('*', logger(), poweredBy())

app.use('/assets/*', serveStatic())
app.get('/favicon.ico', serveStatic({ path: './favicon.ico' }))
app.get('/', (c) => {
  return c.html(
    <div>
      <h1>Hello Deno!</h1>
      <img src='/assets/deno_logo.png'></img>
    </div>
  )
})

serve(app.fire())
