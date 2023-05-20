import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock5 from "../img/mock5.png"
import mock4 from "../img/mock4.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Isra",
    lastName: "Rea",
    initials: "IR", 
    position: "Mechatronic Engineer & Software Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🇲🇽',
            text: 'based in Mexico City '
        },
        {
            emoji: "💼",
            text: "iOS Developer at Praxis"
        },
        {
            emoji: "📧",
            text: "ing.israelrea@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/IsraReaM/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/isra_rea21",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/israelRea",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/ing-israel-rea/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Hello! I'm Isra. I'm a mechatronic & software engineer. I enjoy long walks, play videogames and learn about the universe, physics or anything that can explain how things work.",
    skills:
        {
            proficientWith: ['- Swift 5', '- SwiftUI', '- Java', '- git', '- github', '- C++'],
            exposedTo: ['- react', '- python', '- javascript', '- C', '- HTML', '- CSS', '- G code for CNC', '- KOP,AWL,FUP']
        }
    ,
    certifications:
        {
            certification: ['- Game Programming', '- Mobile apps development', '- Automotive Electronics', '- Microsoft Office 2007', '- Ford-Enactus: For driving skills 2018', '- Mind map design', '- Direction and leadership styles']
        }
    ,
    hobbies: [
        {
            label: 'Training',
            emoji: '🏃'
        },
        {
            label: 'Videogames',
            emoji: '🎮'
        },
        {
            label: 'Learning',
            emoji: '📖'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Play Guitar/Piano',
            emoji: '🎸'
        }
        
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "AFP Crecer App for iOS",
            live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://apps.apple.com/sv/app/afp-crecer/id1535097593", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Scanhub: Document Scanner for iOS/Android",
            live: "https://play.google.com/store/apps/details?id=com.innovatedsoft.scanhub.app&hl=es_419&gl=US",
            source: "https://apps.apple.com/mx/app/scanhub-receipt-doc-scanner/id1469437793",
            image: mock2
        },
        {
            title: "CastMe: Podcast streaming player for iOS/Android",
            live: "https://play.google.com/store/apps/details?id=com.podcast.castmelive.castme&hl=es_419&gl=US",
            source: "https://apps.apple.com/mx/app/castme-player-stream-podcast/id1504527326",
            image: mock3
        },
        {
            title: "CLP: Law compendium for iOS/Android",
            live: "//",
            source: "//",
            image: mock5
        }
    ],
    portfolioWeb: [ // This is where your portfolio projects will be detailed

    {
        title: "My portfolio",
        live: "",
        source: "https://github.com/israelRea",
        image: mock4
    },
]
}