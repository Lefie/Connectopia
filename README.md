# Final Project : Connectopia

## Overview

LinkedIn is the main platform for people to connect with professionals, reach out to recruiters, and eventually land a job. It can be daunting to present oneself professionally to the world, and at times it may feel as though our values and worth are based solely on our professional achievements and job titles.

Connectopia seeks to help users find creative ways to present themselves beyond their professional lives. Not only can users find job and volunteer opportunities on this platform based on their personal interests, but they can also network with others either individually or in group settings. Connectopia allows users to showcase aspects of their lives that are not strictly professional. It encourages personal growth and impactful collaboration with others. In conclusion, Connectopia is a platform where both professional relationships and friendships can be formed.

## Inspiration

- [Linkedin](https://www.linkedin.com/)
- [polywork](https://www.polywork.com/)

## Drawing

### ******************************Basic Skeleton******************************

![p1.png](/documentation/p1.png)

![p2.png](/documentation/p2.png)

![p3.png](/documentation/p3.png)

### Pages

![p4.png](/documentation/p4.png)

![p5.png](/documentation/p5.png)

![p6.png](/documentation/p6.png)

![p7.png](/documentation/p7.png)

![p8.png](/documentation/p8.png)

## Sitemap

![Screen Shot 2023-04-19 at 10.38.48 PM.png](/documentation/sitemap.png)

## Wireframe
### Prototype
![wireframe](/documentation/w0.png)
![wireframe](/documentation/w1.png)
![wireframe](/documentation/w2.png)
![wireframe](/documentation/w3.png)
![wireframe](/documentation/w4.png)
![wireframe](/documentation/w5.png)
![wireframe](/documentation/w6.png)
![wireframe](/documentation/w7.png)

## Installation of React and Tailwind CSS
![Install](/documentation/install0.png)
![Install](/documentation/install1.png)
![Install](/documentation/install2.png)
![Install](/documentation/install3.png)
![Install](/documentation/install4.png)

## Project Structure
![Project Structure](/documentation/projectFolderStructure.png)

## Start
![App.js](/documentation/app.png)
App is the main component rendered into the root element and contains all other components. This component contains routes to other pages.



## Home Page
The home page will serve as a landig page which includes a `signin` element and a `nav bar`.
![homeComp](/documentation/homeComp.png)

 This signin element will allow users who already have an account to log in, but it also offers new users a way to create an account if they do not already have one. We use a `form` to help take in user inputs.

 ![signinComponent](/documentation/signin.png)

 
  The `nav bar` contains a few other routes such as `meetups` or `opportunities` so that new users can get a chance to explore what this web app has to offer.
![navbar](/documentation/navbar.png)

## Register page
Once a new user decides to join Connectopia, he or she will be taken to a register page where they will input their information such as phone, email and password to register. This page will also contain a `navbar` component and a `signup` component. Similar to the `signin` component, I also used a `form` to record user inputs.

![registerComp](/documentation/registerComp.png)
![signupCom](/documentation/signUp.png)

## Profile Page
Once a user logs in or a new user newly created an account, they will be taken to their own profile page. 
![profile] (/documentation/profile.png)

This profile page consists of a `navbar` that is specific to users who are logged in - they will see their profile picture and they have a page that shows them social media feed.

![profileNav](/documentation/profNav.png)

 It will also contain a `profileTop` component that shows the structure of the profile page which contains their names, their badges, fun facts about them, their projects and their blog posts.

first of all, we have the profile image and the header background.
![profile and background](/documentation/background%2Bprofimg.png)

for the about me section, there are two buttons which users can switch between. One button will show the user's hobbies in life, and the other button will show this user's professional life
![two buttons](/documentation/twoBtns.png)

we define a boolean usestate called `isHuman` . If this is set to true, then show a user's hobbies. if this is set to false, then show a user's professional life. To switch between these two states, we do conditional rendering.
![useState](/documentation/useState.png)
![conditionalRender](/documentation/conditionalRender.png)

Lastly, we will include projects and blog posts which are boxes arranged with flex.
![proj+blog](/documentation/proj%2Bblog.png)









