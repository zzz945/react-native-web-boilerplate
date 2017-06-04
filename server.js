import en from './src/web/translations/en_US.js'
import zh from './src/web/translations/zh_CN.js'

const Hapi = require('hapi')

// Create a server with a host and port
const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 8000
})

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
const VisitModel = mongoose.model('VisitModel', { name: String, visit: Number })

server.register(require('inert'), (err) => {
  if (err) {
    throw err
  }

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'build'
      }
    }
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      home(request, reply, 'zh')
    }
  })

  server.route({
    method: 'GET',
    path: '/zh',
    handler: function (request, reply) {
      home(request, reply, 'zh')
    }
  })

  server.route({
    method: 'GET',
    path: '/en',
    handler: function (request, reply) {
      home(request, reply, 'en')
    }
  })

  server.route({
    method: 'GET',
    path: '/count',
    handler: function (request, reply) {
      VisitModel.findOneAndUpdate({name: 'visit'}, {$inc: {visit: 1}}, {new: true, upsert: true}).then(result => {
        reply(result)
      })
    }
  })
})

function home (request, reply, locale) {
  VisitModel.findOneAndUpdate({name: 'visit'}, {$inc: {visit: 1}}, {new: true, upsert: true}).then(result => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="shortcut icon" href="/favicon.ico"><style>html{scroll-behavior:smooth}</style><title>一个前端开发工程师&UX设计师的个人网站</title><link href="/static/css/main.0c5dad92.css" rel="stylesheet"></head><body><div id="root"></div><script>window.__VISIT_COUNT__ = ${result.visit};window.__LOCALE__=${JSON.stringify(locale)};window.__TRANSLATION__=${locale === 'en' ? JSON.stringify(en) : JSON.stringify(zh)}</script><script type="text/javascript" src="/static/js/main.5871fae2.js"></script></body></html>`
    reply(html)
  })
}

// Start the server
server.start((err) => {
  if (err) {
    throw err
  }
  console.log('Server running at:', server.info.uri)
})
