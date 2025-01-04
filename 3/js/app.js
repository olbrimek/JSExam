// Define the function to fetch movies and add them to the page
async function loadMovies() {
    const apiUrl = 'https://fer-api.coderslab.pl/v1/be-exam/movies';

    try {
        // Fetch the movie data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response JSON
        const movies = await response.json();

        // Select the container where movies will be added
        const movieList = document.createElement('ul');
        document.body.appendChild(movieList); // Add the list to the body or a specific container

        // Iterate through the movies array
        movies.forEach(movie => {
            // Create elements for the title, year, and list item
            const listItem = document.createElement('li');
            const titleElement = document.createElement('h2');
            const yearElement = document.createElement('h3');

            // Set the content of the title and year elements
            titleElement.innerText = movie.title;
            yearElement.innerText = movie.year;

            // Append the title and year to the list item
            listItem.appendChild(titleElement);
            listItem.appendChild(yearElement);

            // Append the list item to the movie list
            movieList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}

// Call the function to load movies when the script runs
loadMovies();
