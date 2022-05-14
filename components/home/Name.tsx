import React, { useRef, VFC } from 'react';
import { css } from '@emotion/react';
import { colorStyles, useColorManager } from '../../modules/colorManager';
import { appState } from '../../modules/store';
import { useSnapshot } from 'valtio';

export const Name: VFC = () => {
	const mainRef = useRef<HTMLDivElement>(null)

	const appSnap = useSnapshot(appState)


	useColorManager([mainRef])

	return (
		<div css={styles.container}>
			<div ref={mainRef} css={styles.subText}>
				{appSnap.displayMode === 'light' ? (
					'KomaHuman 🌻'
				) : (
					'KomaHuman 🍄'
				)}

			</div>
		</div>
	)
}

// ========================================================
// styles

const styles = {
	container: css`
		position: absolute;
		top: 20px;
		left: 30px;
		display: flex;
		flex-direction: column;
		grid-gap: 5px;
	`,
	subText: css`
		font-size: 3.5rem;
		${colorStyles.mainText}
	`
}
