import PropTypes from 'prop-types';
export const ModelValuePropTypes = PropTypes.shape({
    confirmed: PropTypes.number.isRequired,
    dead: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
}).isRequired;
export const ModelValueArrayPropTypes = PropTypes.arrayOf(ModelValuePropTypes).isRequired;
export const ModelSeriesValuePropTypes = PropTypes.shape({
    confirmed: PropTypes.number.isRequired,
    dead: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    diff: ModelValuePropTypes,
    avrg: PropTypes.shape({
        5: ModelValuePropTypes,
        7: ModelValuePropTypes,
        14: ModelValuePropTypes,
        21: ModelValuePropTypes,
        28: ModelValuePropTypes,
    }).isRequired,
    ratio: PropTypes.shape({
        confirmed: PropTypes.number.isRequired,
        dead: PropTypes.number.isRequired,
        recovered: PropTypes.number.isRequired,
        active: PropTypes.number.isRequired,
        diff: ModelValuePropTypes,
        avrg: PropTypes.shape({
            5: ModelValuePropTypes,
            7: ModelValuePropTypes,
            14: ModelValuePropTypes,
            21: ModelValuePropTypes,
            28: ModelValuePropTypes,
        }).isRequired,
    }).isRequired,
    timestamp: PropTypes.number.isRequired,
}).isRequired;
export const ModelSeriesValueArrayPropTypes = PropTypes.arrayOf(ModelSeriesValuePropTypes).isRequired;
export const ModelPropTypes = PropTypes.shape({
    country: PropTypes.string.isRequired,
    state: PropTypes.string,
    population: PropTypes.number.isRequired,
    values: ModelSeriesValueArrayPropTypes,
}).isRequired;
export const ModelArrayPropTypes = PropTypes.arrayOf(ModelPropTypes).isRequired;
export const nameFormatter = (model) => {
    if (model.state && model.state.length) {
        return `${model.country} - ${model.state}`;
    }
    return model.country;
};
export const urlFormatter = (model) => {
    if (model.state && model.state.length) {
        return `${model.country}/${model.state}`;
    }
    return model.country;
};
export const numberFormatter = (nb) => {
    if (Number.isInteger(nb)) {
        return nb.toLocaleString();
    }
    else {
        return Math.round(nb).toLocaleString();
    }
};
export const timeFormatter = (timestamp) => {
    return new Date(timestamp).toUTCString().replace(/\s00:.*/, '');
};
export const modelFind = (models, country, state) => {
    return models.find((model) => {
        if (state) {
            if (model.state) {
                return model.country === country && model.state === state;
            }
            return false;
        }
        return model.country === country;
    });
};
export const aggregate = (models) => {
    if (!models || !models.length) {
        return {
            country: 'World',
            population: 0,
            values: [],
        };
    }
    const population = models.map((model) => model.population).reduce((prev, curr) => prev + curr);
    const values = models[0].values.map((value, index) => {
        return models
            .map((model) => {
            return model.values[index];
        })
            .reduce((prev, current) => {
            return {
                confirmed: prev.confirmed + current.confirmed,
                dead: prev.dead + current.dead,
                recovered: prev.recovered + current.recovered,
                active: prev.active + current.active,
                diff: {
                    confirmed: prev.diff.confirmed + current.diff.confirmed,
                    dead: prev.diff.dead + current.diff.dead,
                    recovered: prev.diff.recovered + current.diff.recovered,
                    active: prev.diff.active + current.diff.active,
                },
                avrg: {
                    5: {
                        confirmed: prev.avrg[5].confirmed + current.avrg[5].confirmed,
                        dead: prev.avrg[5].dead + current.avrg[5].dead,
                        recovered: prev.avrg[5].recovered + current.avrg[5].recovered,
                        active: prev.avrg[5].active + current.avrg[5].active,
                    },
                    7: {
                        confirmed: prev.avrg[7].confirmed + current.avrg[7].confirmed,
                        dead: prev.avrg[7].dead + current.avrg[7].dead,
                        recovered: prev.avrg[7].recovered + current.avrg[7].recovered,
                        active: prev.avrg[7].active + current.avrg[7].active,
                    },
                    14: {
                        confirmed: prev.avrg[14].confirmed + current.avrg[14].confirmed,
                        dead: prev.avrg[14].dead + current.avrg[14].dead,
                        recovered: prev.avrg[14].recovered + current.avrg[14].recovered,
                        active: prev.avrg[14].active + current.avrg[14].active,
                    },
                    21: {
                        confirmed: prev.avrg[21].confirmed + current.avrg[21].confirmed,
                        dead: prev.avrg[21].dead + current.avrg[21].dead,
                        recovered: prev.avrg[21].recovered + current.avrg[21].recovered,
                        active: prev.avrg[21].active + current.avrg[21].active,
                    },
                    28: {
                        confirmed: prev.avrg[28].confirmed + current.avrg[28].confirmed,
                        dead: prev.avrg[28].dead + current.avrg[28].dead,
                        recovered: prev.avrg[28].recovered + current.avrg[28].recovered,
                        active: prev.avrg[28].active + current.avrg[28].active,
                    },
                },
                ratio: {
                    confirmed: prev.ratio.confirmed + current.ratio.confirmed,
                    dead: prev.ratio.dead + current.ratio.dead,
                    recovered: prev.ratio.recovered + current.ratio.recovered,
                    active: prev.ratio.active + current.ratio.active,
                    diff: {
                        confirmed: prev.ratio.diff.confirmed + current.ratio.diff.confirmed,
                        dead: prev.ratio.diff.dead + current.ratio.diff.dead,
                        recovered: prev.ratio.diff.recovered + current.ratio.diff.recovered,
                        active: prev.ratio.diff.active + current.ratio.diff.active,
                    },
                    avrg: {
                        5: {
                            confirmed: prev.ratio.avrg[5].confirmed + current.ratio.avrg[5].confirmed,
                            dead: prev.ratio.avrg[5].dead + current.ratio.avrg[5].dead,
                            recovered: prev.ratio.avrg[5].recovered + current.ratio.avrg[5].recovered,
                            active: prev.ratio.avrg[5].active + current.ratio.avrg[5].active,
                        },
                        7: {
                            confirmed: prev.ratio.avrg[7].confirmed + current.ratio.avrg[7].confirmed,
                            dead: prev.ratio.avrg[7].dead + current.ratio.avrg[7].dead,
                            recovered: prev.ratio.avrg[7].recovered + current.ratio.avrg[7].recovered,
                            active: prev.ratio.avrg[7].active + current.ratio.avrg[7].active,
                        },
                        14: {
                            confirmed: prev.ratio.avrg[14].confirmed + current.ratio.avrg[14].confirmed,
                            dead: prev.ratio.avrg[14].dead + current.ratio.avrg[14].dead,
                            recovered: prev.ratio.avrg[14].recovered + current.ratio.avrg[14].recovered,
                            active: prev.ratio.avrg[14].active + current.ratio.avrg[14].active,
                        },
                        21: {
                            confirmed: prev.ratio.avrg[21].confirmed + current.ratio.avrg[21].confirmed,
                            dead: prev.ratio.avrg[21].dead + current.ratio.avrg[21].dead,
                            recovered: prev.ratio.avrg[21].recovered + current.ratio.avrg[21].recovered,
                            active: prev.ratio.avrg[21].active + current.ratio.avrg[21].active,
                        },
                        28: {
                            confirmed: prev.ratio.avrg[28].confirmed + current.ratio.avrg[28].confirmed,
                            dead: prev.ratio.avrg[28].dead + current.ratio.avrg[28].dead,
                            recovered: prev.ratio.avrg[28].recovered + current.ratio.avrg[28].recovered,
                            active: prev.ratio.avrg[28].active + current.ratio.avrg[28].active,
                        },
                    },
                },
                timestamp: value.timestamp,
            };
        });
    });
    return {
        country: 'World',
        population,
        values,
    };
};
