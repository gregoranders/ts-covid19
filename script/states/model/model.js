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
