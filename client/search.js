document.getElementById("search-form").addEventListener("submit", (event) => {
    event.preventDefault();

    // search params from inputs
    const organizerInput = document.getElementById('organizer').value;
    const cityInput = document.getElementById('city').value;
    const categoryInput = document.getElementById('category').value;

    // query string
    let queryStr = '/api/fundraisers/search?';
    if(organizerInput) queryStr += `organizer=${encodeURIComponent(organizerInput)}&`;
    if(cityInput) queryStr += `city=${encodeURIComponent(city)}&`;
    if(categoryInput) queryStr += `category=${encodeURIComponent(categoryInput)}`;

    queryStr = queryStr.slice(0, -1);

    // API Function
    try{
        fetchSearch()
    } catch(err){
        console.error('Error fetching search results:', error);
      document.getElementById('search-results').innerHTML =
        '<p style="color: red; font-weight: bold;">An error occurred. Please try again later.</p>';
    }

})

const fetchSearch = async(queryStr) => {
    const res = await fetch(queryStr);
    const data = await res.json();

    if(res.ok){
        // Display results
        console.log(data)
    } else {
        document.getElementById('search-results').innerHTML =
          '<p>An error occurred while searching.</p>';
    }
}
