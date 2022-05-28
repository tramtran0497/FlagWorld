# Frontend React Project
The Flag World project JS version.
Demo link: https://relaxed-bardeen-73b157.netlify.app/

## Instructions for download my code
- Prerequires: Nodejs is installed in your local.
- You need to clone my gitHub link.
- Install all dependencies in packages.json by 
```
npm install
```
- Then, run your application
```
npm start
```
## Features
There are two main pages: Home and Country.
Local Storage keeps your list and the current theme.

Header: There are three parts: Theme, Search and Navigation.
- Theme: using `useContext` to create two themes: light and dark mode when clicking for tablet and mobile design and switching for desktop.
- Search: it appears suggestion area shows all coutries's name relevant.
- Navigation: clicking the icons, it shows your list and you can directly change your list through actions inside display list.

Footer: Thre are three parts: Extra knowledge, Contact and Social Media.
- Extra knowledge: several links show more detail information about the world.
- Contact: A form for feedback from customers and it sends to directly my own email, using EmailJS.
- Social Media: some icons to point links.

### Home Page features
Table: 
- Header Table: Clicking the name of each column, it shows `Sort` function. 
- Body Table: 
    The name: links to Country Page.
    The quantity: you can add/remove quantity of buying flags. It is automatically add your list in Navigation.
    The favorite: leaving your love for this country by clicking. It is automatically add your list in Navigation.

### Country Page
Card: It shows detail imformation of the certain country as well as many functions you have in Home Page such as cart and favorite.
Search: in this page, you still can use Search area to finding the another country.

### Docker
Docker, the new warrior (for me) is attracted me by it's powerful.
- Before:
    Author: 
    + Idea/ Design/ Logic/ Coding the project.
    + Push up Github and create PR for reviewing.
    Viewer:
    + Fork/ clone from author's Github.
    + Installing requested dependencies and following exactly versions, make sure the suitable environment to run the application.
So, in order to check/ test/ use the application, viewer's local machine is disordered by much `versions` and the worst occurs the unexpected problems with the current projects in the same machine. Users can only run the application once with complicated installing, wasting time and low effective.

- Then:
    Author:
    + Idea/ Design/ Logic/ Coding the project.
    + Write Dockerfile as well as .dockerignore file.
    + Push up Github and create PR for reviewing.
    + Push up DockerHub.
    Viewer:
    + Viewer can choose the convenient way: Github or DockerHub.
    + Using `docker pull nameOfDockerWant` at terminal (Docker is installed in local machine) to create an image in Docker.
    + Then, using `docker run -p PORT:PORT nameOfImage` to create a container and run the application.
    + Viewer can check through the browser with PORT.
So, skip at several complex steps which are the majority troubles. Simple steps to run the application and saving time, mainly, viewer can also do their own projects and test/check the application at the same time, same machine without disturbances.

This is my DockerHub project link: https://hub.docker.com/r/tramtran0497/flagworld
