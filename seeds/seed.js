const sequelize = require("../config/connection");
const { User, Post, Review } = require('../models');

const seed = async () => {
    const userData = await User.bulkCreate([
        {
            username:'yolo420',
            password:'password'
        },
        {
            username:'random',
            password:'12345678'
        }, 
    ],{ individualHooks:true
    });

    const postData = await Post.bulkCreate([
        {
            title:'first post',
            description:'working',
            UserId:2
        },

        {
            title:'joker',
            description:"is funny",
            UserId:1
        }
    ]);

    const ReviewtData = await Review.bulkCreate([
        {
            comment:"jaskhfslkjaf",
            UserId:2,
            PostId:1
        },
        {
            comment:"jkasdlhflja",
            UserId:1,
            PostId:2
        }
    ])
}

sequelize.sync({force:true}).then(()=>{
    seed();
})