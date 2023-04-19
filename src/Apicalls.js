async function fetchDogDetails() {
  try {
    const response = await fetch('https://dogapi.dog/api/v2/breeds');
    if(!response.ok) {
        throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
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
    console.log(error)
  }
}

export {fetchDogDetails, fetchDogFacts};