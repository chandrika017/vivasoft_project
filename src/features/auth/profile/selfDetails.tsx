import { useSelector } from "react-redux";
const SelfDetails = () => {
  const auth = useSelector((state:any) => state?.auth);
  return (
    <div>
       <ul>
         <li>ID: {auth?.user?.id }</li>
         <li>Username: {auth?.user?.username}</li>
         <li>Email: {auth?.user?.email}</li>
       </ul>
    </div>
  )
}

export default SelfDetails
