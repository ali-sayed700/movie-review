import { API_KEY, TMDB_API_BASE_URL } from "@utils/config";
import React, { useCallback, useContext, useState } from "react";

const context = React.createContext({
  getTrailerId: (_prev: string): void => {},
  setIsModalOpen: (_prev: boolean): void => {},
  setShowSidebar: (_prev: boolean) => {},
  setVideoId: (_prev: string): void => {},
  closeModal: () => {},
  isModalOpen: false,
  showSidebar: false,
  videoId: "",
});

interface IGlobalContext {
  children: React.ReactNode;
}
const GlobalContext = ({ children }: IGlobalContext) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = useCallback(() => {
    if (!isModalOpen) return;
    setIsModalOpen(false);
    setVideoId("");
  }, [isModalOpen]);

  const getTrailerId = async (id: number | string) => {
    try {
      const res = await fetch(
        `${TMDB_API_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );

      const data = await res.json();
      setVideoId(data.results[0].key);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <context.Provider
      value={{
        getTrailerId,
        setVideoId,
        videoId,
        isModalOpen,
        setIsModalOpen,
        closeModal,
        setShowSidebar,
        showSidebar,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default GlobalContext;

export const GlobalModalContext = () => {
  return useContext(context);
};
