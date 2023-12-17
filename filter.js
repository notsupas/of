
document.addEventListener('DOMContentLoaded', function () {
    const filterTags = document.getElementById('filter-tags');
    const models = document.querySelectorAll('.row.mb-3');
    const clearButton = document.getElementById('clear-filters');

    // Function to update models display based on selected tags
    function filterModels() {
        const selectedTags = new Set(
            Array.from(filterTags.selectedOptions).map(option => option.value)
        );

        models.forEach(model => {
            const modelTags = model.querySelector('.tags') ? model.querySelector('.tags').textContent.split(',') : [];
            if (selectedTags.size === 0 || modelTags.some(tag => selectedTags.has(tag.trim()))) {
                model.style.display = '';
            } else {
                model.style.display = 'none';
            }
        });
    }

    // Event listener for tag selection changes
    filterTags.addEventListener('change', filterModels);

    // Event listener for clearing filters
    clearButton.addEventListener('click', function () {
        filterTags.selectedIndex = -1;
        filterModels();
    });
});
