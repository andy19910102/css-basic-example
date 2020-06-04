document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.example-code>pre>code').forEach((block) => {
        hljs.highlightBlock(block);
    });
});