import React, { useState, useEffect } from 'react';
import { Navigation } from 'react-minimal-side-navigation';
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

import { AiOutlineEdit } from "react-icons/ai";

// import { Container } from "../../../components";
import DashContainer from '../../components/DashContainer';
import RightSide from '../../components/RightSide';

import { ProjetService } from '../../../../core/services';

import projetimg from "../../../../assets/img/projet.jpg";
import banner from "../../../../assets/img/manage.jpg";

import { connect } from "react-redux";

const ProjectDetails = (props) => {
    const { user, match } = props;
    const { params: { id } } = match;

    const [projet, setProjet] = useState(null);

    const [rightSide, setRightSide] = useState("/info");

    useEffect(() => {
        function loadProjet() {
            ProjetService.getOneProjet(id).then(
                (rs) => {
                    setProjet(rs.data.data);
                }
            )
        }

        loadProjet();
    }, [id, props, user])

    const SideMenu = () => {
        return (
            <Navigation
                activeItemId={rightSide}
                onSelect={({ itemId }) => {
                    setRightSide(itemId)
                }}

                items={[
                    {
                        title: 'Informations sur le projet',
                        itemId: '/info'
                    },
                    {
                        title: 'Analyses effectuées',
                        itemId: '/analyse'
                    },
                    {
                        title: 'Actualités',
                        itemId: '/news',
                    },
                    {
                        title: 'Investissements',
                        itemId: '/invest',
                    },
                ]}
            />
        )
    }

    return (
        <div>
            <div className="projects-details-dashboard-top" style={{ background: `url(${banner})` }}>
                <AiOutlineEdit fill="white" style={{ cursor: 'pointer', position: 'absolute', right: 10, top: 10, zIndex: 2 }} size={30} />
                <div className="projects-details-dashboard-top" >
                    <h1 className="title-container">{projet?.intitule}</h1>
                </div>
                <div className="logo">
                    <img src={projet?.logo ? projet?.logo : projetimg} alt="" />
                </div>
            </div>
            <DashContainer leftSide={<SideMenu />} rightSide={<RightSide form={rightSide} projet={projet} />} />
        </div>
    )
}

const mapStateToProps = (state) => ({ user: state.auth })

export default connect(mapStateToProps, null)(ProjectDetails);