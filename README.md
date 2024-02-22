# MovieApp

## Brief Description
<p>This application is designed for browsing movies from the OMDb API database. It includes three subsections:</p>

- **Movie Search:** <p>Facilitates movie searches within the database. Features include an input field for search queries, pagination, a display of search results, and error messages if applicable.</p>
- **Movie Detail:** <p>Displays detailed information about a selected movie (e.g., title, year, genre, poster). Next to the title, a "star" icon allows users to add or remove the movie from their favorites.</p>
- **My Favorite Movies:** <p>Lists favorite movies with options to navigate to movie details or remove a movie from favorites.</p>

<p>The site is designed for clarity and simplicity, primarily serving as a demonstration of capabilities for a job application.</p>

## Technologies Used
<ul>
<li><strong>React:</strong> A library for building user interfaces</li>
<li><strong>TypeScript:</strong> JavaScript with syntax for types</li>
<li><strong>Redux:</strong> A library for managing application state</li>
<li><strong>React Router:</strong> For page navigation</li>
<li><strong>Tailwind CSS:</strong> A utility-first CSS framework</li>
</ul>

## Project Structure
<p>Below is an overview of the project's structure:</p>

- **/build:** <p>Production version of the application</p>
- **/node_modules:** <p>External modules and libraries</p>
- **/public:** <p>Contains static resources like images, favicon, etc.</p>
- **/src:** <p>Source codes of the application, divided into folders:</p>
  - **/api:** <p>Contains functions, actions, and interfaces for API communication</p>
  - **/components:** <p>Reusable components</p>
  - **/hooks:** <p>Exports hooks from `store.ts` (Redux)</p>
  - **/pages:** <p>Templates for individual pages (DetailPage, FavoritesPage, SearchPage)</p>
  - **/slices:** <p>Contains folders with individual slices used in the application (Redux)</p>

## Important Files Description
<p>For detailed information about the functions of the code and its scripts, refer to the code comments.</p>

### `/src`
- **`index.tsx`:** <p>The main TypeScript file, serving as the entry point to the application. It initializes and renders the root component.</p>
- **`App.tsx`:** <p>The root component of the application. It defines routing to other subpages using `react-router`.</p>
- **`store.ts`:** <p>Configures the Redux store, representing the entire storage, into which reducers from individual slices are inserted.</p>

### `/src/api`
- **`actions.ts`:** <p>Contains Redux Thunk actions for asynchronous API calls, these actions are then called on slices where needed. These actions serve to fetch data from the source based on input parameters.</p>
- **`functions.ts`:** <p>Contains primitive functions.</p>
- **`interfaces.ts`:** <p>Contains all custom interfaces used on the site.</p>

### `/src/components`
- **Buttons:** <p>Contains buttons used on the pages.</p>
- **Header:** <p>Layout for the header.</p>
- **Loading:** <p>Layout for the component that appears while data is loading.</p>
- **MoviesList:** <p>Contains components for displaying searched movies and details in the listing.</p>
- **Nav:** <p>Layout for navigation.</p>
- **Pagination:** <p>Component for pagination that appears if there are more search results.</p>
- **Search:** <p>Component for searching based on text.</p>
- **Title:** <p>Component for h1-h3 elements with custom classes and the option to add more.</p>

### `/src/hooks`
- **`storeHook.ts`:** <p>Types hooks according to TypeScript.</p>

### `/src/pages`
- <p>Layouts for subpages.</p>

### `/src/slices`
- **`favoritesSlice`:** <p>A slice for managing favorite movies.</p>
- **`isInitialLoadSlice`:** <p>A slice that checks if it's the first page load, necessary for error messages.</p>
- **`movieDetailSlice`:** <p>A slice for movie details.</p>
- **`pagesSlice`:** <p>A slice for managing pagination.</p>
- **`searchStringSlice`:** <p>A slice for managing the search term to keep it in history and after returning to the search page.</p>
- **`themeSlice`:** <p>A feature slice for managing the site's dark theme, also stored in local storage.</p>

## Configuration Files
- **`tailwind.config.js`:** <p>Configuration file for the Tailwind module.</p>

## Fulfillment of Requirements
<p>Here is how the project meets the specified requirements:</p>

- **Use OMDb API to fetch all necessary data:** <p>Fulfilled - managed by actions in `actions.ts`.</p>
- **Use up-to-date features of Ecmascript 6 or TypeScript:** <p>Fulfilled.</p>
- **Choose an open-source component library, such as Material UI, Ant Design, etc.:** <p>Fulfilled - Tailwind used.</p>
- **Use react-router for page navigation:** <p>Fulfilled - used in `App.tsx`.</p>
- **Use README.md to describe the project and its scripts:** <p>Fulfilled.</p>
- **Use any state/data management (redux, mobx, jotai, context API, etc.):** <p>Redux used.</p>
- **Properly handle side effects and async calls (redux-saga, thunk, react-query, etc.):** <p>Fulfilled.</p>
