

const homePage = (req, res , next) => {
    if (req.params.length == undefined) {
        res.render("index")
    } else {
        next()
    }
}
module.exports = { homePage };