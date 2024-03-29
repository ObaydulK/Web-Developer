 
 
// i konw this imges link up other way so don't mind
import categoies from '../../../../Assist/Imges/categories.jpg'
import Desktop from '../../../../Assist/Imges/Desktop - 1.png'
import frame from '../../../../Assist/Imges/Frame 1.png'
import landing from '../../../../Assist/Imges/landing page 1.png'
import MacBook from '../../../../Assist/Imges/MacBook Pro - 8.png'
import oba from '../../../../Assist/Imges/oba.png'
import obaydul from '../../../../Assist/Imges/obaydul.png'
import Title from "../Title/Titles"

const PhotoGallary = () => {

    return (
        <div>
                 
            <div className=" mb-4 rounded-r-2xl rounded-l-3xl shadow-2xl">
                <Title subHeading="'Project Photo Gallery'" />
            </div>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src={categoies} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={Desktop} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={frame} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={landing} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={MacBook} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={oba} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={obaydul} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
                    <img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                </div>
            </section>


        </div>
    )
}

export default PhotoGallary