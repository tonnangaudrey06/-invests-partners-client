const DashContainer = ({leftSide, rightSide}) => {
    return(
        <div className="dash-container">
            <div className="dash-container-projet-left">
                {leftSide}
            </div>
            <div className="dash-container-projet-right">
                {rightSide}
            </div>
        </div>
    )
}

export default DashContainer;