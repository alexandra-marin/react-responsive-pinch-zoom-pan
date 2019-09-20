import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const containerStyle = {
    position: 'absolute',
    bottom: 5,
    left: '50%',
    right: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    zIndex: 1000
};

const ZoomOutButton = ({ disabled, onClick, zoomOutComponent }) => (
    <button className='iconButton' style={{ margin: '10px' }} onClick={onClick} disabled={disabled}>
        {zoomOutComponent}
        {!zoomOutComponent && <FontAwesomeIcon icon={faMinus} />}
    </button>
);

const ZoomInButton = ({ disabled, onClick, zoomInComponent }) => (
    <button className='iconButton' style={{ margin: '10px', marginLeft: '0px' }} onClick={onClick} disabled={disabled}>
        {zoomInComponent}
        {!zoomInComponent && <FontAwesomeIcon icon={faPlus} />}
    </button>
);

const ZoomButtons = ({ scale, minScale, maxScale, onZoomInClick, onZoomOutClick, zoomInComponent, zoomOutComponent }) => (
    <div style={containerStyle}>
        <ZoomOutButton onClick={onZoomOutClick} disabled={scale <= minScale} zoomOutComponent={zoomOutComponent} />
        <ZoomInButton onClick={onZoomInClick} disabled={scale >= maxScale} zoomInComponent={zoomInComponent} />
    </div>
);

ZoomButtons.propTypes = {
    scale: PropTypes.number.isRequired,
    minScale: PropTypes.number.isRequired,
    maxScale: PropTypes.number.isRequired,
    onZoomInClick: PropTypes.func.isRequired,
    onZoomOutClick: PropTypes.func.isRequired,
};

export default ZoomButtons;