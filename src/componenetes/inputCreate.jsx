import { useState } from "react";

function InputCreate() {
    const [input, setInput] = useState();
    const urlApi = 'http://localhost:2999/create'

    const handleSubmit = async () => {
        try {
            const res = await fetch(urlApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: input,
                    completed: false
                })
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="escribe una tarea"
                    onChange={(e) => setInput(e.target.value)}
                    required
                />
                <button type="submit">Añadir tarea</button>
            </form>
        </>
    )
}

export default InputCreate;