import { PuffLoader } from "react-spinners";

const override = {
    display: "flex",
    margin: "0 auto",
    borderColor: "#E50915",
    textAlign: "center",
  };

export default function Loding(){
    return(
        <>
        <PuffLoader color="#36d7b7" cssOverride={override}/>
        </>
    )
}