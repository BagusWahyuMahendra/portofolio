import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, image, theme, onClick }) {
    const useStyles = makeStyles((t) => ({
        projectCard: {
            backgroundColor: theme.secondary,
            border: `2px solid ${theme.primary}`,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            borderRadius: '10px',
            overflow: 'hidden',
            padding: '1.5rem',
            height: '100%', 
            boxSizing: 'border-box', 
            "&:hover": {
                transform: 'translateY(-10px)',
                boxShadow: `0 15px 30px -10px ${theme.primary50}`,
            },
            // --- KUNCI ANIMASI GAMBAR TIMBUL ---
            // Saat kartu di-hover, tag gambar di dalamnya akan membesar
            "&:hover img": {
                transform: 'scale(1.08)',
            }
        },
        // --- KELAS UNTUK GARIS PEMISAH ---
        lineDivider: {
            width: '100%',
            height: '2px',
            backgroundColor: theme.primary, 
            opacity: 0.3, 
            margin: '0.5rem 0 1rem 0', 
            borderRadius: '5px'
        },
        contentWrapper: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1, 
        },
        descText: {
            color: theme.tertiary80, 
            fontSize: '0.95rem', 
            lineHeight: '1.5',
            display: '-webkit-box',
            WebkitLineClamp: 3, 
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontFamily: 'var(--primaryFont)',
        }
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div 
                key={id} 
                className={classes.projectCard} 
                onClick={onClick} 
            >
                <img 
                    src={image ? image : placeholder} 
                    alt={name} 
                    style={{ 
                        width: '100%', 
                        height: '200px', 
                        objectFit: 'contain', 
                        borderRadius: '8px', 
                        marginBottom: '0.5rem',
                        // --- TAMBAHAN TRANSISI AGAR ANIMASI MULUS ---
                        transition: 'transform 0.4s ease-in-out'
                    }} 
                />
                
                {/* --- ELEMEN GARIS PEMISAH --- */}
                <div className={classes.lineDivider}></div>
                
                <div className={classes.contentWrapper}>
                    {/* Bagian Tags/Bahasa */}
                    <div className='project--lang' style={{ background: 'transparent', color: theme.tertiary80, padding: 0, justifyContent: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '8px' }}>
                        {tags.map((tag, id) => (
                            <span key={id} style={{ background: theme.primary30, color: theme.primary, fontSize: '0.8rem', padding: '5px 10px', borderRadius: '5px', fontWeight: 'bold' }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Judul Project */}
                    <h2 style={{ color: theme.tertiary, fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'bold', fontFamily: 'var(--primaryFont)' }}>
                        {name}
                    </h2>
                    
                    {/* Deskripsi */}
                    <p className={classes.descText}>
                        {desc}
                    </p>
                </div>
            </div>
        </Fade>
    );
}

export default SingleProject;