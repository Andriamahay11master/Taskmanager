import React from 'react';
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
                <a className="btn btn-primary" href={routeButton}>{labelButton}</a>
            </div>
        </div>
    );
}