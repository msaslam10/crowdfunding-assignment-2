const urlParams = new URLSearchParams(window.location.search);
const fundraiserId = urlParams.get('id');

console.log(fundraiserId);

const fetchDetails = async (id) => {
  console.log('Inside fetch details');
  await fetch(`http://localhost:3000/api/fundraisers/${id}`)
    .then((res) => res.json())
    .then((fundraiser) => {
      document.getElementById('fundraiser-caption').textContent =
        fundraiser.CAPTION;
      document.getElementById(
        'fundraiser-organizer'
      ).innerHTML = `<strong>Organizer:</strong> ${fundraiser.ORGANIZER}`;
      document.getElementById(
        'fundraiser-target'
      ).innerHTML = `<strong>Target Funding:</strong> ${fundraiser.TARGET_FUNDING}`;
      document.getElementById(
        'fundraiser-current'
      ).innerHTML = `<strong>Current Funding:</strong> ${fundraiser.CURRENT_FUNDING}`;
      document.getElementById(
        'fundraiser-city'
      ).innerHTML = `<strong>City:</strong> ${fundraiser.CITY}`;
      document.getElementById(
        'fundraiser-category'
      ).innerHTML = `<strong>Category:</strong> ${fundraiser.CATEGORY}`;
    });
};

if (fundraiserId) {
  fetchDetails(fundraiserId);
}
