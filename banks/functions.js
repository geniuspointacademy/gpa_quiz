const functions = [
    // --- Definitions and Types ---
    { q: "What is a function that assigns each element of a set to exactly one element of another set called?", options: ["Bijection", "Mapping", "Surjection", "Relation"], answer: 1 },
    { q: "Which of the following is not a standard type of mapping?", options: ["Injective", "Surjective", "Bijective", "Cubic"], answer: 3 },
    { q: "What is a function from a set A to a set B that covers all elements of B called?", options: ["Injective", "Surjective", "Bijection", "Partial function"], answer: 1 },
    { q: "What is an injective function also known as?", options: ["Onto", "One-to-one", "Many-to-one", "Constant"], answer: 1 },
    { q: "A function f is injective if it is:", options: ["Onto", "One-to-one", "Many-to-one", "Constant"], answer: 1 },
    { q: "What is a mapping that is both injective and surjective called?", options: ["Constant", "Bijection", "Surjection", "Injection"], answer: 1 },
    { q: "What type of function is \\(f(x)=x^{2}\\) on \\(\\mathbb{R}\\)?", options: ["Linear and one-to-one", "Non-linear and many-to-one", "Linear and many-to-one", "Non-linear and one-to-one"], answer: 1 },

    // --- Domain, Range, and Calculus ---
    { q: "The domain of \\(f(x)=\\ln(x-2)\\) is:", options: ["\\(\\mathbb{R}\\)", "\\((0,\\infty)\\)", "\\((2,\\infty)\\)", "\\([0,\\infty)\\)"], answer: 2 },
    { q: "The range of \\(f(x)=\\sqrt{x-1}\\) is:", options: ["\\((-\\infty,\\infty)\\)", "\\([0,\\infty)\\)", "\\((0,\\infty)\\)", "\\([1,\\infty)\\)"], answer: 3 },
    { q: "The domain of \\(f(x)=1/(x-4)\\) is:", options: ["\\(\\mathbb{R}\\)", "\\(\\mathbb{R}\\setminus\\{4\\}\\)", "\\(x>0\\)", "\\(x\\ne0\\)"], answer: 1 },
    { q: "The range of \\(f(x)=x^{2}\\) for \\(x\\in\\mathbb{R}\\) is:", options: ["\\(\\mathbb{R}\\)", "\\([0,\\infty)\\)", "\\((-\\infty, 0]\\)", "\\((0,\\infty)\\)"], answer: 1 },
    { q: "The domain of \\(f(x)=\\arcsin(x)\\) is:", options: ["\\(\\mathbb{R}\\)", "\\((-1, 1)\\)", "\\([-1, 1]\\)", "\\((0, 1)\\)"], answer: 2 },
    { q: "The domain of \\(f(x)=1/x\\) is:", options: ["\\(\\mathbb{R}\\)", "\\(\\mathbb{R}\\setminus\\{0\\}\\)", "\\([0,\\infty)\\)", "\\((0,\\infty)\\)"], answer: 1 },
    { q: "The domain of \\(f(x)=\\log_{10}(x)\\) is:", options: ["\\(\\mathbb{R}\\)", "\\([0,\\infty)\\)", "\\((0,\\infty)\\)", "\\((-\\infty,\\infty)\\)"], answer: 2 },
    { q: "The range of \\(f(x)=\\ln(x)\\) is:", options: ["\\(\\mathbb{R}\\)", "\\((0,\\infty)\\)", "\\([0,\\infty)\\)", "\\((-\\infty, 0)\\)"], answer: 0 },
    { q: "The range of \\(f(x)=|x|\\) is:", options: ["\\(\\mathbb{R}\\)", "\\([0,\\infty)\\)", "\\((-\\infty, 0]\\)", "\\((0,\\infty)\\)"], answer: 1 },

    // --- Inverses and Compositions ---
    { q: "If \\(f(x)=2x+1\\) and \\(g(x)=x^{2}\\) what is \\((f\\circ g)(x)\\)?", options: ["\\(2+1\\)", "\\(2(x^{2})+1\\)", "\\((2x+1)^{2}\\)", "\\(x^{2}+2x+1\\)"], answer: 1 },
    { q: "Which is true about the composition of functions?", options: ["Always commutative", "Always associative", "Never associative", "Impossible with a constant"], answer: 1 },
    { q: "The inverse of \\(f(x)=2x-3\\) is:", options: ["\\((x+3)/2\\)", "\\(2x-3\\)", "\\((x-3)/2\\)", "\\((3-x)/2\\)"], answer: 0 },
    { q: "What must a function be to have an inverse?", options: ["Injective", "Surjective", "Constant", "Even"], answer: 0 },
    { q: "The inverse of \\(f(x)=e^{x}\\) is:", options: ["\\(\\log_{10}(x)\\)", "\\(\\ln(x)\\)", "\\(e^{x}\\)", "\\(x^{2}\\)"], answer: 1 },
    { q: "Which function is its own inverse?", options: ["\\(f(x)=x\\)", "\\(f(x)=x^{2}\\)", "\\(f(x)=\\ln(x)\\)", "\\(f(x)=x^{3}\\)"], answer: 0 },

    // --- Odd/Even and Applications ---
    { q: "Which is an odd function?", options: ["\\(f(x)=x\\)", "\\(f(x)=x^{2}\\)", "\\(f(x)=\\cos(x)\\)", "\\(f(x)=|x|\\)"], answer: 0 },
    { q: "Which is an even function?", options: ["\\(f(x)=\\sin(x)\\)", "\\(f(x)=x^{3}\\)", "\\(f(x)=\\cos(x)\\)", "\\(f(x)=x\\)"], answer: 2 },
    { q: "Which is neither odd nor even?", options: ["\\(f(x)=e^{x}\\)", "\\(f(x)=x\\)", "\\(f(x)=\\sin(x)\\)", "\\(f(x)=\\cos(x)\\)"], answer: 0 },
    { q: "If \\(f(x)=|x|\\) then \\(f(-5)=?\\)", options: ["0", "5", "-5", "10"], answer: 1 },
    { q: "If \\(f(x)=x^{2}-9\\), the zeros are:", options: ["\\(x=\\pm3\\)", "\\(x=3\\)", "\\(x=-3\\)", "No real zeros"], answer: 0 },
    { q: "A function is not one-to-one if it:", options: ["Passes the horizontal line test", "Fails the horizontal line test", "Passes the vertical line test", "Fails the vertical line test"], answer: 1 },
    { q: "Which function is unbounded?", options: ["\\(f(x)=\\sin(x)\\)", "\\(f(x)=\\cos(x)\\)", "\\(f(x)=x^{2}\\)", "\\(f(x)=1/x\\)"], answer: 2 },
    { q: "A water utility company charges based on usage \\(W(v)\\). What is the bill for 80 cubic meters?", options: ["$4.00", "$6.40", "$6.00", "$9.60"], answer: 1 }
];