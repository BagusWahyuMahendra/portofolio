import React, { useContext, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import './Experience.css';
import { experienceData } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';

function Experience() {

    const { theme } = useContext(ThemeContext);
    
    // State untuk mengontrol Pop-up (Modal)
    const [open, setOpen] = useState(false);
    const [selectedExp, setSelectedExp] = useState(null);

    const handleOpen = (exp) => {
        setSelectedExp(exp);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const useStyles = makeStyles((t) => ({
        // --- PERBAIKAN RESPONSIVE PADA MODAL ---
        modalPaper: {
            backgroundColor: theme.secondary,
            borderRadius: '15px',
            padding: '2rem',
            // Di HP, padding dan margin modal dikecilkan agar teks muat
            [t.breakpoints.down('sm')]: {
                padding: '1.5rem 1rem',
                margin: '1rem', 
                width: 'calc(100% - 2rem)', // Modal lebih lebar di HP
            }
        },
        modalTitle: {
            color: theme.primary,
            marginBottom: '0.2rem',
            fontWeight: 'bold',
            fontFamily: 'var(--primaryFont)',
            fontSize: '1.8rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '1.3rem', // Ukuran font judul di HP
            }
        },
        modalCompany: {
            color: theme.tertiary80,
            marginBottom: '0.5rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            fontSize: '1.1rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '0.95rem',
            }
        },
        modalDate: {
            color: theme.tertiary,
            marginBottom: '1.5rem',
            fontSize: '0.9rem',
            fontFamily: 'var(--primaryFont)',
            [t.breakpoints.down('sm')]: {
                fontSize: '0.8rem',
                marginBottom: '1rem',
            }
        },
        modalSubtitle: {
            color: theme.tertiary,
            marginBottom: '1rem',
            fontWeight: 'bold',
            fontFamily: 'var(--primaryFont)',
            fontSize: '1.1rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '0.95rem',
                marginBottom: '0.5rem',
            }
        },
        modalList: {
            color: theme.tertiary80, 
            paddingLeft: '1.2rem', 
            fontSize: '1rem', 
            lineHeight: '1.6',
            textAlign: 'justify',
            fontFamily: 'var(--primaryFont)',
            [t.breakpoints.down('sm')]: {
                fontSize: '0.85rem', // Ukuran teks deskripsi di HP jadi lebih proporsional
                paddingLeft: '1rem',
                lineHeight: '1.5',
            }
        }
    }));

    const classes = useStyles();

    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}> 
             <div className="experience-body">
                 <div className="experience-image">
                     <img src={theme.expimg} alt="" />
                 </div>
                 <div className="experience-description">
                    <h1 style={{color:theme.primary}}>Experience</h1>
                    {experienceData.map(exp =>(
                        <ExperienceCard 
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}
                            image={exp.image}
                            onClick={() => handleOpen(exp)} 
                        />
                    ))}
                 </div>
             </div>

             {/* POP-UP MODAL UI UNTUK EXPERIENCE */}
            <Dialog 
                open={open} 
                onClose={handleClose} 
                maxWidth="md" 
                fullWidth 
                classes={{ paper: classes.modalPaper }}
            >
                {selectedExp && (
                    <div style={{ position: 'relative' }}>
                        <IconButton 
                            style={{ position: 'absolute', right: '-5px', top: '-10px', color: theme.tertiary, padding: '5px' }} 
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                        
                        {/* Menggunakan kelas dinamis dari useStyles */}
                        <h2 className={classes.modalTitle}>
                            {selectedExp.jobtitle}
                        </h2>
                        <h4 className={classes.modalCompany}>
                            {selectedExp.company}
                        </h4>
                        <h5 className={classes.modalDate}>
                            {selectedExp.startYear} - {selectedExp.endYear}
                        </h5>

                        <h3 className={classes.modalSubtitle}>Key Responsibilities & Achievements:</h3>
                        <ul className={classes.modalList}>
                            {selectedExp.description.map((point, index) => (
                                <li key={index} style={{ marginBottom: '8px' }}>{point}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </Dialog>
        </div>
    )
}

export default Experience;