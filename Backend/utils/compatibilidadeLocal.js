function calcularPontuacao(pet, adotante) {
  let pontuacao = 0;
  let fatorImpeditivo = false;

  // Espécie
  if (pet.especie === adotante.especieDesejada) {
    pontuacao += 20;
  } else {
    pontuacao -= 20;
  }

  // Porte
  if (pet.porte === adotante.porteDesejado) {
    pontuacao += 10;
  } else {
    pontuacao -= 10;
  }

  // Sexo
  if (pet.sexo === adotante.sexoDesejado) {
    pontuacao += 5;
  } else {
    pontuacao -= 5;
  }

  // Saúde: Necessidades especiais ou tratamento contínuo
  const temNecessidadesOuTratamento = pet.necessidadesEspeciais || pet.tratamentoContinuo;
  if (temNecessidadesOuTratamento && adotante.aceitaNecessidadesEspeciais) {
    pontuacao += 10;
  } else if (!temNecessidadesOuTratamento && adotante.aceitaNecessidadesEspeciais) {
    pontuacao += 5;
  } else if (!temNecessidadesOuTratamento && !adotante.aceitaNecessidadesEspeciais) {
    pontuacao += 10;
  } else if (temNecessidadesOuTratamento && !adotante.aceitaNecessidadesEspeciais) {
    fatorImpeditivo = true;
  }

  // Saúde: Doença crônica ou incurável
  if (pet.doencaCronica && adotante.aceitaDoencaCronica) {
    pontuacao += 10;
  } else if (!pet.doencaCronica && !adotante.aceitaDoencaCronica) {
  pontuacao += 5;
  } else if (pet.doencaCronica && !adotante.aceitaDoencaCronica) {
    fatorImpeditivo = true;
  }

  // Social: Sociabilidade e presença de outros pets
  if (pet.sociavel && adotante.possuiOutrosAnimais) {
    pontuacao += 5;
  } else if (!pet.sociavel && adotante.possuiOutrosAnimais) {
    fatorImpeditivo = true;
  }

  // Social: Cuidados constantes e tempo disponível
  if (pet.exigeCuidadosConstantes && adotante.disponibilidadeDeTempo) {
    pontuacao += 5;
  } else if (pet.exigeCuidadosConstantes && !adotante.disponibilidadeDeTempo) {
    fatorImpeditivo = true;
  }

  if (fatorImpeditivo) {
    pontuacao = 0;
  }

  return pontuacao;
}

module.exports = { calcularPontuacao };
