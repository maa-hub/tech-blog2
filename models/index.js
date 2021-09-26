const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});


module.exports = {
  User,
  Comment,
  Post
};