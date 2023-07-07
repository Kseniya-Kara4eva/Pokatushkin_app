import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import logo from "../images/logo.png";
import { useDispatch, useSelector } from 'react-redux';
import Axios from '../axios';
import { login, removeUserData } from '../redux/userSlice/slice';

const Header = () => {
  const state = useSelector(state => state.user);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if(!state.data && token){
      Axios("/auth/", {
        method: "get",
        headers: {
          AUTHORIZATION: "Bearer " + localStorage.getItem("token"),
        }
      }).then(({data}) => {
        dispatch(login(data.data))
      }).catch(e => {
      })
    }
  }, [])

  return (
      <header className="header">

          <div>
            <Link to="#">
                          <img className="header_logo" src={logo} sizes="40px" alt="logo" />
                      </Link>
          </div>
          
          <div className="theft">
              <Link to="/reports/create" className="btn ">Сообщить о краже</Link>

              { state.status !== "null" ? <>
                <Link to="/officers" className="btn ">Ответственные сотрудники</Link>
                <Link to="/reports/" className="btn ">Сообщения о кражах</Link>
              </> : null}
          </div>

          {
            state.data === null ? <>
              <div className="nav_btn">
                <Link to="/auth">
                  <button className="btn">ВОЙТИ</button>
                </Link>
                <Link to="/signup">
                  <button className="btn">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                </Link>
            </div>
            </> : <>
              <div>
                
                <span style={{
                  marginRight: "20px",
                  fontSize: "1.5rem",
                  fontWeight: "600"
                }}>{`${state.data.user.firstName}`}</span>
                <button onClick={() => {
                  dispatch(removeUserData());
                  localStorage.removeItem("token");
                }} className="btn">ВЫЙТИ</button>
              </div>
            </>
          }
          
      </header>
  )
}

export default Header