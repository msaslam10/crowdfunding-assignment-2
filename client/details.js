const urlParams = new URLSearchParams(window.location.search)
const fundraiserId = urlParams.get('id');

console.log(fundraiserId);