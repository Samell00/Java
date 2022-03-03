# Java

## Overview

This is my javascript quiz project on fast food, I have included many questions in my quiz about some of the things you would think about when ordering food from a fast food restuarant, To make my quiz challenging I put very specific questions in the quiz so its not completley obvious what the answer is. The user first loads onto the introduction section with infomation about the quiz then the user should press the to quiz button which will take them to the quiz, they will then select one answer out of a list of answer to each question for this I have used radio tags, then when the user is done they click the submit button below the quiz to find out their results, and on the result section they have their result and buttons to either retry the quiz or go back to the home page. 

## User Experience

Navigation through the page is made easy with buttons that can take to you each section on the introduction page theres a button to load the quiz page, when the user is finished the quiz they are given two buttons one to reload the quiz page so they can retry the quiz, the other one to take the user back to the home section giving the user smooth navigation through my quiz website. The color scheme is pink, white, red and black each question is made to resemble a menu board with a white background, black border and pretty font for a lively appearance this is to somewhat remind the user of being at a fast food restuarant. I changed the cursor to a pointer on all buttons and radio buttons when the user hovers over them to give an interactive experience. Each time the user completes the quiz they get a certain message based on their score they can get one of three messages "Excellent Go you!" for a result over 7, "Good! Keep it up" for a result between 4-7 and "You should really know more than this" when the result is less than 4 this is to make the user react to this and want to try harder or feel good if they got a good result.

## Features

#### Introduction section:

- **"Start" button:** 

Clickable button on the introduction section to display quiz conatiner and hide the introduction container when the user has clicked it.

#### Quiz section:

- **"Submit" button:**

A button that the user clicks when they have answered every question to activate the function in javascript that processes results and will then hide the quiz container and show the results container to give the user their results.

#### Results section:

- **"Home" button:** 

A button in the results container to hide the results conatiner and show the introduction container when user has gotten to the end and got their results, this button is displayed underneath their results and result message.

### Features that would improve my quiz

- **Submit button error message:**

I have been advised to add this functionality to my javascript file to display a message when user hasnt clicked a radio tag for every question and has clicked on the Submit button. So far I have taken the or blank attribute out of my selector variables so the button doesnt work unless the user selects an answer, I am working on making code that works to this. 


## Wireframes

I used Adobe comp app on my phone to compile the wireframes, these are just a basic overview of how I want my page to look and function and what elements will do what and contain. I did Wireframes for both computer and phone view

### Computer view

- [Intro page](https://github.com/Samell00/Java/blob/master/static/Images/Computer%20Intro%20page.jpg)

- [Quiz page](https://github.com/Samell00/Java/blob/master/static/Images/Computer%20Quiz%20page.jpg)

- [Result page](https://github.com/Samell00/Java/blob/master/static/Images/Computer%20Results%20page.jpg)

### Phone view

- [Intro page](https://github.com/Samell00/Java/blob/master/static/Images/Phone%20Intro%20page.jpg)

- [Quiz page](https://github.com/Samell00/Java/blob/master/static/Images/Phone%20Quiz%20page.jpg)

- [Result page](https://github.com/Samell00/Java/blob/master/static/Images/Phone%20Results%20page.jpg)

## Testing

I made sure to test my website each time I made a change on my file to see if it was still functional by opening my html files on a browser and testing each feature to make sure the entire website was functional, so I could be presented with the output results of my code so I could what worked and what didnt, I usually did this before putting my code into online validators. Here are more details of the websites I used below.

### Bugs and problems

I found that the footer wasnt appearing on my page, even after I tried changing the CSS to see what would work it didnt seem to appear or if it did it would stick to the bottom of the page getting in the way of quiz questions, when I didnt make the position sticky.

### Validation

I also ran my code through online validation tools to ensure I was using correct syntax in all my files and using the best way to write all my code, this helped to correct me if I made any errors which would affect the website output, making sure it could actually work when the user loads the page. This gave me tips if I went wrong with my code for example if I was writing my html file and not putting things in the right containers.

- [Html validator](https://www.freeformatter.com/html-validator.html)

- [CSS Validator](https://www.cssportal.com/css-validator/)

- [Javascript Validator](https://beautifytools.com/javascript-validator.php)

## Technology

I used Visual studio code as my editor to write all my code in and create all my local files on my machine.

- [Visual studio code](https://code.visualstudio.com/)

And In Visual Studio Code I used different technologies to put it all together.

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
  - HTML5 to create the structure of my webpage as well as the elements to define the content.

- [CSS3](https://en.wikipedia.org/wiki/CSS)
  - I used CSS3 to customize the elements of the webpage and add a certain look and theme to it.

- [Javascript](https://en.wikipedia.org/wiki/JavaScript)
  - I used Javascript to manipulate the elements in my webpage and create the functions to generate the results of the quiz by adding functionality to the buttons on my webpage.

- [Google fonts](https://fonts.google.com/)
  - I got my font-family Yellowtail from Google fonts to add more customization to my page.

The browser I used to open my files on an online output was Microsoft edge, this is the default browser that all my files were saved with.

- [Microsoft edge](https://microsoftedgewelcome.microsoft.com/en-gb/get-started?int=00&exp=e81&focus=performance&form=MT005W)

I used Git and Github as a version control system to upload all my files to the internet and allow other users to collaborate with me on my project, also to keep all my work on there in case I wanted to go back to previous versions of my project. I used to push to my commitments to my project from my local machine to the Github website where others could view my files as well as make changes to them if they wanted to collaborate with me.

- [Git](https://git-scm.com/)

- [Github](https://github.com/)

I used Adobe Comp to compile my wireframes to define the basic foundations of my quiz website

- [Adobe Comp](https://helpx.adobe.com/mobile-apps/help/comp-faq.html)

## Link to repository and files 

**My Github repository:**

  - [Java](https://github.com/Samell00/Java)

**Html files:**

  - [Home page](https://github.com/Samell00/Java/blob/master/index.html)

  - [Quiz page](https://github.com/Samell00/Java/blob/master/quiz.html)

**CSS file:**

  - [CSS](https://github.com/Samell00/Java/blob/master/static/stylesheet.css)

**Javascript file:**

  - [Javascript](https://github.com/Samell00/Java/blob/master/static/javascript/script.js)

## Deployment

I have used Github to host my project and then I used Github pages to deploy my page. I added my files to my remote repository on github.com with these folowing steps:

1. Opened Git bash and used my path directory to establish a path in Git.

2. I initialized a Local Git repository using the `git init` command. 

3. Added all files to my local git repository using `git add .` I did this every time I changed any of my files.

4. logged the adding of the files in Git using `git commit -m "Commit message"` I did this also every time I used `git add .` to report any changes to the local repositry

5. Went onto [github.com](https://github.com/) to create a remote repository called Java to host my project

6. Added the remote repository to my local one using `git remote add origin https://github.com/Samell00/Java` then for my first push from my local to remote repository I used `git push -u origin master` then for all other pushes I was then able to just use `git push` while inside my local repository

7. Went to my github account and reloaded the page to see the recent commits, then went to settings on my repository page

8. Selected the 'master branch' option on the git hub pages section.
