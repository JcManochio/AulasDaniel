// importa o schema de notas
const Notas = require('../models/notas.model')

// cria uma variável contendo os métodos de CRUD
let NotasController = {
    //Função para inserção assíncrono
    insere: async (req, res) => {
        //cria uma Nota com os dados do usuário
        let nota = Notas({
            ra: req.body.ra,
            nome: req.body.nome,
            disciplina: req.body.disciplina,
            curso: req.body.curso,
            p1: req.body.p1,
            p2: req.body.p2,
            media: req.body.media
        })
        //salva no mongo
        nota.save()
        //envia a nota salva no formato json
        res.json(nota)
    },
    consulta: async (req, res) => {
        Notas.find() //procura pelas notas
        .then(notas =>{
            res.json(notas) //retorna todas as notas
        })
    },
    remove: async (req, res) => {
        Notas.deleteOne({_id: req.params.id}) //remove uma nota
        .then(resultado =>{
            console.log('Removido com sucesso')
            res.json(resultado)
        })
    },
    atualiza: async (req, res) => {
        Notas.updateOne(
            {_id: req.params.id}, {
                ra: req.body.ra,
                nome: req.body.nome,
                disciplina: req.body.disciplina,
                curso: req.body.curso,
                p1: req.body.p1,
                p2: req.body.p2,
                media: req.body.media
        })
        .then(resultado =>{
            console.log('Atualização com sucesso')
            res.json(resultado)
        })
    }
}

//vamos exportar
module.exports = NotasController