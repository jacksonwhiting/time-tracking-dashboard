# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
-  [Author](#author)

## Overview

### The challenge

Users should be able to:

-  View the optimal layout for the site depending on their device's screen size
-  See hover states for all interactive elements on the page
-  Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](/public/screenshot-time-tracking-dashboard.png)

### Links

-  Solution URL: [Github Repository](https://github.com/jacksonwhiting/time-tracking-dashboard)
-  Live Site URL: [Live Site](https://jmw-time-tracking-dashboard.netlify.app/)

## My process

### Built with

-  Semantic HTML5 markup
-  CSS custom properties
-  Flexbox
-  CSS Grid
-  Mobile-first workflow
-  Astro.js
-  Qwik.js
-  Tailwind CSS

### What I learned

This was my second project working with Astro. After my first project, I decided I wanted to try incorporating another framework into Astro to help with reactivity and to simplify some of the more laborious code required to access the DOM in Astro.

I chose Qwik as the framework because Qwik but default does not load Javascript to the DOM. It seemed like a great fit and overall it worked very well.

This project took me way longer than I hoped, in part because of the holidays, but also because I had a large learning curve transitioning from vanilla javascript to JSX, using props, storing state etc.

There were a few limitations using the two together. I found that I couldn't make use of the image functionality from Astro becase most of the code was run in Qwik. I couldn't use the image functionality in Qwik because I wasn't using Qwik City (not compatible with Astro to my knowledge).

As a result I had to save the images into the Public folder becuase they wouldn't load for some reason in the src folder.

### Continued development

For my next project I plan on using Qwik and Qwik City without using Astro.

## Author

-  Frontend Mentor - [@jacksonwhiting](https://www.frontendmentor.io/profile/jacksonwhiting)
-  Twitter - [@JWhiting00](https://www.twitter.com/JWhiting00)
