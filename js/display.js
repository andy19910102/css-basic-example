

const codeBlockMap = {
    blockCodeExampleCodeBlock: `選擇目標 {
    display: block;
}`, inlineCodeExampleCodeBlock: `選擇目標 {
    display: inline;
}`, inlineBlockCodeExampleCodeBlock: `選擇目標 {
    display: inline-block;
}`
};

for (let n in codeBlockMap) {
    document.getElementById(n).innerHTML = `
<pre>
    <code class="css">
${codeBlockMap[n]}
    </code>
</pre>
    `;
}