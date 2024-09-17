import { useEffect, useState } from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';
import axios from 'axios';
import VeiculoForm from './VeiculoForm';

const VeiculoList = () => {
  const [veiculos, setVeiculos] = useState([]);
  const [novoAcessorio, setNovoAcessorio] = useState('');
  const [currentVeiculo, setCurrentVeiculo] = useState(null); 
  const [acessorioEditando, setAcessorioEditando] = useState(null); 
  const [novoNomeAcessorio, setNovoNomeAcessorio] = useState(''); 

  useEffect(() => {
    fetchVeiculos();
  }, []);

  const fetchVeiculos = async () => {
    const response = await axios.get('http://localhost:3000/veiculos');
    setVeiculos(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/veiculos/${id}`);
    fetchVeiculos();
  };

  const handleAddAcessorio = async (veiculoId) => {
    await axios.post(`http://localhost:3000/veiculos/${veiculoId}/acessorios`, {
      nome: novoAcessorio
    });
    setNovoAcessorio('');
    fetchVeiculos();
  };

  const handleEditVeiculo = (veiculo) => {
    setCurrentVeiculo(veiculo);
  };

  const handleCancelEdit = () => {
    setCurrentVeiculo(null); 
  };

  const handleEditAcessorio = (acessorio) => {
    setAcessorioEditando(acessorio.id); 
    setNovoNomeAcessorio(acessorio.nome); 
  };

  const handleConfirmEditAcessorio = async (acessorioId) => {
    await axios.patch(`http://localhost:3000/veiculos/acessorios/${acessorioId}`, { nome: novoNomeAcessorio });
    fetchVeiculos(); 
    setAcessorioEditando(null); 
    setNovoNomeAcessorio(''); 
  };

  const handleDeleteAcessorio = async (acessorioId) => {
    await axios.delete(`http://localhost:3000/veiculos/acessorios/${acessorioId}`);
    fetchVeiculos(); 
  };

  return (
    <Box>
      {currentVeiculo ? (
        <VeiculoForm 
          onAdd={fetchVeiculos} 
          onEdit={handleCancelEdit} 
          currentVeiculo={currentVeiculo} 
        />
      ) : (
        veiculos.map((veiculo) => (
          <Box key={veiculo.id} borderWidth="2px" borderRadius="lg" p={4} my={2}>
            <Text>Modelo: {veiculo.modelo}</Text>
            <Text>Ano: {veiculo.anoFabricacao}</Text>
            <Text>Placa: {veiculo.placa}</Text>
            <Box mt={4}>
              <Input
                placeholder="Adicionar Acessório"
                value={novoAcessorio}
                onChange={(e) => setNovoAcessorio(e.target.value)}
                mb={2}
              />
              <Button onClick={() => handleAddAcessorio(veiculo.id)} colorScheme="green" mb={3}>
                Adicionar Acessório
              </Button>
            </Box>
            <Button onClick={() => handleEditVeiculo(veiculo)} colorScheme="yellow" mr={2}>
              Editar Veículo
            </Button>
            <Button onClick={() => handleDelete(veiculo.id)} colorScheme="red">
              Excluir Veículo
            </Button>
            <Box mt={4}>
              <Text>Acessórios:</Text>
              {veiculo.acessorios?.map((acessorio) => (
                <Box key={acessorio.id}>
                  {acessorioEditando === acessorio.id ? (
                    <>
                      <Input
                        placeholder="Novo nome do acessório"
                        value={novoNomeAcessorio}
                        onChange={(e) => setNovoNomeAcessorio(e.target.value)}
                      />
                      <Button onClick={() => handleConfirmEditAcessorio(acessorio.id)} colorScheme="green" ml={2}>
                        Confirmar
                      </Button>
                    </>
                  ) : (
                    <>
                      <Text>- {acessorio.nome}</Text>
                      <Button onClick={() => handleEditAcessorio(acessorio)} colorScheme="green" ml={2}>
                        Editar
                      </Button>
                      <Button onClick={() => handleDeleteAcessorio(acessorio.id)} colorScheme="red" ml={2}>
                        Excluir Acessório
                      </Button>
                    </>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default VeiculoList;
