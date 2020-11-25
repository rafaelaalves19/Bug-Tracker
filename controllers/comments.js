const comments = require('../models/comments')();

module.exports = () => {
    const getComment = async(req, res) => {
        const {comments, error} = await comments.getOneComment(req.params.commentId);
        if (error) {
            res.status(500).json({
                error,
            });
        }
        res.json(comments);
    };



    const getCommentsIssue = async (req, res) => {
        const { getComment, error } = await comments.getCommentsIssue(req.params.issueNumber);
        if (error) {
            res.status(500).json({
                error,
            });
        }
        res.json(getComment);
    };




    const postComment = async (req, res) => {
        let issueNumber = req.params.issueNumber;
        let text = req.body.text;
        let author = req.body.author;


        const { results, error } = await comments.addComment(issueNumber, text, author);
        if (error) {
            res.status(500).json({
                error,
            });
        }
        res.json(results);
    };



    return {
        postComment,
        getCommentsIssue,
        getComment
    };
};