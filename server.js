import express from "express";

const app = express()
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

// Criar rota e definir resposta
app.get("/api", (req, res) => {
    // resposta
    res.status(200).send("Rota inicial");
});

