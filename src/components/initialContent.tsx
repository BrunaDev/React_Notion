export const initialContent = `
<h1>Troubleshooting Tailwind CSS Typography</h1>

<p>Having trouble getting Tailwind CSS Typography to work in your project? Don't worry, we've all been there! Here's a guide to help you troubleshoot common issues.</p>

<h2>Verification Steps</h2>

<p>Before diving into more complex solutions, let's verify some basic configurations:</p>

<ol>
<li>Plugin Installation: Did you install the '@tailwindcss/typography' plugin?</li>
<li>
    Configuration Import: Did you import the plugin in your 'tailwind.config.js file using 'plugins: ['@tailwindcss/typography'],'?
</li>
<li>Class Usage: Are you using the correct typography classes (like 'prose') in your HTML?</li>
</ol>

<h2>Bonus Tips</h2>

<ul>
<li>
    Inspect Styles: Use your browser's developer tools to inspect the HTML elements and see which styles are being applied (or not applied).
</li>
<li>
    Tailwind Inspector: Consider using a browser extension like "Tailwind Inspector" to visualize Tailwind styles directly.
</li>
<li>
    PurgeCSS: Explore using the "PurgeCSS" plugin to remove unused Tailwind classes from your final CSS bundle, potentially improving performance and reducing conflicts.
</li>
</ul>

<blockquote cite="https://tailwindui.com/">
"Tailwind CSS Typography provides a beautiful and functional typography system out of the box, making it easy to create clean and readable content."
</blockquote>

<p>By following these steps and utilizing the provided resources, you should be able to resolve your Tailwind CSS Typography issues and achieve the desired styling for your content.</p>

<pre><code class="language-javascript">console.log('Hello Word');</code></pre>
`