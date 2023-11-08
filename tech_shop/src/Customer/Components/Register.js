import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    
    const [username, setusername] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [repass, Repass] = useState("");
    const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("female");

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (username === null || username === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if (repass === null || repass === '') {
            isproceed = false;
            errormessage += ' Re-enter Password';
        } else if (password !== repass) {
            isproceed = false;
            errormessage = 'Password and Re-enter Password do not match';
        }


        if(!isproceed){
            alert(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                alert('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
            e.preventDefault();
            let user = { username, name, password, email, phone, repass, address, gender };
            if (IsValidate()) {
            //console.log(regobj);
            fetch("http://localhost:9999/users", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(user)
            }).then((res) => {
                alert('Registered successfully.')
                navigate('/login');
            }).catch((err) => {
                alert('Failed :' + err.message);
            });
        }
    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1 style={{textAlign: "center"}}>Đăng ký</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Tên đăng nhập<span style={{color: 'red'}} className="errmsg">(*):</span></label>
                                        <input value={username} onChange={e => setusername(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Mật khẩu <span style={{color: 'red'}} className="errmsg">(*):</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Nhập lại mật khẩu <span style={{color: 'red'}} className="errmsg">(*):</span></label>
                                        <input value={repass} onChange={e => Repass(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Tên đầy đủ <span style={{color: 'red'}} className="errmsg">(*):</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Giới tính <span style={{color: 'red'}} className="errmsg">(*):</span></label>
                                        
                                        <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                                        <label>Nam</label>
                                        <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
                                        <label>Nữ</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span style={{color: 'red'}} className="errmsg">(*):</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Số điện thoại <span style={{color: 'red'}} className="errmsg"></span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Địa chỉ <span style={{color: 'red'}} className="errmsg">(*):</span></label>
                                        <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>
                                

                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Đăng ký</button> |
                            <Link to={'/login'} className="btn btn-danger">Quay lại</Link>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Register;