import React from 'react';
import { Link } from 'react-router-dom';
import './onboarding.scss';

interface OnboardingProps {
    image?: string,
    imageAlt?: string,
    imageTitle?: string,
    title: string,
    description?: string,
    labelButton: string,
    routeButton: string
}

export default function Onboarding({image, imageAlt, imageTitle, title, description, labelButton, routeButton} : OnboardingProps) {
    return (
        <div className='onboardingBlock'>
            <div className="onboardingTop">
                <img src={image} alt={imageAlt} title={imageTitle}/>
            </div>
            <div className="onboardingBottom">
                <h1 className='title-h1' dangerouslySetInnerHTML={{__html: title}}/>
                <p>{description}</p>
            </div>
            <div className="onboardingButton">
                <Link className="btn btn-primary" to={routeButton}>{labelButton}</Link>
            </div>
        </div>
    );
}