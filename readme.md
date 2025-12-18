# Factorial Calculation in C Programming

This project demonstrates how to calculate the factorial of a number using the **C programming language**.  
It includes both **iterative (loop-based)** and **recursive** approaches.

---

## 📌 What is Factorial?

The factorial of a non-negative integer `n` is the product of all positive integers less than or equal to `n`.

### Formula

### Special Cases
- `0! = 1`
- `1! = 1`
- Factorial is **not defined for negative numbers**

---

## 🧮 Factorial Using Loop (Iterative Method)

### C Code
```c
#include <stdio.h>

int main() {
    int n, i;
    long long fact = 1;

    printf("Enter a number: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        fact = fact * i;
    }

    printf("Factorial of %d is %lld", n, fact);
    return 0;
}

Enter a number: 5
Factorial of 5 is 120
