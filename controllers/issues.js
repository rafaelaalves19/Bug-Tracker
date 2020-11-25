const issue = require('../models/issues')();

module.exports = () => {
    const getController = async(req, res) => {
        const {issues, error} = await issue.get();
        if(error){
            res.status(500).json({
                error,
            });
        }
        res.json(issues);
    };
    
    
    const getIssue = async (req, res) => {
        const {issues, error} = await issue.get(req.params.slug);
        if(error){
            res.status(500).json({
                error,
            });
        }
        res.json(issues);
    };


    const getByProject = async (req, res) => {
        const {issues, error} = await issue.get(req.params.slug);
        if(error){
            res.status(500).json({
                error,
            });
        }
        res.json(issues);
    };




    const postController = async (req, res) => {

        let slug = req.params.slug;
        let title = req.body.title;
        let description = req.body.description;
        let status = req.body.status;
        let projectId = req.body.projectId;

        let {results, error} = await issue.add(slug, title, description, status, projectId);
        if(error){
            res.status(500).json({
                error,
            });
        }
        res.json(results);
    };

    return {
        getIssue,
        getController, 
        postController,
        getByProject
    };
};