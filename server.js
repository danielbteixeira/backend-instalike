import express from "express";

// Array para base de dados
const posts = [
    {   
        id: 1,
        descricao: "Foto teste",
        imagem: "https://placecats.com/millie/300/150" 
    },
    {   
        id: 2,
        descricao: "Paisagem deslumbrante",
        imagem: "https://source.unsplash.com/random/300x150/?nature"
    },
    {   
        id: 3,
        descricao: "Cachorro fofo",
        imagem: "https://place.dog/300/150"
    },
    {   
        id: 4,
        descricao: "Comida deliciosa",
        imagem: "https://source.unsplash.com/random/300x150/?food"
    },
    {   
        id: 5,
        descricao: "Gato curioso",
        imagem: "https://placekitten.com/300/150"
    },
    {   
        id: 6,
        descricao: "Citações inspiradoras",
        imagem: "https://source.unsplash.com/random/300x150/?quote"
    }
];

// fim do array

// Banco de dados - mongoDB

const app = express()
// Adicionando rota para o express parsear (converter) o texto em JSON
app.use(express.json());
// Fim da rota

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

// Criar rota e definir resposta
app.get("/posts", (req, res) => {
    // resposta
    res.status(200).json(posts);
});


// Função para pegar id desejado
function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);

    })
}


// Recuperar post por id
app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id)
    // resposta
    res.status(200).json(posts[index]);
});

