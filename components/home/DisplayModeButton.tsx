import Image from 'next/image';
import React, { useRef, VFC } from 'react';
import { useSnapshot } from 'valtio';
import { css } from '@emotion/react';
import { localStorageKeys } from '../../modules/datas';
import { appState } from '../../modules/store';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const DisplayModeButton: VFC = () => {
	const appSnap = useSnapshot(appState)
	const notify = () => toast.info("Projects 🌟 and Skills 🏆 theme changed!");

	const handleClick = () => {
		const mode = appSnap.displayMode === 'light' ? 'dark' : 'light'
		appState.displayMode = mode
		appState.transition = true
		notify()
		localStorage.setItem(localStorageKeys.displayMode, mode)
	}

	return (
		<React.Fragment>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				style={{ fontSize: '17px' }}
			/>
			<button css={styles.container} onClick={handleClick}>
				{appSnap.displayMode === 'light' ? (
					<Image src={`/assets/images/app/moon.png`} width={30} height={30} objectFit="contain" />
				) : (
					<Image src={`/assets/images/app/sun.png`} width={30} height={30} objectFit="contain" />
				)}
			</button>
		</React.Fragment>
	)
}

const styles = {
	container: css`
		position: absolute;
		top: 20px;
		right: 20px;
		background-color: rgba(0, 0, 0, 0);
		border: none;

		&:hover {
			cursor: pointer;
		}
	`
}
