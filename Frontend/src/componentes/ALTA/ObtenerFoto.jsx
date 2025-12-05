import './ObtenerFoto.css'
import { enviarArchivoImagen } from '../../servicios/upload'
import { useEffect, useState } from 'react'

export function ObtenerFoto({ escribirCampoFoto, resetFoto }) {


    const [porcentaje, setPorcentaje] = useState(0)
    const [urlFoto, setUrlFoto] = useState('')

    useEffect(() => {
        if (resetFoto) {
            setPorcentaje(0)
            setUrlFoto('')
            escribirCampoFoto('')  
        }
    }, [resetFoto])

    const enviarFoto = archivo => {

        if (archivo.type.includes('image/')) {
            const formdata = new FormData()
            formdata.append('archivo', archivo)
            enviarArchivoImagen(formdata, porcentaje => {
                setPorcentaje(porcentaje)
            }, urlFoto => {
                setUrlFoto(urlFoto)
                if(typeof escribirCampoFoto == 'function') escribirCampoFoto(urlFoto)
            })
        }
        else console.error('El archivo elegido no corresponde a una imágen')
    }

    const dragEnter = e => {
        e.preventDefault()
    }

    const dragLeave = e => {
        e.preventDefault()
    }

    const dragOver = e => {
        e.preventDefault()
    }

    const drop = e => {
        e.preventDefault()
        const archivo = e.dataTransfer.files[0]
        enviarFoto(archivo)
    }

    const change = e => {
        const archivo = e.target.files[0]
        enviarFoto(archivo)
    }

    return (
        <div className="ObtenerFoto">
            <input type="file" id="archivo" onChange={change} />
            <div
                id="drop"
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDragOver={dragOver}
                onDrop={drop}
            >
                {porcentaje > 0 && <><progress max="100" value={porcentaje}></progress> <span>{porcentaje}%</span></>}
                <label htmlFor="archivo">
                    {porcentaje > 0
                        ? ( urlFoto? <img src={urlFoto} alt="foto del producto" /> : <></>)
                        : 'D&D or Click'
                    }
                </label>
            </div>
        </div>
    )
}