async function fetchDogDetails(searchTerm) {
  try {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${searchTerm}`);
    if(!response.ok) {
        throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('error', error)
    throw error
  }
}

async function fetchDogFacts() {
  try {
    const response = await fetch('https://dogapi.dog/api/v2/facts');
    if(!response.ok) {
        throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('error', error)
    throw error
  }
}

export {fetchDogDetails, fetchDogFacts};