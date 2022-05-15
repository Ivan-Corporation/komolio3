import dynamic from 'next/dynamic';
import React, { VFC } from 'react';
import { useSnapshot } from 'valtio';
import { css } from '@emotion/react';
import { DisplayModeButton } from '../components/home/DisplayModeButton';
import { Loading } from '../components/home/Loading';
import { Menu } from '../components/home/Menu';
import { Name } from '../components/home/Name';
import { Profile } from '../components/home/Profile';
import { Layout } from '../components/Layout';
import { appState } from '../modules/store';

const TCanvas = dynamic(() => import('../components/three/TCanvas'), { ssr: false })

const Home: VFC = () => {
	const appSnap = useSnapshot(appState)

	return (
		<Layout>
			<div css={styles.container}>
				<TCanvas />
				<Name />
				<Menu />
				<Profile />

				<DisplayModeButton />
				{!appSnap.endLoading && <Loading />}
			</div>
		</Layout>
	)
}

export default Home

// ========================================================
// styles

const styles = {
	container: css`
		position: relative;
		width: 100%;
		height: 100%;
	`
}
