import { withTranslation } from 'react-i18next';

const SectionTitle = ({titleCss, dividerCss, title, t }) => {
    return (
        <div className='section-title text-uppercase' style={titleCss}>
            {t(title)}
        </div>
    );
}

export default withTranslation()(SectionTitle);