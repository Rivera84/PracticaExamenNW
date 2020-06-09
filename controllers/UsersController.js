exports.home = (req, res, next) =>{
    res.send("Bienvenidos a home");
}

exports.user = (req, res, next) =>{
    res.render("crear_usuario");
}