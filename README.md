# Problem 

Create a simple web app that contains:
- a picture,
- a "Next" button,
- a "Save" button,
- a "Favourites" link.

Use the Nasa API (https://api.nasa.gov/) to get a random Astronomy Picture of the Day and show it on the screen. Favourite images should be stored in the Redux store after clicking "Save" and accessible through the /favourites route.

Required stack:

1. React,
2. React Router,
3. TypeScript,
4. MUI. 

# Description 
This project uses the NASA API  (https://api.nasa.gov/) and showcases the Astronomy Picture of the Day. It also allows the user to interact with the information by adding it to favourites and seeing it all on one page. (The project only uses GET requests) The project mainly uses the Redux Store to handle the favourites functionality.

There are 2 pages in this app - Main Page and Favourites Page.

The Main Page serves as the landing page, showcasing the Astronomy Picture of the Day sourced from the NASA API. Accompanying the displayed image, users are presented with two primary actions: 'Next' and 'Save'. While 'Next' refreshes the image, the 'Save' option captures the current image into the Redux store, ensuring it's listed on the Favourites Page. On the Favourites Page, all saved images are exhibited, fetched directly from the Redux store. Additionally, a built-in feature lets users remove any selected image from their favorites, enhancing user control and customization.

The app uses Material UI for styling and other design aspects. 

There is also a linting config setup and has been applied to the repo

# Running the app
To fire up the project run npm install and then npm run start in the root directory.

# Challenges
To begin with, the project was fairly striaghtforward and it was easy to build the base level of the app. The part where I faced challenges was the Redux Store. I have previously used the Vuex Store (state management within Vue.js) so conceptually I was aware of what needs to be done and how to achieve. For me, the challenge was the syntax. After a lot of research - it made sense to use Redux slice as it offers a streamlined, more maintainable, and efficient approach, especially for modern React applications. I have discussed my approach further below. 

# Improvements
In order to improve on this project and ensure that it is in line with the latest design and atomic design principles, I would fix the styling of the app. I would also have a custom stlyesheet for this app to ensure for accessibility. Also make the app responsive. I also wanted to add more features that are available from the API. I would have also added some error message being displayed or some other messages like "Successfully Added!" 

Another big feature I wanted to add/improve in the app would be testing! Since we are using API's to build the foundation of the app - we want to write nice and descriptive tests that would ensure that all the code is running as expected. 

Overall this was a fun project to work on with definitely a lot of learning!!

# Approach and Decisions 
### 1. API 
The API provided is the NASA API portal. The objective of this site is to make NASA data, including imagery, eminently accessible to application developers. This catalog focuses on broadly useful and user friendly APIs and does not hold every NASA API.

I have used the API to get a random Astronomy Picture of the Day and show it on the screen. The user has some actions available including 'Next' (Refresh), 'Save' (Adds to Favourites), 'Remove' (Removes from Favourites)

### 2. Redux Store 
The Redux store is a centralized state management solution that helps manage the state of the user's favorite images fetched from the NASA API. The specific slice we are looking at pertains to the favorites feature.

### Explanation of the Store 
**Key Files:**
*favouritesSlice.ts*: This is the core Redux slice for managing user's favourite images.

**Data Structure**:
The core entity we are managing in this slice is a Favourite, which consists of:

*title*: The title of the favourite image.
*url*: The URL of the image.

**Initial State**:
The initial state of the favorites slice is either populated from the browser's localStorage (if previously saved favorites exist) or initialized as an empty array. This ensures persistence of the user's favorites across browser sessions.

**Reducers**:

*addFavourite*:

1. Adds a new favourite image to the state.
2. Before adding, checks to ensure the image isn't already present, based on its URL.
3. After adding, the new state is saved to localStorage to ensure persistence.
4. Decision: Checking for duplicates ensures that a user doesn't accidentally save the same image multiple times. Saving to localStorage was a decision made to persist user favorites even after the browser is closed or refreshed.

*removeFavourite*:

1. Removes a specified favorite based on its URL.
2. After removal, updates localStorage with the new state.
3. Decision: Removal is based on the URL because it's a unique identifier for the images. Again, we immediately save the changes to localStorage to ensure the favorites list remains consistent across sessions.

**Immutability**:
Reducers in this slice are written in what appears to be a "mutative" way (like using .push() or .splice()). However, under the hood, thanks to the Immer library (bundled with Redux Toolkit), these operations are translated into immutable updates. This means that we're not altering the original state directly; instead, we're producing a new copy with the changes. This practice ensures that the state remains consistent and predictable, which is a core principle of Redux.

**Key Decisions and Reasons**:
1. Use of localStorage: For a lightweight persistence mechanism, the localStorage browser API was chosen. This allows user favorites to remain intact even after refreshing the browser or revisiting later.

2. Immutability with Immer: Using Immer makes writing reducers more straightforward and readable, removing the need to manually copy and update state objects or arrays.

3. Checking for duplicates: Before adding an image to favorites, we check if it already exists based on its URL. This ensures a better user experience, avoiding the same image being saved multiple times.

##### Traditional Redux vs Redux Slice

Redux Toolkit's createSlice function makes using Redux way easier than the traditional way. Instead of juggling multiple files and code pieces for actions and reducers, everything is in one place, making things neat and tidy. Plus, it automatically handles tricky tasks like ensuring data doesn't get unintentionally changed. Given we're using TypeScript, this approach becomes even more beneficial. With TypeScript, createSlice offers built-in typing, making our code safer and easier to understand. It's the modern and recommended way to use Redux. In simple words, it feels like moving from using individual hand tools to an advanced multi-purpose power tool.    