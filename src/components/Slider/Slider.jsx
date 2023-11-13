import React from 'react';
import './Slider.css'

const Slider = () => {
    return (
            <div className='slider middle'>
                <div className="slides">
                    <input type="radio" name='r' id='r1' cheked />
                    <input type="radio" name='r' id='r2' />
                    <input type="radio" name='r' id='r3' />
                    <input type="radio" name='r' id='r4' />
                    <div className="slide s1">
                        <img src="https://shotam.info/wp-content/uploads/2022/12/sbu-1200x675-1.jpg" alt="" />
                        <h5>Some Text</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorum saepe ea repellat culpa sed nulla, error, odio ipsam reiciendis recusandae, expedita officiis quo nam debitis sint sapiente nihil enim.</p>
                    </div>
                    <div className="slide">
                        <img src="https://tvoemisto.tv/media/gallery/full/3/1/312651535445768694402881683244066816921852n.jpg" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://euroins.com.ua/storage/app/uploads/public/63c/235/43b/63c23543bb8eb590629846.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://news.vn.ua/wp-content/uploads/2023/06/MARAFON.jpg" alt="" />
                    </div>
                </div>
                <div className="navigation">
                    <label htmlFor="r1" className="bar"></label>
                    <label htmlFor="r2" className="bar"></label>
                    <label htmlFor="r3" className="bar"></label>
                    <label htmlFor="r4" className="bar"></label>
                </div>
            </div>
    );
};

export default Slider;