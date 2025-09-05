import { DataTypes } from 'sequelize';
import  sequelize from '../config/database.js';

const ArticleTag = sequelize.define('articleTag', {
  id:{
     type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true
     },
  article_id: {
     type: DataTypes.INTEGER, allowNull:false
     },
  tag_id: { 
    type: DataTypes.INTEGER, allowNull:false 
}
}, {
//   tableName: 'article_tags',
//   underscored: true,
  timestamps: true
});

// ArticleTag.belongsTo(Tag, {
//   foreignKey: "tag_id",
//   as: "tags",
//   onDelete: "CASCADE",
// });

// ArticleTag.belongsTo(Article, {
//   foreignKey: "article_id",
//   as: "articles",
//   onDelete: "CASCADE",
// });


export default ArticleTag;
