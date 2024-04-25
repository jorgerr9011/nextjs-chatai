'use client'

import Loading from '@/components/loading'
import Incidence from '@/models/Incidence'
import Incidencia from '@/components/incidence'
import React, { useEffect, useState } from 'react'
import { fetchIncidences } from './fetchIncidences'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { ObjectId } from 'mongoose'
import User from '@/models/User'

interface Usuario {
    _id: ObjectId; // Specify the _id property type
    email: string;
    password: string;
    username: string;
    open_incidences_count: number;
    completed_incidences_count: number;
}

export default function Myincidence() {

    const router = useRouter()
    const { isLoading, listIncidences } = fetchIncidences()
    const [listaFiltrada, setListaFiltrada] = useState(listIncidences)
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState('')

    const handleDelete = async () => {
        if (window.confirm("¿Estas seguro de querer borrar esta incidencia?")) {
            const res = await fetch('/api/incidence', {
                method: "DELETE",
            });

            if (res.status === 200) {

                router.push('/')
                router.refresh()
            }
        }
    }

    const nextPage = () => {
        if (search.length != 0 && listaFiltrada.length > currentPage + 5) {
            setCurrentPage(currentPage + 5)
        } else if (listIncidences.length > currentPage + 5) {
            setCurrentPage(currentPage + 5)
        }
    }

    const previousPage = () => {
        if (currentPage > 0)
            setCurrentPage(currentPage - 5)
    }

    const filteredIncidences = (): typeof Incidence[] => {
        if (search.length === 0) {
            return listIncidences.slice(currentPage, currentPage + 5)
        }

        const filter = listIncidences.filter((inci: typeof Incidence) => inci.name.includes(search))
        setListaFiltrada(filter.slice(currentPage, currentPage + 5))

        return listaFiltrada
    }

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPage(0)
        setSearch(event.target.value)
    }

    return (
        <div className="grid grid-cols-1">
            {isLoading == false ? (
                <div className="container mx-auto">
                    <input
                        type="text"
                        className="mb-5 form-control rounded-md text-black flex-grow w-5/12 border border-gray-400 focus:border-red-400"
                        placeholder='Búsqueda de incidencia'
                        value={search}
                        onChange={onSearchChange} /><table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-2 px-4 text-left">Nombre</th>
                                <th className="py-2 px-4 text-left">Descripción</th>
                                <th className="py-2 px-4 text-left">Estado</th>
                                <th className="py-2 px-4 text-left">Fecha creación</th>
                                <th className="py-2 px-4 text-left">OPEN Incidences</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredIncidences().map((item: any) => (
                                <Incidencia key={item._id} incidencia={item}/>
                            ))}
                        </tbody>

                    </table>

                    <button onClick={previousPage} className="button button-primary rounded-xl m-4 bg-slate-500">Anterior</button>
                    <label> {currentPage} </label>
                    <button onClick={nextPage} className="button button-primary rounded-xl m-4 bg-slate-500">Siguiente</button>

                    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Eliminar</button>

                </div>
            ) : (
                <Loading />
            )
            }
        </div >
    )
}