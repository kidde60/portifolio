import hotel from "../Assets/hotel.png";
import bookstore from "../Assets/bookstore.png";
import todolist from "../Assets/todolist.png";
import recipe from "../Assets/recipe.png";
import budget from "../Assets/bugdet.png";
import accounting from "../Assets/accounting.png";
import hr from "../Assets/hr.png";
import onspot from "../Assets/onspot.png";
import crm from "../Assets/crm.png";
import billing from "../Assets/billing.png";
import lpm from "../Assets/lpm.png";
import pinnitags from "../Assets/pinitags.png";
import dango from "../Assets/dango.jpg";
import nyumbayo from "../Assets/Nyumbayo.png";
import sales from "../Assets/sales.png";
import admin from "../Assets/admin.png";

const CardContainer = [
  {
    imagesrc: dango,
    title: "Dango Pay - Utility Payment App",
    desc: "A comprehensive mobile payment application for utility bills including electricity, water, internet, and mobile services. Built with React Native and TypeScript, serving customers across Uganda and South Sudan with secure payment integration.",
    live: "https://www.dangotechconcepts.com/",
    source: "https://github.com/kidde60/dango-pay",
    build: {
      html: "React Native",
      bootstrap: "TypeScript",
      lags: "Payment Gateway",
    },
  },

  {
    imagesrc: accounting,
    title: "Enterprise Accounting System",
    desc: "Full-featured accounting and financial management system with multi-currency support, automated reporting, and tax compliance. Built for businesses across Uganda and Nigeria using React, TypeScript, and advanced data analytics.",
    live: "https://accounting.dangotechsolutions.com",
    source: "https://github.com/kidde60/accounting-system",
    build: {
      html: "React",
      bootstrap: "TypeScript",
      lags: "Tailwind CSS",
    },
  },

  {
    imagesrc: billing,
    title: "Water Billing Management System",
    desc: "Smart water billing system with IoT integration for automatic meter reading, customer management, and billing automation. Deployed in multiple water utilities across Uganda with real-time monitoring capabilities.",
    live: "https://www.tracecorpsolutions.com",
    source: "https://github.com/kidde60",
    build: {
      html: "React",
      bootstrap: "TypeScript",
      lags: "Ant Design",
    },
  },

  {
    imagesrc: hr,
    title: "HR Management System",
    desc: "Comprehensive human resource management platform with payroll processing, employee lifecycle management, and performance tracking. Successfully implemented in organizations across Uganda, South Sudan, and Nigeria.",
    live: "https://www.tracecorpsolutions.com",
    source: "https://github.com/kidde60",
    build: {
      html: "React",
      bootstrap: "TypeScript",
      lags: "Chakra UI",
    },
  },
  {
    imagesrc: crm,
    title: "CRM System",
    desc: "Comprehensive customer relationship management platform with sales tracking, customer support, and marketing automation. Successfully implemented in organizations across Uganda, South Sudan, and Nigeria.",
    live: "https://www.tracecorpsolutions.com",
    source: "https://github.com/kidde60",
    build: {
      html: "React",
      bootstrap: "TypeScript",
      lags: "Anti Design",
    },
  },

  {
    imagesrc: onspot,
    title: "OnSport Billing Mobile App",
    desc: "Sports facility billing and membership management mobile application. Features booking systems, payment processing, and membership tracking for sports clubs and fitness centers in Uganda and UK.",
    live: "https://www.tracecorpsolutions.com",
    source: "https://github.com/kidde60",
    build: {
      html: "React Native",
      bootstrap: "TypeScript",
      lags: "Native Base",
    },
  },

  {
    imagesrc: sales,
    title: "Sales Management Application",
    desc: "Advanced sales CRM with lead management, sales pipeline tracking, and automated reporting. Helps businesses across multiple countries streamline their sales processes and increase revenue.",
    live: "https://www.tracecorpsolutions.com",
    source: "https://github.com/kidde60/sales-management",
    build: {
      html: "React",
      bootstrap: "TypeScript",
      lags: "Tailwind CSS",
    },
  },

  {
    imagesrc: lpm,
    title: "Legal Practice Management System",
    desc: "Comprehensive legal case management system with client portal, document management, billing, and court calendar integration. Serving law firms in Uganda and UK with secure client data handling.",
    live: "https://legal.dangotechsolutions.com",
    source: "https://github.com/kidde60/legal-practice-management",
    build: {
      html: "React",
      bootstrap: "TypeScript",
      lags: "Ant Design",
    },
  },

  {
    imagesrc: admin,
    title: "Executive Admin Dashboard",
    desc: "Multi-tenant admin dashboard with advanced analytics, user management, and real-time monitoring. Features customizable widgets and role-based access control for enterprise clients.",
    live: "https://admin.dangotechsolutions.com",
    source: "https://github.com/kidde60/admin-dashboard",
    build: {
      html: "React",
      bootstrap: "TypeScript",
      lags: "Chakra UI",
    },
  },

  {
    imagesrc: nyumbayo,
    title: "Rental Management System",
    desc: "Property rental management platform with tenant screening, lease management, maintenance tracking, and automated rent collection. Deployed for property managers in Uganda and Nigeria.",
    live: "https://rental.dangotechsolutions.com",
    source: "https://github.com/kidde60",
    build: {
      html: "React",
      bootstrap: "TypeScript",
      lags: "Tailwind CSS",
    },
  },

  {
    imagesrc: pinnitags,
    title: "Pinnitags - Event Management Platform",
    desc: "Complete event management solution with ticketing, attendee management, and event promotion tools. Features QR code integration and real-time event analytics for event organizers across East Africa.",
    live: "https://www.pinnitags.com/",
    source: "https://github.com/kidde60",
    build: {
      html: "React",
      bootstrap: "TypeScript",
      lags: "Chakra UI",
    },
  },

  // Legacy Projects
  {
    imagesrc: recipe,
    title: "Recipe Web App",
    desc: "On this recipe web application, Users can create accounts, recipe and foods, can see public_recipes and can generate shopping list for the missing ingredients needed to create a certain recipe. The user a can also delete a certain recipe.",
    live: "https://recipe-za9j.onrender.com/users/sign_in",
    source: "https://github.com/kidde60/Recipe-App",
    build: {
      html: "Ruby on Rails",
      bootstrap: "PostgreSQL",
      lags: "Bootstrap",
    },
  },

  {
    imagesrc: budget,
    title: "Budget Web App",
    desc: "This is a budget app where a user can add ctegories, add expenses and be able to see the total expenses. This web app allows a user to budget and manage expenses as well as calculating the total expenses for the user.",
    live: "https://budget-app-render.onrender.com/",
    source: "https://github.com/kidde60/Budget-App",
    build: {
      html: "Ruby on Rails",
      bootstrap: "PostgreSQL",
      lags: "Bootstrap",
    },
  },

  {
    imagesrc: hotel,
    title: "Hotel webpage",
    desc: "This Hotel webpage allows a user to see all the services offered at the hotel, view the available accomodation rooms, their sizes and contact the management for booking a room a rated per night",
    live: "https://kidde60.github.io/Capstone-project-1/index.html",
    source: "https://github.com/kidde60/Capstone-project-1",
    build: {
      html: "HTML5",
      bootstrap: "JavaScript",
      lags: "Bootstrap",
    },
  },

  {
    imagesrc: bookstore,
    title: "Book store Webpage",
    desc: "This book store web app allows a user to add a new book with the author name, remove a book, see all the boooks available in the library and alerts the user incase there are no books in the library.",
    live: "https://kidde60.github.io/Awesome-books-with-ES6/",
    source: "https://github.com/kidde60/Awesome-books-with-ES6",
    build: {
      html: "HTML5",
      bootstrap: "JavaScript",
      lags: "Bootstrap",
    },
  },

  {
    imagesrc: todolist,
    title: "Todo List web app ",
    desc: "This Todo list web app allows a user to add a todo, edit the todo, checkout the completed todo, delete a todo and delete all the completed todos.",
    live: "https://kidde60.github.io/To-Do-List-Webpage/",
    source: "https://github.com/kidde60/To-Do-List-Webpage",
    build: {
      html: "HTML5",
      bootstrap: "JavaScript",
      lags: "Bootstrap",
    },
  },
];
export default CardContainer;
