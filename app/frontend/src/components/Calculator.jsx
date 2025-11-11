export default function Calculator() {
    const calculateDose = () => {
        // Constants for Insulin Sensitivity Factor (ISF) and Insulin-to-Carb Ratio (ICR)
        const ISF = 40;
        const ICR = 15;
        
        // Get user inputs
        let carbs;
        let bg;
        let recommendedDose;

        carbs = document.getElementById('carbs').value;
        bg = document.getElementById('bg').value;
        recommendedDose = (carbs / 15) + ((bg - 160) / 40);
        document.getElementById('recommendedDose').innerText = Math.ceil(recommendedDose).toFixed(2) + ' units';
    };

    return (
        <>
            <div id="calculatorComponent" className="flex justify-center items-center w-screen h-screen bg-white overflow-y-scroll">
                <form action="" className="calculatorForm" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                    <label className="inputLabel" style={{color: '#000'}}>Enter Glucose:</label>
                    <input id="bg" type="text" className="input" style={{border: '1px solid #99999999', borderRadius: '50px', color: '#000', padding: '0 0.5rem'}}/>
                    <label className="inputLabel" style={{color: '#000'}}>Enter Carbs:</label>
                    <input id="carbs" type="text" className="input" style={{border: '1px solid #99999999', borderRadius: '50px', color: '#000', padding: '0 0.5rem'}}/>
                    <label className="inputLabel" style={{color: '#000'}}>Recommended Dose:</label>
                    <div id="recommendedDose" className="input" style={{height: '32px', borderRadius: '50px', color: '#000'}}></div>
                    <div id="calculate" onClick={() => {calculateDose()}} style={{cursor: 'pointer', backgroundColor: 'darkturquoise', height: '40px', borderRadius: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 800}}>Calculate</div>
                </form>
            </div>
        </>
    );
}