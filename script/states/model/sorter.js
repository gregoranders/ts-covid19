import { nameFormatter } from 'states/model';
export var Sort;
(function (Sort) {
    Sort[Sort["NAME_ASC"] = 1] = "NAME_ASC";
    Sort[Sort["NAME_DESC"] = 2] = "NAME_DESC";
    Sort[Sort["POPULATION_ASC"] = 3] = "POPULATION_ASC";
    Sort[Sort["POPULATION_DESC"] = 4] = "POPULATION_DESC";
    Sort[Sort["CONFIRMED_ASC"] = 5] = "CONFIRMED_ASC";
    Sort[Sort["CONFIRMED_DESC"] = 6] = "CONFIRMED_DESC";
    Sort[Sort["CONFIRMED_RATIO_ASC"] = 7] = "CONFIRMED_RATIO_ASC";
    Sort[Sort["CONFIRMED_RATIO_DESC"] = 8] = "CONFIRMED_RATIO_DESC";
    Sort[Sort["CONFIRMED_DIFF_ASC"] = 9] = "CONFIRMED_DIFF_ASC";
    Sort[Sort["CONFIRMED_DIFF_DESC"] = 10] = "CONFIRMED_DIFF_DESC";
    Sort[Sort["DEAD_ASC"] = 11] = "DEAD_ASC";
    Sort[Sort["DEAD_DESC"] = 12] = "DEAD_DESC";
    Sort[Sort["DEAD_RATIO_ASC"] = 13] = "DEAD_RATIO_ASC";
    Sort[Sort["DEAD_RATIO_DESC"] = 14] = "DEAD_RATIO_DESC";
    Sort[Sort["DEAD_DIFF_ASC"] = 15] = "DEAD_DIFF_ASC";
    Sort[Sort["DEAD_DIFF_DESC"] = 16] = "DEAD_DIFF_DESC";
    Sort[Sort["RECOVERED_ASC"] = 17] = "RECOVERED_ASC";
    Sort[Sort["RECOVERED_DESC"] = 18] = "RECOVERED_DESC";
    Sort[Sort["RECOVERED_RATIO_ASC"] = 19] = "RECOVERED_RATIO_ASC";
    Sort[Sort["RECOVERED_RATIO_DESC"] = 20] = "RECOVERED_RATIO_DESC";
    Sort[Sort["RECOVERED_DIFF_ASC"] = 21] = "RECOVERED_DIFF_ASC";
    Sort[Sort["RECOVERED_DIFF_DESC"] = 22] = "RECOVERED_DIFF_DESC";
    Sort[Sort["ACTIVE_ASC"] = 23] = "ACTIVE_ASC";
    Sort[Sort["ACTIVE_DESC"] = 24] = "ACTIVE_DESC";
    Sort[Sort["ACTIVE_RATIO_ASC"] = 25] = "ACTIVE_RATIO_ASC";
    Sort[Sort["ACTIVE_RATIO_DESC"] = 26] = "ACTIVE_RATIO_DESC";
    Sort[Sort["ACTIVE_DIFF_ASC"] = 27] = "ACTIVE_DIFF_ASC";
    Sort[Sort["ACTIVE_DIFF_DESC"] = 28] = "ACTIVE_DIFF_DESC";
})(Sort || (Sort = {}));
export class Sorter {
    constructor(_by = Sort.NAME_ASC, _idx = -1) {
        this._by = _by;
        this._idx = _idx;
        this.sort = this.sort.bind(this);
    }
    get by() {
        return this._by;
    }
    set by(by) {
        this._by = by;
    }
    get idx() {
        return this._idx;
    }
    set idx(index) {
        this._idx = index;
    }
    sort(a, b) {
        switch (this._by) {
            case Sort.CONFIRMED_DESC:
                return this.byConfirmed(b, a);
            case Sort.CONFIRMED_ASC:
                return this.byConfirmed(a, b);
            case Sort.CONFIRMED_DIFF_DESC:
                return this.byConfirmedDiff(b, a);
            case Sort.CONFIRMED_DIFF_ASC:
                return this.byConfirmedDiff(a, b);
            case Sort.CONFIRMED_RATIO_DESC:
                return this.byConfirmedRatio(b, a);
            case Sort.CONFIRMED_RATIO_ASC:
                return this.byConfirmedRatio(a, b);
            case Sort.DEAD_DESC:
                return this.byDead(b, a);
            case Sort.DEAD_ASC:
                return this.byDead(a, b);
            case Sort.DEAD_DIFF_DESC:
                return this.byDeadDiff(b, a);
            case Sort.DEAD_DIFF_ASC:
                return this.byDeadDiff(a, b);
            case Sort.DEAD_RATIO_DESC:
                return this.byDeadRatio(b, a);
            case Sort.DEAD_RATIO_ASC:
                return this.byDeadRatio(a, b);
            case Sort.RECOVERED_DESC:
                return this.byRecovered(b, a);
            case Sort.RECOVERED_ASC:
                return this.byRecovered(a, b);
            case Sort.RECOVERED_DIFF_DESC:
                return this.byRecoveredDiff(b, a);
            case Sort.RECOVERED_DIFF_ASC:
                return this.byRecoveredDiff(a, b);
            case Sort.RECOVERED_RATIO_DESC:
                return this.byRecoveredRatio(b, a);
            case Sort.RECOVERED_RATIO_ASC:
                return this.byRecoveredRatio(a, b);
            case Sort.ACTIVE_DESC:
                return this.byActive(b, a);
            case Sort.ACTIVE_ASC:
                return this.byActive(a, b);
            case Sort.ACTIVE_DIFF_DESC:
                return this.byActiveDiff(b, a);
            case Sort.ACTIVE_DIFF_ASC:
                return this.byActiveDiff(a, b);
            case Sort.ACTIVE_RATIO_DESC:
                return this.byActiveRatio(b, a);
            case Sort.ACTIVE_RATIO_ASC:
                return this.byActiveRatio(a, b);
            case Sort.POPULATION_DESC:
                return this.byPopulation(b, a);
            case Sort.POPULATION_ASC:
                return this.byPopulation(a, b);
            case Sort.NAME_DESC:
                return this.byName(b, a);
            case Sort.NAME_ASC:
            default:
                return this.byName(a, b);
        }
    }
    byName(a, b) {
        return nameFormatter(a).localeCompare(nameFormatter(b));
    }
    byPopulation(a, b) {
        return a.population - b.population;
    }
    byConfirmed(a, b) {
        return this.byField(a, b, 'confirmed');
    }
    byConfirmedDiff(a, b) {
        return this.byDiffField(a, b, 'confirmed');
    }
    byConfirmedRatio(a, b) {
        return this.byRatioField(a, b, 'confirmed');
    }
    byDead(a, b) {
        return this.byField(a, b, 'dead');
    }
    byDeadDiff(a, b) {
        return this.byDiffField(a, b, 'dead');
    }
    byDeadRatio(a, b) {
        return this.byRatioField(a, b, 'dead');
    }
    byRecovered(a, b) {
        return this.byField(a, b, 'recovered');
    }
    byRecoveredDiff(a, b) {
        return this.byDiffField(a, b, 'recovered');
    }
    byRecoveredRatio(a, b) {
        return this.byRatioField(a, b, 'recovered');
    }
    byActive(a, b) {
        return this.byField(a, b, 'active');
    }
    byActiveDiff(a, b) {
        return this.byDiffField(a, b, 'active');
    }
    byActiveRatio(a, b) {
        return this.byRatioField(a, b, 'active');
    }
    byField(a, b, field) {
        return a.values[this._idx][field] - b.values[this._idx][field];
    }
    byDiffField(a, b, field) {
        return a.values[this._idx].diff[field] - b.values[this._idx].diff[field];
    }
    byRatioField(a, b, field) {
        return a.values[this._idx].ratio[field] - b.values[this._idx].ratio[field];
    }
}
export default Sorter;
