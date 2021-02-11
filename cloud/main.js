const apiKey = '8790a864aea14e6188bfbd022eb3e44e-3d0809fb-884eaee7'
const domain = 'sandbox9e6a5f3a22084cd2ae931172d115924c.mailgun.org'
const mailgun = require('mailgun-js')({ apiKey, domain })

// eslint-disable-next-line no-undef
Parse.Cloud.afterSave('Contact', (request) => {
  const email = request.object.get('email')

  const data = {
    from: 'Stackit <no-reply@stackitgroup.com>',
    subject: 'Stackit Contact',
    template: 'retrospective-invitation',
    to: email,
    'v:retrospective-name': 'Test 1',
    'v:retrospective-link': 'Test 2',
  }

  mailgun.messages().send(data)
    .then(response => console.log('email sent', response))
    .catch(error => console.error(error))
})
