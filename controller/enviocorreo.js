var nodemailer = require('nodemailer');
//funcion para enviar correos

//para usarlo como funcion
exports.sendEmail = function(req, res) {
    //definir el trasporter
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '',
            pass: ''
        }
    });
//Definimos el email
var mailOptions = {
    from: 'Remitente',
    to: 'juanjo.9912@gmail.com',
    subject: 'Asunto',
    text: 'prueba instructor'
};
//enviar el email
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.send(500, error.message);
    } else{
        console.log("Email sent");
        res.status(200).jsonp(req.body);
    }
});
};