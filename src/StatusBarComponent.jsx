

export default function StatusBarComponent ({score, bestScore}){

return (
    <>
        <div className="status-bar">
            <h1 className="blue-shadow">Memory Card Game</h1>
            <h3>Get points by clicking on an image but don&apos;t click on any more than once!</h3>
            <div className="score-bar"><h2 className="red-shadow">SCORE: {score}</h2><h2 className="blue-shadow">BEST SCORE: {bestScore}</h2></div>
        </div>

    </>
)

}