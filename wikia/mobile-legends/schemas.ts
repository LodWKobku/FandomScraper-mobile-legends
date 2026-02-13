import { MlbbENDataSource } from "./data-source";

const MlbbEN: ISchema = {
    url: 'https://mobile-legends.fandom.com/wiki/Category:Heroes',
    // pageFormat: 'classic',
    pageFormat: {
        // selector: ".category-page__members a",
        selector: `a[class="category-page__member-link"]`,
        ignore: [
            "Assassin",
            "Fighter",
            "Mage",
            "Marksman",
            "Support",
            "Tank",
            "EXP Laner",
            "Gold Laner",
            "Jungler",
            "Mid Laner",
            "Roamer",
            "Side Laner",
            "Lightborn",
            "Oriental Fighters",
            "S.A.B.E.R.",
            "V.E.N.O.M.",
            "The Exorcists/Member Introduction",
            "Popol and Kupa",
            "Heavenly Artifacts",
            "Cancelled heroes",
            "Hero roles",
            "Hero Specialties",
            "Category"
        ]
    },
    dataSource: MlbbENDataSource
};

export { MlbbEN };