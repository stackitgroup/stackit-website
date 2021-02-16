const apiKey = '8790a864aea14e6188bfbd022eb3e44e-3d0809fb-884eaee7'
const domain = 'sandbox9e6a5f3a22084cd2ae931172d115924c.mailgun.org'
const mailgun = require('mailgun-js')({ apiKey, domain })

// eslint-disable-next-line no-undef
Parse.Cloud.afterSave('Contact', (request) => {
  const email = request.object.get('email')
  const name = request.object.get('name')

  const data = {
    from: 'Stackit <no-reply@stackitgroup.com>',
    subject: 'Stackit Contact',
    template: 'stackit-contact',
    to: email,
    'v:contact-name': name,
  }

  mailgun.messages().send(data)
    .then(response => console.log('email sent', response))
    .catch(error => console.error(error))
})
