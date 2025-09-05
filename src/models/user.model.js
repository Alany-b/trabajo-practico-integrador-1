import { DataTypes } from 'sequelize';
import  sequelize from '../config/database.js';
import Profile from './profile.model.js';
import  Article from './article.model.js';

const User = sequelize.define('user', {
  id: {
     type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    
    },
  username: {
     type: DataTypes.STRING(20), allowNull: false, unique: true, validate: { len: [3,20] } 
    
    },
  email: {
     type: DataTypes.STRING(100), allowNull: false, unique: true, validate: { isEmail: true } 
    },
  password: { 
    type: DataTypes.STRING(255), allowNull: false 
  },
  role: { 
    type: DataTypes.ENUM('user','admin'), allowNull: false, defaultValue: 'user'
  
  }
}, {
  timestamps: false,
  // tableName: 'users',
  // paranoid: true,
  // underscored: true
});

//  Relaciones
User.hasOne(Profile, {
  as: "profile",
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Profile.belongsTo(User, { as: "user", foreignKey: "user_id" });

User.hasMany(Article, {
  as: "articles",
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Article.belongsTo(User, { as: "author", foreignKey: "user_id" });




export default User;
