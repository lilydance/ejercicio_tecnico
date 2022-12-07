import React from 'react'

const HeroImg = require.context('../../src/img/Hero');

const LIST_OP = [
    {
        name: "Baby & Toddler",
        img: './baby.png'
    },
    {
        name: "For girls",
        img: './girl.png',
    },
    {
        name: "For boys",
        img: './boy.png',
    },
    {
        name: "Home & Toys",
        img: './toys.png',
    },
];

export const Hero = () => {
    return (
        <section className="container d-block mx-auto mt-5">
            <div className="row container-fluid justify-content-between">
                <div className=" col-8 p-0 ms-0" style={{ maxWidth: "400px" }}>
                    <div className='Slider'><img src={HeroImg('./slider-1.jpg')} alt=''></img>
                        <div className='sliderContenedor'>
                            <span className='jumpsuits d-block Francois_One'>JUMPSUITS</span>
                            <span className='letter d-block Quicksand'>Comfortable clothes for your little babies</span><br></br>
                            <div className='discoverContenedor'>
                                <a className="discover Francois_One" href="#">DISCOVER</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-4 ms-1 text-center" style={{ maxWidth: "300px" }} >
                    <div className='GirlsPower text-center'><img src={HeroImg('./girls-power.jpg')} alt=''></img>
                        <div className=" text-center">
                            <span className='Francois_One text-center d-block mx-auto'>GIRL POWER</span>
                            <span className='Colorful Quicksand text-center d-block mx-auto'>For a colorful summer</span>
                        </div>
                    </div>
                </div>

            </div>

            <div class="opciones row mx-auto my-5 p-5" style={{ Width: "90%", height: "auto" }}>

                {
                    LIST_OP.map((item) => (
                        <div class="col-3 justify-content-around text-center">
                            <div className='img-fluid circle h-auto' style={{ Width: "154px" }}><img src={HeroImg(item.img)} alt=''></img>
                                <a href="#" class="Baby d-block mt-3">{item.name}</a>
                            </div>
                        </div>
                    ))
                }

            </div>

        </section>


    )
}

export default Hero;