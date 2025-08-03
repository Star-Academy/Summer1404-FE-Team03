fetch("books.json")
  .then((response) => response.json())
  .then((books) => {
    const article = document.querySelector("article");
    article.style.width = "100%";
    article.style.display = "grid";
    article.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";

    books.forEach((book) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("boxes")

      const title = document.createElement("h3");
      title.textContent = book.name;

      const img = document.createElement("img");
      img.src = book.image;
      img.alt = book.name;
      img.style.width = "200px";

      const author = document.createElement("p");
      author.textContent = `Author: ${book.author}`;

      const genre = document.createElement("p");
      genre.textContent = `Genre: ${book.genre.join(", ")}`;

      const publishDate = document.createElement("p");
      publishDate.textContent = ` Published: ${book.publishData}`;

      const price = document.createElement("p");
      price.textContent = ` Price: $${(book.price / 100).toFixed(2)}`;

      bookCard.appendChild(title);
      bookCard.appendChild(img);
      bookCard.appendChild(author);
      bookCard.appendChild(genre);
      bookCard.appendChild(publishDate);
      bookCard.appendChild(price);

      article.appendChild(bookCard);
    });
  });
