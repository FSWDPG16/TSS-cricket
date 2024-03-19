const cricketDB = require("../models/cricketSchema"); 

const cricket_post = async (req, res) => {
    try {
        const { name, role, age } = req.body;
        const newname = new cricketDB({ name, role, age })
        await newname.save();
        res.json({
            Cricketer_Name: name,
            Cricketer_Role: role,
            Cricketer_Age: age
        })
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

const cricket_get = async (req, res) => {
    try {
        const getData = await cricketDB.find()
        res.json({
            data: getData
        })
    }
    catch (error) {
        res.json({
            message: error
        })
    }
}

const cricket_edit = async (req, res) => {
    try {
        const { role } = req.body;
        const objectId = req.params.id
        const updatedData = await cricketDB.findByIdAndUpdate(
            objectId,
            { role },
            { new: true }
        );

        res.json({
            data: updatedData
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

const cricket_delete = async (req, res) => {
    try {
        const deleteDataObjectId = req.params.id;
        const deleteData = await cricketDB.findByIdAndDelete(deleteDataObjectId);

        res.json({
            data: deleteData,
            message: "Data deleted Scuccessfully...."
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const cricketProfile = async(req, res) =>{
    try{
        const cricketPic = req.file;
        res.json({
            profile: cricketPic
        })
    }
    catch(error){
        res.json({
            Error: error.message
        })
    }
}


module.exports = { cricket_post , cricket_get , cricket_edit , cricket_delete, cricketProfile};