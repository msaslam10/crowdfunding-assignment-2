const urlParams = new URLSearchParams(window.location.search);
const fundraiserId = urlParams.get('id');

console.log(fundraiserId);

const fetchDetails = async (id) => {
  try {
    await fetch(`http://localhost:3000/api/fundraisers/${id}`)
      .then((res) => res.json())
      .then((fundraiser) => {
        document.getElementById('fundraiser-caption').textContent =
          fundraiser.CAPTION;
        document.getElementById(
          'fundraiser-organizer'
        ).innerHTML = `<p style="margin-bottom:4px"><strong style="font-size: 20px;">Organizer:</strong> ${fundraiser.ORGANIZER}</p>`;
        document.getElementById(
          'fundraiser-target'
        ).innerHTML = `<p style="margin-bottom:4px"><strong style="font-size: 20px">Target Funding:</strong> ${fundraiser.TARGET_FUNDING}</p>`;
        document.getElementById(
          'fundraiser-current'
        ).innerHTML = `<p style="margin-bottom:4px";><strong style="font-size: 20px">Current Funding:</strong> ${fundraiser.CURRENT_FUNDING}</p>`;
        document.getElementById(
          'fundraiser-city'
        ).innerHTML = `<p style="margin-bottom:4px"><strong style="font-size: 20px">City:</strong> ${fundraiser.CITY}</p>`;
        document.getElementById(
          'fundraiser-category'
        ).innerHTML = `<strong style="font-size: 20px">Category:</strong> ${fundraiser.CATEGORY}`;
      });
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
};

if (fundraiserId) {
  fetchDetails(fundraiserId);
}
