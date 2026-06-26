const graphs = [
    { 
        q: "Remember that the area of a circle is a function of its radius (i.e. \\(A(r)=\\pi r^{2}\\)). Which of the options is the domain?", 
        options: ["\\(\\{r|r>0\\}=(0,\\infty)\\)", "\\(\\{r|r<0\\}=[-1,\\infty)\\)", "\\(\\{r|r>0\\}=[0,\\infty]\\)", "\\(\\{r|r>0\\}=(-\\infty,\\infty)\\)"], 
        answer: 0 
    },
    { 
        q: "Which of the following is the range of the function \\(A(r)=\\pi r^{2}\\)?", 
        options: ["\\([-1,\\infty)\\)", "\\((-\\infty,\\infty)\\)", "\\((0,\\infty)\\)", "\\([0,\\infty]\\)"], 
        answer: 3 
    },
    { 
        q: "Which of the following options is TRUE about the vertical line test?", 
        options: ["Vertical line intersects curve > 2 points", "Vertical line intersects curve > once", "Horizontal line intersects curve > 2 points", "Horizontal line intersects curve > once"], 
        answer: 1 
    },
    { 
        q: "Which of the following is true about the graphical illustration below?", 
        image: "images/graph_mapping.png", 
        options: ["Set D is dependent", "Set D is output", "f is a function with codomain D", "f is a function with domain D"], 
        answer: 3 
    },
    { 
        q: "Which of the following option is NOT true about the graphical illustration below?", 
        image: "images/graph_piecewise_1.png", 
        options: ["\\(f(0)=0\\)", "Solid dot (-1,2) is included", "Open dot (-1,1) is excluded", "Open dot (-1,1) is included"], 
        answer: 3 
    },
    { 
        q: "Recall piecewise functions. Which option accurately defines \\(y=|x|\\)?", 
        image: "images/graph_absolute_value.png", 
        options: ["y=x if x≤0; -x if x=0", "y=x if x≥0; -x if x<0", "y=x if x<0; -x if x=0", "y=-x if x≥0; x if x<0"], 
        answer: 1 
    },
    { 
        q: "The graphical illustration below explains the meaning of:", 
        image: "images/graph_even.png", 
        options: ["Odd function", "Piecewise Function", "Exponential function", "Even function"], 
        answer: 3 
    },
    { 
        q: "The graphical illustration below explains the meaning of:", 
        image: "images/graph_odd.png", 
        options: ["Odd function", "Piecewise Function", "Exponential function", "Even function"], 
        answer: 0 
    },
    { 
        q: "State the values of \\(f(-4)\\) and \\(g(3)\\) in the graphical illustration below:", 
        image: "images/graph_f_g.png", 
        options: ["f(-4)=1, g(3)=2", "f(-4)=4, g(3)=-2", "f(-4)=-2, g(3)=4", "f(-4)=2, g(3)=2"], 
        answer: 2 
    },
    { 
        q: "Using the graph below, which of the following is NOT true?", 
        image: "images/graph_comparison.png", 
        options: ["f(-4)=-2", "f(3)=1", "f(-3) < g(-3)", "f(-3) > g(-3)"], 
        answer: 3 
    },
    { 
        q: "Which of the following is true about y as a function of x?", 
        options: ["Data does not define y as a function", "Data defines y as a function", "x=150 produces single value", "x depends on y"], 
        answer: 0 
    },
    { 
        q: "Which is the graphical representation of \\(y=x^{4}\\)?", 
        image: "images/graph_power.png", 
        options: ["Option A (\\(y=x^{4}\\))", "Option B (\\(y=x^{2}\\))", "Option C (\\(y=x^{3}\\))", "Option D (\\(y=x^{5}\\))"], 
        answer: 0 
    }
];
