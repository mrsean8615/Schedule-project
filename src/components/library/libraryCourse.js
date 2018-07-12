import React, { Component } from 'react';

import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course-title"> Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }


                { Icon('fas fa-plus-circle', 'library-course__action')}
                    <div className="library-course-description">
                        <label> Course description</label>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab</p>
                    </div>
            </div>
        )
    }
}

export default LibraryCourse;