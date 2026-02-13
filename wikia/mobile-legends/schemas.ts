import { MlbbENDataSource } from "./data-source";

const MlbbEN: ISchema = {
    url: 'https://mobile-legends.fandom.com/wiki/Category:Heroes',
    // pageFormat: 'classic',
    pageFormat: {
        // selector: ".category-page__members a",
        selector: `a[class="category-page__member-link"]`,
        ignore: [
            "Category",
            "User",
            "Laner",
            "Jungler",
            "Marksman",
            "Heavenly Artifacts",
            "Hero roles",
            "List of heroes",
            "MLBB Wiki",
            "Oriental Fighters",
            "Roamer",
            "Side Laner",
            "Support",
            "Tank",
            "The Exorcists",
            "V.E.N.O.M.",
            "Assassin"
        ]
    },
    dataSource: MlbbENDataSource
};

export { MlbbEN };