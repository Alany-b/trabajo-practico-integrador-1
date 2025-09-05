import { DataTypes } from 'sequelize';
import sequelize  from '../config/database.js';
import Tag from './tag.model.js';
import ArticleTag from './article.tag.model.js';

const Article = sequelize.define('article', {
  id:{ type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true 

  },
  title: { type: DataTypes.STRING(200), allowNull:false, validate:{ len:[3,200] } 
},
  content: { type: DataTypes.TEXT, allowNull:false, validate:{ len:[50, 50000] } 
},
  except: { type: DataTypes.STRING(500), allowNull:true 

  },
  status: { type: DataTypes.ENUM('published','archived'), allowNull:false, defaultValue:'published'
    
   },

  user_id: { type: DataTypes.INTEGER, allowNull:false

   }
}, {
  timestamps: false
});
//   tableName: 'articles',
//   paranoid: true,
//   underscored: true
// });


//  Relaciones con Tags (N:M)
Article.belongsToMany(Tag, {
  through: ArticleTag,
  as: "tags",
  foreignKey: "article_id",
  otherKey: "tag_id",
  onDelete: "CASCADE",
});

Tag.belongsToMany(Article, {
  through: ArticleTag,
  as: "articles",
  foreignKey: "tag_id",
  otherKey: "article_id",
  onDelete: "CASCADE",
});

export default Article;
