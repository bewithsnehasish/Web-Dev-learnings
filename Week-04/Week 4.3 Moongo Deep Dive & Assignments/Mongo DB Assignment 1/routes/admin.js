const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db")
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check if a user with this username already exists
    Admin.create({
        username, //username : username
        password //password : password
    }).then(function(){
        res.json({
            message: "Admin Created Successfully"
        })
    }).catch(function(){
        res.json({
            message: "Admin Not Created"
        })
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    Course.create({
        title, //title : title
        description, //description : description
        imageLink, //imageLink : imageLink
        price    //price : price
    }).then(newCourse => {
        // Log the course details in JSON format
        console.log(JSON.stringify(newCourse, null, 2));

        res.json({
            message: "Course creater Successfully", 
            newCourse: newCourse._id
        })
    })

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
    .then(function(response){
        res.json({
            courses:response
        })
    })
});

module.exports = router;




//if we want to implement admin routes using async await function then we can implement that by using this method
/**
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check if a user with this username already exists
    await Admin.create({
        username, //username : username
        password //password : password
    })
    res.json({
        message: "Admin Created Successfully"
    })
});


router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title, //title : title
        description, //description : description
        imageLink, //imageLink : imageLink
        price    //price : price
    })
    console.log(newCourse);
    res.json({
        message: "Course creater Successfully", 
        courseID: newCourse._id
    })

});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    res.json({
        courses:response
    })
});
*/
