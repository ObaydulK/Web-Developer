

// i konw this imges link up other way so don't mind
import categoies from '../../../../Assist/Imges/categories.jpg'
import Desktop from '../../../../Assist/Imges/Desktop - 1.png'
import frame from '../../../../Assist/Imges/Frame 1.png'
import landing from '../../../../Assist/Imges/landing page 1.png'
import MacBook from '../../../../Assist/Imges/MacBook Pro - 8.png'
import oba from '../../../../Assist/Imges/oba.png'
import obaydul from '../../../../Assist/Imges/obaydul.png'
import Amazon from '../../../../Assist/Imges/Amazon.png'
import Node from '../../../../Assist/Imges/Node-Pade.png'
import Youtube from '../../../../Assist/Imges/YouTube.png'
import Title from "../Title/Titles"
import '../../../../../src/index.css'
import { Link } from 'react-router-dom'

const PhotoGallary = () => {

    return (
        <div>

            <div className=" mb-4 rounded-r-2xl rounded-l-3xl shadow-2xl">
                <Title subHeading="'Project Photo Gallery'" />
            </div>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">

                    <div className='relative  col-span-2 row-span-2 min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square'>
                        <img src={Node} alt="" className="w-full h-full rounded-2xl shadow-sm" />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 rounded-2xl hover:opacity-80 bg-black">
                            <div className="flex flex-col items-center justify-center border-4  ">
                                <h1 className="text-gray-50 font-bold text-2xl">Code pad</h1>
                                <div className='flex gap-10 m-auto'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to="https://github.com/ObaydulK/CodePad"  >Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to=" https://code-pad-pi.vercel.app/  "  >Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300" > NOde Photo by Sébastien Goldberg on Unsplash </small>
                            </div>
                        </div>
                    </div>

                    <div className="relative ">
                        <img alt="" className="Photogallary" src={Amazon} />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex flex-col items-center justify-center  ">
                                <h1 className="text-gray-50 font-bold text-2xl">Amazon Web App Clone</h1>
                                <div className='flex gap-10 m-auto  '>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to="https://amazon-web-clone-delta.vercel.app/"  >Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to="https://amazon-web-clone-delta.vercel.app/"  >Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300"> Amazon Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>

                    <div className="relative ">j
                        <img alt="" className="Photogallary" src={categoies} />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex flex-col items-center justify-center    ">
                                <h1 className="text-gray-50 font-bold text-2xl">Dua Web App </h1>
                                <div className='flex gap-10 m-auto'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to="https://vercel.com/obayduls-projects/dua-web-application">Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to="https://dua-web-application.vercel.app">Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300">categoies Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>

                    <div className="relative  ">
                        <Link className='  '><img alt="" className="Photogallary  hover:shadow-4xl " src={Desktop} /> </Link>

                        <div className="absolute  top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex flex-col items-center justify-center   ">
                                <h1 className="text-gray-50 font-bold text-2xl">Car Docture</h1>
                                <div className='flex gap-10 m-auto'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm"  target='blank'  to="https://car-doctor-sigma.vercel.app" >Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm"  target='blank'  to="https://github.com/ObaydulK/Car-Doctor" >Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300"> Desktop Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>

                    <div className="relative ">
                        <img alt="" className="Photogallary" src={frame} />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex flex-col items-center justify-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">G3 Architects</h1>
                                <div className='flex gap-10 m-auto'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to="">Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to="">Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300"> Fram Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>


                    <div className="relative ">
                        <img alt="" className="Photogallary" src={landing} />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex flex-col items-center justify-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">Duli's Susill Reservtion</h1>
                                <div className='flex gap-10 m-auto'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to="" >Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to="https://b8a9-event-management-obaydul-k.vercel.app/home" >Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300"> landing Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>


                    <div className="relative ">
                        <img alt="" className="Photogallary" src={MacBook} />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex flex-col items-center justify-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">Honda Bikes Center</h1>
                                <div className='flex gap-10 m-auto'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm"target='blank' to="">Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm"target='blank' to="">Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300"> MacBook Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>


                    <div className="relative ">
                        <img alt="" className="Photogallary" src={obaydul} />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex flex-col items-center justify-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">Game World</h1>
                                <div className='flex gap-10 m-auto'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to="" >Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to="" >Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300">Obaydul Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>



                    <div className="relative ">
                        <img alt="" className="Photogallary" src={oba} />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex flex-col items-center justify-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">Portfilo</h1>
                                <div className='flex gap-10 m-auto'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to="https://github.com/ObaydulK/lendex-personal-portfolio" >Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to="https://lendex-personal-portfolio.vercel.app" >Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300"> oba Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>

                    <div className=' relative col-span-2 row-span-2 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square'>
                        <img src={Youtube} alt="" className="w-full h-full rounded-2xl shadow-sm min-h-96  " />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex flex-col items-center justify-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">Youtube Clone</h1>
                                <div className='flex gap-10 m-auto'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to='https://github.com/ObaydulK/YouTube-Clones'  >Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm" target='blank' to='https://you-tube-clones.vercel.app/' >Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300"> Youtube Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


        </div>
    )
}

export default PhotoGallary