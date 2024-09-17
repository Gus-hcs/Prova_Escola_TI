import { useState, useEffect } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';
import axios from 'axios';

const VeiculoForm = ({ onAdd, onEdit, currentVeiculo }) => {
  const [veiculo, setVeiculo] = useState({
    modelo: '',
    anoFabricacao: '',
    placa: ''
  });

  useEffect(() => {
    if (currentVeiculo) {
      setVeiculo(currentVeiculo);
    } else {
      setVeiculo({ modelo: '', anoFabricacao: '', placa: '' });
    }
  }, [currentVeiculo]);

  const handleSubmit = async () => {
    try {
      if (currentVeiculo) {
        // Atualiza veículo existente
        await axios.patch(`http://localhost:3000/veiculos/${currentVeiculo.id}`, veiculo);
        onEdit(); 
      } else {
        // Adiciona novo veículo
        await axios.post('http://localhost:3000/veiculos', veiculo);
        onAdd(); 
      }
      setVeiculo({ modelo: '', anoFabricacao: '', placa: '' });
    } catch (error) {
      console.error('Erro ao salvar veículo:', error);
      alert('Erro ao salvar veículo.');
    }
  };

  return (
    <Box p={4} maxW="400px" borderWidth="1px" borderRadius="lg">
      <Input
        placeholder="Modelo"
        value={veiculo.modelo}
        onChange={(e) => setVeiculo({ ...veiculo, modelo: e.target.value })}
        mb={3}
      />
      <Input
        placeholder="Ano de Fabricação"
        type="number"
        value={veiculo.anoFabricacao}
        onChange={(e) => setVeiculo({ ...veiculo, anoFabricacao: e.target.value })}
        mb={3}
      />
      <Input
        placeholder="Placa"
        value={veiculo.placa}
        onChange={(e) => setVeiculo({ ...veiculo, placa: e.target.value })}
        mb={3}
      />
      <Button onClick={handleSubmit} colorScheme="blue">
        {currentVeiculo ? 'Salvar Alterações' : 'Adicionar Veículo'}
      </Button>
    </Box>
  );
};

export default VeiculoForm;
