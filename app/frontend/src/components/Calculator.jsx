export default function Calculator() {
    const calculateDose = () => {
        // Constants for Insulin Sensitivity Factor (ISF) and Insulin-to-Carb Ratio (ICR)
        const ISF = 40;
        const ICR = 15;
        const TARGET_BG = 160;
        
        // Get user inputs
        let carbs;
        let bg;
        let recommendedDose;

        // Error checking

        /**
         * If either input is not a number or is negative, alert the user and return
         */
        if (document.getElementById('carbs').value >= 0 && document.getElementById('bg').value >= 0) {
            carbs = document.getElementById('carbs').value;
            bg = document.getElementById('bg').value;
        } else {
            alert('Please enter valid numbers for both blood glucose and carbohydrate intake.');
            return;
        }

        /**
         * If blood glucose is less than 100 mg/dL, alert the user and return
         */
        
        if (document.getElementById('bg').value < 100) {
            // alert('Please do not does with insulin if bg is less than 100 mg/dL.');
        }

        /**
         * Calculate recommended dose based on blood glucose and carbohydrate intake
         */
        if ((document.getElementById('bg').value - TARGET_BG) < 0) {
            recommendedDose = `${Math.abs(Math.floor(((bg - TARGET_BG) / ICR) * 10))} carbs`;
        } else {
            recommendedDose = `${Math.ceil((carbs / 15) + ((bg - TARGET_BG) / 40)).toFixed(2)} units`;
        }

        
        document.getElementById('recommendedDose').innerText = recommendedDose;
    };

    return (
        <>
            <div id="calculatorComponent" className="flex justify-center items-center w-screen h-screen bg-white overflow-y-scroll">
                <form action="" className="calculatorForm" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                    <label className="inputLabel" style={{color: '#000'}}>Enter Glucose:</label>
                    <input id="bg" type="text" className="input" style={{border: '1px solid #99999999', borderRadius: '50px', color: '#000', padding: '0 0.5rem'}}/>
                    <label className="inputLabel" style={{color: '#000'}}>Enter Carbs:</label>
                    <input id="carbs" type="text" className="input" style={{border: '1px solid #99999999', borderRadius: '50px', color: '#000', padding: '0 0.5rem'}}/>
                    <label id="recommendedDoseLabel" className="inputLabel" style={{color: '#000'}}>Recommended Action:</label>
                    <div id="recommendedDose" className="input" style={{height: '32px', borderRadius: '50px', color: '#000'}}></div>
                    <div id="calculate" onClick={() => {calculateDose()}} style={{cursor: 'pointer', backgroundColor: 'darkturquoise', height: '40px', borderRadius: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 800}}>Calculate</div>
                </form>
            </div>
        </>
    );
}