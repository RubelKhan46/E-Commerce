import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ShopContext } from "./context/ShopContext";
import ChatInterfaceModal from "./components/chatInterfaceModal";
import { FaComments } from "react-icons/fa";
import Verify from "./pages/Verify";

const App = () => {
  const { openChatModal, setOpenChatModal } = useContext(ShopContext);

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
      
      {/* Chat Icon Button */}
      <button 
        className="chat-icon-button"
        onClick={() => setOpenChatModal(!openChatModal)}
        aria-label="Open chat"
      >
        <FaComments size={24} />
      </button>

      {/* Chat Interface Modal */}
      <ChatInterfaceModal 
        show={openChatModal} 
        handleClose={() => setOpenChatModal(false)} 
      />

      {/* Add CSS for the chat icon button */}
      <style jsx="true">{`
        .chat-icon-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #007bff;
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        .chat-icon-button:hover {
          transform: scale(1.1);
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default App;
