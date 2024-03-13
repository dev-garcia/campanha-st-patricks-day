import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC6PUs8NCqmSVRrWaRO3-vhN6tbkySQ2OQ",
  authDomain: "evento-heineken-sao-day.firebaseapp.com",
  databaseURL: "https://evento-heineken-sao-day-default-rtdb.firebaseio.com",
  projectId: "evento-heineken-sao-day",
});

/* eslint-disable no-undef */

function App() {
  const [dataDescarte, setDataDescarte] = useState("");
  const [descarte, setDescarte] = useState("");
  const [palpite, setPalpite] = useState("");
  const [telefone, setTelefone] = useState("");
  const [descartes, setDescartes] = useState([]);

  const db = getFirestore(firebaseApp);
  const descartesCollectionRef = collection(db, "descarte");

  async function createDescarte() {
    try {
      await addDoc(descartesCollectionRef, {
        "data-descarte": new Date(dataDescarte),
        descarte: Number(descarte),
        palpite: Number(palpite),
        telefone: Number(telefone),
      });

      console.log("Dados do descarte salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar documento: ", error);
    }
  }

  useEffect(() => {
    const fetchDescartes = async () => {
      const querySnapshot = await getDocs(descartesCollectionRef);
      const fetchedDescartes = [];
      querySnapshot.forEach((doc) => {
        fetchedDescartes.push({ id: doc.id, ...doc.data() });
      });
      setDescartes(fetchedDescartes);
    };
    fetchDescartes();
  }, [descartesCollectionRef]);

  async function deleteDescarte(id) {
    try {
      await deleteDoc(doc(db, "descarte", id));
      console.log("Descarte excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir descarte: ", error);
    }
  }

  async function updateDescarte(id, newData) {
    try {
      const descarteRef = doc(db, "descarte", id);
      await updateDoc(descarteRef, newData);
      console.log("Descarte atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar descarte: ", error);
    }
  }

  return (
    <>
      <Header />

      <main className="mt-32">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Descarte suas garrafas aqui
        </h1>
        <div>
          <div className="mb-4">
            <label
              htmlFor="descarte"
              className="block text-sm font-medium leading-6"
            >
              Descarte:
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-azul-100 sm:max-w-md">
                <input
                  type="number"
                  placeholder="Descarte"
                  value={descarte}
                  onChange={(e) => setDescarte(e.target.value)}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-cinza-100 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </label>
          </div>

          <div className="mb-4">
            <label
              htmlFor="telefone"
              className="block text-sm font-medium leading-6"
            >
              Telefone:
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-azul-100 sm:max-w-md">
                <input
                  type="number"
                  placeholder="Telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-cinza-100 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </label>
          </div>

          <div className="mb-4">
            <label
              htmlFor="palpite"
              className="block text-sm font-medium leading-6"
            >
              Palplite:
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-azul-100 sm:max-w-md">
                <input
                  type="number"
                  placeholder="Palpite"
                  value={palpite}
                  onChange={(e) => setPalpite(e.target.value)}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-cinza-100 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </label>
          </div>

          <div className="mb-4">
            <input
              type="date"
              placeholder="Data do descarte"
              value={dataDescarte}
              onChange={(e) => setDataDescarte(e.target.value)}
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-cinza-100 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
          <button onClick={createDescarte}>Registrar Descarte</button>

          <ul>
            {descartes.map((descarte) => (
              <li key={descarte.id}>
                <p>
                  Data do Descarte:{" "}
                  {new Date(descarte["data-descarte"]).toLocaleDateString()}
                </p>
                <p>Descarte: {descarte.descarte}</p>
                <p>Palpite: {descarte.palpite}</p>
                <p>Telefone: {descarte.telefone}</p>
                <button onClick={() => deleteDescarte(descarte.id)}>
                  Deletar
                </button>
                <button
                  onClick={() => updateDescarte(descarte.id, { descarte: 10 })}
                >
                  Atualizar Descarte
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
