const express = require('express');
const countOfVisitor = require('../Visitor');
const router = express.Router();


//to add the count of visitors continuously visiting the page/site
router.post('/countVisitors', async (req, res) => {
    try {
        const visitor = await countOfVisitor.findOne();
        if (!visitor)
        {
            const newvisitor = await countOfVisitor.create({countOfVisitors: 1});
            return res.json({ newvisitor });
        }
        const newCount = await countOfVisitor.findOneAndUpdate({countOfVisitors: visitor.countOfVisitors} , 
                                                            {countOfVisitors: visitor.countOfVisitors+1}, {new: true});
        return res.json({ newCount });
    }
    catch (error) {
        console.log(error);
        res.send("Server Error");
    }
});

//to get the count of visitors visiting the page/site
router.get('/getCountData', async (req, res) => {
    try {
        const visitor = await countOfVisitor.findOne();
        res.json({ visitor: visitor.countOfVisitors });
    }
    catch (error) {
        console.log(error);
        res.send("Server Error");
    }
});

//to reset the count of visitors visiting the page/site from zero again
router.put('/resetCountData', async (req, res) => {
    try {
        const visitor = await countOfVisitor.findOne();
        const newvisitor = await countOfVisitor.findOneAndUpdate({countOfVisitors: visitor.countOfVisitors}, {countOfVisitors: 0}, {new: true});
        res.send(newvisitor);
    }
    catch (error) {
        console.log(error);
        res.send("Server Error");
    }
});

module.exports = router;