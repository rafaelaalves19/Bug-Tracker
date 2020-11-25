const projects = require('./projects');

const db = require('../db')();
const ObjectID = require('mongodb').ObjectID;
const COLLECTION = 'issues';


module.exports = () => {

    // to get every comment inside an issue:
    const getCommentsIssue = async (issueNumber) => {
        try {
      const PIPELINE = [
          {$match: {slug:issueNumber}},
          {$project: {
              comments: 1,
              _id: 0,
              slug: 1,
          },
         },
      ];
      const getComment = await db.aggregate(COLLECTION, PIPELINE);
      return { getComment} ;
    } catch (err) {
        return { error: err };
    }
    };


    // to get just one comment by Id
    const getOneComment = async (commentId) => {
        try {
        const PIPELINE = [
            { $match: { 'comments._id': ObjectID(commentId) } },
             {$project: {
                 comments: {
                     $filter: {
                         input: '$comments',
                         as: 'comment',
                         cond: {$eq: ['$$comment._id', ObjectID(commentId)] },
                 },
                    },
                    _id: 0,
                    slug: 1,
                },
            },
        ];

        const comments = await db.aggregate(COLLECTION, PIPELINE);
        return { comments };
    } catch (err) {
        return { error: err };
    }

    };

    const addComment = async(issueNumber, text, author) => {
        if (!issueNumber || !text || !author) {
            return {
                error: "PLEASE TYPE ALL THE INFORMATIONS REQUIRED",
            };
        }
        try {
        const PIPELINE = [{slug: issueNumber}, {$push:{comments: {
            _id: new ObjectID(),
            text: text,
            author: author
        }}}] 


        const results = await db.update(COLLECTION, PIPELINE); 

        return {results}; 
    } catch (err) {
        return { error: err };
    }

    };


    return {
        getCommentsIssue,
        getOneComment,
        addComment
    };
};