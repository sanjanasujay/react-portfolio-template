import mock03 from '../assets/images/nlp.jpg';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mockk.png';
import mock06 from '../assets/images/ml.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project"  >
               <img src={mock03} className="zoom" alt="thumbnail" width={"80%"}   />
                {/* <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"></a> */}
                <h2>Translation of Indic Languages to English and vice-versa using NLP</h2>
                <p>Built a transformer-based neural machine translation model to translate multiple Indian languages to English and vice-versa. Integrated text-to-speech functionality to generate audio output of translations, enhancing accessibility for non-English speakers.</p>
            </div>
            
            <div className="project">
                <img src={mock05} className="zoom" alt="thumbnail" width={"80%"}/>
                <h2>Café Database Management System</h2>
                <p>Developed a full-stack food ordering website using HTML, CSS, JavaScript, PHP, MySQL with dynamic menu-based ordering, enabling real-time order tracking. Through optimized MySQL queries and schema design, ensured smooth transaction handling.</p>
            </div>
            <div className="project">
                <img src={mock04} className="zoom" alt="thumbnail" width="80%"/>
                <h2>Multiple Regression Property Analysis</h2>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
             <div className="project">
                <img src={mock06} className="zoom" alt="thumbnail" width="80%"/>
              <h2>Retail Analytics: A Multi-Model Approach to Demand Forecasting</h2>
                <p>Built and compared multiple models (Linear Regression, Decision Tree, Random Forest, XGBoost) to forecast daily product-level revenue 30 days ahead. Engineered time-series and calendar features to capture seasonality and festive effects, and performed scenario-based forecasting to quantify holiday-driven revenue uplift for inventory and promotion planning.</p>
            </div>
           
           
            
        </div>
    </div>
    );
}

export default Project;