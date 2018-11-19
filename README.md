# MyPerson: An App for Organizing Contacts

## A proof of concept for a full-stack application that uses the SL API to retrieve data about contacts.

### Planning and Process

Features
* Displays a list of all contacts with name, position, and email addres
* Clickable button shows a breakdown of how frequently each symbol occurs in the list of contacts

Technologies Used:
* Trello (https://trello.com/b/UpCaKZCW/myclient-customer-tracking-app)
* Git, branching
* VS Code, Postman
* React, React Router
* Ruby on Rails
* Axios, HTTParty

### Wireframes
![Wireframe](https://github.com/ivykroncke/people-app/blob/master/README-images/Wireframe-MyPerson.jpg)

### Process

####Databases
The minimum viable product outlined in the directions only call for the list of users from the API. While I call the API from the backend in rails in this application, there is not necessarily a use case for a database in displaying the user data in the browser.

Adding another model, e.g. "My Contacts" could be used to save contacts from the API for personalization by the user. I will continue to work on that feature on a separate branch after submitting my progress so far.

####React
My strategy for organizing this app's architecture was to nest components as much as possible to avoid having to refresh the page with a page redirect. Each component has its own responsibilities and I tried to store state as high in the component tree as possible.

While I am comfortable with the concepts in Redux, I continued without it in this application to turn this around in a more reasonable amount of time. I do think as this application grows, Redux would help manage state to be more accessible throughout the application. At its current size, Redux is not absolutely necessary and it was easy enough for me to pass props along and call the API as needed.

###Dev Branch
There is additional styling on a Dev branch that has not been merged with master yet. This includes showing details about a given person when clicked.

### Future Development
* Auth for controlling who sees what data here.
* A "My Contacts" feature could store contacts to a user so that notes can be made or as a way to only store relevant users.
* Completing the third tier of development for a fuzzy search to identify possible duplicates.

### Credits
* (On Styled Version in Dev Branch) Home Photo by rawpixel on Unsplash