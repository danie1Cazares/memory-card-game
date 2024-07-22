

export default function MessageComponent ({repeatedCard, numberOfCards, setNumberOfCards, restartGame}){
    
    const numbers = Array.from({ length: 50 }, (_, i) => i + 1);

    return (
        <>
                <div className="msg-container">
                    <div className="msg-box">
                        <h1 className='red-shadow'>You lose!</h1>
                        <p className='black-shadow'>You selected this card:</p>
                        <div className="card-container">
                        <img src={repeatedCard}/>
                        </div>
                    

                    <div className='card-select'>
                        <label htmlFor='number-of-cards' className='black-shadow'>Select the number of cards for next game: </label>
                        <select id='number-of-cards'  defaultValue={numberOfCards} onChange={(e)=>{setNumberOfCards(e.target.value)}}>
                        {
                            numbers.map((number) => (
                            <option key={number} value={number}>
                                {number}
                            </option>
                            ))

                        }
                        </select>
                    </div>

                    <button onClick={restartGame}>RESTART</button>
                    
                    </div>
                </div>
                
                </>


    );
   

}