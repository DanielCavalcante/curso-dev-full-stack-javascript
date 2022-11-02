import { useState } from 'react'

function StateFul() {

    const [total, setTotal] = useState(0)

    return (
        <>
            <h1>Componente usando Hooks</h1>
            <h2>{total}</h2>
            <button onClick={ () => setTotal(total+1) }>Somar + 1</button>
            <button onClick={ () => setTotal(total-1) }>Diminuir - 1</button>
        </>
    )
}

export { StateFul }

