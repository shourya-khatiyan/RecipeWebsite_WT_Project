var currentCategory = 'all';
var currentSearch = '';

document.addEventListener('DOMContentLoaded', function () {
    renderRecipes(recipes);
    var searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function () {
        currentSearch = this.value;
        filterRecipes();

    });


    var categoryButtons = document.querySelectorAll('.btn-category');
    categoryButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            categoryButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });

            this.classList.add('active');
            currentCategory = this.getAttribute('data-category');
            filterRecipes();
        });
    });


});

function renderRecipes(recipesToRender) {
    var recipeGrid = document.getElementById('recipeGrid');
    var noResults = document.getElementById('noResults');

    recipeGrid.innerHTML = '';
    if (recipesToRender.length === 0) {
        noResults.style.display = 'block';
        return;

    }
    else {
        noResults.style.display = 'none';
    }

    recipesToRender.forEach(function (recipe) {
        var cardHTML = createRecipeCard(recipe);
        recipeGrid.innerHTML += cardHTML;
    });

}

function createRecipeCard(recipe) {
    var cardHTML =
        '<div class="col-md-4 col-sm-6 mb-4">' +
        '<div class="card recipe-card h-100">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' + recipe.name + '</h5>' +
        '<span class="badge badge-category me-2">' + recipe.category + '</span>' +
        '<span class="badge badge-time">' + recipe.time + '</span>' +
        '<div class="mt-3">' +
        '<a href="recipe.html?id=' + recipe.id + '" class="btn btn-primary btn-sm">View Recipe</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    return cardHTML;
}


function filterRecipes() {
    var filteredRecipes = recipes.filter(function (recipe) {
        var categoryMatch = (currentCategory === 'all') || (recipe.category === currentCategory);
        var searchMatch = recipe.name.toLowerCase().includes(currentSearch.toLowerCase());
        return categoryMatch && searchMatch;
    });

    renderRecipes(filteredRecipes);
}
