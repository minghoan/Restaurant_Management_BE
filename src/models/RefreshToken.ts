import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/configs/connectDB';

interface RefreshTokenAttributes {
	token: string;
	account_id: string;
	expired_at: Date;
	blacklisted_at?: Date;
}

class RefreshTokenModel extends Model<RefreshTokenAttributes> implements RefreshTokenAttributes {
	token!: string;
	account_id!: string;
	expired_at!: Date;
	created_at!: Date;
	blacklisted_at!: Date;
}

RefreshTokenModel.init(
	{
		token: {
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false
		},
		account_id: {
			type: DataTypes.UUID,
			allowNull: false
		},
		expired_at: {
			type: DataTypes.DATE,
			allowNull: false
		},
		blacklisted_at: {
			type: DataTypes.DATE
		}
	},
	{
		sequelize,
		tableName: 'tbl_refresh_tokens',
		modelName: 'RefreshToken',
		underscored: true,
		createdAt: 'created_at',
		updatedAt: false
	}
);

export default RefreshTokenModel;
