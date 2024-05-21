window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
    macros: {
      ket: ["{\\left| #1 \\right\\rangle}", 1],
      bra: ["{\\left\\langle #1 \\right|}", 1],
      braket: ["{\\left\\langle #1 \\middle| #2 \\right\\rangle}", 2]
    }
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  },
  loader: {load: ['[tex]/mhchem']}
};

document.addEventListener("DOMContentLoaded", function() {
  MathJax.typesetPromise();
});
