const fetchFundraisers = async () => {
  await fetch(`http://localhost:3000/api/fundraisers`)
    .then((resposne) => resposne.json())
    .then((data) => console.log(data));
};

fetchFundraisers();

console.log('Hey people');
