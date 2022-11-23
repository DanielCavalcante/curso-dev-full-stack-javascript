import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'

const EditProdut = () => {

    const [titulo, setTitulo] = useState("")
    const { id } = useParams()

    useEffect(() => {
        buscarProduto()
    }, [])

    const buscarProduto = async () => {
        const resposta = await axios.get(`http://localhost:3001/produtos/${id}`)
        setTitulo(resposta.data.titulo)
        setDescricao(resposta.data.descricao)
        setTitulo(resposta.data.titulo)
    }

    return (
        <div>
            <h1>Editar produto</h1>
            <Link to="/products">
                <button>
                    Voltar
                </button>
            </Link> 
            <div>
                <label>Nome:</label>
                <input 
                    type="text" 
                    name="titulo" 
                    placeholder="Nome do produto" 
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                 />
            </div>
            <div>
                <label>Descrição:</label>
                <input 
                    type="text" 
                    name="descricao" 
                    placeholder="Descrição do produto" 
                    // value={descricao} 
                    // onChange={(event) => setDescricao(event.target.value)}
                />
            </div>
            <div>
                <label>Preço:</label>
                <input 
                    type="text" 
                    name="preco" 
                    placeholder="Preço do produto" 
                    // value={preco}
                    // onChange={(event) => setPreco(event.target.value)}
                />
            </div>
            <button>Atualizar</button>
        </div>
    )
}

export default EditProdut