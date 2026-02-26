import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import './ProjectPage.css';
import { SingleProject } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';
import { headerData } from '../../data/headerData';

function ProjectPage() {

    const [search, setSearch] = useState('');
    const { theme } = useContext(ThemeContext);

    // State untuk mengontrol Pop-up (Modal)
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Filter pencarian
    const filteredArticles = projectsData.filter((project) => {
        const content = project.projectName + project.projectDesc + project.tags;
        return content.toLowerCase().includes(search.toLowerCase());
    });

    const useStyles = makeStyles((t) => ({
        search : {
            color: theme.tertiary, 
            width: '40%',
            height: '2.75rem',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            padding: '0.95rem 1rem',
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            fontSize: '0.9rem',  
            backgroundColor: theme.secondary, 
            boxShadow: theme.type === 'dark' ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060' : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
            "&::placeholder": {
                color: theme.tertiary80, 
            },
            [t.breakpoints.down('sm')]: {
                width:'350px',
            },
        },
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover": 
            {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
        // --- KELAS UNTUK POP-UP MODAL YANG RESPONSIVE ---
        modalPaper: {
            backgroundColor: theme.secondary,
            borderRadius: '15px',
            padding: '2rem',
            [t.breakpoints.down('sm')]: {
                padding: '1.5rem 1rem',
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
                fontSize: '1.4rem', 
                marginBottom: '1rem',
            }
        },
        modalImage: {
            width: '100%',
            maxHeight: '350px',
            objectFit: 'contain',
            borderRadius: '10px',
            [t.breakpoints.down('sm')]: {
                maxHeight: '200px', 
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
                fontSize: '0.85rem', 
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
                fontSize: '0.85rem', 
                lineHeight: '1.5',
            }
        }
    }));

    const classes = useStyles();

    return (
        <div className="projectPage" style={{backgroundColor: theme.secondary}}>
            <Helmet>
                <title>{headerData.name} | Projects</title>
            </Helmet>
            <div className="projectPage-header" style={{backgroundColor:theme.primary}}>
                <Link to="/">
                    <AiOutlineHome className={classes.home}/>
                </Link>
                <h1 style={{color: theme.secondary}}>Projects</h1>
            </div>
            <div className="projectPage-container">
               <div className="projectPage-search">
                   <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search project..." className={classes.search} />
               </div>
               
               <div className="project-grid-container"> 
                    {filteredArticles.map(project => (
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
            </div>    

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
                            {Array.isArray(selectedProject.tags) ? selectedProject.tags.join(' | ') : ''}
                        </p>

                        <h3 className={classes.modalSubtitle}>Detail</h3>
                        <div className={classes.modalDesc}>
                            {selectedProject.details}
                        </div>
                    </div>
                )}
            </Dialog>
        </div>
    )
}

export default ProjectPage;