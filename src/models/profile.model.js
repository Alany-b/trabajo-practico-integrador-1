import { DataTypes } from 'sequelize';
import  sequelize  from '../config/database.js';

const Profile = sequelize.define('profile', {
  id: {
     type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    
    },
    user_id: {
     type: DataTypes.INTEGER, allowNull: false, unique: true,
    
    },
    
  first_name: {
     type: DataTypes.STRING(50), allowNull: false,

    },
  last_name: {
     type: DataTypes.STRING(50), allowNull: false, 

    },
  biography: { 
    type: DataTypes.TEXT, allowNull: true,

  },
  avatar_url: { 
    type: DataTypes.STRING(255), allowNull: true ,

  },
  birth_date: { 
    type: DataTypes.DATE, allowNull: true,

  },
}, {
  timestamps: false,
  // tableName: 'users',
  // paranoid: true,
  // underscored: true
});

export default Profile;