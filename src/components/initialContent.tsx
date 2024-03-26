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

    <h2>Troubleshooting Tips</h2>

    <p>If you've confirmed the basics, here are some additional steps to troubleshoot:</p>

    <h3>1. Check for Functionality</h3>

    <p>
    Add the 'prose' class to any HTML element to see if the default Tailwind typography styles are applied. This helps verify if the plugin is working at all.
    </p>

    <h3>2. Inspect for Typos</h3>

    <p>Double-check that the class names you're using are spelled correctly. Typos can prevent styles from being applied.</p>

    <h3>3. Identify Style Conflicts</h3>

    <p>
    If you're using other CSS frameworks or libraries, they might conflict with Tailwind's styles. Try isolating Tailwind by temporarily removing other stylesheets.
    </p>

    <h3>4. Consider Class Order</h3>

    <p>The order of classes in your HTML can affect how styles are applied. Experiment with rearranging classes to see if it makes a difference.</p>

    <h3>5. Consult Documentation</h3>

    <p>The Tailwind CSS Typography plugin documentation (https://github.com/topics/tailwind-typography) offers valuable troubleshooting resources.</p>

    <h3>6. Seek Community Help</h3>

    <p>
    If you're still stuck, don't hesitate to reach out for help! The Tailwind CSS community is friendly and willing to assist. You can find them on Discord (https://v1.tailwindcss.com/community) or GitHub (https://github.com/tailwindlabs/tailwindcss/discussions/8546).
    </p>

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