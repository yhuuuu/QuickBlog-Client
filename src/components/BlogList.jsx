import React, { useState } from 'react'
import { blogCategories } from '../assets/assets'
import { motion } from "motion/react"

const BlogList = () => {

    const [menu, setMenu] = useState("All")

    return (
        <div>
            <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
                {blogCategories.map((item) => (
                    <div key={item} className='relative'>
                        <button onClick={() => {
                            //When a button is clicked, it triggers setMenu(item) to mark that item as selected
                            setMenu(item);
                            // console.log(item)
                        }}
                            //The button class changes if the button’s category matches the selected menu
                            className={`cursor-pointer text-gray-500 ${menu === item && 'text-white px-4 pt-0.5'}`}>
                            {item}

                            {/* If the button is selected (menu === item), a colored background bar (<div className='absolute...'>) appears behind it for emphasis */}
                            {/* Click → setMenu(newItem) → state changes → component re-renders → menu === item evaluates true only for clicked button → styles update dynamically. */}
                            {menu === item && (
                                <motion.div layoutId='underline'
                                transition={{type:'spring', stiffness:500, damping:30}}
                                className='absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full'></motion.div>
                            )}
                        </button>
                    </div>
                ))}
            </div>

            <div>
                {/* blog-card */}
            </div>
        </div>
    )
}

export default BlogList