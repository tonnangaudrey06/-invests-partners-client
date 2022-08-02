import "./index.scss";

const PageLoader = ({ loading }) => {
    return (
        <div id="loader-wrapper" style={{ display: loading ? "flex" : "none" }}>
            <div className="lds-dual-ring"></div>
            <div>Veuillez patienter...</div>
        </div>
    );
}

export default PageLoader;