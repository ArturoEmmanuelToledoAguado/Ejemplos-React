import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState,setFormSate] = useState({
        username:'r2',
        email:'t@google.com'
    });

    const {username,email} = formState;

    const onInputChange = ({target}) => {
        const {name,value} = target;
        setFormSate({
            ...formState,
            [name]:value
        });
    }

    useEffect(() => {
        console.log('useEffect called!');
    });

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr/>
        
        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="r2@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
    </>
  )
}
