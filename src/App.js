import React, { Component } from 'react'
import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import shuffle from 'shuffle-array'
import Playercard from './components/player.card'
import Score from './components/score'
import Fade from 'react-reveal/Fade'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			players: [],
			playerOne: { images: { default: { url: '' } } },
			playerTwo: { images: { default: { url: '' } } },
			score: 0,
			playerSelect: { first_name: '' },
			revealStats: false,
		}
	}

	componentDidMount = async () => {
		await axios
			.get(
				'https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json'
			)
			.then(res => this.randomize(res.data.players))
			.catch(err => console.log(err))
	}

	randomize = players => {
		this.setState(
			{
				players: shuffle(players),
			},
			() => this.setPlayers(this.state.players[0], this.state.players[1])
		)
	}

	setPlayers = (playerOne, playerTwo) => {
		this.setState({
			playerOne,
			playerTwo,
		})
	}

	playerSelected = player => {
		this.setState(
			{
				playerSelect: player.player,
			},
			() => this.checkScores(this.state.playerSelect)
		)
	}

	checkScores = async player => {
		let { playerOne, playerTwo, players } = this.state
		let that = this
		let higherScore = Math.max(playerOne.fppg, playerTwo.fppg)
		if (higherScore === player.fppg) {
			this.revealStat()
			setTimeout(() => {
				that.setScore()
			}, 3000)
		} else {
			this.randomize(players)
		}
	}

	revealStat = () => {
		this.setState({ revealStats: true })
		setTimeout(() => {
			this.setState({ revealStats: false })
		}, 3000)
	}

	setScore = () => {
		let { players } = this.state
		this.setState(
			{
				score: this.state.score + 1,
			},
			() => this.randomize(players)
		)

		if (this.state.score >= 10) {
			alert('YOU WIN')
		}
	}

	render() {
		let { playerOne, playerTwo, revealStats } = this.state
		if (!playerOne && !playerTwo) {
			return <span>Loading</span>
		}
		return (
			<div className='gameDiv'>
				<Fade bottom>
					<Container>
						<div className='gameTitleDiv'>
							<h3 className='gameTitle'>NBA Player Game</h3>
						</div>
						<Row>
							<Col xl={6} lg={6} md={6} sm={6} xs={6}>
								<Playercard
									reveal={revealStats}
									playerSelected={this.playerSelected}
									player={playerOne}
								/>
							</Col>
							<Col xl={6} lg={6} md={6} sm={6} xs={6}>
								<Playercard
									reveal={revealStats}
									playerSelected={this.playerSelected}
									player={playerTwo}
								/>
							</Col>
						</Row>
						<Row>
							<Score score={this.state.score} />
						</Row>
					</Container>
				</Fade>
			</div>
		)
	}
}
