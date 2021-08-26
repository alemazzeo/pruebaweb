const fs = require("fs");
const fm = require("front-matter");
const parse = require('csv-parse/lib/sync')

const {paths} = require("./config")

const marked = require("marked");
const base = require("../src/base");
const navbar = require("../src/navbar");

marked.setOptions({
    renderer: new marked.Renderer(),
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
});

function readMarkdown(mdPath){
    const data = fs.readFileSync(`${mdPath}`, "utf8");
    const content = fm(data);
    content.body = marked(content.body);
    content.path = mdPath;
    return content;
}

function readMarkdownsFolder(mdFolder){
    return fs.readdirSync(mdFolder)
        .filter(file => file.slice(-3) === ".md")
        .map(file => readMarkdown(`${mdFolder}/${file}`));
}

function readImagesFolder(mdFolder){
    return fs.readdirSync(mdFolder)
        .map(file => `../${mdFolder}/${file}`);
}

function readCsv(csvPath){
    const data = fs.readFileSync(`${csvPath}`, "utf8");
    return parse(data, {
        columns: true,
        skip_empty_lines: true,
        comment: "#",
        trim: true,
    });
}

function siteMaker(pages){
    for (const pageOptions of pages){
        let navItems = pages.map(p =>
            ({
                active: p.title === pageOptions.title,
                title: p.title,
                href: p.href,
            })
        );
        let pageHTML = base(
            pageOptions.logo,
            navbar(navItems),
            pageOptions.pageMaker(pageOptions.content)
        );

        fs.writeFile(
            `${paths.output}/${pageOptions.href}`,
            pageHTML,
            e => {
                if (e) throw e;
                console.log(`${paths.output}/${pageOptions.href} was created successfully`);
            }
        )
    }
}

module.exports = {
    readMarkdown, readCsv, siteMaker, readMarkdownsFolder, readImagesFolder
};