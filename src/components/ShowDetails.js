import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ShowDetails() {
  const { showId } = useParams();
  const [show, setShow] = useState(null);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    async function fetchShow() {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${showId}`
      );
      setShow(response.data);
    }
    fetchShow();
  }, [showId]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <div className="mt-3">
        <img src={show.image?.medium} alt={show.name} />
      </div>
      <div>
        <h1>{show.name}</h1>
      </div>
      <div className="w-96">
        <p>{show.summary}</p>
      </div>
      <div>
        <button
          className="h-12 w-36 border bg-blue-400 text-white rounded-md "
          onClick={openModal}
        >
          Book Ticket
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col space-y-3">
          <center>
          <label className="text-2xl text-green-400" >{show.name}</label>
          </center>
          <input className="border rounded-md p-1" type="text" placeholder="Enter your name" />
          <input className="border rounded-md p-1" type="number" placeholder="Enter phone number" />

          <button
            className="h-10 w-auto border bg-blue-400 text-white rounded-md "
            onClick={closeModal}
          >
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ShowDetails;
