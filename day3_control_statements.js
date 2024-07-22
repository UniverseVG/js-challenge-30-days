// activity 1

//task 1

const num = 2;

function isPositive(num) {
  if (typeof num !== "number") {
    return "not a number";
  }
  if (num === 0) {
    return "is Zero";
  } else if (num > 0) {
    return "is Positive";
  } else return "is Negative";
}

let result = isPositive(num);

console.log(result);

// task 2

const age = 17;

function canVote(age) {
  if (typeof age !== "number") {
    return "not a valid age";
  }
  if (age >= 18) {
    return "can vote";
  } else {
    return "cannot vote";
  }
}

let result1 = canVote(age);

console.log(result1);

// activity 2

const num1 = 2;
const num2 = 0;
const num3 = 4;

function largestOfThree(num1, num2, num3) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number"
  ) {
    return "invalid inputs";
  }
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

let result2 = largestOfThree(num1, num2, num3);

console.log(result2);

// activity 3

function dayOfWeek(day) {
  switch (day) {
    case 1: {
      return "sunday";
    }
    case 2: {
      return "monday";
    }
    case 3: {
      return "tuesday";
    }
    case 4: {
      return "wednesday";
    }
    case 5: {
      return "thursday";
    }
    case 6: {
      return "friday";
    }
    case 7: {
      return "saturday";
    }
    default: {
      return "invalid day";
    }
  }
}

let result3 = dayOfWeek(4);

console.log(result3);

// activity 4

function gradeOfMarks(marks) {
  switch (marks) {
    case 90: {
      return "A";
    }
    case 80: {
      return "B";
    }
    case 70: {
      return "C";
    }
    case 60: {
      return "D";
    }
    case 50: {
      return "E";
    }
    default: {
      return "F";
    }
  }
}

let result4 = gradeOfMarks(80);

console.log(result4);

//

function isOdd(num) {
  return num % 2 !== 0 ? "is odd" : "is even";
}

let result5 = isOdd(3);

console.log(result5);

//activity 5

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "is leap year";
  } else {
    return "is not leap year";
  }
}

let result6 = isLeapYear(2026);

console.log(result6);

//
