export const transport = {
	host: 'smtppro.zoho.com',
	port: 587,
	secure: true,
	auth: {
		user: 'hi@danishshakeel.me',
		pass: process.env.REACT_APP_EMAIL_PASSWORD
	},
  }