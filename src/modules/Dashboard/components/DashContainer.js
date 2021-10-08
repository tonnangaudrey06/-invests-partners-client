const DashContainer = ({leftSide, rightSide}) => {
    return(
        <div className="dash-container">
            <div className="dash-container-left">
                {leftSide}
            </div>
            <div className="dash-container-right">
                {rightSide}
            </div>
        </div>
    )
}

export default DashContainer;