import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCycleCWU';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import HooksCounter from './components/HooksCounter';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import HTTPRequests from './components/HTTPRequests';



function App() {
  return <div className="App">
      <HTTPRequests />
  </div>;
}

export default App;
