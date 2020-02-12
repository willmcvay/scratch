import { JSDOM } from 'jsdom'

const HTMLDocument = new JSDOM(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>
`)

const { window } = HTMLDocument
const { document } = window

const elem = document.getElementById('root')

elem
