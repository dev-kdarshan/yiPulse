# Yi Pulse


**Yi Pulse** is a dynamic, responsive, and centralized portal built for **Young Indians (Yi), KBTCOE** to streamline event announcements, gallery updates, social handles, and membership access — all from a single interactive platform.

The system is powered by **Google Sheets** as a lightweight headless CMS, eliminating the need for a backend and allowing real-time content updates without touching the codebase.

[live link](https://yipulse.netlify.app/)  
---

##  Features

- Live announcements and event updates via Google Sheets
- Interactive image gallery with carousel
- Social media links and membership forms
- Floating contact email button
- Responsive across all devices
- Smooth animations powered by **GSAP.js**

---

##  Tech Stack

- **React.js** – UI framework
- **Bootstrap 5** – Styling and components
- **GSAP.js** – Animation library for transitions and UI enhancements
- **Google Sheets** – Used as a headless CMS (via)
- **React Bootstrap Carousel** – For event gallery

---

##  Environment Variables

Add the following in your `.env` file (and restart dev server after updating):

```env
REACT_APP_YI_SHEET_ANNOUNCEMENTS=https://opensheet.vercel.app/<sheet-id>/Sheet1
REACT_APP_YI_SHEET_EVENTIMAGES=https://opensheet.vercel.app/<sheet-id>/Sheet2
REACT_APP_YI_SHEET_NEWEVENTS=https://opensheet.vercel.app/<sheet-id>/Sheet3
REACT_APP_YI_SHEET_MYDETAILS=https://opensheet.vercel.app/<sheet-id>/sheet4
```
---

git clone https://github.com/your-username/yi-pulse.git
cd yi-pulse

---

## install dependencies and start the server

npm install
npm start

---

## AUTHOR

Developed by [Darshan Khute](https://www.linkedin.com/in/darshan-khute)  
[Portfolio](https://portfolio-darshankhute.netlify.app)  