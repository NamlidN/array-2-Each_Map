let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
let A = [...languages.sort()];
console.log(A);

let B = [...languages];
B.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log(B);
