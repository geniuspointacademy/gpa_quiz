const derivatives = [
    // --- From "MTS 102 COMPILED TEST QUESTIONS BY O'YEMI" ---
    { 
        q: "Find \\(\\frac{dy}{dx}\\) for \\(y=x^{12}+a+b+c+d+e\\) (constants a, b, c, d, e).", 
        options: ["\\(12x^{11}+a+b\\)", "\\(12x^{11}\\)", "\\(x^{11}\\)", "0"], 
        answer: 1 
    },
    { 
        q: "Differentiate \\(y=\\frac{\\cos \\theta+\\sin \\theta}{\\sin \\theta}\\)", 
        options: ["\\(\\csc^{2}\\theta\\)", "-\\(\\csc^{2}\\theta\\)", "\\(\\cot \\theta\\)", "-\\(\\sec^{2}\\theta\\)"], 
        answer: 1 
    },
    { 
        q: "Find \\(\\frac{dy}{dx}\\) for \\(y=\\frac{1}{117}\\tan z\\).", 
        options: ["\\(\\frac{\\sec^{2}z}{117}\\)", "\\(\\frac{\\tan z}{117}\\)", "\\(117\\sec^{2}z\\)", "0"], 
        answer: 0 
    },
    { 
        q: "What is the product rule for \\(y=UVWXY\\)?", 
        options: [
            "\\(U'V'W'X'Y'\\)", 
            "\\(U'VWXY+UV'WXY+UVW'XY+UVWX'Y+UVWXY'\\)", 
            "\\(U+V+W+X+Y\\)", 
            "None of the above"
        ], 
        answer: 1 
    },
    { 
        q: "Differentiate \\(y=2\\left(\\frac{1-x^{2}}{1+x^{2}}\\right)\\)", 
        options: ["\\(\\frac{-8x}{(1+x^{2})^{2}}\\)", "\\(\\frac{4x}{(1+x^{2})^{2}}\\)", "\\(\\frac{-4x}{1+x^{2}}\\)", "0"], 
        answer: 0 
    },
    { 
        q: "What is the derivative of \\(500 \\csc x\\)?", 
        options: ["\\(-500\\csc x \\cot x\\)", "\\(500\\sec x \\tan x\\)", "0", "1"], 
        answer: 0 
    },
    { 
        q: "What is the gradient of \\(y=\\frac{3x}{x+1}\\) at \\(x=2\\)?", 
        options: ["3", "\\(\\frac{1}{9}\\)", "\\(\\frac{1}{3}\\)", "1"], 
        answer: 2 
    },
    
    // --- From "QUESTION 32 FULL.pdf" (Chain Rule) ---
    {
        q: "Given \\(y=\\sec^{3}(\\tan^{2}((\\cos x+\\sin x)^{3}))\\), find \\(\\frac{dy}{dx}\\). (This is a multi-step chain rule problem)",
        options: ["Complex chain rule application", "1", "0", "None"],
        answer: 0 
    },

    // --- From "MTS 102 PRACTICE ON FUNCTIONS" / "ORC" (Algebraic/Calculus related) ---
    { 
        q: "What is the inverse of \\(f(x)=e^{x}\\)?", 
        options: ["\\(\\log_{10} x\\)", "\\(\\ln x\\)", "\\(e^{-x}\\)", "x"], 
        answer: 1 
    },
    { 
        q: "What is the domain of \\(A=\\pi r^{2}\\)?", 
        options: ["\\(r > 0\\)", "All real numbers \\(r\\in\\mathbb{R}\\)", "\\(r < 0\\)", "None of these"], 
        answer: 1 
    },
    { 
        q: "Is \\(2x^{2}+2\\) a function?", 
        options: ["Yes", "No", "Only for positive x", "Only for negative x"], 
        answer: 0 
    },
    { 
        q: "If \\(f(x)=x^{2}-9\\), the zeros are:", 
        options: ["\\(x=\\pm3\\)", "\\(x=3\\)", "\\(x=-3\\)", "No real zeros"], 
        answer: 0 
    }
];