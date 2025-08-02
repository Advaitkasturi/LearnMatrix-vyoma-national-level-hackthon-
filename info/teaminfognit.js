import Speech from "../assets/people/speech.jpg";
import MLX from "../assets/people/MLX.webp";
import agri from "../assets/people/agri.png";
import fin from "../assets/people/fin.jpg";
const TeamInfo = [
  {
    name: "Speech",
    img: Speech,
    role: "Speech recognition module for Python, supporting several engines and APIs, online and offline.",
    github: "https://github.com/Uberi/speech_recognition", 
    doc: "https://pypi.org/project/SpeechRecognition/",  
  },

    {
    name: "MLX-WHATSAPP",
    img: MLX,
    role: "An mlx project to train a base model on your whatsapp chats using (Q)Lora finetuning",
    github: "https://github.com/gavi/mlx-whatsapp", 
    doc: "https://pypi.org/project/SpeechRecognition/",  
  },

    {
    name: "Agriculture-Portal",
    img: agri,
    role: "ML solutions and other API based features to support Agriculture and Farmers. Goto Wiki or click on below link for Project Report.",
    github: "https://github.com/vaishnavid0604/agriculture-portal", 
    doc: "https://pypi.org/project/SpeechRecognition/",  
  },

    {
    name: "Financial-Distress",
    img: fin,
    role: "The project built a machine learning pipeline to classify whether an individual will experience financial distress (experience 90 days past due delinquency or worse) in the next two years based on income, household and credit history of that person. The pipeline currently supports 3 models (KNN, Decision Tree, and Random Forest)",
    github: "https://github.com/KunyuHe/ML-Pipeline-on-Financial-Distress-Data", 
    doc: "https://pypi.org/project/SpeechRecognition/",  
  },
];

export default TeamInfo;
