document.addEventListener("DOMContentLoaded", function() {
    fetch("posts.json")
        .then(response => response.json())
        .then(data => {
            let postContainer = document.getElementById("posts");
            data.forEach(post => {
                let div = document.createElement("div");
                div.classList.add("post");
                div.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
                postContainer.appendChild(div);
            });
        })
        .catch(error => console.error("Error loading posts:", error));
});
