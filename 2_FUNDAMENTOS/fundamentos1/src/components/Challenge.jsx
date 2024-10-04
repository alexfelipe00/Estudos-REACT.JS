const Challenge = () =>{
    const a = 10;
    const b = 15;

    const calcSum = () =>{
        console.log(a+b)
    }


    return (
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <button onClick={calcSum}>Somar</button>
        </div>
    )
}

export default Challenge