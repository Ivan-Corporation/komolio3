import { proxy } from 'valtio';
import { ApplicationState, SkillCategories, Years } from './types';

export const workState = proxy<{ year: Years }>({ year: '2022' })

export const skillState = proxy<{ category: SkillCategories }>({ category: 'Active' })

export const appState = proxy<ApplicationState>({
	displayMode: 'dark',
	transition: false,
	defaultLoaded: false,
	endLoading: false
})
