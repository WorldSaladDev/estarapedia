function insertWarningBox() {
    const warningContainers = document.querySelectorAll('.warning-rewrite, .warning-incomplete, .warning-stub');

    warningContainers.forEach((warningContainer) => {
        const createWarningBox = (text) => {
            const warningBoxDiv = document.createElement('div');
            warningBoxDiv.classList.add('warning-box');

            // Create and add the first warning image
            const warningImage1 = document.createElement('img');
            warningImage1.src = '../../resources/icons/warning.png';
            warningImage1.alt = 'Warning Icon';
            warningBoxDiv.appendChild(warningImage1);

            // Create and add the warning text
            const warningText = document.createElement('p');
            warningText.textContent = text;
            warningBoxDiv.appendChild(warningText);

            // Create and add the second warning image
            const warningImage2 = document.createElement('img');
            warningImage2.src = '../../resources/icons/warning.png';
            warningImage2.alt = 'Warning Icon';
            warningBoxDiv.appendChild(warningImage2);

            return warningBoxDiv;
        };

        let warningText = '';
        // Determine the warning text based on the container's class
        if (warningContainer.classList.contains('warning-rewrite')) {
            warningText = 'This article is in need of a rewrite. Some of its contents may be considered non-canon.';
        } else if (warningContainer.classList.contains('warning-incomplete')) {
            warningText = 'This article is incomplete and may be missing important information. Some of its contents may be considered non-canon.';
        } else if (warningContainer.classList.contains('warning-stub')) {
            warningText = 'This article is a stub.';
        }

        // Append the warning box
        const warningBox = createWarningBox(warningText);
        warningContainer.appendChild(warningBox);

        // Insert a horizontal rule after the warning container
        const hr = document.createElement('hr');
        warningContainer.insertAdjacentElement('afterend', hr);
    });
}



function addHorizontalRules() {
    const articleBody = document.querySelector('.article-body');
    if (articleBody) {
        const headings = articleBody.querySelectorAll('h2');
        headings.forEach(function (heading) {
            // Create the invisible horizontal rule
            const invisibleHr = document.createElement('hr');
            invisibleHr.classList.add('invisible');

            // Insert the invisible HR before the heading
            heading.insertAdjacentElement('beforebegin', invisibleHr);

            // Create the normal horizontal rule
            const normalHr = document.createElement('hr');

            // Insert the normal HR after the heading
            heading.insertAdjacentElement('afterend', normalHr);
        });
    }
}

function insertFooter() {
    const footerHTML = `
        <footer>
            <hr>
            <section>
                <p>Some assets were created using various web tools. More information can be found on the <a href="../misc/credits.html">credits page</a>.</p>
                <p>© 2024 Mason Engevold. All rights reserved.</p>
            </section>
        </footer>
    `;

    // Select the .article-container div
    const articleContainer = document.querySelector('.article-container');
    if (articleContainer) {
        // Insert the footer before the end of .article-container
        articleContainer.insertAdjacentHTML('beforeend', footerHTML);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // HTML content for tools section
    const toolsSectionHTML = `
        <img src="../../resources/estarapedia_logo_vertical.svg" alt="Estarapedia Logo">
        <div class="tools_section">
            <nav>
                <h1>Links</h1>
                <ul>
                    <li><a href="../misc/estarapedia_home.html">Home</a></li>
                    <li><a href="../misc/index.html">Index</a></li>
                    <li><a href="../misc/credits.html">Attributions</a></li>
                </ul>
            </nav>
        </div>
    `;

    // HTML content for table of contents section
    const tocSectionHTML = `
        <div class="toc_section" id="toc">
            <nav>
                <h1>Contents</h1>
                <ul>
                    <li><a href="#top">Back to Top</a></li>
                </ul>
            </nav>
        </div>
    `;

    // Insert tools section into sidebar
    const sidebar = document.querySelector('.sidebar-subcontainer');
    sidebar.insertAdjacentHTML('afterbegin', toolsSectionHTML);

    // Insert TOC section into sidebar
    sidebar.insertAdjacentHTML('beforeend', tocSectionHTML);

    // Generate table of contents
    const toc = document.getElementById('toc').querySelector('ul');
    const headings = document.querySelectorAll('.article-body h2, .article-body h3');
    headings.forEach(function (heading) {
        if (!heading.classList.contains('no-toc')) {
            const link = document.createElement('a');
            link.href = '#' + heading.id;
            link.textContent = heading.textContent;

            const listItem = document.createElement('li');
            listItem.classList.add(
                heading.tagName.toLowerCase() === 'h2' ? 'toc-heading' : 'toc-subheading'
            );
            listItem.appendChild(link);
            toc.appendChild(listItem);
        }
    });

    // Setup article title
    const articleTitleHeadings = document.querySelectorAll('.article-title');
    articleTitleHeadings.forEach(function (heading) {
        heading.textContent = document.title;
    });

    // Add <hr> to h2 headings
    addHorizontalRules();

    // Insert warning boxes if applicable
    insertWarningBox();

    // Insert footer
    insertFooter();
});