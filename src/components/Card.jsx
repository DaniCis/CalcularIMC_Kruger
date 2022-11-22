import { useState } from "react";

const Card = () =>{
    const [peso, setPeso] = useState(10);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [rango, setRango] = useState();

    const calcular = () =>{
        let resultado = (peso / ((altura/100) **2)).toFixed(2)
        setResultado(resultado)
        if(resultado >= 18.5 && resultado <= 24.9)
            setRango('Normal')
        else if(resultado >= 18.5 && resultado <= 29.9)
            setRango('Sobrepeso')
        else if(resultado >= 30 && resultado <= 34.9)
            setRango('Obesidad grado I')
        else if(resultado >= 35 && resultado <= 39.9)
            setRango('Obesidad grado II')
        else if(resultado >= 40)
            setRango('Obesidad grado III')
    }
    
    const cambioAltura = (e) =>{
        setAltura(e.target.value)
        calcular()
    }
    const cambioPeso = (e) =>{
        setPeso(e.target.value)
        calcular()
    }
    return(
        <div className="card">
            <div className="progress">
                <input
                    type='range'
                    onChange={cambioPeso}
                    min={1}
                    max={400}
                    step={1}
                    value={peso}
                ></input>
                <div className="progress-valor">{peso}kg</div>
            </div>
            <div className="progress">
                <input
                    type='range'
                    onChange={cambioAltura}
                    min={1}
                    max={400}
                    step={1}
                    value={altura}
                ></input>
                <div className="progress-valor">{altura}cm</div>
            </div>
            <p>{resultado}</p>
            <p>{rango}</p>
        </div>
    )

}

export default Card