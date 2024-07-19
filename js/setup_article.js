document.addEventListener('DOMContentLoaded', function() {
    // HTML content for tools section
    const toolsSectionHTML = `
        <div class="tools_section">
            <img src="../images/other/estarapedia.png" alt="Estarapedia Logo">
            <nav>
                <h1>Tools</h1>
                <ul>
                    <li><a href="./estarapedia_home.html">Estarapedia Home</a></li>
                </ul>
            </nav>
        </div>
    `;

    // HTML content for footer
    const footerHTML = `
        <div class="footer">
            <hr>
            <p>Information accurate as of 100YE.</p>
            <p>© 2024 Mason Engevold. All rights reserved.</p>
        </div>
    `;

    // Insert tools section into sidebar
    document.querySelector('.sidebar').insertAdjacentHTML('afterbegin', toolsSectionHTML);

    // Insert footer into content section
    document.querySelector('.content_section').insertAdjacentHTML('beforeend', footerHTML);

    var toc = document.getElementById('toc').querySelector('ul');
    var headings = document.querySelectorAll('.body article h2, .body article h3');
    headings.forEach(function(heading) {
        if (!heading.classList.contains('no-toc')) {
            var link = document.createElement('a');
            link.href = '#' + heading.id;
            if (heading.tagName.toLowerCase() === 'h2') {
                link.classList.add('toc-heading');
            } else if (heading.tagName.toLowerCase() === 'h3') {
                link.classList.add('toc-subheading');
            }
            link.textContent = heading.textContent;
            var listItem = document.createElement('li');
            listItem.appendChild(link);
            toc.appendChild(listItem);
        }
    });

    // Setup article title
    var articleTitleHeadings = document.querySelectorAll('.article-title');
    articleTitleHeadings.forEach(function(heading) {
        heading.textContent = document.title;
    });
});
