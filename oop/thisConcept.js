// একটি ক্লাস লিখা হচ্ছে যা একটি ছাত্রের নাম এবং জন্মসাল সংরক্ষণ করে।
class Student {
    constructor(name, birthYear) {
      this.name = name;
      this.birthYear = birthYear;
    }
  
    // ছাত্রের বয়স হিসাব করে রিটার্ন করে।
    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    // ছাত্রের নাম এবং জন্মসাল প্রিন্ট করে।
    printInfo() {
      console.log(`${this.name} এর BirthYear ${this.birthYear}`);
    }
  }
  
  // একটি নতুন ছাত্র তৈরি করা হয় এবং তার নাম এবং জন্মসাল সেট করা হয়।
  const student1 = new Student('Mahin', 2003);
  
  // ছাত্রের বয়স হিসাব করে প্রিন্ট করা হয়।
  console.log(`${student1.name} এর বয়স ${student1.getAge()} বছর`);
  
  // ছাত্রের নাম এবং জন্মসাল প্রিন্ট করা হয়।
  student1.printInfo();
  