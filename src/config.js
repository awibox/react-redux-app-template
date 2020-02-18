// Main
export const projectName = 'React Redux App';
export const repoName = 'react-redux-app-template';
export const authorAccount = 'frontend-templates';

// API
export const gitHubApiUrl = 'https://api.github.com';

// Repos
export const UserArray = [authorAccount, 'angular', 'facebook', 'reduxjs', 'webpack'];

// Routes
export const routes = {
  repos: '/repos',
  author: '/author',
};
// Navigation
export const navigationItems = [
  {
    name: 'Home page',
    icon: 'home',
    route: '/',
  },
  {
    name: 'Repositories',
    icon: 'database',
    route: routes.repos,
  },
  {
    name: 'Author',
    icon: 'address-card',
    route: routes.author,
  },
];
