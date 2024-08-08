import { AnimatePresence, motion } from "framer-motion";
import { Overlay } from "@components/common";
import { useMotion } from "@hooks/motions/UseMotion";
import { GlobalModalContext } from "@hooks/context/GlobalContext";
import { useOnClickOutside } from "@hooks/useClickOutside/useClickOutSide";
import { useOnKeyPress } from "@hooks/useOnpress/useOnpress";
import styles from "../styles.module.css";
const { videoModal } = styles;
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
const ModalVideo = () => {
  const { videoId, isModalOpen, closeModal } = GlobalModalContext();
  const { zoomIn } = useMotion();

  const { ref } = useOnClickOutside({
    action: closeModal,
    enable: isModalOpen,
  });
  useOnKeyPress({
    key: "Escape",
    action: closeModal,
    enable: isModalOpen,
  });
  useEffect(() => {
    const body = document.body;
    const rootNode = document.documentElement;
    if (isModalOpen) {
      const scrollTop = rootNode.scrollTop;
      body.style.top = `-${scrollTop}px`;
      body.classList.add("no-scroll");
      return;
    }
    const top = parseFloat(body.style.top) * -1;

    body.classList.remove("no-scroll");
    if (top) {
      rootNode.style.scrollBehavior = "auto";
      rootNode.scrollTop = top;
      rootNode.style.scrollBehavior = "smooth";
    }
  }, [isModalOpen]);
  return (
    <AnimatePresence>
      {isModalOpen && (
        <Overlay className="d-flex align-items-center justify-content-center">
          <motion.div
            ref={ref}
            variants={zoomIn(0.9, 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`${videoModal} shadow-lg  rounded`}
          >
            <button onClick={closeModal} className={`closeBtn`}>
              <IoMdClose />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1`}
              title="trailer"
              width="100%"
              height="100%"
              className="rounded"
              allowFullScreen
            />
          </motion.div>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default ModalVideo;
