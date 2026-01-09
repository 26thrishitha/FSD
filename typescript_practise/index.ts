const message: string = "Hello TypeScript";
console.log(message);


// 1. Basic Variables (String & Number)
let courseName: string = "TypeScript";
let courseDuration: number = 2.5;

console.log(`The ${courseName} course duration is ${courseDuration} hours.`);

// 2. Boolean Logic
let isStudent: boolean = true;

if (isStudent) {
  console.log("You are a student.");
}

// 3. Simple Array
let favoriteLanguages: string[] = ["JavaScript", "Python", "TypeScript"];
favoriteLanguages.push("Java");

console.log(favoriteLanguages);

// 4. Tuple for Fixed Data
let productInfo: [string, number, boolean] = ["MacBook Pro", 2500, true];

console.log(productInfo);
