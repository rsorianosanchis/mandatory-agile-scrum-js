import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chessboard from 'chessboardjsx';
import Chess from 'chess.js';
import axios from 'axios';
import { Link } from 'react-router-dom'
export default class ChessImpl extends Component {
    static propTypes = { children: PropTypes.func };
    constructor(props) {
        super(props)
        this.state = {
            fen: "start",
            // square styles for active drop square
            dropSquareStyle: {},
            // custom square styles
            squareStyles: {},
            // square with the currently clicked piece
            pieceSquare: "",
            // currently clicked square
            square: "",
            // array of past game moves
            history: [],

            fenBoard: [],
            gameId: "",
        };
        this.resetGame = this.resetGame.bind(this)
        this.game = new Chess();

    }

    async componentDidMount() {
        this.getGames()
    }

    getGames = async () => {
        const id = window.location.pathname.replace(/[!@#/$%^&*]/g, "");
        this.setState({ gameId: id })

        try {
            const response = await axios.get(`http://localhost:4000/api/seeks/${id}`);
            console.log(response.data);
            this.setState({ fenBoard: response.data });
            if (response.data.chessmans === null) {
                return
            } else {
                const result = this.game.load(response.data.chessmans)
                if (result) {
                    console.log("success");
                    console.log(this.game.fen());
                    this.setState(({ history, pieceSquare }) => ({
                        fen: this.game.fen(),
                        history: this.game.history({ verbose: true }),
                        squareStyles: squareStyling({ pieceSquare, history })
                    }))

                } else {
                    console.log("fail");

                }
            }
        } catch (error) {
            console.error(error);
        }
    };
    // keep clicked square style and remove hint squares
    removeHighlightSquare = () => {
        this.setState(({ pieceSquare, history }) => ({
            squareStyles: squareStyling({ pieceSquare, history })
        }));
    };

    // show possible moves
    highlightSquare = (sourceSquare, squaresToHighlight) => {
        console.log("squaresToHighlight" + squaresToHighlight);

        const highlightStyles = [sourceSquare, ...squaresToHighlight].reduce(
            (a, c) => {
                return {
                    ...a,
                    ...{
                        [c]: {
                            background:
                                "radial-gradient(circle, #fffc00 36%, transparent 40%)",
                            borderRadius: "50%"
                        }
                    },
                    ...squareStyling({
                        history: this.state.history,
                        pieceSquare: this.state.pieceSquare
                    })
                };
            },
            {}
        );

        this.setState(({ squareStyles }) => ({
            squareStyles: { ...squareStyles, ...highlightStyles }
        }));
    };


    onDrop = ({ sourceSquare, targetSquare }) => {

        // see if the move is legal
        let move = this.game.move({
            from: sourceSquare,
            to: targetSquare,
            promotion: "q" // always promote to a queen for example simplicity
        });

        // illegal move
        if (move === null) return;
        this.setState(({ history, pieceSquare }) => ({
            fen: this.game.fen(),
            history: this.game.history({ verbose: true }),
            squareStyles: squareStyling({ pieceSquare, history })
        }))

        this.makeMove()
    };


    makeMove = () => {

        this.setState(state => {
            state.fenBoard.chessmans = state.fen
            return state
        })

        const list = this.state.fenBoard;

        axios
            .put(`http://localhost:4000/api/seeks/${this.state.gameId}`, list)
            .then(res => {
                console.log(res.data);
                console.log(this.game.turn());
                console.log(this.game.history());
                console.log(this.state.history);


            })
            .catch(error => {
                console.error(error);

            });
    }
resetGame = (e) => {
        this.game.reset();

        this.setState(state => {
            state.fen = "start"
            return state
        })
        this.setState(state => {
            state.fenBoard.chessmans = null
            return state
        })

        const list = this.state.fenBoard;

        axios.put(`http://localhost:4000/api/seeks/${this.state.gameId}`, list)
          .then((response) => {
          // console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }


    onMouseOverSquare = square => {
        // get list of possible moves for this square
        let moves = this.game.moves({
            square: square,
            verbose: true
        });

        // exit if there are no moves available for this square
        if (moves.length === 0) return;

        let squaresToHighlight = [];
        for (var i = 0; i < moves.length; i++) {
            squaresToHighlight.push(moves[i].to);
        }
    };

    onMouseOutSquare = square => this.removeHighlightSquare(square);

    // central squares get diff dropSquareStyles
    onDragOverSquare = square => {
        this.setState({
            dropSquareStyle:
                square === "e4" || square === "d4" || square === "e5" || square === "d5"
                    ? { backgroundColor: "cornFlowerBlue" }
                    : { boxShadow: "inset 0 0 1px 4px rgb(255, 255, 0)" }
        });
    };

    onSquareClick = square => {
        this.setState(({ history }) => ({
            squareStyles: squareStyling({ pieceSquare: square, history }),
            pieceSquare: square
        }));

        let move = this.game.move({
            from: this.state.pieceSquare,
            to: square,
            promotion: "q" // always promote to a queen for example simplicity
        });

        // illegal move
        console.log("move" + move);

        if (move === null) return;

        this.setState({
            fen: this.game.fen(),
            history: this.game.history({ verbose: true }),
            pieceSquare: ""
        })
    };

    onSquareRightClick = square =>
        this.setState({
            squareStyles: { [square]: { backgroundColor: "deepPink" } }
        });

    render() {
        const { fen, dropSquareStyle, squareStyles, history } = this.state;


        return (
            <>
                <header
                    style={{
                        "backgroundColor": "#cddc3954",
                        "height": 100,
                        "display": "flex",
                        "justifyContent": "center",
                        "alignItems": "center",
                        "marginBottom": 30

                    }}
                >
                    <Link
                        style={{
                            "fontSize": 20,
                            "color": "black"
                        }}
                        to={"/"}> <i className="far fa-arrow-alt-circle-left"></i>  LOBBY </Link>
                         <button onClick={this.resetGame}>Restart</button>
                </header>
                
                <div style={{
                    "display": "flex",
                    "justifyContent": "space-around"
                }}>
                    <Chessboard

                        id="Chess"
                        width={430}
                        position={fen}
                        onDrop={this.onDrop}
                        onMouseOverSquare={this.onMouseOverSquare}
                        onMouseOutSquare={this.onMouseOutSquare}
                        boardStyle={{
                            borderRadius: "5px",
                            boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
                        }}
                        squareStyles={squareStyles}
                        dropSquareStyle={dropSquareStyle}
                        onDragOverSquare={this.onDragOverSquare}
                        onSquareClick={this.onSquareClick}
                        onSquareRightClick={this.onSquareRightClick}
                    />
                    <ChessHistory moveHistory={this.state.history} />
                </div>
            </>
        )
    }
}


function ChessHistory(props) {
    const moveHistory = props.moveHistory.map((move) => {
        if (move.color === 'w') {
            return (
                <div style={{
                    "display": "flex",
                    "justifyContent":"space-around",
                    "fontWeight": "bold"
                }} >
                    <span>White:</span>
                    <span>{move.from}</span>
                    <span>{move.to}</span>
                </div>
            );
        }
        if (move.color === 'b') {
            return (
                <div style={{
                    "display": "flex",
                    "justifyContent":"space-around"
                }} >
                    <span>Black:</span>
                    <span>{move.from}</span>
                    <span>{move.to}</span>
                </div>

            );
        }
    });


    return (
        <div style={{
            "backgroundColor": "#2196f394",
            "width": "30%",
            "padding": "21"

        }}>
            <div style={{
                "display": "flex",
                "justifyContent":"space-around"
            }} >
                    <span>Color</span>
                    <span>From</span>
                    <span>To</span>
            </div>
                {moveHistory}
        </div>
    );
}

const squareStyling = ({ pieceSquare, history }) => {
    const sourceSquare = history.length && history[history.length - 1].from;
    const targetSquare = history.length && history[history.length - 1].to;

    return {
        [pieceSquare]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
        ...(history.length && {
            [sourceSquare]: {
                backgroundColor: "rgba(255, 255, 0, 0.4)"
            }
        }),
        ...(history.length && {
            [targetSquare]: {
                backgroundColor: "rgba(255, 255, 0, 0.4)"
            }
        })
    };
};
