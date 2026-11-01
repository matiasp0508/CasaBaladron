async function loadComponent(selector, url, onLoaded) {
    const element = document.querySelector(selector);
    if (!element) {
        console.error(`Element with selector "${selector}" not found.`);
        return;
    }
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load component from ${url}: ${response.statusText}`);
        } else {
            element.innerHTML = await response.text();
            if (typeof onLoaded === 'function') {
                onLoaded();
            }
        }
    } catch (error) {
        console.error(error);
    }
}