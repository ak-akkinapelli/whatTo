"use client";
import { useEffect, useState } from "react";
import NewItemModal from "./components/newItem";
export default function Home() {
  const optionsArray = ["Read", "Watch", "Eat", "Buy", "Lift", "Do", "Go"];
  const [randomNumber, setRandomNumber] = useState<number>(0);
  useEffect(() => {
    const index = Math.floor(Math.random() * 7);
    setRandomNumber(index);
  }, []);
  const [showNewCardModal, setShowNewCardModal] = useState<boolean>(false);
  const cards: any = [
    { title: "title1", description: "lorem ipsum" },
    { title: "title2", description: "lorem ipsum" },
    { title: "title3", description: "lorem ipsum" },
    { title: "title4", description: "lorem ipsum" },
  ];

  const getTask = () => {
    if (optionsArray[randomNumber] === "Go") {
      return `Where to ${optionsArray[randomNumber]}`;
    } else return `What to ${optionsArray[randomNumber]}`;
  };
  const handleCards = () => {
    return cards?.map((item: any, index: number) => {
      return (
        <div
          className="border border-black w-60 h-40"
          key={`${item.title}-${index}`}
        >
          <h3>{item?.title}</h3>
          <p>{item.description}</p>
        </div>
      );
    });
  };

//   useEffect(()=>{
// handleCards()
//   },[cards])
console.log(cards)

  // need a typewriter effect to change headings
  return (
    <main className="flex flex-col justify-start align-middle h-screen w-screen">
      <h1 className="">{getTask()}</h1>
      <section
        className="flex border-spacing-1 text-center w-20 border border-black hover:cursor-pointer"
        onClick={() => setShowNewCardModal(!showNewCardModal)}
      >
        Add new card
      </section>
      <section className="flex justify-evenly border border-brown-900 w-2/3 h-1/2 flex-wrap">
        {handleCards()}
      </section>
      <section className="flex justify-center">
        {showNewCardModal && (
          <NewItemModal
            showNewCardModal={showNewCardModal}
            setShowNewCardModal={setShowNewCardModal}
            onSubmit={(newModalData)=>{
            }}
          />
        )}
      </section>
    </main>
  );
}
