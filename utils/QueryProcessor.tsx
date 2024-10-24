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
    const regex = /what is (\d+) plus (\d+)\?/i;
    const match = query.match(regex);
    if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      const result = num1 + num2;
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
  return "";
}
