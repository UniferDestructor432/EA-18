import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import MainLayout from '../components/MainLayout';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const Home: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [codigo, setCodigo] = useState('');
  const [present] = useIonToast();

  const guardarProductos = async (e: React.FormEvent) => {
    e.preventDefault(); // Evitar que el formulario recargue la página
    
    if(!nombre || !codigo){
      present('Por favor, complete los campos obligatorios');
      return;
    }

    try{
      await addDoc(collection(db, "productos"), {
        nombre,
        descripcion,
        categoria,
        cantidad,
        precio,
        codigo,
        fechaCreacion : new Date()
      }),

      present({
        message: 'producto creado con exito',
        duration: 2000,
        color: 'success'
      });

      // Limpiar formulario
      setNombre('');
      setCodigo('');
      setCantidad(0);
    }catch(error){
      console.error("Error al guardar");
      present("Error al guardar en la base de datos", 2000);
    }
  };

  return (
    <MainLayout title="Nuevo producto">
      <IonContent style={{'--background': 'black'}}>
        <div className='flex justify-center mt-9'>
          <div className='bg-[#181a1f] w-[550px] py-[20px] rounded-[2rem] shadow-xl border-gray-800'>
            <h2 className='text-white font-bold text-[20px] pl-[20px]'>Información del producto</h2>
            <form className='pt-4' onSubmit={guardarProductos}>
              <div className='flex flex-col pl-[20px] pr-[20px]'>
                <div className='flex flex-col py-2'>
                  <label className='text-white mb-1'>Nombre del producto</label>
                  <input value={nombre} onChange={(e) => {setNombre(e.target.value)}} placeholder='Ej. Manzanas' className='bg-[#2d3748] text-white placeholder:text-gray-500 border border-gray-600 rounded pl-2 py-2'/>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='text-white mb-1'>Descripción</label>
                  <input value={descripcion} onChange={(e) => {setDescripcion(e.target.value)}} placeholder='Breve descripción' className='bg-[#2d3748] text-white placeholder:text-gray-500 border border-gray-600 rounded pl-2 py-2'/>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='text-white mb-1'>Categoría</label>
                  <input placeholder='Ej. Frutas' value={categoria} onChange={(e) => {setCategoria(e.target.value)}} className='bg-[#2d3748] text-white placeholder:text-gray-500 border border-gray-600 rounded pl-2 py-2'/>
                </div>
                <div className='flex flex-row gap-4 justify-center'>
                  <div className='flex-1 flex flex-col'>
                    <label className='text-white mb-1'>Cantidad</label>
                    <input value={cantidad} onChange={(e) => {setCantidad(Number(e.target.value))}} className='bg-[#2d3748] text-white placeholder:text-gray-500 border border-gray-600 rounded pl-2 py-2'/>
                  </div>
                  <div className='flex-1 flex flex-col'>
                    <label className='text-white mb-1'>Precio</label>
                    <input value={precio} onChange={(e) => {setPrecio(Number(e.target.value))}} className='bg-[#2d3748] text-white placeholder:text-gray-500 border border-gray-600 rounded pl-2 py-2'/>
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='text-white mb-1'>Codigo</label>
                  <input value={codigo} onChange={(e) => {setCodigo(e.target.value)}} placeholder='Ej. PDG-001' className='bg-[#2d3748] text-white placeholder:text-gray-500 border border-gray-600 rounded pl-2 py-2'/>
                </div>
                <div className='flex flex-col'>
                  <button type='submit' className='bg-green-500 text-black px-4 py-2 rounded w-full my-4'>Crear producto</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </IonContent>
    </MainLayout>
  );
};

export default Home;
