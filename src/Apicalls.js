async function fetchDogDetails(searchTerm) {
  try {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${searchTerm}`);
    if(!response.ok) {
        throw new Error(response.message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error
  }
}

async function fetchDogFacts() {
  try {
    const response = await fetch('https://dogapi.dog/api/v2/facts');
    if(!response.ok) {
      throw new Error("????")
    }
    const data = await response.json();
    if (data.data.length === 0) {
      return "Sorry, no facts available."
    }
    return data.data[0].attributes.body;
  } catch (error) {
    return "Fact: There was an error when trying to fetch a dog fact."
  }
}

export {fetchDogDetails, fetchDogFacts};