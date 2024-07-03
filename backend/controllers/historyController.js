import userModel from "../models/userModel.js";

const addHistory = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let historyData = userData.historyData;

        historyData[req.body.bookId] = new Date(req.body.date);
        await userModel.findByIdAndUpdate(req.body.userId, {historyData});
        res.json({
            success: true,
            message: "Book added to history"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Error"
        })
    }
}

const removeHistory = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let historyData = await userData.historyData;
        const bookId = req.body.bookId;
        delete historyData[bookId];
        await userModel.findByIdAndUpdate(req.body.userId, {historyData});
        res.json({
            success: true,
            message: "Book removed"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        })
    }
}

const clearHistory = async (req, res) => {
    try{
        let userData = await userModel.findById(req.bod.userId);
        let historyData = await userData.historyData;
        Object.assign(historyData, {});
        await userModel.findByIdAndUpdate(req.body.userId, {historyData});
        res.json({
            success: true,
            message: "History cleared"
        });
    }catch(error){
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        })
    }
};

export {addHistory, removeHistory, clearHistory} 