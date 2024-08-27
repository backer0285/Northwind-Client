document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('discount-row').addEventListener('click', function (e) {
        if (e.target.classList.contains('discount')) {
            e.preventDefault();
            document.getElementById('product').innerHTML = e.target.dataset['product'];
            document.getElementById('title').innerHTML = e.target.dataset['title'];
            document.getElementById('code').innerHTML = e.target.dataset['code'];
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        }
    });

    document.getElementById('discount-row').addEventListener('keydown', function (e) {
        let key = e.code;
        if (key === "Escape") {
            e.preventDefault();
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).hide();
        }
    });
});