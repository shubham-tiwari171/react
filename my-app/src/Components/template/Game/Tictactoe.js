import './Tictactoe.css';
import { useState, useEffect, useRef } from 'react';
import Cells from '../../atoms/Cells/Cells';
export default function Tictactoe() {
    const [cells, setCells] = useState(["circle", "", "", "", "", "", "", "", "",]);
    const [go, setGo] = useState('circle');
    const [winMsg, setWinMsg] = useState(null);
    const gameboardRef = useRef([]);
    const message = `It's ${go} turn`;
    const matchedPair = [];

    useEffect(() => {
        checkScore()
        resetCellsStyle()
    }, [cells])

    const checkScore = () => {
        const winCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        winCombination.forEach((array) => {
            const circleWins = array.every((ele) => cells[ele] === 'circle');

            if (circleWins) {
                matchedPair.push(array);
            } else {
                const crossWins = array.every((ele) => cells[ele] === 'cross');

                if (crossWins) {
                    matchedPair.push(array);
                }
            }
        });

        if (matchedPair.length > 0) {
            // console.log(matchedPair)
            // if (gameboardRef.current.length > 0)
            //     console.log("hii")
            // else {
            //     console.log("b")
            // }
            setWinMsg("Circle wins");
        } else if (matchedPair.length > 0) {
            setWinMsg("Cross wins");
        }
    }

    const handleResetClick = () => {
        setCells(["", "", "", "", "", "", "", "", "",]);
        setWinMsg(null);
        setGo('circle')
    }
    const resetCellsStyle = () => {
        const squares = Array.from(gameboardRef.current.children).map(child => Number(child.getAttribute('id')));
        // const ids = [];
        // for (let i = 0; i < squares.length; i++) {
        //     const id = squares[i].getAttribute('id');
        //     ids.push(Number(id));

        //     squares[i].classList.remove('clicked', 'winner');
        // }
        // squares.forEach(square => {

        //     square.classList.add("")

        // });
    };

    return (
        <>
            <h1>Welcome to tic tac toe</h1>
            <div className='container'>
                <div ref={gameboardRef} className='gameboard'>
                    {
                        cells.map((cell, index) =>
                            <Cells
                                key={index}
                                id={index}
                                go={go}
                                setCells={setCells}
                                setGo={setGo}
                                cells={cells}
                                cell={cell}
                                winMsg={winMsg}
                                matchedPair={matchedPair}
                            />
                        )
                    }
                    <button className="btn btn-danger button" onClick={handleResetClick}>Reset</button>
                </div>
                <div className='result' >
                    <p style={{ fontSize: '40px', textAlign: 'center' }}>{winMsg || message}</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        {winMsg !== null && <img src="./excited.gif" />}

                    </div>
                </div>

            </div>

        </>
    )
} 
