import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

// Import animasi
import Fade from 'react-reveal/Fade';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            // Di HP, ukuran tombol sedikit dipanjangkan agar seimbang dengan layar
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        // Animasi Timbul
        "@keyframes popUpSafe": {
            "0%": { 
                opacity: 0,
                scale: '0.6' 
            },
            "60%": { 
                opacity: 1,
                scale: '1.05' 
            },
            "100%": { 
                opacity: 1,
                scale: '1' 
            }
        },
        safeImageAnim: {
            animation: `$popUpSafe 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
        }
    }));

    const classes = useStyles();

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        <Fade left delay={100} duration={1200}>
                            {socialsData.linkedIn && (
                                <a href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                                    <FaLinkedin className='landing--social' style={{ color: theme.secondary }} aria-label='LinkedIn' />
                                </a>
                            )}
                        </Fade>
                        <Fade left delay={200} duration={1200}>
                            {socialsData.github && (
                                <a href={socialsData.github} target='_blank' rel='noreferrer'>
                                    <FaGithub className='landing--social' style={{ color: theme.secondary }} aria-label='GitHub' />
                                </a>
                            )}
                        </Fade>
                        <Fade left delay={300} duration={1200}>
                            {socialsData.instagram && (
                                <a href={socialsData.instagram} target='_blank' rel='noreferrer'>
                                    <FaInstagram className='landing--social' style={{ color: theme.secondary }} aria-label='Instagram' />
                                </a>
                            )}
                        </Fade>
                    </div>
                </div>

                <img
                    src={headerData.image}
                    alt=''
                    className={`landing--img ${classes.safeImageAnim}`}
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.secondary,
                    }}
                />

                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <Fade top delay={400} duration={1000} distance="20px">
                            <h6>{headerData.title}</h6>
                        </Fade>
                        
                        <Fade top delay={600} duration={1000} distance="20px">
                            <h1>{headerData.name}</h1>
                        </Fade>
                        
                        <Fade top delay={800} duration={1000} distance="20px">
                            <p>{headerData.desciption}</p>
                        </Fade>

                        <Fade bottom delay={1000} duration={1000} distance="30px">
                            {/* KEMBALI MENGGUNAKAN KELAS CSS MURNI AGAR RAPI */}
                            <div className='lcr-buttonContainer'>
                                {headerData.resumePdf && (
                                    <a href={headerData.resumePdf} download='resume' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                                        <Button className={classes.resumeBtn}>
                                            Download CV
                                        </Button>
                                    </a>
                                )}
                                <NavLink to='/#contacts' smooth={true} spy='true' duration={2000} style={{ textDecoration: 'none' }}>
                                    <Button className={classes.contactBtn}>
                                        Contact
                                    </Button>
                                </NavLink>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;