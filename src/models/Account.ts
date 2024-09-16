import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../lib/configs/connectDB';

interface AccountAttributes {
	id?: string;
	name: string;
	phone_number: string;
	password: string;
	avatar?: string;
	role_id?: number;
}

class AccountModel extends Model<AccountAttributes> implements AccountAttributes {
	id!: string;
	name!: string;
	phone_number!: string;
	password!: string;
	avatar!: string;
	role_id!: number;
}

AccountModel.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: () => uuidv4(),
			primaryKey: true,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		phone_number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		avatar: {
			type: DataTypes.STRING,
			defaultValue:
				'https://res.cloudinary.com/dryf5c9eh/image/upload/fl_preserve_transparency/v1702880344/avatar-trang-4_eyizzv.jpg?_s=public-apps',
			allowNull: false
		},
		role_id: {
			type: DataTypes.INTEGER,
			defaultValue: 1,
			allowNull: false
		}
	},
	{
		sequelize,
		tableName: 'tbl_accounts',
		modelName: 'Account',
		underscored: true,
		updatedAt: 'updated_at',
		createdAt: 'created_at',
		deletedAt: 'deleted_at',
		paranoid: true
	}
);

export default AccountModel;
