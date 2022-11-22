import { useState, useEffect } from 'react'
import axios from 'axios'

const ListProducts = () => {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        recuperarProdutos()
    }, [])

    const recuperarProdutos = async () => {
        const resposta = await axios.get('http://localhost:3001/produtos')
        setProdutos(resposta.data)
        console.log(resposta.data)
    }

    const preencheTabela = () => {
        return produtos.map((produto) => (
            <tr>
                <td>{produto._id}</td>
                <td>{produto.titulo}</td>
                <td>{produto.descricao}</td>
                <td>{produto.preco}</td>
            </tr>
          ))
    }

    return (
        <div>
            <h1>ListProducts</h1>
            <table>
                <thead>
                    <tr>
                        <td>Código</td>
                        <td>Nome do produto</td>
                        <td>Descrição</td>
                        <td>Preço</td>
                    </tr>
                </thead>
                <tbody>
                    {produtos.length > 0 && preencheTabela()}
                </tbody>
            </table>
            
        </div>
    )
}

export default ListProducts