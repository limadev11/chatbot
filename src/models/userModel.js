const db = require('../database/db');

exports.buscarOuCriar = (telefone) => {
    return new Promise((resolve) => {
        db.get("SELECT * FROM usuarios WHERE telefone = ?", [telefone], (err, row) => {
            if (row) return resolve(row);

            db.run("INSERT INTO usuarios (telefone, etapa) VALUES (?, ?)", [telefone, "inicio"]);
            resolve({ telefone, etapa: "inicio" });
        });
    });
};

exports.atualizarEtapa = (telefone, etapa) => {
    return new Promise((resolve) => {
        db.run("UPDATE usuarios SET etapa = ? WHERE telefone = ?", [etapa, telefone], resolve);
    });
};