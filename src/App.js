import React from 'react';
import NavComponent from './components/NavComponent';
import {Switch,Route} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import AboutUsComponent from './components/AboutUsComponent';
import ContactListComponent from './components/ContactListComponent';
import AddContactComponent from './components/AddContactComponent';
import ContactViewParamComponent from './components/ContactViewParamComponent';


function App() {
  return (
    <div className='container'>
      <NavComponent />
      <hr/>
      <Switch>
        <Route path='/' exact component={HomeComponent}/>
        <Route path='/about' component={AboutUsComponent}/>
        <Route path='/contacts' component={ContactListComponent}/>
        <Route path='/add-contact' component={AddContactComponent}/>
        <Route path='/contact-view/:id' exact component={ContactViewParamComponent}/>
        {/* <Route path='/contact-view' component={ContactViewComponent}/> */}
        {/* <Route path='/contact-view' render={()=><ContactViewComponent token='1234'/>}/> */}
        <Route path='**' render={()=><div style={{color:'red',fontWeight:'bold'}}>404 Not Found</div>} />
      </Switch>
    </div>
  );
}

export default App;
