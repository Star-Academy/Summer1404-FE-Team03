# Book Collection Manager 

This project is a web application for managing a book collection, developed as part of the **CodeStar Phase 6** program. This version of the project has been completely refactored using the latest modern Angular tools and patterns, with a special focus on **Angular Signals**.

---

## Screenshots

Here is a preview of the application's different pages:

**Main Page (Book List)**
![Book List View](./book-collection-manager/screenshots/main-page.png)

**Book Detail Page**
![Book Detail View](./book-collection-manager/screenshots/detail-page.png)

**Add/Edit Form**
![Form View](./book-collection-manager/screenshots/form-page.png)


---

##  Features & Key Highlights

This project was developed with a focus on best practices and the latest Angular features:

* **State Management with Signals:** All application state management has been migrated from `RxJS/BehaviorSubject` to **Angular Signals**. This results in more readable code and simpler management of reactive states.

* **Professional Folder Structure (Feature-Based):** The project is organized by features (`features`) and shared sections (`layout`), making future scalability and code maintenance easier.

* **Descriptive File Naming:** File and component naming follows the latest Angular standards for clarity and ease of navigation.

* **Full CRUD Functionality:** The application supports all four core operations:
    * **Create:** Add new books via a reactive form.
    * **Read:** Display a complete list of books and detailed views for each book.
    * **Update:** Edit the information of existing books.
    * **Delete:** Remove books from the collection.

* **Live Search Feature:** Users can instantly search through book titles to filter the collection in real-time.

* **Modern Styling with SCSS:** SCSS is used for styling, with a focus on `rem` units for better responsiveness and accessibility.

