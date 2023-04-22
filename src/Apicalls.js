async function fetchDogDetails(searchTerm) {
  try {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${searchTerm}`);
    if(!response.ok) {
        throw new Error(response.status);
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
      return "Fact: There was an error when trying to fetch a dog fact."
    }
    const data = await response.json();
    return data.data[0].attributes.body;
  } catch (error) {
    return "Fact: No dog fact could be fetched."
  }
}

export {fetchDogDetails, fetchDogFacts};