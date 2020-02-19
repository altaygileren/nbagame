import React from 'react'

export default function Playercard(props) {
	const roundDownPoints = number => {
		let zero = 0
		if (number != null) {
			return number.toFixed(2)
		} else {
			return zero
		}
	}
	return (
		<div className='player-card-div'>
			<div>
				<img
					alt={`${props.player.first_name} ${props.player.last_name}`}
					className='player-img'
					src={props.player.images.default.url}
				/>
				<p>
					{props.player.first_name} {props.player.last_name}
				</p>
			</div>
			<div>
				{props.reveal ? (
					<span className='player-points'>
						{roundDownPoints(props.player.fppg)}
					</span>
				) : (
					<div>
						<button
							className='select-btn'
							onClick={() => props.playerSelected(props)}
						>
							Select
						</button>
					</div>
				)}
			</div>
		</div>
	)
}
