import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { Layout } from '../components/Layout';
import { SideNavigationLayout } from '../components/SideNavigationLayout';
import { Collections } from '../components/works/Collections';
import { Menu } from '../components/works/Menu';

const Works: VFC = () => {
	return (
		<Layout title="KomaHuman｜Works" description="Examples of works">
			<div css={styles.container}>
				<SideNavigationLayout title="Projects 🌟" subText="List of works by years:">
					<Menu />
				</SideNavigationLayout>
				<Collections />
			</div>
		</Layout>
	)
}

export default Works

// ========================================================
// styles

const styles = {
	container: css`
		position: relative;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: auto 1fr;
	`
}
