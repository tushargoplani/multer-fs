exports.createPostValidator = (req,res,next)=> {
    // name
    req.check('name',"Write a Name").notEmpty()
    req.check('name',"Name must be between 4 to 150 characters").isLength({
        min: 4,
        max: 150
    });
    
    // Check for errors
    const errors = req.validationErrors()
    // if error show the first one as they happen
    if(errors){
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError});
    }

    //Proceed to next middleware
    next();
};