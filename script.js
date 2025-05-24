document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.collapsible-toggle');

    toggles.forEach(toggle => {
        const contentId = toggle.getAttribute('aria-controls');
        const content = document.getElementById(contentId);
        const icon = toggle.querySelector('.toggle-icon');

        // Initialize content visibility based on aria-expanded state (default to collapsed)
        if (toggle.getAttribute('aria-expanded') === 'true') {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.classList.add('expanded');
            if (icon) icon.textContent = '▲'; // Up arrow for expanded
        } else {
            content.style.maxHeight = '0';
            content.classList.remove('expanded');
            if (icon) icon.textContent = '▼'; // Down arrow for collapsed
        }

        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                toggle.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = '0';
                content.classList.remove('expanded');
                if (icon) icon.textContent = '▼'; // Down arrow
            } else {
                toggle.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.classList.add('expanded');
                if (icon) icon.textContent = '▲'; // Up arrow
            }
        });
    });
});
