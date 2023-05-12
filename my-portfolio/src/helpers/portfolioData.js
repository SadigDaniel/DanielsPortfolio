import calculator from "../Images/projectIcon/calculator.gif";
import GymManagment from "../Images/projectIcon/GymManagment.png";
import RealtorSite from "../Images/projectIcon/RealtorSite.gif";
import WeatherApp from "../Images/projectIcon/WeatherApp.gif"
import tictactoe from "../Images/projectIcon/tictactoe.png";
import PAA from "../Images/projectIcon/PAA.gif";

const portfolioData = [
    //https://unrivaled-crostata-f53676.netlify.app/
    {
        image: PAA,
        link: "https://github.com/orgs/coe70A/repositories",
        descreption: "A Patient Appointment Booking Application",
        summary: "This web app allows patients to schedule appointments with their doctors and vice versa, it is intended to reduce the complications in scheduling appointments.",
        techused: "HTML&CSS, Java Script, React Js, Postgres SQL, Docker, Azure",

    },
    {
        image: WeatherApp,
        link: "https://unrivaled-crostata-f53676.netlify.app/",
        descreption: "A Weather Application",
        summary: "This website tells a user the weather baed on there current location or entered location",
        techused: "HTML&CSS, Java Script, React Js",

    },
    {
        image: RealtorSite,
        link: "https://github.com/SadigDaniel?tab=repositories",
        descreption: "A realtor listing site",
        summary: "This mock project allowed users to place a listing for sale or to buy a property",
        techused: "HTML&CSS, Java, SQL",

    },
    {
        image: GymManagment,
        link: "https://github.com/SadigDaniel?tab=repositories",
        descreption: "Gym user/staff managment",
        summary: "Allowed a gym staff member to add and remove new clients from the gym db",
        techused: "Python, tkinter, SQL",

    },
    {
        image: tictactoe,
        link: "https://github.com/SadigDaniel?tab=repositories",
        descreption: "Tic Tac Toe",
        summary: "A simple tic tac toe game where the user will face the computer",
        techused: "Python",
    },
    {
        image: calculator,
        link: "https://github.com/SadigDaniel?tab=repositories",
        descreption: "A simple Calculator",
        summary: "Using tkinter a built a simple calculator app",
        techused: "Python, Tkinter",
    },

]

export default portfolioData