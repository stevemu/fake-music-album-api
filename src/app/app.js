import React from 'react';
import Hello from './components/Hello';

/*
 * @class App
 */
class App {

	render(domElement) {
		var reactElement = <Hello />;

		// render to DOM
		if (domElement) {
			React.render(reactElement, domElement);
			return;
		}
	}

	renderToDOM(element) {
		if (!element) {
			return debug(new Error('App.renderToDOM: element is required'));
		}

		this.render(element);
	}

}

export default App;
