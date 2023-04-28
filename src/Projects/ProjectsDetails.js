import hotel from '../Assets/hotel.png';
import bookstore from '../Assets/bookstore.png';
import todolist from '../Assets/todolist.png';
import recipe from '../Assets/recipe.png';
import budget from '../Assets/bugdet.png';

const CardContainer = [
  {
    imagesrc: recipe,
    title: 'Recipe Web App',
    desc: 'On this recipe web application, Users can create accounts, recipe and foods, can see public_recipes and can generate shopping list for the missing ingredients needed to create a certain recipe. The user a can also delete a certain recipe.',
    live: 'https://recipe-za9j.onrender.com/users/sign_in',
    source: 'https://github.com/kidde60/Recipe-App',
    build: {
      css: 'CSS3',
      html: 'Ruby on Rails',
      bootstrap: 'PostgreSQL',
      ruby: 'RSpec',
      lags: 'Bootstrap',
    },
  },

  {
    imagesrc: budget,
    title: 'Budget Web App',
    desc: 'This is a budget app where a user can add ctegories, add expenses and be able to see the total expenses. This web app allows a user to budget and manage expenses as well as calculating the total expenses for the user.',
    live: 'https://budget-app-render.onrender.com/',
    source: 'https://github.com/kidde60/Budget-App',
    build: {
      css: 'CSS3',
      html: 'Ruby on Rails',
      bootstrap: 'PostgreSQL',
      ruby: 'RSpec',
      lags: 'Bootstrap',
    },
  },
  {
    imagesrc: hotel,
    title: 'Hotel webpage',
    desc: 'This Hotel webpage allows a user to see all the services offered at the hotel, view the available accomodation rooms, their sizes and contact the management for booking a room a rated per night',
    live: 'https://kidde60.github.io/Capstone-project-1/index.html',
    source: 'https://github.com/kidde60/Capstone-project-1',
    build: {
      css: 'CSS3',
      html: 'HTML5',
      bootstrap: 'JavaScript',
      ruby: 'ES6',
      lags: 'Bootstrap',
    },
  },
  {
    imagesrc: bookstore,
    title: 'Book store Webpage',
    desc: 'This book store web app allows a user to add a new book with the author name, remove a book, see all the boooks available in the library and alerts the user incase there are no books in the library.',
    live: 'https://kidde60.github.io/Awesome-books-with-ES6/',
    source: 'https://github.com/kidde60/Awesome-books-with-ES6',
    build: {
      css: 'CSS3',
      html: 'HTML5',
      bootstrap: 'JavaScript',
      ruby: 'ES6',
      lags: 'Bootstrap',
    },
  },
  {
    imagesrc: todolist,
    title: 'Todo List web app ',
    desc: 'This Todo list web app allows a user to add a todo, edit the todo, checkout the completed todo, delete a todo and delete all the completed todos.',
    live: 'https://kidde60.github.io/To-Do-List-Webpage/',
    source: 'https://github.com/kidde60/To-Do-List-Webpage',
    build: {
      css: 'CSS3',
      html: 'HTML5',
      bootstrap: 'JavaScript',
      ruby: 'ES6',
      lags: 'Bootstrap',
    },
  },
];
export default CardContainer;
