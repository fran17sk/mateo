import { db } from "./Firebase"
import { collection,getDocs,getDoc,query,serverTimestamp,addDoc} from "firebase/firestore"
import { useState } from "react"
import { useEffect } from "react"
import { Register } from "./Register"
import { Loader } from "./Loader"

const Body = () => {
    const [ultima_leche,setultima_leche] = useState([])
    const [loading,setloading] = useState(true)
    const [Hora,setHora] = useState('')
    const [HoraSig,setHoraSig] = useState('')

    useEffect( () => {
        const leche_colections = collection(db,'leches')
        const consulta = getDocs(leche_colections)
        consulta
            .then(snapshot=>{
                const listLeches=snapshot.docs.map(doc=>{
                return {
                    ...doc.data(),
                    cod:doc.id
                }
                
            })
            setloading(false)
            setultima_leche(listLeches.sort( (a, b) => {
                if(a.hora.toDate() < b.hora.toDate()) {
                    return 1;
                }
                if(a.hora.toDate() > b.hora.toDate()) {
                    return -1;
                }}))
                let date = ultima_leche[0].hora.toDate() // convierte a un objeto Date de JS
                // Hours part from the timestamp
                let hours = date.getHours()
                let minutes = date.getMinutes()<10 ? "0" + date.getMinutes() : date.getMinutes()
                
                let fecha = hours + ":" + minutes
                let fechasig = hours+3 + ":" + minutes
                setTimeout(()=>{

                    setHora(fecha)
                    setHoraSig(fechasig)
                },1000)
        })
        .catch(err=>{
            console.log(err)
        })
        }
        ,[])

    return (
        <div>{
            loading ? <Loader/>: <div className="data">
            <h2 className="text">ULTIMA LECHE: {Hora}</h2>
            <h2 className="text">SIGUIENTE: {HoraSig}</h2>

            </div> 
            }
            
        </div>
    )
}

export {Body}