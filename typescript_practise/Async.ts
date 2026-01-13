async function getUserData() {
  // Step 1: Create a promise that resolves after 2 seconds
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data received");
    }, 2000);
  }); 

  // Step 2: This line runs ONLY after the promise is resolved
  console.log(data);
}

// Step 3: Call the async function
getUserData();

