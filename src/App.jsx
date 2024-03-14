import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  apiKey: "AIzaSyCY5hpvppUydieBM0etzCFJc0a3IGbwM4I",
  authDomain: "campanha-heineken-sao-day.firebaseapp.com",
  projectId: "campanha-heineken-sao-day",
  storageBucket: "campanha-heineken-sao-day.appspot.com",
  messagingSenderId: "453412194371",
  appId: "1:453412194371:web:450fc10c78acd72fdeecf6",
  measurementId: "G-8D02KE9P8E",
});

/* eslint-disable no-undef */

function App() {
  const [descarte, setDescarte] = useState("");
  const [palpite, setPalpite] = useState("");
  const [telefone, setTelefone] = useState("");
  const [descartes, setDescartes] = useState([]);

  const db = getFirestore(firebaseApp);
  const descartesCollectionRef = collection(db, "descarte");

  async function createDescarte() {
    const dataDescarteObj = new Date(); // Obtém a data atual
    try {
      await addDoc(descartesCollectionRef, {
        data: dataDescarteObj, // Corrigido para data
        descarte: Number(descarte),
        palpite: Number(palpite),
        telefone: Number(telefone),
      });
      console.log("Dados do descarte salvos com sucesso!");

      // Atualiza o estado descartes para refletir a adição do novo descarte
      setDescartes((prevDescartes) => [
        ...prevDescartes,
        {
          data: dataDescarteObj,
          descarte: Number(descarte),
          palpite: Number(palpite),
          telefone: Number(telefone),
        },
      ]);

      // Limpa os campos após o envio do descarte
      setDescarte("");
      setPalpite("");
      setTelefone("");
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
      setDescartes((prevDescartes) =>
        prevDescartes.filter((descarte) => descarte.id !== id)
      );
      console.log("Descarte excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir descarte: ", error);
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
                  id="descarte"
                  name="descarte"
                  placeholder="Insira a quantidade de garrafas que você descartou"
                  value={descarte}
                  onChange={(e) => setDescarte(e.target.value)}
                  className="block flex-1 border-0 bg-transparent py-2 pl-1 placeholder:text-cinza-100 focus:ring-0 sm:text-sm sm:leading-6"
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
                  id="telefone"
                  name="telefone"
                  placeholder="Insira seu número de telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="block flex-1 border-0 bg-transparent py-2 pl-1 placeholder:text-cinza-100 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </label>
          </div>

          <div className="mb-4">
            <label
              htmlFor="palpite"
              className="block text-sm font-medium leading-6"
            >
              Palpite:
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-azul-100 sm:max-w-md">
                <input
                  type="number"
                  id="palpite"
                  name="palpite"
                  placeholder="Quantas garrafas você imagina que foram descartadas nesta semana?"
                  value={palpite}
                  onChange={(e) => setPalpite(e.target.value)}
                  className="block flex-1 border-0 bg-transparent py-2 pl-1 placeholder:text-cinza-100 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </label>
          </div>

          <button
            onClick={createDescarte}
            className="border-none bg-verde-100 text-branco-100 rounded-md"
          >
            Registrar Descarte
          </button>

          <ul>
            {descartes.map((descarte) => (
              <li key={descarte.id}>
                <p>
                  Data do Descarte:{" "}
                  {new Date(descarte.data.seconds * 1000).toLocaleDateString()}
                </p>
                <p>Descarte: {descarte.descarte}</p>
                <p>Palpite: {descarte.palpite}</p>
                <p>Telefone: {descarte.telefone}</p>
                <button onClick={() => deleteDescarte(descarte.id)}>
                  Deletar
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
