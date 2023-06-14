
import './App.css';
import Presentation from './Components/Body/Presentation/Presentation';
import Section from './Components/Body/Section/Section';
import SectionExtended from './Components/Body/SectionExtended/SectionExtended';
import Footer from './Components/Footer/Footer';
import BugButton from './Components/Header/BugButton/BugButton';
import Photo from './Components/Header/Photo/Photo';
import SocialMedia from './Components/Header/SocialMedia/SocialMedia';
import Text from './Components/MovingText/MovingText';







function App() {

const professionalSumary = `Detail-oriented technical supportprofessional with experience in troubleshooting software issues, seeking for an opportunity in software development. 
Actively studying front-end development tools like HTML/CSS, JavaScript and React. Passionate about creating intuitive user interfaces, I am dedicated to enhancing my skills for cutting-edge web projects. 
 Experienced in working with multinational companies. Seeking to build a career in a technology company that values personal and professional growth.
`





const educationBackground = `- Alura Technology School (Online courses focused on development)
- HTML/CSS - Create a complete web page / Responsive Layouts
- JavaScript -DOM / Create dynamic pages / API consumption 
- React com JavaScript


- Computer Technician at the Federal Institute of São Paulo (01/2021 - 12/2022)
- Algorithms and Programming
- Database Management
- Web Development
- Software Engineering
- Information Security
- Applied Mathematics for Computing
- Systems Design and Analysis
- Project Management
`

const workingExperience = 
`03/2023 - current - Ab-inBev
Position Support Analyst L2
Resolving escalated technical issues, conducting research and analysis, identifying the root cause of technical issues and developing solutions, collaborating with other teams and making sure about quality assurance to resolve technical issues and improve system performance, documenting solutions. provide training and support to end-users.

10/2022 - 03/2023- Paypal (Software)
Position:  Technical Support
Providing customer support, troubleshooting technical issues. Utilize technical knowledge and problem-solving skills to identify and resolve technical issues related to software. Documenting solutions: maintain accurate records of customer interactions, technical issues, and resolutions in a ticketing system or knowledge base to ensure knowledge sharing and continuous improvement.
explain technical concepts and solutions to non-technical customers or stakeholders in a clear and concise manner. Creating SOP’s.

09/2021 - 10/2022 - Linked RH (Software)
Position: Support Analyst  
Solving tickets, investigating and applying the best solution for the problem, report analysis, meetings with clients to gather requirements and discuss customization, personalized scripts and configurations. `













  return (




    <div className="App">
      <header className="App-header">
          <div className='containerSocialMedia'>
              <section className='socialMediaBox'>
                <SocialMedia image='/images/linkedn.png'/>
                <SocialMedia image='/images/github.png'/>
                <SocialMedia image='/images/email.png'/>
                <SocialMedia image='/images/cv.png'/>
              </section>

              <section className='bugButtonBox'>
                <BugButton/>
              </section>


             

              <Text text="My name is Tatiane, I'm a creative front end developer"/>



            

          </div>
          <div className='photoContainer'>

               <Photo/>

               </div>
      </header>

     

       <Presentation/>

      <Section
        image="/images/professional.png"
        title="Professional Sumary"
        text={professionalSumary} 
        ordertext='1' 
        orderimage='0'/>

        <Section
        image="/images/educational.png"
        title="Educational background"
        text={educationBackground} 
        ordertext='0' 
        orderimage='1'/>

        
        <SectionExtended
        title="Working Experience"
        text={workingExperience}
        />

           
      <Footer/>


      </div>




    
  );
}

export default App;
