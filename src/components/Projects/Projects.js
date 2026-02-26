import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';
import { HiArrowRight } from "react-icons/hi";

import './Projects.css';
import SingleProject from './SingleProject/SingleProject';

function Projects() {
    const { theme } = useContext(ThemeContext);
    
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const useStyles = makeStyles((t) => ({
        viewAllBtn: {
            color: theme.tertiary,
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary,
                backgroundColor: theme.primary,
            }
        },
        viewArr: {
            color: theme.tertiary,
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary,
                backgroundColor: theme.secondary,
            }
        },
        // --- KELAS UNTUK POP-UP MODAL YANG RESPONSIVE ---
        modalPaper: {
            backgroundColor: theme.secondary,
            borderRadius: '15px',
            padding: '2rem',
            [t.breakpoints.down('sm')]: {
                padding: '1.5rem 1rem', // Padding lebih kecil di HP
                margin: '1rem',
                width: 'calc(100% - 2rem)',
            }
        },
        modalTitle: {
            color: theme.tertiary,
            marginBottom: '1.5rem',
            fontWeight: 'bold',
            fontFamily: 'var(--primaryFont)',
            fontSize: '2rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '1.4rem', // Judul pop-up mengecil di HP
                marginBottom: '1rem',
            }
        },
        modalImage: {
            width: '100%',
            maxHeight: '350px',
            objectFit: 'contain',
            borderRadius: '10px',
            [t.breakpoints.down('sm')]: {
                maxHeight: '200px', // Gambar tidak memakan layar terlalu banyak di HP
            }
        },
        modalSubtitle: {
            color: theme.tertiary,
            marginBottom: '0.5rem',
            fontWeight: 'bold',
            fontFamily: 'var(--primaryFont)',
            fontSize: '1.2rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '1rem',
            }
        },
        modalTech: {
            color: theme.primary,
            marginBottom: '1.5rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            fontSize: '1rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '0.85rem', // Teks Tags mengecil di HP
                marginBottom: '1rem',
            }
        },
        modalDesc: {
            color: theme.tertiary80,
            lineHeight: '1.7',
            textAlign: 'justify',
            fontFamily: 'var(--primaryFont)',
            fontSize: '1rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '0.85rem', // Teks Detail mengecil di HP
                lineHeight: '1.5',
            }
        }
    }));

    const classes = useStyles();

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{ backgroundColor: theme.secondary }}>
                    <div className="projects--header">
                        <h1 style={{ color: theme.primary }}>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectsData.slice(0, 6).map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    image={project.image}
                                    onClick={() => handleOpen(project)} 
                                />
                            ))}
                        </div>

                        {projectsData.length > 6 && (
                            <div className="projects--viewAll">
                                <Link to="/projects">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* POP-UP MODAL UI */}
            <Dialog 
                open={open} 
                onClose={handleClose} 
                maxWidth="md" 
                fullWidth 
                classes={{ paper: classes.modalPaper }}
            >
                {selectedProject && (
                    <div style={{ position: 'relative' }}>
                        <IconButton 
                            style={{ position: 'absolute', right: '-10px', top: '-15px', color: theme.tertiary, padding: '5px' }} 
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                        
                        {/* Memanggil kelas dinamis dari useStyles agar merespons layar */}
                        <h2 className={classes.modalTitle}>
                            {selectedProject.projectName}
                        </h2>

                        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                            <img 
                                src={selectedProject.image} 
                                alt={selectedProject.projectName} 
                                className={classes.modalImage} 
                            />
                        </div>

                        <h3 className={classes.modalSubtitle}>Tech Stack</h3>
                        <p className={classes.modalTech}>
                            {selectedProject.tags.join(' | ')}
                        </p>

                        <h3 className={classes.modalSubtitle}>Detail</h3>
                        <div className={classes.modalDesc}>
                            {selectedProject.details}
                        </div>
                    </div>
                )}
            </Dialog>
        </>
    )
}

export default Projects;