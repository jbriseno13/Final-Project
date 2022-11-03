import {useState, useEffect} from "react"; 

const UserLogin = () => {
    const [users, setUsers] = useState([]);
    // const [user, setUser] = useState([]);

    // const [userInfo, setUserInfo] = useState({
    //     username: "",
    //     userphone: "",
    //     userimage: "",
    //     userlang:"",
    //   });
    
      const getUsers = async () => {
        const response = await fetch("http://localhost:8091/api/users");
        const data = await response.json();
        // console.log(data);
        setUsers(data);
      };
    
      useEffect(() => {
        getUsers();
      }, [users]);

    
}; 

export default UserLogin; 
   