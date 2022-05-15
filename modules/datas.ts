import { SkillDatas, WorkDatas } from './types';



export const localStorageKeys = {
	displayMode: 'display-mode'
}


export const years = ['2022', '2021', '2020'] as const

export const workDatas: WorkDatas = {
	2022: [
		{
			title: 'Komotedly',
			image: '/assets/images/2022/Komotedly.png',
			app: 'https://komotedly.netlify.app/'
		},
		{
			title: 'Planet-destroyer',
			image: '/assets/images/2022/planet.png',
			app: 'https://planet-destroyer.netlify.app/'
		},
		{
			title: 'Komshoe',
			image: '/assets/images/2022/Komshoe.png',
			app: 'https://komshoe.vercel.app/'
		},
		{
			title: 'Komoquote',
			image: '/assets/images/2022/komoquote.png',
			app: 'https://komoquote.netlify.app/'
		},
		{
			title: 'React-Compress',
			image: '/assets/images/2022/react-compress.png',
			app: 'https://github.com/Ivan-Corporation/react-compress'
		},
		{
			title: 'Komanding',
			image: '/assets/images/2022/Komanding.png',
			app: 'https://komanding.netlify.app/'
		},
		{
			title: 'Komolio New',
			image: '/assets/images/2022/komolio2.png',
			app: 'https://komolio.netlify.app/'
		},
		{
			title: 'Komtodo',
			image: '/assets/images/2022/komtodo.png',
			app: 'https://komtodo.vercel.app/'
		}
	],
	2021: [
		{
			title: 'Komaroad',
			image: '/assets/images/2021/komaroad.png',
			app: 'https://komaroad.netlify.app/'
		},
		{
			title: 'Koma-Crypto',
			image: '/assets/images/2021/koma-crypto.png',
			app: 'https://koma-crypto.netlify.app/'
		},
		{
			title: 'React-Python',
			image: '/assets/images/2021/react-python.png',
			app: 'https://github.com/Ivan-Corporation/ReactPython_BookApp'
		},
		{
			title: 'React-Komaroad',
			image: '/assets/images/2021/roadmap.png',
			app: 'https://github.com/Ivan-Corporation/React-Komaroad'
		},
		{
			title: 'NextJS Auth',
			image: '/assets/images/2021/React-Next.js_API-auth.png',
			app: 'https://react-next-js-api-auth.vercel.app/'
		},
		{
			title: 'Komolio',
			image: '/assets/images/2021/komolio1.png',
			app: 'https://ivan-corporation.github.io/Komolio/'
		},
		{
			title: 'Investing-App',
			image: '/assets/images/2021/investing.png',
			app: 'https://ivan-corporation.github.io/ru/stock-info'
		}
	],
	2020: [
		{
			title: 'KomaQuiz',
			image: '/assets/images/2020/komaquiz.png',
			app: 'https://play.google.com/store/apps/details?id=komar.corporation.Quiz&hl=ru'
		},
		{
			title: 'Battleship-Game',
			image: '/assets/images/2020/Battleship.png',
			app: 'https://0cv80.csb.app/'
		},
		{
			title: 'KomTetris',
			image: '/assets/images/2020/Tetris.png',
			app: 'https://cj2g1.csb.app/'
		}
	]
}

export const skillCategories = ['All', 'Active'] as const

export const skillDatas: SkillDatas = {
	language: [
		{ name: 'HTML5', iconName: 'html', experience: '4 years', isActive: true },
		{ name: 'CSS3', iconName: 'css', experience: '4 years', isActive: true },
		{ name: 'SCSS', iconName: 'scss', experience: '2 years', isActive: true },
		{ name: 'JavaScript', iconName: 'javascript', experience: '3 years', isActive: true },
		{ name: 'TypeScript', iconName: 'typescript', experience: '1 year', isActive: true },
		{ name: 'Python', iconName: 'python', experience: '6 months', isActive: false },
		{ name: 'Java', iconName: 'java', experience: '4 months', isActive: false }
	],
	framework: [
		{ name: 'React', iconName: 'react', experience: '2 years', isActive: true },
		{ name: 'Vue', iconName: 'vue', experience: '3 months', isActive: false },
		{ name: 'Angular', iconName: 'angular', experience: '1 month', isActive: false },
		{ name: 'Next.js', iconName: 'nextjs', experience: '1 year', isActive: true },
		{ name: 'Three.js', iconName: 'three', experience: '6 months', isActive: true },
		{ name: 'Node.js', iconName: 'nodejs', experience: '2 years', isActive: true },
		{ name: 'Express', iconName: 'express', experience: '6 months', isActive: true }
	],
	library: [
		{ name: 'Framer Motion', iconName: 'framer', experience: '3 months', isActive: true },
		{ name: 'Styled', iconName: 'styled_components', experience: '1 year', isActive: true },
		{ name: 'Chakra', iconName: 'chakra', experience: '3 months', isActive: false },
		{ name: 'MUI', iconName: 'mui', experience: '1 year', isActive: true }
	],
	cloudService: [
		{ name: 'Firebase', iconName: 'firebase', experience: '1 year', isActive: false },
		{ name: 'Heroku', iconName: 'heroku', experience: '3 mounths', isActive: true }
	],
	developmentTool: [
		{ name: 'VSCode', iconName: 'vscode', experience: '3 years', isActive: true },
		{ name: 'GitHub', iconName: 'github', experience: '3 years', isActive: true },
		{ name: 'Expo', iconName: 'expo', experience: '1 month', isActive: false },
		{ name: 'Figma', iconName: 'figma', experience: '6 months', isActive: true },
		{ name: 'Blender', iconName: 'blender', experience: '6 months', isActive: false },
		{ name: 'Gimp', iconName: 'gimp', experience: '4 years', isActive: true },
		{ name: 'Wordpress', iconName: 'wordpress', experience: '2 years', isActive: false },
		{ name: 'Android Studio', iconName: 'android', experience: '4 months', isActive: false }
	]
}
