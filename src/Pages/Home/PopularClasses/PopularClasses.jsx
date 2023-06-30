import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { Bounce, Fade, Zoom } from 'react-awesome-reveal';
import { toast } from 'react-hot-toast';

const PopularClasses = () => {
    const {user} = useAuth()
    const [classData, setClassData] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/popular-classes`)
            .then(res => setClassData(res.data))
    }, [])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BASE_URL}/current-user?email=${user?.email}`)
        .then(res => {
            setCurrentUser(res.data)
        })
    },[])

    const handleSelect = (singleClass) => {
        if(!user){
            toast.error('Without login you can not select class')
            return;
        } 
         if (currentUser.role === 'admin') {
            toast.error('As an admin you can not select any class')
            return;
        } 
        if(currentUser.role === 'instructor'){
            toast.error('As an instructor you can not select any class')
            return;
        }
        const selectedClass = { singleClass, studentEmail: user?.email, classId: singleClass._id }
        axios.post(`${import.meta.env.VITE_BASE_URL}/selected-class`, selectedClass)
            .then(res => {
                if (res.data.acknowledged) {
                    toast.success('Class selected successfully')
                }
                // console.log(res.data)
            })
    }
    // console.log(classData)

    return (
        <div className='md:p-10 px-7 my-10 mx-auto w-11/12'>
            <p className='text-5xl font-bold mb-10 text-center uppercase'>Popular Classes</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5'>
                {classData.slice(0,6).map((classes) =>
                <Zoom>
                    <div key={classes._id} className={`card w-80 group glass ${classes.seats === 0 && 'bg-red-600'}`}>
                        <figure><img className='w-80 h-80 group-hover:scale-110' src={classes.image} alt="car!" /></figure>
                        <div className="card-body">
                            <p className='font-semibold'>Class name: <span className='font-normal'>{classes.className}</span></p>
                            <p className='font-semibold'>Instructor Name: <span className='font-normal'>{classes.instructorName}</span></p>
                            <p className='font-semibold'>Available Seats: <span className='font-normal'>{classes.seats}</span></p>
                            <p className='font-semibold'>Enrolled Students: <span className='font-normal'>{classes?.enrolledStudents}</span></p>
                            <p className='font-semibold'>Price: <span className='font-normal'>${classes.price}</span></p>
                            <button onClick={()=>handleSelect(classes)} className="btn btn-primary">Select</button>
                        </div>
                    </div>
                </Zoom>
                    
                    )
                    }
            </div>
        </div>
    );
};

export default PopularClasses;
