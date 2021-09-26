const { Post } = require('../models');

const postData = [{
        title: 'Maame Phone',
        body: 'I want the new iPhone and I dont have the funds. What do i do ',
        user_id: 1

    },
    {
        title: 'Dorits and her pods',
        body: 'Dorita just got herself the airpods and does not know how to act. Dorits is Maames best friend',
        user_id: 2
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;