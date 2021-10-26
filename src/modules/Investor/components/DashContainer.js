const DashContainer = ({leftSide, rightSide}) => {
    return(
        <div className="dash-container">
            <div className="dash-container-projet-left shadow">
                {leftSide}
            </div>
            <div className="dash-container-projet-right shadow-lg">
                {rightSide}
            </div>
        </div>
    )
}

export default DashContainer;