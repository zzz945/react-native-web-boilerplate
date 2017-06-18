import en from './src/shared/Translations/en_US'
import zh from './src/shared/Translations/zh_CN'
import ENV from './src/ENV'

const Hapi = require('hapi')
const Hoek = require('Hoek')

// Create a server with a host and port
const server = new Hapi.Server()
server.connection({
  host: '0.0.0.0',
  port: 8000
})

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
const VisitModel = mongoose.model('VisitModel', { name: String, visit: Number })

server.register([require('inert'), require('vision')], (err) => {
  Hoek.assert(!err, err)

  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: 'build'
  })

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
      return reply.redirect(`${ENV.baseURL}zh`)
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
        host: emailConfig.host,
        port: emailConfig.port,
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
    reply.view(
      'index',
      {
        locale: JSON.stringify(locale),
        visit: result.visit,
        translations: locale === 'en' ? JSON.stringify(en) : JSON.stringify(zh)
      }
    )
  })
}

// Start the server
server.start((err) => {
  if (err) {
    throw err
  }
  console.log('Server running at:', server.info.uri)
})
