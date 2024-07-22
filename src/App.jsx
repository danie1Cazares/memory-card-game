import { useEffect, useState } from 'react'
import axios from 'axios'

import React from 'react';
import './App.css'
import CardComponent from './CardComponent'
import StatusBarComponent from './StatusBarComponent';
import MessageComponent from './MessageComponent';

function App() {

  //  set up useEffect to pull from API
  // display images
  // set up logic to save the selected card to an array and compare against previous clicks
  // shuffle cards after click
  //  create lose condition
  // update current score and best score

  // buiild and deploy


  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [hasLost, setHasLost] = useState(false);
  const [repeatedCard, setRepeatedCard] = useState('');
  const [numberOfCards, setNumberOfCards] = useState(50);

  useEffect(() => {

    const getCards = async () => {

      try {
        const response = await axios.get(
          'https://api.giphy.com/v1/gifs/search?api_key=GgUfFEerqXVPxCarxdIv09dnKXD7VE7u&q=avengers&limit=' + numberOfCards
        );

        console.log(response.data.data);
        setCards(response.data.data);
       
      }

      catch (error) {
        if (error.response){
          console.log('error response')
          console.log(error.response.data);
          console.log(error.response.headers);
          console.log(error.response.status);

        }
        else if (error.request){
          console.log('error request')

          console.log(error.request);
          //setError(error.request)
        } else {
          console.log('Error ' + error.message);
        }
        console.log(error.config);

      } finally {
        //setLoading('false');
      }
    };

    getCards();

  }, [numberOfCards]);


  const handleClick = (cardID, cardURL) => {

    const selectedCard = cardID;

    console.log('card selected id is ' + selectedCard)
    //CHECK lose condition: compare card ID to array of clicked cards
    if (clickedCards.includes(selectedCard)){
        setHasLost(true);
        console.log('same card clicked!')
        setRepeatedCard(cardURL);
        // setScore(0);
        setClickedCards([]);

    }  else {
        // on lose reset score, reset clickedCards and shuffle array

        setClickedCards([...clickedCards, selectedCard]);

        //update score
        const newScore = score + 1;
        setScore(newScore);

          if (newScore > bestScore){
          
            setBestScore(newScore);
          } 

    }


        //shuffle cards
        setCards(shuffleArray(cards))


  };

  const restartGame = () => {
    setHasLost(false); 
    setScore(0)
  }

 function shuffleArray(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}


  return (
    <>
    <div className="wrapper">
      <StatusBarComponent score={score} bestScore={bestScore} />

      {
        (!hasLost)
          
        ?

          <CardComponent cards={cards} handleClick={handleClick} />
    
        :

        <MessageComponent repeatedCard={repeatedCard} numberOfCards={numberOfCards} setNumberOfCards={setNumberOfCards} restartGame={restartGame} />

      }

    </div>

    </>
  )
}

export default App
