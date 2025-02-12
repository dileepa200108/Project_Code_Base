import { useEffect, useState } from "react";
import { fetchHomeMessage } from "../api/services/test";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const Home = () => {
  const [message, setMessage] = useState("Loading...");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const loadMessage = async () => {
      const data = await fetchHomeMessage();
      setMessage(data);
    };

    loadMessage();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-
    200 font-f1"
    >
      <Button color="secondary" onPress={onOpen}>
        Foundation Modal
      </Button>
      


      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={isOpen}
        radius="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-f1">
                Test Route
              </ModalHeader>
              <ModalBody>
                <p>{message}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20 font-f1"
                  onPress={onClose}
                >
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Home;
