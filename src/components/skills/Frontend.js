import React from 'react'
import './skills.css'

const Frontend = () => {
    return (
        <>
            <div className="skills__content">
                <h3 className="skills__title">Frontend Developer</h3>

                <div className="skills__box">
                    <div className="skills__group">
                        <div className="skills__data">
                            <i class='bx bx-badge-check'></i>

                            <div>
                                <h3 className="skills__name">
                                    HTML 5
                                </h3>
                                <span className='skills__level'>Basic</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i class='bx bx-badge-check'></i>

                            <div>
                                <h3 className="skills__name">
                                    CSS 3
                                </h3>
                                <span className='skills__level'>Intermediate</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i class='bx bx-badge-check'></i>

                            <div>
                                <h3 className="skills__name">
                                    JavaScript
                                </h3>
                                <span className='skills__level'>Intermediate</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills__group">

                        <div className="skills__data">
                            <i class='bx bx-badge-check'></i>

                            <div>
                                <h3 className="skills__name">
                                    Tailwind CSS
                                </h3>
                                <span className='skills__level'>Intermediate</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i class='bx bx-badge-check'></i>

                            <div>
                                <h3 className="skills__name">
                                    Git
                                </h3>
                                <span className='skills__level'>Intermediate</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i class='bx bx-badge-check'></i>

                            <div>
                                <h3 className="skills__name">
                                    React
                                </h3>
                                <span className='skills__level'>Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frontend