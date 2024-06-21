import { useState } from 'react';
import Modal from '../components/Modal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Open Modal
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
