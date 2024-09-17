import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import VeiculoForm from './components/VeiculoForm';
import VeiculoList from './components/VeiculoList';
import { useState } from 'react';


function App() {
  const [refreshList, setRefreshList] = useState(false);

  const handleAddVeiculo = () => {
    setRefreshList(!refreshList);
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <Heading mb={6}>Gerenciamento de Veículos</Heading>
        <VeiculoForm onAdd={handleAddVeiculo} />
        <VeiculoList key={refreshList} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
