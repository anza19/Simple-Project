import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

//set up adapter
Enzyme.configure({

    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
    
});