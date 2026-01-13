// Async function to simulate fetching user data
async function fetchUser() {
  console.log("Start fetching user...");

  // Await pauses here until the promise resolves
  const user = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Thrishitha", age: 21 });
    }, 2000); // 2 seconds delay
  });

  
  // Runs only after promise is resolved
  console.log("User fetched:", user);

  console.log("End of function");
}

// Call the async function
fetchUser();

console.log("This runs before user is fetched!");









