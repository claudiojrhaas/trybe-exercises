import React from 'react';

import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight : {value, measurementUnit}, image } } = this.props;

    return (
      <div className='pokemon'>
            <h4>{ name }</h4>
            <p>{ `Type: ${type}` }</p>
            <p>{ `Average weight: ${value} ${measurementUnit}` }</p>
            <img src={ image } alt={ `Imagem do ${name}` } />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string.isRequired,
  })
}

export default Pokemon;
