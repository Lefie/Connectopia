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

## Main Page - Feed
In the main page, we have 3 sections. 1 section allows users to post their thoughts as part of the social media feed, the middle section is feed from other people, and the last section is news that is related to what a user is interested in. 

### writing a post
Here we use a form to take a user's input. we also added some icons which allow users to attach an image, add code or emojis.
![posting](/documentation/posting.png)

### social media feed 
For the feed, these are cards that contain users' profile picture, job title, timestamp, and something they want to share.
![feed](/documentation/feedComponent.png)

### Trending news
For the news section, we have two options again. A user can either see news that is related to their interest, or they can see news that is relevant to their industry. We have another useState called `isInterest`. If it is true, show news related to a user's personal interest, if false, that show industry news.
![useState](/documentation/useState2.png)
![news](/documentation/trending.png)


## Meetup Page
The Meetup Page is a page that allows users to explore in person opportunities to meet up with other people either professionally or socially.

### Location 
This element here is going to show the locaiton of the in-person events 
![location](/documentation/location.png)

### Networking Events & Social Events Card
We use a `MeetupCard` component to structure the events card.
![meetupCard](/documentation/meetupCard.png)

In the meetup page, we only need to pass in the parameter to the components. 
We have two useStates here `show` and `learn`.
If `learn` is true, then show description. Otherwise if a user clicks on description, learn will be false. 
If a user clicks `RSVP`, `show` will be set to true and it will show a succesful box. It disappears if user clicks on the green box.
![meetupStructure](/documentation/meetupStructure.png)

## Opportunities

Opportunities page include `job opportunities` and `volunteer opportunities` therefore I have created two different cards for these two different components. 

### overall structure of the page
The overall structure of the page contains a list of job listings and a list of volunteer listings
![oppostructure](/documentation/oppoStructure.png)

### job listing card
![jobListing](/documentation/jobListing.png)

### Volunteer listing card 
![jobListing](/documentation/volunteerListing.png)


## Connect 
For this page, a user can connect with either professionals or make friends with people who share similar interests, or they can join a group chat on a specific interest topic. For this page, we create 3 different cards to support these 3 different use cases. A user can also message the person they see interested.

### Overall structure of the page
![connectStrucutre](/documentation/connectStructure.png)

### Professional Connection
![professional Connection](/documentation/professionalCon.png)

### People with Similar Interest 
![similar people](/documentation/similarPpl.png)

### Chat feature 
![chat feature](/documentation/chat.png)

### Interest Group
![interest group](/documentation/interestGroup.png)

## Deploy Final Project to Github Pages
Since this project is purely Frontend and there is no server involved, github pages can actually host a react app.

I follow the steps of this [guide](https://github.com/gitname/react-gh-pages) 

The tutorial was mostly helpful but it did not address the issue that react router and github pages are not compatible, so I kept running into the issues of seeing a blank page.

Eventually I found out that we would need to use a `HashRouter` to help fix the issue mentioned above.
Read this [article by stackoverflow](https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages)


![fixed](/documentation/fixed.png)













