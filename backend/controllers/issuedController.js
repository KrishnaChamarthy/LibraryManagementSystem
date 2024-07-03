import userModel from "../models/userModel.js"

const addIssued = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let issuedData = await userData.issuedData;
        
        issuedData[req.body.bookId] = new Date();
        await userModel.findByIdAndUpdate(req.body.userId, {issuedData});
        res.json({
            success:true,
            message:"Book Issued"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message: "Error"
        })
    }
}

const removeIssued = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let issuedData = await userData.issuedData;
        const bookId = req.body.bookId;
        delete issuedData[bookId];
        await userModel.findByIdAndUpdate(req.body.userId, {issuedData});
        res.json({
            success:true,
            message:"Book Returned"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message: "Error"
        })
    }
}

export {addIssued, removeIssued}