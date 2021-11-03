const sequelize =require("../config/connection");
const { Post } = require("../models");
const postData = require("./post.json")

const seedMe = async ()=>{
    await sequelize.sync({force:true});
    await Post.bulkCreate(postData);
    console.log('seeded cuisines')
    process.exit(0);


}

seedMe()