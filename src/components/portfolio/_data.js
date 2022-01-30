export const images = [
	{
		id: '01',
		src: '/images/allthingskashmir.webp',
		alt: 'All Things Kashmir - Danish Shakeel',
	},
	{
	  id: '02',
	  src: '/images/react-chakra-portfolio.webp',
	  alt: 'Reach Chakra Portfolio - Danish Shakeel',
	},
	{
	  id: '03',
	  src: '/images/react-chakra-portfolio.webp',
	  alt: 'Alfred Slack Bot - Danish Shakeel',
	},
	{
	  id: '04',
	  src: '/images/lempify.webp',
	  alt: 'Lempify - Danish Shakeel',
	},
	{
	  id: '05',
	  src: '/images/bibtex-chrome.webp',
	  alt: 'BibTeX Chrome - Danish Shakeel',
	},
	{
	  id: '06',
	  src: 'https://images.unsplash.com/photo-1565440962783-f87efdea99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80',
	  alt: 'Awesome watch',
	},
	{
	  id: '07',
	  src: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80',
	  alt: 'Awesome watch',
	},
  ]
  export const products = [
	{
		id: '1',
		name: 'All Things Kashmir',
		imageUrl:
		  '/images/allthingskashmir.webp',
		longDescription:
		  'Migrated a WordPress website from Managed Hosting to LEMP stack on a VPS using Easy Engine with Redis cache. The migration saved around 80% of the annual cost of the website increased the website speed by around 10%.',
		sourceCode: '',
		projectURL: 'https://allthingskashmir.com',
		description:
		  'Site migration and optimization which resulted in ~80% cost savings and ~110% page speed improvements.',
		images,
	},
	{
	  id: '2',
	  name: 'Personal Portfolio',
	  imageUrl:
		'/images/react-chakra-portfolio.webp',
	  longDescription:
		'A React-based portfolio website created with Chakra UI, Three.js. It is a fully responsive website that works on mobile, tablet and desktop ang has a dark mode. The 3D model has been created with ReadyPlayerMe, and the animations have been added using Mixamo. Blender has been used to edit the model and animations. The website is self-hosted on a Linux server and uses DatoCMS and WordPress to store the data. GraphQL is used to fetch the data from the API.',
	  sourceCode: '',
	  projectURL: 'https://danishshakeel.me',
	  description:
		'Responsive and modern-looking portfolio created with React, Chakra, GraphQL, and Three.js',
	  images,
	},
	{
		id: '3',
		name: 'Alfred Slack Bot',
		imageUrl:
		  '/images/alfred-slack-bot.webp',
		longDescription:
		  'A Slack bot to automatically send birthday and anniversary messages to your Slack workspace. The bot uses the Slack API to send messages and uses Google Apps Script alongside Google Sheets API to fetch the birthdays and anniversaries. OAuth is used to authenticate the bot with Slack and Google Triggers are used for time-driven events.',
		sourceCode: 'https://github.com/danish17/alfred-slack-bot',
		description:
		  'Slack bot to automatically send birthday and anniversary messages to your Slack workspace.',
		images,
	},
	{
		id: '4',
		name: 'Lempify',
		imageUrl:
		  '/images/lempify.webp',
		longDescription:
		  'A simple BASH script to install and configure Nginx, MySQL, and PHP on Ubuntu-based Linux systems. It also installs WordPress CLI to help you quickly get started with WordPress on your server.',
		sourceCode: 'https://github.com/danish17/lempify',
		projectURL: '',
		description:
		  'Shell script to install and configure a new LEMP stack on a server with WordPress CLI.',
		images,
	},
	{
		id: '5',
		name: 'BibTeX Chrome',
		imageUrl:
		  '/images/bibtex-chrome.webp',
		longDescription:
		  'BibTeX Chrome is a Chromium extension that helps you convert BibTeX citations to other formats - MLA, APA, Chicago, Harvard, and Vancouver. The core was originally written by Enric Moreu (https://github.com/enric1994/bibtexonline) and the extension wrapper has been written in Vanilla JavaScript.',
		sourceCode: 'https://github.com/danish17/bibtex-chrome',
		projectURL: 'https://chrome.google.com/webstore/detail/bibtex-chrome/mpkkjoodomgaedblckommkefnpinkgpa',
		description:
		  'Chrome extension to convert BibTeX citations to MLA, APA, and other formats.',
		images,
	},
  ]