let group = {
  title: "Our Group",
  student: ["Jhon", "Pete", "Alice"],

  showList() {
    this.student.forEach((student) => console.log(this.title + ": " + student));
  },
};
