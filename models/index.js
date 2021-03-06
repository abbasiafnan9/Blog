const User = require("./User");
const Post = require("./Post");
const Review = require("./review");

Post.belongsTo(User);

User.hasMany(Post, {
    foreignKey:'UserId',
    onDelete:'CASCADE'
});

Post.hasMany(Review, {
    foreignKey:'PostId',
    onDelete: "CASCADE"
});

Review.belongsTo(Post);

Review.belongsTo(User, {
    foreignKey:'UserId',
    onDelete:"CASCADE"
});

module.exports = { User, Post, Review }