const db = require('../db')();
const COLLECTION = 'issues';
const ObjectID = require('mongodb').ObjectID;


module.exports = () => {

    const get = async (issueNumber = null) => {
        try {
        if(!issueNumber){
            const issues = await db.get(COLLECTION);
            return {issues};
        }
        const issues = await db.get(COLLECTION, {slug:issueNumber});
        return {issues};

    } catch (err){
        return {
            error: err,
        };
    }
    };

    const getByProjectId = async (issueNumber) => {
        let expression = new RegExp(issueNumber);
        try{
        const byProject = await db.get(COLLECTION, {slug:expression});
        return { byProject };
        }catch (err) {
            return {
                error: err,
            };
        }
    };

    const add = async(slug, title, description, status, projectId) => {
        if (!slug || !title || !description || !status || !projectId) {
            return {
                error: "PLEASE TYPE ALL THE INFORMATIONS REQUIRED",
            };
        }
        try {
        const counter = await  db.count(COLLECTION);
        const results = await db.add(COLLECTION, {
            slug: `${slug}-${counter +1}`,
            title: title,
            description: description,
            status: status,
            projectId: new ObjectID(projectId),
            comments:[]
        });

        return {results};
    } catch (err) {
        return {
            error: err,
        };
    }
    };


    return {
        get,
        add,
        getByProjectId
    };
};