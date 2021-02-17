const apiKey = process.env.MAILGUN_KEY
const domain = process.env.MAILGUN_DOMAIN

const mailgun = require('mailgun-js')({ apiKey, domain })
const { WebClient } = require('@slack/web-api')

const channel = `#${process.env.SLACK_CHANNEL}`
const web = new WebClient(process.env.SLACK_TOKEN)

// eslint-disable-next-line no-undef
Parse.Cloud.afterSave('Contact', (request) => {
  const email = request.object.get('email')
  const name = request.object.get('name')
  const phone = request.object.get('phone')
  const message = request.object.get('message')

  sendEmailToClient(email, name)
  sendMessageToTeam(email, name, phone, message)
})

function sendEmailToClient(email, name) {
  const data = {
    from: 'Stackit <no-reply@stackitgroup.com>',
    subject: 'Stackit Contact',
    template: 'stackit-contact',
    to: email,
    'v:contact-name': name,
  }

  mailgun.messages().send(data)
    .then(response => console.log('email sent', response))
    .catch(error => console.error('email error', error))
}

function sendMessageToTeam(email, name, phone, message) {
  const blocks = [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `Hi! *${name}* wants to reach out the Stackit Team.`
      }
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*${name}*\n${phone}\n${email}\n`
      }
    },
    {
      type: 'context',
      elements: [
        {
          type: 'plain_text',
          text: `${message}\n\n`
        }
      ]
    },
    {
      type: 'divider'
    }
  ]

  web.chat.postMessage({ blocks, channel })
    .then(response => console.log('slack sent', response))
    .catch(error => console.error('slack error', error))
}
