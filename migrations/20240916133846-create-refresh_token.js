'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('tbl_refresh_tokens', {
			token: {
				type: Sequelize.STRING,
				primaryKey: true,
				allowNull: false
			},
			expired_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
			blacklisted_at: {
				type: Sequelize.DATE
			},
			account_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'tbl_accounts',
					key: 'id'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			}
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('tbl_refresh_tokens');
	}
};
