document.addEventListener('DOMContentLoaded', function () {
    renderFavorites();
});

function getFavorites() {
    var favorites = localStorage.getItem('favorites');
    if (favorites) {
        return JSON.parse(favorites);
    }
    return [];
}

function saveFavorites(favorites) {  //save favorites to local storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function getRecipeById(id) {  //find recipe by ID
    for (var i = 0; i < recipes.length; i++) {
        if (recipes[i].id === id) {
            return recipes[i];
        }
    }
    return null;
}


function renderFavorites() {
    var favoritesGrid = document.getElementById('favoritesGrid');
    var noFavorites = document.getElementById('noFavorites');
    var favorites = getFavorites();

    favoritesGrid.innerHTML = '';

    if (favorites.length === 0) {           //check if there are no favorites
        noFavorites.style.display = 'block';
        return;
    } else {
        noFavorites.style.display = 'none';
    }

    favorites.forEach(function (recipeId) {
        var recipe = getRecipeById(recipeId);
        if (recipe) {
            var cardHTML = createFavoriteCard(recipe);
            favoritesGrid.innerHTML += cardHTML;
        }
    });
}

function createFavoriteCard(recipe) {
    var cardHTML =
        '<div class="col-md-4 col-sm-6 mb-4" id="favorite-' + recipe.id + '">' +
        '<div class="card recipe-card h-100">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' + recipe.name + '</h5>' +
        '<span class="badge badge-category me-2">' + recipe.category + '</span>' +
        '<span class="badge badge-time">' + recipe.time + '</span>' +
        '<div class="mt-3">' +
        '<a href="recipe.html?id=' + recipe.id + '" class="btn btn-primary btn-sm me-2">View Recipe</a>' +
        '<button class="btn btn-remove btn-sm" onclick="removeFavorite(' + recipe.id + ')">Remove</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    return cardHTML;
}


function removeFavorite(recipeId) {   // remove favorite recipe from local storage
    var favorites = getFavorites();
    var index = favorites.indexOf(recipeId);

    if (index !== -1) {
        favorites.splice(index, 1);
        saveFavorites(favorites);
    }

    renderFavorites();
}
