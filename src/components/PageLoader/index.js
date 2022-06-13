import "./index.scss";

const PageLoader = ({ loading }) => {
    return (
        <div id="loader-wrapper" className={!loading ? "close-loader" : ""}>
            <div id="loader"></div>

            <div className="loader-section section-left"></div>
            <div className="loader-section section-right"></div>
        </div>
    );
}

export default PageLoader;