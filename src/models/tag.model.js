import { DataTypes } from 'sequelize';
import sequelize  from '../config/database.js';

const Tag = sequelize.define('Tag', {
  id:
  { type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true

   },
  name: 
  
  { type: DataTypes.STRING(30), allowNull:false, unique:true, validate:{ len:[2,30], notContains: ' ' }

}
}, {
//   tableName: 'tags',
//   underscored: true
  timestamps: false});

export default Tag;
