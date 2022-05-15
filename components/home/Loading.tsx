import gsap from 'gsap';
import React, { useEffect, useRef, VFC } from 'react';
import { css } from '@emotion/react';
import { appState } from '../../modules/store';
import bean from '../../public/assets/images/app/BeanEater.gif'
import Image from 'next/image';


export const Loading: VFC = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const timeline = gsap.timeline({
			onComplete: () => {
				containerRef.current!.style.zIndex = '-10'
				appState.endLoading = true
			}
		})
		// That give time to load 3d model (yep look strange but it's work)
		timeline.to('.K', { strokeDashoffset: 0, duration: 1, delay: 0.5, ease: 'power1.out' })
		timeline.to('.o', { strokeDashoffset: 0, duration: 1, ease: 'power1.out' }, '< 0.5')
		timeline.to('.m', { strokeDashoffset: 0, duration: 1, ease: 'power1.out' }, '< 0.5')
		// timeline.to('.a', { strokeDashoffset: 0, duration: 1, ease: 'power1.out' }, '< 0.5')


		timeline.to('.logo', { fill: '#fff', duration: 0.6, ease: 'none' })
		timeline.to('.container', { opacity: 0, duration: 0.6, delay: 0.3, ease: 'none' })
	}, [])

	return (
		<div ref={containerRef} className="container" css={styles.container}>
			<Image src={`/assets/images/app/BeanEater.gif`} width={42} height={42} objectFit="contain" />

		</div>
	)
}

const styles = {
	container: css`
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background-color: #161616;
		display: flex;
		justify-content: center;
		align-items: center;
	`
}
