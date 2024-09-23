const fetchFundraisers = async () => {
  await fetch(`http://localhost:3000/api/fundraisers`)
    .then((resposne) => resposne.json())
    .then((fundraisersData) => {
      const fundraiserList = document.getElementById('fundraiser-list');
      fundraisersData.forEach((fundraiser) => {
        const div = document.createElement('div');
        div.innerHTML = `
          <h2>${fundraiser.CAPTION}</h2>
          <p>Organizer: ${fundraiser.ORGANIZER}</p>
          <p>Target Funding: ${fundraiser.TARGET_FUNDING}</p>
          <p>Current Funding: ${fundraiser.CURRENT_FUNDING}</p>
          <p>City: ${fundraiser.CITY}</p>
          <p>Category: ${fundraiser.CATEGORY}</p>
          <button>View Details</button>
        `;
        fundraiserList.appendChild(div);
      });
    });
};

fetchFundraisers();
