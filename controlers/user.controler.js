const User = require('../modules/user.model');

class UserControler{
    static async getAll(req, res){
        const user = await User.find();
        return user;
    }

    static async getOne(req, res){
        const user = await User.findById();
        return user;
    }

    static async create(req, res){
        const user = await User.create();
        return user;
    }

    static async update(req, res){
        const user = await User.findByIdAndUpdate();
        return user;
    }

    static async remove(req, res){
        const user = await User.findByIdAndRemove();
        return user;
    }
}

module.exports = UserControler