import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Hooks/useAuth';
import { Helmet } from 'react-helmet';
import { toast } from 'react-hot-toast';

const Classes = () => {
    const { user } = useAuth()
    const [currentUser, setCurrentUser] = useState({})
    const { data: allClasses = [], refetch } = useQuery({
        queryKey: ['all-classes'],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/approved-all-classes`)
            return response.data
        }
    })

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/current-user?email=${user?.email}`)
            .then(res => {
                setCurrentUser(res.data)
            })
    }, [])

    const handleSelect = (singleClass) => {
        if (!user) {
            toast.error('Without login you can not select class')
            return;
        }
        const selectedClass = { singleClass, studentEmail: user?.email, classId: singleClass._id }
        axios.post(`${import.meta.env.VITE_BASE_URL}/selected-class`, selectedClass)
            .then(res => {
                if (res.data.acknowledged) {
                    refetch()
                    toast.success('Class selected successfully')
                }
                // console.log(res.data)
            })
    }
    return (
        <>
            <Helmet>
                <title>MindFulness || All Classes</title>
            </Helmet>
            <div className='md:p-10 px-7 my-10 mx-auto w-11/12'>
                <p className='text-3xl font-bold mb-10 text-center'>All Classes</p>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5'>
                    {allClasses.map((classes) =>
                        <div key={classes._id} className={`card w-80 group glass ${classes.seats === 0 && 'bg-red-600'}`}>
                            <figure><img className='w-full h-80 group-hover:scale-110' src={classes.image} alt="car!" /></figure>
                            <div className="card-body">
                                <p className='font-semibold'>Class name: <span className='font-normal'>{classes.className}</span></p>
                                <p className='font-semibold'>Instructor Name: <span className='font-normal'>{classes.instructorName}</span></p>
                                <p className='font-semibold'>Available Seats: <span className='font-normal'>{classes.seats}</span></p>
                                <p className='font-semibold'>Price: <span className='font-normal'>${classes.price}</span></p>
                                <button disabled={classes.seats === 0 ? 'disabled' : currentUser.role === 'admin' || currentUser.role === 'instructor' ? 'disabled' : ''} onClick={() => handleSelect(classes)} className="btn btn-primary">Select</button>
                            </div>
                        </div>)}
                </div>
            </div>
        </>
    );
};

export default Classes;
