import { useState, useEffect } from 'react'
import axios from 'axios'

const Produtos = () => {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        buscarProdutos()
    }, [])

    const buscarProdutos = async () => {
        const response = await axios.get('http://localhost:3001/produtos')
        setProdutos(response.data)
        return response.data
    }    

    return (
        <div>
            <h1>Produtos</h1>
            {!produtos.length ? 'Carregando' :
                produtos.map(produto => (
                    <h3>{produto.titulo}</h3>
                ))
            }
        </div>
    )
}

export default Produtos