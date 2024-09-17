import swaggerJSDoc from 'swagger-jsdoc';

const SwaggerOption: swaggerJSDoc.Options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'RESTAURANT MANAGEMENTS API DOCUMENTATION',
			version: '1.0.0',
			description: 'This is a simple API application made with Express and documented with Swagger',
			contact: {
				name: 'Minh Hoàng',
				email: 'hoangnguyen.19904@gmail.com'
			},
			license: {
				name: 'MIT',
				url: 'https://opensource.org/licenses/MIT'
			},
			server: [
				{
					url: 'http://localhost:4000',
					description: 'Development server'
				}
			]
		}
	},
	apis: ['./openapi/*.yaml']
};

export default SwaggerOption;
