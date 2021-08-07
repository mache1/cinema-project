import './Overlay.scss';

const Overlay = (props) => {
    return <div className="overlay" onClick={props.toggleSidebar} style={{
        opacity: props.showOverlay ? 0.8 : 0,
        zIndex: props.showOverlay ? 40 : -1
    }}></div>;
}

export default Overlay;