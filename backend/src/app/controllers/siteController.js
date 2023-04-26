const Blog = require('../models/blog');
const { multipleMongooseToObject} = require('../../utils/mongoose.util');
const Beverage = require('../models/beverage');
const Admin = require ('../models/admin');
class SiteController {
    // [GET] /
    index(req, res, next) {
        Blog.find({})
            .then(blogs => {
                res.send({blogs: multipleMongooseToObject(blogs)});
            })
            .catch(next)
    }

    // [GET] /menu
    menu(req, res, next) {
        Beverage.find({})
            .then(beverages => {
                res.send({beverages: multipleMongooseToObject(beverages)});
            })
            .catch(next)
    }

    //[POST] /auth/login
    async login(req, res, next) {
        try {
            const username = req.body.username;
            const password = req.body.password;

            const user = await Admin.findOne({ username })
            if (!user) {
                res.json({ message: 'Wrong username', status: 404 });
            }

            const validPassword = await password === user.password;
            if (!validPassword) {
                res.json({ message: 'Wrong password', status: 404 });
            }

            if (user && validPassword) {
                res.json({ user, status: 200 });
            }
        } catch (error) {
            res.json(error)
        }
    }


    //[GET] /beverages/detail/:id
    detail(req, res, next) {
        Blog.findOne({ _id: req.params.id })
            .then(blog => {
                res.send(mongooseToObject(blog))
            })
            .catch(next);
    }

// [POST] /admin/beverages/store
    store(req, res, next) {
        const formData = req.body;
        const blog = new Blog(formData);
        blog.save()
            .then(() => res.json({
                status: 200
            }))
            .catch(() => res.json({
                status: 500
            }));
    }

// [GET] /get in4 beverage to edit/
    edit(req, res, next) {      
        Blog.findById(req.params.ID)
            .then(blog => {
                res.send(mongooseToObject (blog) )
            })
            .catch(next);
    }

 // [PUT] /books/:id
    update(req, res, next) {
        Blog.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.json({
                status: 201
            }))
            .catch(() => res.json({
                status: 501
            }));
    }

    // [DELETE] /books/:id
    destroy(req, res, next) {
        Blog.deleteOne({ _id: req.params.id })
            .then(() => res.send('DELETE SUCCESS!'))
            .catch(() => res.send('DELETE FAIL!'));
    }
}

module.exports = new SiteController;