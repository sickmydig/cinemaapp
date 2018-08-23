import React from 'react';

export const font = {
	Monserrate: {

		// without weight with this monserrate font familly
		weights: {
			SemiBold: 400
		},
		styles: {
			Italic: 'italic'
		}
	}
};

const HandleDrawerMenu = (options = {}) => {
	let { weight, style, family } = Object.assign(
		{
			weight: null,
			style: null,
			family: 'Monserrate'
		}, options);

	const { weights, styles } = font[family];
	return {
		fontFamily: family
	};
};

export default HandleDrawerMenu;
