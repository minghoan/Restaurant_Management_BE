'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'tbl_roles',
			[
				{
					name: 'Admin'
				},
				{
					name: 'User'
				}
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('tbl_roles', null, {});
	}
};
