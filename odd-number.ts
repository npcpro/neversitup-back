
export function findOddNumber(numbers: number[]) : number {
    const groupCount = numbers.reduce((init, current) => {
        const countBefore = init[current] ?? 0;
        init[current] = countBefore + 1;
        return init;
    }, {});

    for (let number in groupCount) {
        if (groupCount[number] % 2 !== 0) {
        return Number(number);
        }
    }

    throw new Error("No number occurs an odd number of times");
    
}