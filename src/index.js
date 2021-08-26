const {
    readMarkdown,
    readCsv,
    siteMaker,
    readMarkdownsFolder,
    readImagesFolder,
} = require("./makeTools")

const {paths} = require("./config")

const home = require("../src/home");
const proposal = require("../src/proposal")
const candidates = require("../src/candidates")
const activities = require("../src/activities")
const join = require("../src/join")

const pages = [
    {
        title: "Inicio",
        href: "index.html",
        logo: false,
        pageMaker: home,
        content: readMarkdown(`${paths.texts}/presentation.md`)
    },
    {
        title: "Propuestas",
        href: "proposal.html",
        logo: true,
        pageMaker: proposal,
        content: readMarkdown(`${paths.texts}/proposal.md`)
    },
    {
        title: "Candidatxs",
        href: "candidates.html",
        logo: true,
        pageMaker: candidates,
        content: {
            dean: {
                short: readMarkdown(`${paths.texts}/deanShort.md`),
                large: readMarkdown(`${paths.texts}/deanLarge.md`)
            } ,
            vicedean: {
                short: readMarkdown(`${paths.texts}/vicedeanShort.md`),
                large: readMarkdown(`${paths.texts}/vicedeanLarge.md`)
            } ,
            counselors: {
                titular: readCsv(`${paths.csvs}/counselorsTitular.csv`),
                alternate: readCsv(`${paths.csvs}/counselorsAlternate.csv`)
            }
        }
    },
    {
        title: "Actividades",
        href: "activities.html",
        logo: true,
        pageMaker: activities,
        content: {
            carousel: readImagesFolder(`${paths.images}/activities`),
            activities: readMarkdownsFolder(`${paths.texts}/activities`)
        }
    },
    {
        title: "Sumate",
        href: "join.html",
        logo: true,
        pageMaker: join,
        content: {
            invitation: readMarkdown(`${paths.texts}/invitation.md`),
            joined: readCsv(`${paths.csvs}/joined.csv`)
        }
    },
];

siteMaker(pages);

