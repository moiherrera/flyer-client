FLYER See the events happening in your city, right now. A platform to view flyers of events happening in your city. Post your own flyers if you’d like!
This apps allows users to view flyers to events they may potentially attend. It also allows them to upload their own flyers to advertise their events.

Front-End Repo: https://github.com/moiherrera/flyer-client
Front-End Deployed: https://moiherrera.github.io/flyer-client/
Back-End Repo: https://github.com/moiherrera/flyer
Back-End Deployed: https://arcane-ocean-83657.herokuapp.com/

Technologies Used:
HTML
CSS
Jquery
Javascript
Bootstrap
Handlebars
Flexbox
AJAX
Git - Version Control
Github

Future Iterations:
Admin Account - An Account where I can delete content that doesn’t meet the requirement of what a flyer is supposed to be.
Walkthrough Expansive - A series of messages before the user enters the site that will allow them to understand the function of the application before they enter.
Mobile Accessibility - Adapt the application for mobile users, provide a swiping interface.
Styling - Provide a Fun and Artsy Background and Styling.
Horizotal Scroll - Implement Horizontal Scroll for Web
Location Based Services - Only flyers posted within the proximity of the user will be accessible to view. Integrate Map API/Location Services API.

Strategy & Planning
Starting with an empty HTML document.
Step 1: Add HTML for Sign Up, Sign In, Change Password and Sign Out.
Step 2. Create a header horizontal bar, on top of page, that contains the Auth Actions HTML
Step 3. Make header bar Hide on Loading Page, create a guiding message that appears first for all users.
Step 4. To help users understand site, add explanation of what the application is good for.
Step 5. onClick Display Sign Up and Sign In, Hide Change Password and Sing Out.
Step 6. Create Auth Folder, Events, UI and API files.
Step 7. Complete these files with appropriate events, AJAX requests to retrieve data from API, and corrresponding UI actions.
Step 8. Create a Message Box to display UI messages.
Step 9. Begin with Events on Flyers. CRUD actions / Create, Read, Update, Destroy.
Step 10. Begin with Create. Write an Upload HTML button, and corresponding Modal, to attach a link to an image and create flyer.
Step 11. Create Flyer Folder with Events, API, and UI files.
Step 12. Write events for Create Flyer, Ajax request, and corresponding UI.
Step 13. Create Handlebars to display HTML of the Image link, for all image links that are shared.
Step 14. Now that Create is finished, Write Code for GET request in Events, API, and UI File.
Step 15. Implement Update and Destroy Features.
Step 16. Add Buttons for Update and Delete in HTML.
Step 17. Require that update and delete buttons only display on user-owned resources.
Step 18. Complete PATCH and DESTROY in Events, API and UI Files.
Step 19. Styling.
Step 20. Deploy.

User Stories

```
As a user, I would like to know what I am signing up for, before I sign up.
As a user, I would like there to be a description of the application.
As a user, I would like to be guided through the application to help understand its function.
As a user, I expect to be able to view flyers publicly without having to sign up or sign in.
As a user, I expect to be able to navigate through all flyers.
As a user, if I desire to post my own flyer(s), I expect to be able to sign up and create an account.
As a user, I expect to be able to sign in.
As a user, I expect to be able to post my own flyer.
As a user, I expect that my flyer be openly accessible to anyone who visits the site regardless if they have an account or not.
As a user, I expect to be able to update my flyer and replace it with an updated file or a new flyer altogether.
As a user, I expect to be able to delete a flyer.
As a user, I expect that only I be able to update and delete my flyer.
As a user, I expect to be able to change my password.
As a user, I expect to be able to log out.

```

Link to WireFrames: https://docs.google.com/document/d/1jq8GdOTGVQFqBFCDCPHij3pEt9cZ4XVZhmmZwr1AhpM/edit?usp=sharing


![Flyer Web Application](http://home/herreram/sei/projects/flyer-client/public/Flyer.png)


Set Up:
1. Download Browser Template : https://git.generalassemb.ly/ga-wdi-boston/browser-template
2. Rename Folder
3. Unzip
4. Change Content and Name inside Package-json
5. initiate git
6. npm install
7. create a repository on github with same Name
8. push local folder to the repository
9. When finished writing application, make sure all changes are up to date on Master branch
10. Once merged successfully, switch to master branch.
11. Commit all changes and push to origin
12. run grunt deploy.
