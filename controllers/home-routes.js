
const sequelize = require('../config/connection');
const { User, Post, Comment} = require("../models/");
const router = require("express").Router();



router.get("/", (req, res) => {
  Post.findAll({

    include: [User]
    ,
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("all-posts", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
  },
  include: [{
    model: Comment,
    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    include: {
        model: User,
        attributes: ['username']
    }
},
{
    model: User,
    attributes: ['username']
}
]
})
    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("single-post", { post });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render('signup');
  });


module.exports = router;
