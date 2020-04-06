var KnowladgePosts = require('../models/knowledge')
var moment = require('moment');

module.exports.saveKnowledge = (req, res) => {
    var data = req.body;

    var knowledge = new KnowladgePosts();
    knowledge.id = data.id;
    knowledge.publishDate = moment().unix();
    knowledge.isImage = data.isImage;
    knowledge.img = data.img;
    knowledge.author = data.author;
    knowledge.category = data.category;
    knowledge.comments = 0;
    knowledge.title = data.title;
    knowledge.description = data.description;

    knowledge.save((err, post) => {
        if (err)
            return res.json({ message: "can't save the post" });
        if (!post)
            return res.json({ message: "Knowledge post not saved" });

        return res.json({ message: "Knowlege Post save successful", post: post });
    });

}

module.exports.allKnowledge = (req, res) => {
console.log('sdfsdf');

    KnowladgePosts.find({}, (err, posts) => {
        if (err) {
            res.json({ success: false, message: err }); // Return error message
        }
        else {
            // Check if blogs were found in database
            if (!posts) {
                res.json({ success: false, message: 'No posts found.' }); // Return error of no blogs found
            } else {
                res.json({ success: true, posts: posts }); // Return success and blogs array
            }
        }
    });
}