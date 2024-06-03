

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
                            <div className="flex-row text-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">Desktop.</h1>
                                <div className='flex gap-10'>
                                    <Link to className=" Gitbtn ">Github</Link>
                                    <Link className="Livebtn ">Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300">Photo by Sébastien Goldberg on Unsplash </small>
                            </div>
                        </div>
                    </div>

                    <div className="relative ">
                        <Link className='  '><img alt="" className="Photogallary  hover:shadow-4xl " src={Desktop} /> </Link>

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex-row text-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">Desktop.</h1>
                                <div className='flex gap-10'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300">Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>

                    <div className="relative ">
                        <img alt="" className="Photogallary" src={frame} />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex-row text-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">Desktop.</h1>
                                <div className='flex gap-10'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300">Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>


                    <div className="relative ">
                        <img alt="" className="Photogallary" src={landing} />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex-row text-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">Desktop.</h1>
                                <div className='flex gap-10'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300">Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>


                    <div className="relative ">
                        <img alt="" className="Photogallary" src={MacBook} />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex-row text-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">Desktop.</h1>
                                <div className='flex gap-10'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300">Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>


                    <div className="relative ">
                        <img alt="" className="Photogallary" src={obaydul} />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex-row text-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">Desktop.</h1>
                                <div className='flex gap-10'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300">Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>

                    <div className="relative ">
                        <img alt="" className="Photogallary" src={Amazon} />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex-row text-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">Desktop.</h1>
                                <div className='flex gap-10'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300">Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>

                    <div className="relative ">
                        <img alt="" className="Photogallary" src={categoies} />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex-row text-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">Desktop.</h1>
                                <div className='flex gap-10'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300">Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>

                    <div className="relative ">
                        <img alt="" className="Photogallary" src={oba} />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex-row text-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">Desktop.</h1>
                                <div className='flex gap-10'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300">Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>

                    <div className=' relative col-span-2 row-span-2 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square'>
                        <img src={Youtube} alt="" className="w-full h-full rounded-2xl shadow-sm min-h-96  " />

                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-80 bg-black">
                            <div className="flex-row text-center ">
                                <h1 className="text-gray-50 font-bold text-2xl">Desktop.</h1>
                                <div className='flex gap-10'>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Github</Link>
                                    <Link className="btn btn-outline text-gray-200 font-medium text-sm">Live</Link> <br />
                                </div>
                                <small className="text-xs font-light text-gray-300">Photo by Sébastien Goldberg on Unsplash</small>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


        </div>
    )
}

export default PhotoGallary