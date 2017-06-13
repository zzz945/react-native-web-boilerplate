import en from './src/shared/translations/en_US.js'
import zh from './src/shared/translations/zh_CN.js'
import ENV from './ENV'

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
    path: '/visit',
    handler: function (request, reply) {
      VisitModel.findOneAndUpdate({name: 'visit'}, {$inc: {visit: 1}}, {new: true, upsert: true}).then(result => {
        reply(result.visit)
      })
    }
  })

  server.route({
    method: 'POST',
    path: '/message',
    handler: function (request, reply) {
      const {emailConfig} = ENV
      const {title, email, content} = request.payload.message
      const nodemailer = require('nodemailer')
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'smtp.163.com',
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
          user: emailConfig.address,
          pass: emailConfig.password
        }
      })

      // setup email data with unicode symbols
      let mailOptions = {
        from: `"访客" <${emailConfig.address}>`, // sender address
        to: emailConfig.address, // list of receivers
        subject: '来自我的个人网站的访客', // Subject line
        html: `<p>标题: ${title}</p><p>邮箱: ${email}</p><p>内容: ${content}</p>` // plain text body
      }
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error)
        }
        console.log('Message %s sent: %s', info.messageId, info.response)
      })
      reply('ok')
    }
  })
})

function home (request, reply, locale) {
  VisitModel.findOneAndUpdate({name: 'visit'}, {$inc: {visit: 1}}, {new: true, upsert: true}).then(result => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="shortcut icon" href="/favicon.ico"><style>html{scroll-behavior:smooth}</style><title>一个前端开发工程师&UX设计师的个人网站</title><link href="/static/css/main.0c5dad92.css" rel="stylesheet"></head><body><div id="root"></div><script>window.__VISIT_COUNT__ = ${result.visit};window.__LOCALE__=${JSON.stringify(locale)};window.__TRANSLATION__=${locale === 'en' ? JSON.stringify(en) : JSON.stringify(zh)}</script><script type="text/javascript" src="/static/js/main.f77dc6fd.js"></script></body></html>`
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
