import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/configs/connectDB';

interface RoleAttributes {
	id?: number;
	name: string;
}

class RoleModel extends Model<RoleAttributes> implements RoleAttributes {
	id!: number;
	name!: string;
}

RoleModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		tableName: 'tbl_roles',
		modelName: 'Role',
		sequelize,
		underscored: true,
		timestamps: false
	}
);

export default RoleModel;
