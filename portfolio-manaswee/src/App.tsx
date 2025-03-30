import ProgressBar from './components/ProgressBar';
import HeroName from './components/HeroName';
import NavBar from './components/NavBar';
import StaggeredTextFlip from './components/StaggeredTextFlip';
// import StaggeredText from './components/StaggeringText';

function App () {
  return (
    <div>
      <div className='text-center bg-black'>Currently in development! Stay tuned for future changes...</div>
      <ProgressBar/>
      <NavBar/>
      <HeroName/>
      {/* <StaggeredText
          words={["Programmer", "Artist", "Animator", "Developer"]}
          duration={1}
      /> */}
      <StaggeredTextFlip
        word={"PROJECTS"}
        className='ml-12 md:ml-8 text-7xl xs:text-8xl'
      />
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur ipsam natus possimus, quae placeat exercitationem iusto ipsum inventore laudantium in suscipit fuga repellendus est adipisci tenetur omnis, labore doloremque.
      Soluta, veniam ut. Vel officia, facere, minus incidunt delectus enim aliquid ipsum placeat blanditiis rem rerum! Adipisci consequatur, deserunt ad accusantium sit iste dolorum amet reiciendis ipsa ipsum voluptate officia.
      Voluptate corrupti, ad ut repudiandae saepe libero officia accusamus voluptatem recusandae possimus inventore veniam illum itaque corporis quod nobis qui expedita delectus dicta nostrum? Quas modi ab porro maxime eaque!</p> */}
      
    </div>
  )
}

export default App;
