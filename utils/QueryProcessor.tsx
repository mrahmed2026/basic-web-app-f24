export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "mrahmed" );
  }

  if (query.includes("What is your name?")) {
    return ("mrahmed-313");
  }


  if (query.toLowerCase().includes("what is")) {
    const regexPlus = /what is (\d+(?: plus \d+)+)\?/i;
    const matchPlus = query.match(regexPlus);
    if (matchPlus) {
        const numbers = matchPlus[1].split(' plus ').map(num => parseInt(num, 10));
        const result = numbers.reduce((acc, curr) => acc + curr, 0);
        return result.toString();
    }

    const regexMultiply = /what is (\d+) multiplied by (\d+)\?/i;
    const matchMultiply = query.match(regexMultiply);
    if (matchMultiply) {
        const num1 = parseInt(matchMultiply[1], 10);
        const num2 = parseInt(matchMultiply[2], 10);
        const result = num1 * num2;
        return result.toString();
    }

    const regexMinus = /what is (\d+) minus (\d+)\?/i;
    const matchMinus = query.match(regexMinus);
    if (matchMinus) {
        const num1 = parseInt(matchMinus[1], 10);
        const num2 = parseInt(matchMinus[2], 10);
        const result = num1 - num2;
        return result.toString();
    }

    const regexPower = /what is (\d+) to the power of (\d+)\?/i;
    const matchPower = query.match(regexPower);
    if (matchPower) {
        const num1 = parseInt(matchPower[1], 10);
        const num2 = parseInt(matchPower[2], 10);
        const result = Math.pow(num1, num2);
        return result.toString();
    }

    const regexComplex = /what is (\d+) multiplied by (\d+) plus (\d+)\?/i;
    const matchComplex = query.match(regexComplex);
    if (matchComplex) {
        const num1 = parseInt(matchComplex[1], 10);
        const num2 = parseInt(matchComplex[2], 10);
        const num3 = parseInt(matchComplex[3], 10);
        const result = (num1 * num2) + num3;
        return result.toString();
    }




  }


  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    const regex = /which of the following numbers is the largest: ([\d,\s]+)\?/i;
    const match = query.match(regex);
    if (match) {
        const numbers = match[1].split(',').map(num => parseInt(num.trim(), 10));
        const largest = Math.max(...numbers);
        return largest.toString();
    }
}

if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
  const regex = /which of the following numbers is both a square and a cube: ([\d,\s]+)\?/i;
  const match = query.match(regex);
  if (match) {
      const numbers = match[1].split(',').map(num => parseInt(num.trim(), 10));
      const isSquareAndCube = (num: number) => {
          const sqrt = Math.sqrt(num);
          const cbrt = Math.cbrt(num);
          return Number.isInteger(sqrt) && Number.isInteger(cbrt);
      };
      const result = numbers.filter(isSquareAndCube);
      return result.join(', ');
  }
}


if (query.toLowerCase().includes("which of the following numbers are primes")) {
  const regex = /which of the following numbers are primes: ([\d,\s]+)\?/i;
  const match = query.match(regex);
  if (match) {
      const numbers = match[1].split(',').map(num => parseInt(num.trim(), 10));
      const isPrime = (num: number) => {
          if (num <= 1) return false;
          for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) return false;
          }
          return true;
      };
      const result = numbers.filter(isPrime);
      return result.join(', ');
  }
}








  return "";
}
