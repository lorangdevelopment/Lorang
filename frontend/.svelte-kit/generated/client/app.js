export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4')
];

export const server_loads = [0];

export const dictionary = {
	'/a/[slug]': [~2],
	'/k/[permalink]': [~3],
	'/[[permalink]]': [~4]
};

export const hooks = {
	handleError: ({ error }) => {
		console.error(error);
	},

	reroute: () => {},
	transport: {}
};

export const decoders = Object.fromEntries(
	Object.entries(hooks.transport).map(([k, v]) => [k, v.decode])
);

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';
