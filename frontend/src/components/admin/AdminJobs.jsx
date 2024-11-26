import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchJobByText } from '@/redux/jobSlice'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import AdminJobsTable from './AdminJobsTable'

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setSearchJobByText(input))
    },[input]);

  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto my-10 '>
        <div className='flex items-center justify-between my-5'>
          <Input className='w-fit' placeholder='Filter Jobs by name & role'
          onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/jobs/create") } className='bg-[#6A38C2]  hover:bg-[#461e8b]' >New Jobs</Button>
        </div>
        <AdminJobsTable/>
      </div>
    </div>
  )
}

export default AdminJobs
