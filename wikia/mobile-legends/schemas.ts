import { MlbbENDataSource } from "./data-source";

const MlbbEN: ISchema = {
    url: 'https://mobile-legends.fandom.com/wiki/List_of_heroes',
    pageFormat: {
	    selector: `.wikitable tbody tr td:nth-child(2) a`
    },
    dataSource: MlbbENDataSource
};

export { MlbbEN };