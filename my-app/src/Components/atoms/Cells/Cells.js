import React from 'react'
import './Cell.css'
const Cells = ({ id, cells, setGo, go, setCells, cell, winMsg }) => {

    const handleClick = (e) => {

        if (winMsg) {
            return; // Exit early if winMsg is true
        }
        const cell = e.target.firstChild;

        if (!cell) {
            // Exit early if there is no cell element
            return;
        }

        const hasCircleClass = cell.classList.contains('circle');
        const hasCrossClass = cell.classList.contains('cross');

        if (hasCircleClass || hasCrossClass) {
            // Exit early if the cell already has a circle or cross class
            return;
        }

        if (go === 'circle') {
            cell.classList.add('circle');
            handleCellChange('circle');
            setGo('cross');

        } else if (go === 'cross') {
            cell.classList.add('cross');
            handleCellChange('cross');
            setGo('circle');

        }
    }

    const handleCellChange = (classname) => {
        const newCells = cells.map((cell, index) => {
            if (index === id) {
                return classname
            } else {
                return cell;
            }
        })
        setCells(newCells);
    }

    // matchedPair.forEach(element => { element.classList.add("bg-color") })

    return (
        <div className="square" id={id} onClick={handleClick}>
            <div className={cell}></div>
        </div>
    )
}

export default Cells