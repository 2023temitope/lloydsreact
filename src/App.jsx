import Cohort from './components/Cohort';
import './App.css';
//react component calledApp
function App() {
  return (
    <div>
        
        <h1>ReactApp</h1>
        <p>hello</p>
        <p>World</p>
        <p>Name1:Peace</p>
        
<p>Name2:Joy</p>
<p>Name3:Love</p>
<p>Name4:Peaceful</p>
<p>Name5:Joyful</p>
<p>Name6:Lovely</p>
        <Cohort name="Peace" age= "10" job="SE" height ="156cm" weight="70kg" kid ="1"/>
        <Cohort name="Joy" age= "12" job="QE" height ="160cm" weight="80kg" kid ="0"/>
        <Cohort name="Love" age= "14" job="IT" height ="170cm" weight="100kg" kid ="3"/>
        <Cohort name="Peace" age= "16" job="DevOps" height ="140cm" weight="1200kg" kid ="2"/>
        <Cohort name="Peace" age= "18" job="Webdesigner" height ="130cm" weight="1500kg" kid ="4"/>
        <Cohort name="Peace" age= "20" job="Security" height ="190cm" weight="170kg" kid ="5"/>

    </div>
       );
  }

export default App;

