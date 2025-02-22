import { useState, useEffect, useRef } from "react";
import "../../Style/Modal.css"
import { useAppProvider } from "../../Contexts/AppContext";

const CookieModal = ({ }) => {
  const cookieModalRef = useRef();
  const { openCookieModal, setOpenCookieModal, setEnableCookies  } = useAppProvider();


  /*useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cookieModalRef.current &&
        !cookieModalRef.current.contains(event.target)
      ) {
        setOpenCookieModal();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setOpenCookieModal();
      }
    };

    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    disableScroll();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      enableScroll();
    };
  }, [setOpenCookieModal]);*/

return (
   <div className="modal-background">
      <div className="modalContainer cookieModal" ref={cookieModalRef}>
         <div className="title">
            <h3>Allow Cookies</h3>
         </div>
         <div className="row">
            <div className="col">
               <button className="write-a-review" onClick={() => {setEnableCookies('yes'); setOpenCookieModal();}}>
                  Yes
               </button>

               <button className="write-a-review" onClick={() => {setEnableCookies('no'); setOpenCookieModal();}}>
                  No
               </button>
            </div>
         </div>
      </div>
   </div>
);
};

export default CookieModal;
