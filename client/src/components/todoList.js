import { useEffect, useState } from 'react';
import DatasTable from './dataTable';
import axios from 'axios';
import qs from 'qs';




export default function TodoList() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        age: '',

    })
    useEffect(() => {
        getUsers().then(res => {

        })
    }, []);
    const getUsers = async () => {
        try {

            const response = await axios.get(`http://127.0.0.1:3000/user`)
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (event) => {

        try {
            event.preventDefault();
            if (formData._id) {
                const response = await axios.put(`http://127.0.0.1:3000/user/${formData._id}`, formData)
            } else {
                delete formData._id
                const response = await axios.post(`http://127.0.0.1:3000/user`, formData)
            }
            setFormData({
                _id: '',
                firstName: '',
                lastName: '',
                email: '',
                age: '',

            })
            await getUsers()
        } catch (error) {
            console.log(error)
        }
    }
    const handleEdit = (data) => {

        setFormData(data)
    }

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:3000/user/${id}`)
            await getUsers()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div >
            <DatasTable users={users} setFormData={setFormData} formData={formData} handleSubmit={handleSubmit} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
    );
}