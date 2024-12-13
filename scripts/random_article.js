function goToRandomArticle() {
    console.log("Function called!"); // Check if this appears in the console

    // Ensure the script is being executed from the correct path
    const scripts = document.scripts;
    const currentScript = scripts[scripts.length - 1];

    // Get the path of the currently executing script
    const scriptPath = currentScript.src;
    console.log("Script Path:", scriptPath); // Check script path

    // Extract the directory of the script file
    const scriptDir = scriptPath.substring(0, scriptPath.lastIndexOf('/'));

    // Build the path to the XML file relative to the script's directory
    const xmlPath = scriptDir + '/../data/article_list.xml';

    // Fetch the XML file
    fetch(xmlPath)
        .then(response => response.text())
        .then(str => {
            // Parse the XML string into an XML document
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(str, "application/xml");

            // Get all article paths
            const articles = xmlDoc.getElementsByTagName("article");
            const randomIndex = Math.floor(Math.random() * articles.length);

            // Get the random article's path
            const randomArticle = articles[randomIndex].getElementsByTagName("path")[0].textContent;

            // Redirect the user to the random article
            window.location.href = randomArticle;
        })
        .catch(error => {
            console.error("Error fetching article_list.xml:", error);
        });
}
