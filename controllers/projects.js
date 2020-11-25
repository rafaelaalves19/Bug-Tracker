const projects = require('../models/projects')();

module.exports = () => {
    const getController = async(req, res) => {
        const {slug, error} = await projects.get();
        if (error){
            res.status(500).json({
                error,
            });
        }
        res.json(slug);
    };



    const getSlug = async (req, res) => {
        const {slug, error} = await projects.get(req.params.slug);
        if (error){
            res.status(500).json({
                error,
            });
        }
        res.json(slug);
    };





    const postController = async (req, res) => {
        let slug = req.body.slug;
        let name = req.body.name;
        let description = req.body.description;

        const {results, error} = await projects.add(slug, name, description);
        if (error){
            res.status(500).json({
                error,
            });
        }
        res.json(results);
    };

    return {
        getSlug,
        getController,
        postController,
    };
};