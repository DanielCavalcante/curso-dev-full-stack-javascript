import { useState } from "react"
import axios from 'axios'


const CreateProduct = () => {
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [preco, setPreco] = useState("")

    const cadastrarProduto = async (event) => {
        event.preventDefault()
        console.log("Xuxinha")
        const produto = {
            titulo: titulo,
            descricao: descricao,
            preco: preco 
        }
        console.log(produto)
        axios.post('http://localhost:3001/produtos', JSON.parse(produto)).then((res) => {
            console.log(res.data)
        }).catch((e) => {
            console.log(e)
        })
    }

    const mudarTituloProduto = (event) => {
        if (event.target.value != null) {
            setTitulo(event.target.value)
        }
    }

    return (
        <div>
            <h1>Cadastrar produto</h1>
            <div>
                <label>Nome:</label>
                <input 
                    type="text" 
                    name="titulo" 
                    placeholder="Nome do produto" 
                    value={titulo}
                    onChange={(event) => mudarTituloProduto(event)}
                 />
            </div>
            <div>
                <label>Descrição:</label>
                <input 
                    type="text" 
                    name="descricao" 
                    placeholder="Descrição do produto" 
                    value={descricao} 
                    onChange={(event) => setDescricao(event.target.value)}/>
            </div>
            <div>
                <label>Preço:</label>
                <input 
                    type="text" 
                    name="preco" 
                    placeholder="Preço do produto" 
                    value={preco}
                    onChange={(event) => setPreco(event.target.value)}
                    />
            </div>
            <button onClick={(e) => cadastrarProduto(e)}>Cadastrar</button>
        </div>
    )
}

export default CreateProduct