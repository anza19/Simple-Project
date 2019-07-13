//This is a test file
import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAtrr } from "../../../Utils/index";

const setUp = (props={}) => {

    //everything time this function is called we are doing a shallow render of the Header component
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {

    let component;

    //before each test suite, we do a setUp() which is basically a shallow render
    //beforeEach() is run before every single test
    //before each test we do a shallow render of the component
    beforeEach(() => {
        component = setUp();
    });

    it('Header component renders correctly', () => {

        //do a shallow render of the component
        //right now we are testing for the class
        // const component = setUp();

        //printing out the component HTML mark up in stdout
        console.log(component.debug());

        //in find we are telling what we are looking for
        //in our case we are telling it to look for a class
        //we take our shallow render and search for a <div> that has headerComponent className in it
        const wrapper = findByTestAtrr(component, 'headerComponent');

        //length should be 1 beacause there is only one class with that name
        //if there was another <div> with the same className the test will fail as we are expecting there
        //to only be 1!
        expect(wrapper.length).toBe(1);
    });

    //test for the logo
    it('The component should render a logo!', () => {

        //firstly we do a shallow render of our component
        // const component = setUp();
        
        //we search for the logo
        const logo = findByTestAtrr(component, 'logoIMG');

        //we expect wrapper to be of length 1 because there should only be one logo!
        expect(logo.length).toBe(1);
    });

});
