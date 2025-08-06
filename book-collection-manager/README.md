# Book Collection Manager - Signals Edition

This project is a web application for managing a book collection, developed as part of the **CodeStar Phase 6** program. This version of the project has been completely refactored using the latest modern Angular tools and patterns, with a special focus on **Angular Signals**.

The application is fully routed, allowing seamless navigation between different sections like the main list, book details, and static content pages.

---

## Screenshots

Here is a preview of the application's different pages:

**About Page**
![About Page View](./screenshots/about-page.png)

**Contact Page**
![Contact Page View](./screenshots/contact-page.png)


---

##  Features & Key Highlights

This project was developed with a focus on best practices and the latest Angular features:

* **State Management with Signals:** All application state management has been migrated from `RxJS/BehaviorSubject` to **Angular Signals**. This results in more readable code and simpler management of reactive states.

* **Single-Page Application (SPA) with Routing:** The entire application is built as a SPA. **Angular Router** manages navigation between all dynamic and static pages, including the book list, details, forms, about, and contact pages.

* **Professional Folder Structure (Feature-Based):** The project is organized by features (`features`), shared sections (`layout`), and static pages (`pages`), making future scalability and code maintenance easier.

* **Full CRUD Functionality:** The application supports all four core operations for books:
    * **Create:** Add new books via a reactive form.
    * **Read:** Display a complete list of books and detailed views for each book.
    * **Update:** Edit the information of existing books.
    * **Delete:** Remove books from the collection.

* **Live Search Feature:** Users can instantly search through book titles to filter the collection in real-time.

* **Static Content Pages:** Includes "About" and "Contact" pages to provide additional information.

* **Modern Styling with SCSS:** SCSS is used for styling, with a focus on `rem` units for better responsiveness and accessibility.

