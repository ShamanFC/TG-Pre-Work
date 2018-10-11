# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

A request is sent from your browser to the web-server hosting the website. The website is sent to you and the content loads in a logical way. The HTML and CSS bring you the important content, such as headings and paragraphs first, and then the flashier stylistic content is loaded in, like the video and the buttons+animations.

## From start to finish how does that data reach you to be rendered in the browser?

Your browser sends a get URL request to the DNS, which contains scheme, domain name, path, and an optional query string. The DNS will translate this request from URL to IP, and return a path to the requested resource, in this instance, a webpage. As the client copy of the websites code is received, it parses the HTML for content, structure, and URLS of linked resources. The browser then fetches the linked resources - Images, Videos, etc. During the fetching of the content, CSS - another linked resource - is requested and applied to the raw HTML it received earlier. Finally, the browser requests any linked JavaScript document, and adds the JavaScript behaviors written there to the page (ideally designed to run once the website is properly and fully rendered). It's then stored internally (in cache maybe), and finally rendered in your browser!

## What code is rendered in the browser?

HTML, CSS, and JS. JavaScript runs more than it renders, but it runs in the browser.

## What is the server-side code’s main function?

The server side code sorts through requests and sends the data requested by your browser to you. It's also responsible with permanent storage, in the form of databases.

## What is the client-side code’s main function?

The purpose of client-side code is to create the website users see and interact with. Client side code is embedded in the front-end websites code. The initial HTML of a page, the style sheet responsible for styling it, and typically some sort of scripting language (JS), are used to put content on the screen, make it look pretty, and to give functionality to the base HTML of the page.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

How ever many instances the web-server can handle! Each user that visits given website has an instance of the client-side assets sent to their browser.

## How many instances of the server-side code are available at any given time?

Typically one, but if your user load is bottlenecking the server you can host it in multiple places, and point them all at the same database.

## What is runtime?

Runtime is the behind-the-scenes code that is required to be running to use the language you coded in.

## How many instances of the the databases connected to the server application are created?

You have one database that catches all of the information. Having multiple could cause continuity issues as users may pull the same information from multiple databases.
