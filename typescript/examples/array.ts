
const nums: number[] = [1.111, 2.111, 3.111, 4.111]
nums.push(5)

nums.forEach((n) => {
    console.log(n.toFixed());
})

const testString: string[] = nums.map((n) => n.toFixed())
