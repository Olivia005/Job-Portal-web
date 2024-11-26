import { RadioGroupItem } from './ui/radio-group'
import { RadioGroup } from './ui/radio-group'
import React, { useEffect, useState } from 'react'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const filterData = [
    {
        filterType: "Location",
        array:["Delhi NCR" , "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        array:["Frontend Developer" , "Backend Developer", "Full Stack Developer", "Mobile App Developer",
        "UI/UX Designer", "Software Engineer", "Data Science", "Graphic Designer"
        ]
    },


]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();

    const changeHandler = (value) => {
        setSelectedValue(value);
    }
    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    },[selectedValue])

  return (
    <div className='w-full bg-gray-100 pl-8 pr-8 pb-6 pt-5 rounded-md border border-gray-400'>
        <h1 className='font-bold text-2xl'>Filter Jobs</h1>
        <hr className='mt-3 mb-3 border-t-1 border-gray-400'/>
        <RadioGroup value={selectedValue} onValueChange={changeHandler}>
            {
               filterData.map((data, index) => (
                <div>
                    <h1 className='font-bold text-lg'>{data.filterType}</h1>
                    
                    {
                        data.array.map((item, idx) => {
                            const itemId = `r${index}-${idx}`
                            return (
                                <div className='flex items-center space-x-2 my-3'>
                                    <RadioGroupItem value={item} id={itemId}/>
                                    <Label htmlFor={itemId} >{item}</Label>

                                </div>
                            )
                        })
                    }
                    
                </div>
               )) 
            }
        </RadioGroup>
    </div>
  )
}

export default FilterCard