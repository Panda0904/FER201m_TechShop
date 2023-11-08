import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');
    const [user,setUser]=useState([])
    const navigate=useNavigate();

    useEffect(()=>{
        fetch("http://localhost:9999/users")
        .then((res)=>res.json())
        .then((data)=>setUser(data))
    },[]);

    const ProceedLogin = (e) => {
        e.preventDefault();
        let indexUser=user.findIndex(
            (user)=>user.username==username&&user.password==password
        )
        if(indexUser===-1){
            alert("user or password not found")
        }else{
            sessionStorage.setItem("user",JSON.stringify(user[indexUser]))
            navigate("/");
        }
            
    }

    
    
    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>Đăng nhập</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Tên đăng nhập <span className="errmsg">*</span></label>
                                <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Mật khẩu <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button> |
                            <Link className="btn btn-success" to={'/register'}>New User</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;