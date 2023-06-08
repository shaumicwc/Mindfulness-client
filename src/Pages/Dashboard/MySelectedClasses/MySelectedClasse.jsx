import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const MySelectedClasses = () => {
    const {user, loading} = useAuth()
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selected-classes'],
        enabled: !loading,
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/selected-classes?email=${user?.email}`)
            return response.data
        }
    })
    // console.log(selectedClasses)
    const handleDelete = (id) =>{
        axios.delete(`${import.meta.env.VITE_BASE_URL}/selected-classes/${id}`)
        .then(res =>{
            if (res.data.deletedCount > 0) {
                refetch()
                Swal.fire({
                    icon: 'success',
                    text: 'Class deleted successfully',
                  })
            }
            console.log(res.data)
        })
    }
    return (
        <div className='w-11/12 py-10 px-5 bg-base-300 shadow-2xl my-10'>
        <p className='text-3xl font-bold my-5 text-center'>My Selected Classes : {selectedClasses.length}</p>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className='bg-slate-600 text-white'>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Instructor Name</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedClasses.map((classes, index) =>
                        <tr key={classes._id} className='hover'>
                            <th>{index + 1}</th>
                            <td><img className='w-20' src={classes.singleClass.image} alt="" /></td>
                            <td>{classes.singleClass.className}</td>
                            <td>{classes.singleClass.instructorName}</td>
                            <td>{classes.singleClass.seats}</td>
                            <td>{classes.singleClass.price}</td>
                            <td className='flex justify-between'><button onClick={()=>handleDelete(classes._id)} className='btn btn-error'>Delete</button><button className='btn btn-success'>pay</button></td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MySelectedClasses;