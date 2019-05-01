import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
    const {
        theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
    } = context;

    return (
        <div className='about-page' style={{ backgroundColor: bgPrimary }}>
            <style jsx='true'>
                {`
                    .highlight {
                        background-color: ${colorHighlight};
                    }
                    ::selection {
                        background-color: ${colorHighlight};
                    }
                `}
            </style>
            <div className='content-grid'>
                <h1 style={{ color: colorPrimary }}>About</h1>
                <div className='about-wrapper'>
                    <div className='about-content' style={{ color: textPrimary }}>
                        <p>
                            I like <span className='highlight'>JavaScript</span> and everything web.
                        </p>
                        <p>
                            When my dev senses are in full gear I build presumably{' '}
                            <span className='highlight'> awesome stuff</span>. I stay close to the Denton, Dallas,
                            Ft. Worth communities and try to keep tabs with the pace at which the web is evolving. I
                            also like to <span className='highlight'>blog</span> what I learn and play sports.
                        </p>
                        <p>
                            I built this site <span className='highlight'>from scratch</span>. By scratch, I mean{' '}
                            <i>absolutely from scratch</i>{' '}
                            <span className='highlight'>without any UI library/framework</span> (except React
                            though) and had so much fun along the way.
                        </p>
                        <p>
                            React, Node.js, Ruby-on-Rails, Golang, Python, Docker, MySQL and AWS are the main tricks up my sleeve. I love what I do!
                        </p>
                        <p className="text-emoji" style={{ color: colorPrimary }}>
                            (940) 300-8313
                        </p>
                    </div>
                </div>
            </div>
            <ScrollToNext pageSelector=".portfolio-page" />
        </div>
    );
};

AboutPage.contextTypes = {
    theme: PropTypes.any
};

export default AboutPage;
