import { useState } from "react";

type modalDataType = {
  title: string;
  description: string;
};
const NewItemModal = ({
  showNewCardModal,
  setShowNewCardModal,
  onSubmit
}: {
  showNewCardModal: boolean;
  setShowNewCardModal: (showNewCardModal: boolean) => void;
  onSubmit:(newCardData: modalDataType)=> void
}) => {
  const [modalData, setModalData] = useState<modalDataType>({
    title: "",
    description: "",
  });
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalData.description !== "" && modalData.title !== "") {
      //api call to save the data.
      onSubmit(modalData)
    }
    setShowNewCardModal(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setModalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setShowNewCardModal(false);
  };
  return (
    <form
      className="border border-black shadow-sm w-80 h-60 flex flex-col justify-evenly"
      onSubmit={handleSave}
    >
      <input
        type="text"
        name="title"
        maxLength={200}
        placeholder="what to?"
        onChange={handleChange}
      />
      <textarea
        name="description"
        maxLength={5000}
        placeholder="elaborate so it won't get lost in translation"
        onChange={handleChange}
      ></textarea>

      <div className="flex gap-2 self-end">
        <button onClick={handleClose}>cancel</button>
        <button type="submit">save</button>
      </div>
    </form>
  );
};
export default NewItemModal;
