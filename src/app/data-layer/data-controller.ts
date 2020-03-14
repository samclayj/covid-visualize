const host = 'http://localhost:5000/data/covid-confirmed-series.json';

/**
 * Contains classes related to accessing data for the charts/tables.
 * 
 * Currently data is loaded from a file, but some plans are in the works
 * to move the JSON files to a server with a simple API for paginated access to
 * improve performance client-side.
 */
class TimeSeriesController {
    recoveredSeries: string;
    totalCasesSeries: string;
    deathsSeries: string;

    constructor() {
        this.recoveredSeries = '';
        this.totalCasesSeries = '';
        this.deathsSeries = '';
    }
    
    loadData() {

    }

    loadJsonFile(filePath: string) {

    }

    getRecoveredSeries() {

    }

    getDeathsSeries() {

    }

    getTotalCasesSeries() {

    }
}
export { TimeSeriesController };