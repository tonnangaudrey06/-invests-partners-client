const SectionTitle = ({titleCss, dividerCss, title }) => {
    return (
        <div className='section-title' style={titleCss}>
            {title}
        </div>
    );
}

export default SectionTitle;