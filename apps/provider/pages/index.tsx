import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import MockedBasket from "../components/MockedBasket";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MockedBasket isOpen={true} onClose={onClose} />
    </>
  );
}
