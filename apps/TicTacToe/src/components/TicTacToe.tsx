import { useState } from "react"

function checkWinner(board: string[]){

    if (board[0] != "" && board[0] == board[1] && board[0] == board[2]) return board[0]
    if (board[3] != "" && board[3] == board[4] && board[3] == board[5]) return board[3]
    if (board[6] != "" && board[6] == board[7] && board[6] == board[8]) return board[6]

    if (board[0] != "" && board[0] == board[3] && board[0] == board[6]) return board[0]
    if (board[1] != "" && board[1] == board[4] && board[1] == board[7]) return board[1]
    if (board[2] != "" && board[2] == board[5] && board[2] == board[8]) return board[2]

    if (board[0] != "" && board[0] == board[4] && board[0] == board[8]) return board[0]
    if (board[2] != "" && board[2] == board[4] && board[2] == board[6]) return board[2]

    return ""
}

function TicTacToe() {
    const rows = [0, 1, 2]
    const cols = [0, 1, 2]
    const [board, setBoard] = useState(Array(9).fill(""))
    const [turn, setTurn] = useState(0)
    const winner = checkWinner(board)

    function handleClick(index: number){
        if (board[index] !="" || winner) return

        const newBoard = [...board]
        if (turn == 0){
            newBoard[index] = "X"
            setTurn(1)
        }
        else {
            newBoard[index] = "O"
            setTurn(0)
        }
        setBoard(newBoard)
    }

    return (
        <>
        {turn==0 ? (<p> X's turn </p>) : (<p> O's turn</p>) }
        <table>
            <tbody>
                {rows.map(row => (
                    <tr key={row}>
                        {cols.map(col => {
                            const cell = row * 3 + col + 1
                            return (
                                <td key={cell} onClick={() => handleClick(cell-1)}>
                                    {board[cell-1]}
                                </td>
                            )
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
        {!winner && !board.includes("") && 
        <div>
            <p>Draw</p>
                <button onClick={() => {
                    setBoard(Array(9).fill("")) 
                    setTurn(0)}}>
                    Reset game
                </button>
        </div>
        }
        {winner && <div>
            <p>Winner: {winner}</p>
                <button onClick={() => {
                        setBoard(Array(9).fill("")) 
                        setTurn(0)}}>
                        Reset game
                </button>
            </div>}
        
        </>
    )
}

export default TicTacToe