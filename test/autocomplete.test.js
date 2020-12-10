it('Shows an autocomplete', () => {
	createAutoComplete({
		root: document.querySelector('#target'),
		fetchData() {
			return [
				{ Title: 'Avengers' },
				{ Title: 'Harry Potter and the Order of Phoenix' },
				{ Title: 'Lord of the Rings: Two towers' },
				{ Title: 'Home Alone' },
				{ Title: 'James Bond 007' },
				{ Title: 'Justice League' },
			]
		},
		renderOption(movie){
			return movie.Title;
		}
	});

	const dropdown = document.querySelector('.dropdown');

	
});

