import one from '../assets/svg/projects/1.svg'
import two from '../assets/svg/projects/2.svg'
import three from '../assets/svg/projects/3.svg'
import four from '../assets/svg/projects/4.svg'
import five from '../assets/svg/projects/5.svg'
import six from '../assets/svg/projects/6.svg'
import seven from '../assets/svg/projects/7.svg'
import eight from '../assets/svg/projects/8.svg'
import nine from '../assets/svg/projects/9.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'BIT FUTURE: Crypto Prediction',
        projectDesc: 'Intelligent Bitcoin Price Prediction Dashboard & Telegram Bot using Time-Series Forecasting.',
        tags: ['Python', 'React', 'Forecasting'],
        image: one, 
        details: 'BIT FUTURE is an intelligent financial analytics system designed to support data-driven cryptocurrency investment decisions through predictive modeling and interactive analytics. The project implements a Bitcoin price forecasting pipeline using the Prophet time-series model trained on historical market data and enhanced with technical indicators such as RSI, Moving Average, and Bollinger Bands to improve prediction reliability. An interactive analytics dashboard was developed using React.js and Flask to visualize real-time market data, sentiment analysis, Fear & Greed Index insights, and AI-assisted decision support recommendations (Buy/Hold/Sell). To enhance accessibility and usability, a Python-based Telegram bot was integrated, enabling users to receive real-time predictions, market insights, and automated investment recommendations through conversational interaction.'
    },
    {
        id: 2,
        projectName: 'AJEG BALI: Jejahitan Bali Classification App',
        projectDesc: 'Deep Learning Model & Android Application for Balinese Jejahitan Recognition.',
        tags: ['Deep Learning', 'MobileViTv2', 'Android'],
        image: two, 
        details: 'AJEG BALI is an intelligent mobile application developed to preserve and introduce Balinese cultural heritage through automated jejahitan recognition using deep learning. In this project, I collected primary dataset images directly from real jejahitan objects, building a curated dataset consisting of 18 jejahitan classes used to train and evaluate the model. The system utilizes a MobileViTv2 architecture enhanced with a Convolutional Block Attention Module (CBAM) to improve feature extraction accuracy and visual understanding of complex jejahitan shapes. As a key innovation, an incremental learning strategy was implemented, enabling the model to add new jejahitan classes using limited few-shot data without requiring full retraining, improving scalability and long-term usability. The trained model was then integrated into an Android application that allows users to classify jejahitan images and receive detailed outputs including the jejahitan name, cultural descriptions, and instructional video references, creating an accessible digital learning tool for preserving Balinese traditions.'
    },
    {
        id: 3,
        projectName: 'AI-Powered Image Editor',
        projectDesc: 'Full-Stack Web Application for Real-Time AI Image Processing and Generation.',
        tags: ['React JS', 'Python', 'Deep Learning'],
        image: three, 
        details: 'An AI-powered web application was developed to provide advanced image editing capabilities by combining traditional image processing techniques with modern artificial intelligence models. Serving as the project lead, I designed and deployed multiple AI-based image processing models using Python, including Face Swap, Face Restoration, Face Blur, and Old Photo Restoration, with scalable backend inference integrated through the Hugging Face API. The platform was built using React.js for the frontend and Flask for the backend, enabling responsive and real-time AI-based image editing directly through a web interface. I also led the integration of team-developed modules into a unified system, consolidating more than 30 image processing and AI features, including visual transformations, effects, document tools, generative AI editing, and automated face enhancement pipelines, resulting in a comprehensive and collaborative AI image editing platform.'
    },
    {
        id: 4,
        projectName: 'Pothole Detection & Area Estimation',
        projectDesc: 'Real-time pothole detection and automated damage severity estimation using YOLOv8 instance segmentation.',
        tags: ['Yolov8', 'Python', 'Instance Segmentation'],
        image: four, 
        details: 'Developed an intelligent computer vision system to automatically detect and analyze road potholes using an instance segmentation approach. Built the model with YOLOv8s-seg and trained it on more than 10,000 annotated images sourced from Roboflow, applying advanced preprocessing techniques including Contrast Stretching and Adaptive Gaussian Star Filter (CAGF) to improve feature extraction under varying lighting and road conditions. Implemented pixel-level segmentation to generate precise pothole masks, enabling quantitative area estimation as an indicator of road damage severity for infrastructure monitoring and maintenance prioritization. Achieved strong detection performance with a bounding box precision of 96.2% and mAP50 of 95.6%. Deployed the end-to-end pipeline through a Gradio-based web interface, allowing users to upload videos for automated detection, perform real-time inference, and export structured pothole tracking data (frame index, object ID, and estimated area) into CSV format for further analysis and reporting.'
    },
    {
        id: 5,
        projectName: 'Multimodal Face–Iris Biometric Authentication System',
        projectDesc: 'Deep learning–based multimodal face-iris authentication system using feature fusion for secure identity verification.',
        tags: ['Python', 'CNN', 'Computer Vision'],
        image: five, 
        details: 'A multimodal biometric authentication system was developed to enhance identity verification reliability by combining facial and iris recognition through feature-level fusion. The system integrates 512-dimensional face and iris embeddings into a unified 1024-dimensional representation, improving robustness against common unimodal challenges such as lighting variations and spoofing attempts. A dual-stream CNN architecture extracts facial features using ArcFace loss while iris features are learned through a customized ResNet-50 backbone, achieving high performance with 99.17% face accuracy, 100% iris accuracy, and 99% multimodal classification accuracy using K-Nearest Neighbors with cosine similarity. The complete pipeline is deployed through an interactive Gradio web interface supporting Face Only, Iris Only, and Multimodal authentication modes, enhanced with identity cross-validation logic to strengthen system security and prevent unauthorized access.'
    },
    {
        id: 6,
        projectName: 'Indonesian Image Captioning for Balinese Souvenirs',
        projectDesc: 'Intelligent Bitcoin Price Prediction Dashboard & Telegram Bot using Time-Series Forecasting.',
        tags: ['CNN', 'RNN', 'Python', 'GenAI'],
        image: seven, 
        details: 'Developed an Indonesian image captioning system to automatically generate descriptive explanations for Balinese souvenir images by combining computer vision and natural language processing approaches within a three-member collaborative team. Constructed a custom dataset through manual annotation by writing culturally accurate captions for each souvenir image across multiple classes. Implemented and compared two deep learning architectures, including a VGG16 + BiLSTM CNN–RNN pipeline for sequential caption generation and a Vision Transformer integrated with IndoBERT to improve contextual language understanding in Bahasa Indonesia. Deployed the final system through an interactive Gradio interface allowing users to upload souvenir images and obtain automatically generated captions, which were further refined using GPT-based language enhancement to produce more natural and fluent descriptions.'
    },
    {
        id: 7,
        projectName: 'TikTok ITE Law Violation Classification',
        projectDesc: 'Indonesian NLP-based text classification system for detecting and categorizing ITE law violations in social media comments.',
        tags: ['NLP', 'Text Classification', 'Naive Bayes'],
        image: six,
        details: (
            <span>
                Designed and developed a machine learning–based text classification system to automatically detect and categorize legal violations within TikTok comments using the Naive Bayes algorithm. Natural Language Processing (NLP) techniques and feature extraction methods were applied to process Indonesian-language text and classify content into five major ITE Law violation categories, including pornography, defamation, hate speech, online terror, and cyberbullying. The research outcomes were successfully co-authored and published in an academic journal, contributing to advancements in legal technology analysis, digital safety awareness, and automated evaluation of social media content.
  
                <br /><br />         
                Publication link:{' '}
                <a 
                    href="https://www.researchgate.net/publication/383007593_KLASIFIKASI_PELANGGARAN_UU_ITE_PADA_TIKTOK_MENGGUNAKAN_ALGORITMA_NAIVE_BAYES" 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ color: '#007bff', textDecoration: 'underline', fontWeight: 'bold' }}
                >
                    ResearchGate - Klasifikasi Pelanggaran UU ITE
                </a>
            </span>
        )
    },
    
    {
        id: 8,
        projectName: 'Brain Tumor MRI Classification',
        projectDesc: 'Explainable brain tumor classification from MRI images using transfer learning CNN and saliency-based ROI visualization.',
        tags: ['Python', 'TensorFlow', 'CNN'],
        image: eight, 
        details: 'Developed a brain tumor classification system from MRI images through a collaborative six-member team project, leveraging transfer learning with multiple convolutional neural network architectures to recognize various tumor classes. Several pretrained models including InceptionV3, ResNet50, MobileNetV2, and EfficientNetB4 were fine-tuned and evaluated to improve generalization and comparative performance. Explainable AI techniques were incorporated using saliency map visualization to highlight Regions of Interest (ROI), allowing interpretable predictions by revealing tumor-focused areas within medical images. An interactive inference application was built using Gradio, enabling users to upload MRI scans, select different trained models, and visualize prediction results along with confidence scores. The end-to-end system was deployed on Hugging Face Spaces, providing an accessible web-based demonstration of medical image classification and explainable deep learning analysis.'
    },
    {
        id: 9,
        projectName: 'E-Book: Biomedics with Deep Learning',
        projectDesc: 'Full-Stack Web Application for Real-Time AI Image Processing and Generation.',
        tags: ['Python', 'Deep Learning', 'Data Analysis'],
        image: nine, 
        details: 'Developed collaboratively with a lecturer and a three-member team, this project focuses on creating an academic e-book that bridges deep learning theory and real-world biomedical applications. The book covers fundamental concepts of AI and deep learning, biomedical datasets, preprocessing techniques, and modern neural network architectures such as CNN, RNN, and Vision Transformers. Several applied case studies were implemented, including thyroid nodule segmentation using U-Net, epilepsy classification from EEG signals using hybrid CNN-BiLSTM-BiGRU with attention mechanism, and heart sound classification from PCG signals using Vision Transformer. The project emphasizes reproducible experimentation workflows using Python, integrating data preprocessing, model training, evaluation, and inference pipelines to support practical learning and research in biomedical AI.'
    }

]

//     {
//         id: 4,
//         projectName: 'Android Patient Tracker',
//         projectDesc: 'This project involves the development of an Android application for viewing and managing patient data.',
//         tags: ['Flutter', 'Firebase'],
//         code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
//         demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
//         image: four
//     },
//     {
//         id: 5,
//         projectName: 'E-Commerce App',
//         projectDesc: 'A Simple E-commerce application',
//         tags: ['React Native', 'Firebase'],
//         code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
//         demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
//         image: five
//     },
//     {
//         id: 6,
//         projectName: 'Uber Lite',
//         projectDesc: 'Uber clone',
//         tags: ['Flutter'],
//         code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
//         demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
//         image: six
//     },
//     {
//         id: 7,
//         projectName: 'Stock Market App',
//         projectDesc: 'A simple stock market API app',
//         tags: ['React', 'Redux', 'Bootstrap'],
//         code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
//         demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
//         image: seven
//     },
//     {
//         id: 8,
//         projectName: 'Car Pooling System',
//         projectDesc: 'The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution',
//         tags: ['Flutter', 'React'],
//         code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
//         demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
//         image: eight
//     },
// ]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/