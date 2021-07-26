import './Overlay.scss';

const Overlay = (props) => {
    let overlay = null;
    if (props.showOverlay) {
        overlay = <div onClick={props.toggleSidebar} className="overlay active"></div>;
    }
    else if (!props.showOverlay) {
        overlay = <div onClick={props.toggleSidebar} className="overlay"></div>;
    }
    return overlay;
}

export default Overlay;