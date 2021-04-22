import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import azure from '../img/azure.png';
import aws from '../img/aws.png';
import data from '../data'
function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Frontend Skills'} span={'My Frontend Skills'} />
            <div className="skillsContainer">
                {data.frontendskills.map((dt) =>

                    <SkillsSection skill={dt.skill} progress={dt.progress} width={dt.width} />)}
                
            </div>
            <Tittle title={'My Backend Skills'} span={'My Backend Skills'} />
            <div className="skillsContainer">
                {data.backendskills.map((dt) =>

                    <SkillsSection skill={dt.skill} progress={dt.progress} width={dt.width} />)}

            </div>
            <Tittle title={'My Database Skills'} span={'My Database Skills'} />
            <div className="skillsContainer">
                {data.databaseskills.map((dt) =>

                    <SkillsSection skill={dt.skill} progress={dt.progress} width={dt.width} />)}

            </div>
            <Tittle title={'My Programming Languages'} span={'My programming languages'} />
            <div className="skillsContainer">
                {data.Programminglang.map((dt) =>

                    <SkillsSection skill={dt.skill} progress={dt.progress} width={dt.width} />)}

            </div>


            <Tittle title={'Specialization '} span={'Specilization'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'Have Enough Fulllstack Webapplication project exprience.'}
                />
                <ServicesSection image={azure} title={'Microsoft Azure '} 
                text={'Have worked on build pipeline and release pipeline on azure.'}
                />
                <ServicesSection image={aws} title={'AWS'} 
                text={'Have worked on access management related to api on AWS console..'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
