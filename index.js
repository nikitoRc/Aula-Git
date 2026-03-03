const jwt = requi("]sonwebtoken");

const SECRET_KEY = "minha_chave_super_secreta";

const usuario = {
    id:123,
    nome: "Higor",
    perfil: "Administrador"
};

const token = jwt.sign(usuario,SECRET_KEY, {
    expiresin: "1h"
});

console.log("Token gerado:");
console.log(token);