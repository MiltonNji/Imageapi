# Imageapi

Implementing the API Integration:
1 Adding HTML Structure:

In index.html in VS Code.
I added the HTML boilerplate code to set up the basic structure of your web application.
Inside the <body> element, I created a container <div> with an id for the chart. <div id="chart-container"></div>
I also added a div containing a chart-type selection which shows different chart menu selections

2 Styling the Web Application:

Open styles.css in VS Code.
I customized the CSS to style the web application.


3 Fetching and Displaying the Chart:

In script.js in VS Code.
Inside the DOMContentLoaded event listener,  I used the fetch() function to make a request to the Image-Charts API URL.
I handled the response by converting it to a blob using the .blob() method.
I created an image element dynamically using JavaScript, set its source as the URL of the image blob, and append it to the chart container in the HTML page.

so every time the application requests a chart type it is fetched from the API source, converted with the .blob method, and then displayed.

I understand i was supposed to use this API in the laravel team project, but as a team we decided not to because it did not fit what we wanted.
