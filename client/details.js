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
      ).textContent = `Organizer: ${fundraiser.ORGANIZER}`;
      document.getElementById(
        'fundraiser-target'
      ).textContent = `Target Funding: ${fundraiser.TARGET_FUNDING}`;
      document.getElementById(
        'fundraiser-current'
      ).textContent = `Current Funding: ${fundraiser.CURRENT_FUNDING}`;
      document.getElementById(
        'fundraiser-city'
      ).textContent = `City: ${fundraiser.CITY}`;
      document.getElementById(
        'fundraiser-category'
      ).textContent = `Category: ${fundraiser.CATEGORY}`;
      document.getElementById(
        'fundraiser-description'
      ).textContent = `Description: ${fundraiser.DESCRIPTION}`;
    });
};

if (fundraiserId) {
  fetchDetails(fundraiserId);
}
