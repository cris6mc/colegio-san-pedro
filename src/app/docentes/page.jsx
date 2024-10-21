"use client";
import CardProfile from '@/components/CardProfile';
import Dropdown from '@/components/Dropdown';
import { React, useEffect, useState } from "react";
import { db } from "@/lib/firebase"; // Adjust the import according to your firebase configuration
import { collection, getDocs } from "firebase/firestore";

function PageDocentes() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            const querySnapshot = await getDocs(collection(db, "usuarios"));
            const usuariosList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUsuarios(usuariosList);
        };

        fetchUsuarios();
    }, []);

    return (
        <div>
            <div className='py-8 mx-10 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
                <h1 className="text-5xl font-bold text-center text-white">PLANILLA DOCENTE</h1>
            </div>

            <div className=' flex flex-col m-10 justify-center items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
                <h1 className='text-2xl m-5 max-w-lg  text-center mt-16 mb-16'>
                    Contamos con personal altamente calificado y comprometido con la excelencia educativa. Cada miembro de nuestro cuerpo docente aporta una vasta experiencia en su campo, asegurando una formación integral y de calidad para nuestros estudiantes
                </h1>

            </div>
            {/* 4 secciones */}
            <div className='flex flex-col gap-8'>
                {/* Personal Administrativo */}
                <div className='flex flex-col center gap-4'>
                    <div className="bg-transparent border-blue-500 border rounded-lg px-1 py-1 mx-10 text-black">
                        <h1 className='font-bold text-2xl flex justify-center'>
                            Personal Administrativo
                        </h1>
                    </div>

                    <div className="grid grid-cols-3 grid-rows-2 gap-4 mx-10 py-2 px-2 border rounded-lg" >
                        <div className="col-start-2 row-start-1">
                            <CardProfile
                                nombre={'ASTETE LOPEZ, KIKO GIL'}
                                image={''}
                                cargo={'DIRECTOR'}
                                telefono={"+51 964 663 724"}
                                email={'kikoasteteamoperu@gmail.com'}
                            />
                        </div>
                        <div className="col-start-1 row-start-2">
                            <CardProfile
                                nombre={'canales ricapa, marlene'}
                                image={''}
                                cargo={'secretaria'}
                                telefono={"+51 950 262 468"}
                                email={'mrcanales10@gmail.com'}
                            />
                        </div>
                        <div className="col-start-2 row-start-2">
                            <CardProfile
                                nombre={'manhualaya huaman, dora'}
                                image={''}
                                cargo={'personal de servicio'}
                                telefono={"+51 925 494 402"}
                                email={'kikoasteteamoperu@gmail.com'}
                            />
                        </div>
                        <div className="col-start-3 row-start-2">
                            <CardProfile
                                nombre={'cerron espinoza, daniel e.'}
                                image={''}
                                cargo={'personal de servicio'}
                                telefono={"+51 964 663 724"}
                                email={'kikoasteteamoperu@gmail.com'}
                            />
                        </div>
                    </div>
                </div>
                {/* Aula de Innovación */}
                <div className='flex flex-col center gap-4'>
                    <div className="bg-transparent border-blue-500 border rounded-lg px-1 py-1 mx-10 text-black">
                        <h1 className='font-bold text-2xl flex justify-center'>
                            Aula de Innovación
                        </h1>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-1 gap-4 mx-10 py-2 px-2 border rounded-lg" >
                        <div className="col-start-1 row-start-1">
                            <CardProfile
                                nombre={'cristobal guillen, raquel kelly'}
                                image={''}
                                cargo={'personal de aip'}
                                telefono={"+51 959 840 030"}
                                email={'julinkel15@gmail.com'}
                            />
                        </div>
                        <div className="col-start-2 row-start-1">
                            <CardProfile
                                nombre={'SAMANIEGO ALVARADO, EDILBERTO'}
                                image={''}
                                cargo={'PERSONAL DE AIP'}
                                telefono={"+51 927 245 691"}
                                email={'alvaradosama72@gmail.com'}
                            />
                        </div>
                    </div>
                </div>
                {/* Educación Fisica */}
                <div className='flex flex-col center gap-4'>
                    <div className="bg-transparent border-blue-500 border rounded-lg px-1 py-1 mx-10 text-black">
                        <h1 className='font-bold text-2xl flex justify-center'>
                            Educación Fisica
                        </h1>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-1 gap-4 mx-10 py-2 px-2 border rounded-lg" >
                        <div className="col-start-1 row-start-1">
                            <CardProfile
                                nombre={'CASTRO LIZARRAGA, MARÍA DEL MILAGRO'}
                                image={''}
                                cargo={'DOCENTE - ED. FÍSICA'}
                                telefono={"+51 916 734 210"}
                                email={'maritadelmil01@gmail.com'}
                            />
                        </div>
                        <div className="col-start-2 row-start-1">
                            <CardProfile
                                nombre={'ROJAS ZURICHAQUI, HEVER'}
                                image={''}
                                cargo={'DOCENTE - ED. FÍSICA'}
                                telefono={"+51 954 008 225"}
                                email={'zurrohe@gmail.com'}
                            />
                        </div>
                        <div className="col-start-3 row-start-1">
                            <CardProfile
                                nombre={'ZENTENO ORIHUELA, OSCAR'}
                                image={''}
                                cargo={'DOCENTE - ED. FÍSICA'}
                                telefono={"+51 978 812 617"}
                                email={'osquitar251@gmail.com'}
                            />
                        </div>

                    </div>
                </div>
                {/* Niveles Inicial y Primaria */}
                <div className='flex flex-col center gap-4'>
                    <div className="bg-transparent border-blue-500 border rounded-lg px-1 py-1 mx-10 text-black">
                        <h1 className='font-bold text-2xl flex justify-center'>
                            Niveles Inicial y Primaria
                        </h1>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-9 gap-4 mx-10 py-2 px-2 border rounded-lg" >
                        <div className="">
                            <CardProfile
                                nombre={'CONDORI HANCCO, LIBIA'}
                                image={''}
                                cargo={'DOCENTE - 4° CLAVELITOS'}
                                telefono={"+51 930 337 522"}
                                email={'libiacondori@gmail.com'}
                            />
                        </div>
                        <div className="">
                            <CardProfile
                                nombre={'PACHECO PALACIOS, LUZ HERMINIA'}
                                image={''}
                                cargo={'DOCENTE - 4° LIRIOS'}
                                telefono={"+51 964 111 075"}
                                email={'pachecopalaciosluz@gmail.com'}
                            />
                        </div>
                        <div className="">
                            <CardProfile
                                nombre={'PAREDES PIZARRO, PAMELA'}
                                image={''}
                                cargo={'DOCENTE - 5° AZUCENAS'}
                                telefono={"+51 974 834 054"}
                                email={'pamelaparedespizarro1995@gmail.com'}
                            />
                        </div>
                        <div className="">
                            <CardProfile
                                nombre={'CHUMBIMUNI ANGOMA, GABRIELA'}
                                image={''}
                                cargo={'DOCENTE - 5° GIRASOLES'}
                                telefono={"+51 931 788 320"}
                                email={'yhr2075@gmail.com'}
                            />
                        </div>
                        <div className="">
                            <CardProfile
                                nombre={'HURTADO ROJAS, YOVANA'}
                                image={''}
                                cargo={'AUXILIAR'}
                                telefono={"+51 964 802 980"}
                                email={'gaby861992@gmail.com'}
                            />
                        </div>
                        {/* Primaria */}
                        <div className="">
                            <CardProfile
                                nombre={'VILCHEZ HUAMAN, BERNABÉ'}
                                image={''}
                                cargo={'DOCENTE - 1° A'}
                                telefono={'+51 910 830 539'}
                                email={'bernabe.vilchez10@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'ESPINOZA VALENCIA, CECILIA NELLY'}
                                image={''}
                                cargo={'DOCENTE - 1° B'}
                                telefono={'+51 943 829 131'}
                                email={'cecilanellyespinoza12@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'SANTANA ALIAGA, ALICIA'}
                                image={''}
                                cargo={'DOCENTE - 1° C'}
                                telefono={'+51 985 680 011'}
                                email={'peruedu.alicia25@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'ROJAS VILCHEZ, REBECA'}
                                image={''}
                                cargo={'DOCENTE - 2° A'}
                                telefono={'+51 994 897 975'}
                                email={'rebeca.ro22@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'PEREZ JORGE, KARINA'}
                                image={''}
                                cargo={'DOCENTE - 2° B'}
                                telefono={'+51 964 403 374'}
                                email={'karjp07@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'GAVINO DE LA CRUZ, REBECA'}
                                image={''}
                                cargo={'DOCENTE - 2° C'}
                                telefono={'+51 904 026 099'}
                                email={'rebecagv12@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'LAGOS ORELLANA, MARGOT'}
                                image={''}
                                cargo={'DOCENTE - 3° A'}
                                telefono={'+51 988 048 068'}
                                email={'margotlore78@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'ORE CUSIPOMA, MARGOTH'}
                                image={''}
                                cargo={'DOCENTE - 3° B'}
                                telefono={'+51 938 218 003'}
                                email={'morecusipoma@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'VICENTE QUITO, HIDA LISBET'}
                                image={''}
                                cargo={'DOCENTE - 3° C'}
                                telefono={'+51 967 982 065'}
                                email={'lisbetvicentequito@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'ORDOÑEZ ARMAS, LEOVETA'}
                                image={''}
                                cargo={'DOCENTE - 4° A'}
                                telefono={'+51 923 612 415'}
                                email={'leovetaarmas1976@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'SALINAS GARCIA, SILVIO TEODOSIO'}
                                image={''}
                                cargo={'DOCENTE - 4° B'}
                                telefono={'+51 932 043 636'}
                                email={'salinagarsilvio@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'HUANAY CHICMANA, TERESA GLADYS'}
                                image={''}
                                cargo={'DOCENTE - 4° C'}
                                telefono={'+51 959 836 197'}
                                email={'teresahuanychicmana@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'PAUCAR SOCUALAYA, ROSA ESTRELLA'}
                                image={''}
                                cargo={'DOCENTE - 5° A'}
                                telefono={'+51 970 976 952'}
                                email={'rosaestrella.paucarsocualaya@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'LIZANO CERRÓN, HILDA'}
                                image={''}
                                cargo={'DOCENTE - 5° B'}
                                telefono={'+51 980 442 300'}
                                email={'hilda2019@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'MAYTA CARHUAIRCRA, MARTHA'}
                                image={''}
                                cargo={'DOCENTE - 5° C'}
                                telefono={'+51 985 398 208'}
                                email={'maytc891982@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'SALOMÉ VICHAUHAMÁN, EIDI'}
                                image={''}
                                cargo={'DOCENTE - 6° A'}
                                telefono={'+51 999 829 512'}
                                email={'eyidino@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'MALPARTIDA VEGA, EDER DAVID'}
                                image={''}
                                cargo={'DOCENTE - 6° B'}
                                telefono={'+51 973 178 758'}
                                email={'vegadve420@gmail.com'}
                            />
                        </div>

                        <div className="">
                            <CardProfile
                                nombre={'ARCOS GALVÁN, SAÚL'}
                                image={''}
                                cargo={'DOCENTE - 6° C'}
                                telefono={'+51 959 827 943'}
                                email={'rccs76@hotmail.com'}
                            />
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageDocentes