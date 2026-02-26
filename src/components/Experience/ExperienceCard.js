import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Experience.css'

// Tambahkan parameter onClick dan image
function ExperienceCard({id, company, jobtitle, startYear, endYear, image, onClick}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor: theme.primary30,
            cursor: 'pointer', // Efek klik
            transition: 'all 0.3s ease',
            padding: '1.5rem',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center', // Ikon dan teks sejajar secara vertikal
            "&:hover": {
                backgroundColor: theme.primary50,
                transform: 'translateY(-5px)', // Efek melayang saat di-hover
                boxShadow: `0 10px 20px -10px ${theme.primary}`,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`} onClick={onClick}>
                
                {/* Bagian Logo (Mengganti Ikon Koper) */}
                <div 
                    className="expcard-img" 
                    style={{
                        backgroundColor: '#ffffff', // Background putih agar logo jelas
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '5px',
                        overflow: 'hidden',
                        borderRadius: '50%',
                        width: '60px',
                        height: '60px',
                        flexShrink: 0
                    }}
                >
                    <img src={image} alt="Company Logo" style={{ width: '100%', objectFit: 'contain' }} />
                </div>
                
                {/* Bagian Teks Ringkasan */}
                <div className="experience-details" style={{ width: '100%', marginLeft: '1.5rem' }}>
                    <h6 style={{color: theme.primary, fontFamily: 'var(--primaryFont)'}}>{startYear} - {endYear}</h6>
                    <h4 style={{color: theme.tertiary, margin: '0.2rem 0', fontFamily: 'var(--primaryFont)',}}>{jobtitle}</h4>
                    <h5 style={{color: theme.tertiary80, fontSize: '0.9rem', fontFamily: 'var(--primaryFont)',}}>{company}</h5>
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard