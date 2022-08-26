import React, { useState } from "react";
import "../styles/Board.css";

const initial = [
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1]
];

export default function Board(props) {
  const [sudokuArr, setSudokuArr] = useState(getDeepCopy(initial));

  function getDeepCopy(arr){
    return JSON.parse(JSON.stringify(arr))
  }

  function onInputChange(e, row, col){
    var val = parseInt(e.target.value) || -1, grid = getDeepCopy(sudokuArr)
    if (val === -1 || (val>=1 && val <=9)){
        grid[row][col] = val
    }
    setSudokuArr(grid)
  }

  function submitBoard(){
    const board = sudokuArr
    console.log(board)
  }

  return (
    <>
      <table>
        <tbody>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
            return (
              <tr key={rIndex} className={((row + 1)%3) === 0 ? "bBorder": ''}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                  return (
                    <td key={rIndex + cIndex} className={((col + 1)%3) === 0 ? "rBorder": ''}>
                      <input
                        onChange={(e) => onInputChange(e, row, col)}
                        className="cellInput"
                        id="cellInput"
                        value={
                          sudokuArr[row][col] === -1 ? "" : sudokuArr[row][col]
                        }
                        disabled={sudokuArr[row][col] !== -1}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={submitBoard} type="submit">{props.submit_title}</button>
    </>
  );
}
