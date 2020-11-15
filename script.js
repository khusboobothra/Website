const toggler = document.getElementById("toggler-circle");
const togglerbg = document.getElementById("toggler");

const body = document.body;
togglerbg.addEventListener("click", function(){
    if(body.classList.contains("dark"))
    {
        body.classList.replace("dark", "light");
        toggler.style.transform = "translateX(20px)";
    }
    else{
        body.classList.replace("light", "dark");
        toggler.style.transform = "translateX(0)";
    }
})


// const body = document.body;
//
// const body = document.body;
// const welcomeTitle = document.getElementById("welcome-col-title");
// const welcomePara = document.getElementById("welcome-col-para");

// const eventsTitle = document.getElementById("events-col-title");
// const eventsCol = document.getElementById("events-col");
// const singleEventRow = document.getElementById("single-event-row");
// const singleEventTitle = document.getElementById("event-title");
// const singleEventLocation = document.getElementById("event-location");

// const body = document.body;


// togglerbg.addEventListener("click", function(){
//     if(body.classList.contains("dark"))
//     {
//         body.classList.replace("dark", "light");
//         toggler.style.transform = "translateX(20px)";

//     }
//     else{
//         body.classList.replace("light", "dark");
//         toggler.style.transform = "translateX(0)";
//     }

//         welcomeTitle.classList.replace(
//           "dark-welcome-title",
//           "light-welcome-title"
//         );

//         welcomePara.classList.replace(
//           "dark-welcome-col-para",
//           "welcome-col-para"
//         );

//         eventsTitle.classList.replace(
//           "dark-events-col-title",
//           "events-col-title"
//         );

//         eventsCol.classList.replace(
//           "dark-event-col",
//           "light-event-col"
//         );

//         singleEventRow.classList.replace(
//           "dark-single-event-row",
//           "single-event-row"
//         );

//         singleEventTitle.classList.replace(
//           "dark-event-title",
//           "event-title"
//         );

    // } else {

    //     body.classList.replace("light", "dark");
    //     toggler.style.transform = "translateX(0)";

    //     welcomeTitle.classList.replace(
    //       "light-welcome-title",
    //       "dark-welcome-title"
    //     );

    //     welcomePara.classList.replace(
    //       "welcome-col-para",
    //       "dark-welcome-col-para"
    //     );

    //     eventsTitle.classList.replace(
    //       "events-col-title",
    //       "dark-events-col-title"
    //     );

    //     eventsCol.classList.replace(
    //       "light-event-col",
    //       "dark-event-col"
    //     );

    //     singleEventRow.classList.replace(
    //       "dark-single-event-row",
    //       "single-event-row"
    //     );

    //     singleEventTitle.classList.replace(
    //       "event-title",
    //       "dark-event-title"
    //     );
    // }



    //     welcomeTitle.classList.replace(
    //       "dark-welcome-title",
    //       "light-welcome-title"
    //     );

    //     welcomePara.classList.replace(
    //       "dark-welcome-col-para",
    //       "welcome-col-para"
    //     );

    //     eventsTitle.classList.replace(
    //       "dark-events-col-title",
    //       "events-col-title"
    //     );

    //     eventsCol.classList.replace(
    //       "dark-event-col",
    //       "light-event-col"
    //     );

    //     singleEventRow.classList.replace(
    //       "dark-single-event-row",
    //       "single-event-row"
    //     );

    //     singleEventTitle.classList.replace(
    //       "dark-event-title",
    //       "event-title"
    //     );

    // } else {

    //     body.classList.replace("light", "dark");
    //     toggler.style.transform = "translateX(0)";

    //     welcomeTitle.classList.replace(
    //       "light-welcome-title",
    //       "dark-welcome-title"
    //     );

    //     welcomePara.classList.replace(
    //       "welcome-col-para",
    //       "dark-welcome-col-para"
    //     );

    //     eventsTitle.classList.replace(
    //       "events-col-title",
    //       "dark-events-col-title"
    //     );

    //     eventsCol.classList.replace(
    //       "light-event-col",
    //       "dark-event-col"
    //     );

    //     singleEventRow.classList.replace(
    //       "dark-single-event-row",
    //       "single-event-row"
    //     );

    //     singleEventTitle.classList.replace(
    //       "event-title",
    //       "dark-event-title"
    //     );
    // }


